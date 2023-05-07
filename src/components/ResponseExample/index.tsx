import styled from "styled-components";
import { IRoute } from "../../Interfaces";
import {
  CodeBox,
  CodeContent,
  CodeTab,
  CodeTitleLink,
} from "../RequestExample";

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

export default function ResponseExample({ route }: IResponseExampleProps) {
  return (
    <Container>
      <Title>Response Example</Title>
      <CodeBox>
        <CodeTab>
          <CodeTitleLink className="active">JSON</CodeTitleLink>
        </CodeTab>
        <CodeContent>{JSON.stringify({ name: "Ozgur" })}</CodeContent>
      </CodeBox>
    </Container>
  );
}
