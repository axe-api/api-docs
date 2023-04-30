import styled from "styled-components";
import { Ul, Li } from "../shared";
import Feature from "../Feature";
import { IRoute } from "../../../Interfaces";

const Container = styled.div`
  margin-bottom: 30px;
`;

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

  return (
    <Container>
      <h3>Params</h3>
      <Ul>
        {params.map((param, index) => (
          <Li key={index}>
            <Feature title={param} description={getDescription(route, param)} />
          </Li>
        ))}
      </Ul>
    </Container>
  );
}
