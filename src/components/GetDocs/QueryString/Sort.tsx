import styled from "styled-components";
import { IRoute } from "../../../Interfaces";
import Feature from "../Feature";
import { Li } from "../shared";
import DBColumn from "../../DBColumn";

const FlexBox = styled.div`
  display: flex;
  gap: 10px;
`;

interface ISortProps {
  route: IRoute;
}

const Sort = ({ route }: ISortProps) => {
  const sortColumns = route.columns.filter(
    (column) => !route.hiddens || !route.hiddens.includes(column.name)
  );

  return (
    <Li>
      <Feature
        title="sort"
        description="The field to sort the data (ASC: id, DESC: -id)"
      >
        <FlexBox>
          {sortColumns.map((column) => (
            <DBColumn key={column.name} column={column} />
          ))}
        </FlexBox>
      </Feature>
    </Li>
  );
};

export default Sort;
