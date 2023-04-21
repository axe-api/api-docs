import styled from "styled-components";
import Validation from "../Validation";

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

function FieldDoc() {
  return (
    <Container>
      <FieldDiv>
        <FieldName>name</FieldName>
        <FieldType>varchar(10)</FieldType>
        <Required>required</Required>
      </FieldDiv>
      {[1, 2, 3, 4, 5].map((item) => (
        <Validation key={item} />
      ))}
    </Container>
  );
}

export default FieldDoc;
