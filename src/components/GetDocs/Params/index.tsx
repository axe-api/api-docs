import styled from "styled-components";
import Feature from "../Feature";
import { IRoute } from "../../../Interfaces";

const Container = styled.div`
  margin-bottom: 50px;
`;

const Items = styled.div``;

interface IParamsProps {
  route: IRoute;
}

const getDescription = (route: IRoute, param: string): string => {
  const column = route.columns.find(
    (column) => column.name === param.replace(":", "")
  );

  if (column) {
    return `${column.data_type}`;
  }

  return param.replace(":", "");
};

export default function Params({ route }: IParamsProps) {
  const params = route.url.split("/").filter((item) => item.startsWith(":"));

  if (params.length === 0) {
    return <></>;
  }

  return (
    <Container>
      <h3>Params</h3>
      <Items>
        {params.map((param, index) => (
          <Feature
            key={index}
            title={param}
            description={getDescription(route, param)}
          />
        ))}
      </Items>
    </Container>
  );
}
