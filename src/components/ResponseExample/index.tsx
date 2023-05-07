import styled from "styled-components";
import { IRoute } from "../../Interfaces";
import {
  CodeBox,
  CodeContent,
  CodeTab,
  CodeTitleLink,
} from "../RequestExample";
import { getExampleValue } from "../CurlRequest";

interface IResponseExampleProps {
  route: IRoute;
}

const Container = styled.div``;

const Title = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 24px;
`;

const JSONCollapse = styled.div`
  color: #00f4b9;
  font-size: 14px;
`;

const FieldLine = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 20px;
  font-size: 14px;
`;

const Field = styled.div`
  color: #b4b1ff;
  font-weight: 400;
`;

const Value = styled.div`
  color: #bedbeb;
  font-weight: 400;
`;

export default function ResponseExample({ route }: IResponseExampleProps) {
  const possibleColumns = [...route.columns]
    .filter((column) => !route.hiddens.includes(column.name))
    .sort((a: any, b: any) => a.name - b.name);

  return (
    <Container>
      <Title>Response Example</Title>
      <CodeBox>
        <CodeTab>
          <CodeTitleLink className="active">JSON</CodeTitleLink>
        </CodeTab>
        <CodeContent>
          <JSONCollapse>{"{"}</JSONCollapse>
          {possibleColumns.map((column) => (
            <FieldLine key={column.name}>
              <Field>"{column.name}":</Field>
              <Value>{getExampleValue(column.data_type)},</Value>
            </FieldLine>
          ))}
          <JSONCollapse>{"}"}</JSONCollapse>
        </CodeContent>
      </CodeBox>
    </Container>
  );
}
