import styled from "styled-components";
import { IRoute } from "../../../Interfaces";
import Feature from "../Feature";
import { Li } from "../shared";
import DBColumn from "../../DBColumn";
import { QueryFeature } from "../../../Enums";
import { DBColumnStyle } from "../../DBColumn";

const FlexBox = styled.div`
  display: flex;
  gap: 10px;
`;

interface IQueryFieldsProps {
  route: IRoute;
}

const QueryFields = ({ route }: IQueryFieldsProps) => {
  const fieldsAll = route.queryLimits.some(
    (item) => item.feature === QueryFeature.FieldsAll
  );

  const fetchableColumns = route.columns.filter(
    (column) => !route.hiddens || !route.hiddens.includes(column.name)
  );

  return (
    <Li>
      <Feature
        title="fields"
        description="The model fields that can be fetched."
      >
        <FlexBox>
          {fieldsAll && <DBColumnStyle>All (*)</DBColumnStyle>}
          {fetchableColumns.map((column) => (
            <DBColumn key={column.name} column={column} />
          ))}
        </FlexBox>
      </Feature>
    </Li>
  );
};

export default QueryFields;
