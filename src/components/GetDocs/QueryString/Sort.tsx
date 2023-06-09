import styled from "styled-components";
import { IRoute } from "../../../Interfaces";
import Feature from "../Feature";
import DBColumn from "../../DBColumn";
import QueryStringExample from "../../QueryStringExample";

const FlexBox = styled.div`
  display: flex;
  gap: 10px;
`;

interface ISortProps {
  route: IRoute;
}

const Sort = ({ route }: ISortProps) => {
  const sortColumns = route.columns
    .filter((column) => !route.hiddens || !route.hiddens.includes(column.name))
    .slice(0, 2);

  return (
    <Feature
      title="sort"
      description="The field to sort the data (ASC: id, DESC: -id)"
    >
      <FlexBox>
        {sortColumns.map((column) => (
          <DBColumn key={column.name} column={column} />
        ))}
      </FlexBox>
      <QueryStringExample
        method="GET"
        url={route.url}
        queryString={`sort=${sortColumns.map((item, index) =>
          index % 2 === 0 ? item.name : `-${item.name}`
        )}`}
      />
    </Feature>
  );
};

export default Sort;
