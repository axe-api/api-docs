import styled from "styled-components";
import { IRoute } from "../../Interfaces";

interface ICurlRequestProps {
  route: IRoute;
}

const Container = styled.div`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.9);
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

/*

curl \
  -d '{"name": "Karl", "surname":"Popper"}' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:3000/api/v1/users

 */

const getFormBody = (route: IRoute): string => {
  const possibleFields = route.fillables.filter(
    (field) => !route.hiddens.includes(field)
  );
  const columns = route.columns.filter((column) =>
    possibleFields.includes(column.name)
  );
  const result: Record<string, any> = {};

  columns.forEach((column) => {
    let value: any = "...";

    if (column.data_type.includes("int ")) {
      value = 0;
    } else if (column.data_type === "datetime") {
      value = "2021-10-21 00:00:00";
    } else if (column.data_type === "date") {
      value = "2021-10-21";
    }

    result[column.name] = value;
  });

  return JSON.stringify(result);
};

export default function CurlRequest({ route }: ICurlRequestProps) {
  const { origin } = window.location;

  return (
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
  );
}
