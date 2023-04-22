import styled from "styled-components";
import Validations from "../Validations";
import { IRoute } from "../../Interfaces";

const Container = styled.div``;

const FieldDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const FieldName = styled.div`
  background: #1c1c1c;
  border: 1px solid #393939;
  border-radius: 4px;
  padding: 4px 8px;
`;

const FieldType = styled.div`
  flex-grow: 2;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  opacity: 0.75;
`;

const Required = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #fd847e;
`;

interface IFieldDocProps {
  field: string;
  route: IRoute;
}

function FieldDoc({ field, route }: IFieldDocProps) {
  const column = route.columns.find((item) => item.name === field);
  const validations = (
    route.validations ? route.validations[field] || "" : ""
  ).split("|");

  const isRequired = validations.includes("required");
  const otherValidations = validations.filter((item) => item !== "required");

  if (!column) {
    throw new Error(`Undefined column: ${field}`);
  }

  return (
    <Container>
      <FieldDiv>
        <FieldName>{field}</FieldName>
        <FieldType>{column?.data_type}</FieldType>
        {isRequired && <Required>required</Required>}
      </FieldDiv>

      {otherValidations.length > 0 && (
        <Validations validations={otherValidations} column={column} />
      )}
    </Container>
  );
}

export default FieldDoc;
