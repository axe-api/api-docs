import styled from "styled-components";
import ColoredURL from "../ColoredURL";
import { useContext } from "react";
import { IDoc } from "../../Interfaces";
import { DocContext } from "../../contexts/DocContext";

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #1c1d21;
  color: white;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #333;
`;

const Title = styled.div`
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 12px;
`;

const Line = styled.div`
  letter-spacing: 0.5px;
  line-height: 20px;
`;

const Method = styled.span`
  color: #08f4b9;
  font-weight: bold;
  margin-right: 10px;
`;

const URL = styled.span`
  color: rgba(255, 255, 255, 0.7);
`;

const QueryString = styled.span`
  color: #e4eb45;
  margin-left: 1px;
`;

interface IQueryStringExampleProps {
  method: string;
  url: string;
  queryString?: string;
}

export default function QueryStringExample({
  method,
  url,
  queryString,
}: IQueryStringExampleProps) {
  const data = useContext<IDoc>(DocContext);

  return (
    <Container>
      <Title>Example</Title>
      <Line>
        <Method>{method}</Method>
        <URL>
          <ColoredURL url={url} version={data.selectedVersion} />
        </URL>
        {queryString ? <QueryString>?{queryString}</QueryString> : ""}
      </Line>
    </Container>
  );
}
