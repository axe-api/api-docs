import styled from "styled-components";
import { IRoute } from "../../Interfaces";
import { CopyIcon } from "../Icons";

interface ICurlRequestProps {
  route: IRoute;
  onCopy: (content: string) => void;
}

const Container = styled.div`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.9);
  overflow-x: scroll;
`;

const CurlLine = styled.div`
  display: flex;
  gap: 10px;
  color: #e4eb45;
`;

const TerminalSign = styled.div`
  color: rgba(255, 255, 255, 0.4);
`;

const SubLine = styled.div`
  padding-left: 20px;
  display: flex;
  gap: 10px;
`;

const Parameter = styled.div`
  color: #b4b1ff;
`;

const Method = styled.div`
  color: #00f4b9;
`;

const ColoredValue = styled.div`
  color: #bedbeb;
`;

export const CopyButton = styled.button`
  border: 0px;
  position: absolute;
  top: 20px;
  right: 20px;
  background: #1c1c1c;
  border-radius: 24px;
  padding: 8px 16px;
  color: white;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: none;
`;

export const getExampleValue = (data_type: string): string => {
  let value: any = `"..."`;

  if (data_type.includes("int ")) {
    value = 1;
  } else if (data_type === "datetime") {
    value = `"2021-10-21 00:00:00"`;
  } else if (data_type === "date") {
    value = `"2021-10-21"`;
  }

  return value;
};

const getFormBody = (route: IRoute): string => {
  const possibleFields = route.fillables.filter(
    (field) => !route.hiddens.includes(field)
  );
  const columns = route.columns.filter((column) =>
    possibleFields.includes(column.name)
  );
  const result: Record<string, any> = {};

  columns.forEach((column) => {
    result[column.name] = getExampleValue(column.data_type);
  });

  return JSON.stringify(result);
};

export default function CurlRequest({ route, onCopy }: ICurlRequestProps) {
  const { origin } = window.location;
  const content = [
    `curl \\`,
    `-H "Content-Type: application/json" \\`,
    `-X ${route.method} ${origin}${route.url}`,
  ];

  if (["POST", "PUT", "PATCH"].includes(route.method)) {
    content.splice(1, 0, `-d '${getFormBody(route)}' \\`);
  }

  return (
    <>
      <Container>
        <CurlLine>
          <TerminalSign>$</TerminalSign> curl \
        </CurlLine>
        {["POST", "PUT", "PATCH"].includes(route.method) && (
          <SubLine>
            <Parameter>-d</Parameter>{" "}
            <ColoredValue>'{getFormBody(route)}' \</ColoredValue>
          </SubLine>
        )}
        <SubLine>
          <Parameter>-H</Parameter>{" "}
          <ColoredValue>"Content-Type: application/json" \</ColoredValue>
        </SubLine>
        <SubLine>
          <Parameter>-X</Parameter> <Method>{route.method}</Method>
          <ColoredValue>
            {origin}
            {route.url}
          </ColoredValue>
        </SubLine>
      </Container>
      <CopyButton type="button" onClick={() => onCopy(content.join("\n"))}>
        <CopyIcon height={16} width={16} />
        <div>Copy</div>
      </CopyButton>
    </>
  );
}
