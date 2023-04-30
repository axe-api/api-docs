import styled from "styled-components";
import { IRoute, IVersion } from "../../../Interfaces";
import { DBColumnStyle } from "../../DBColumn";
import Feature from "../Feature";
import { Li } from "../shared";
import RequestExample from "../../RequestExample";

const Relations = styled.div`
  display: flex;
  gap: 5px;
`;

interface IWithProps {
  route: IRoute;
  version: IVersion;
}

const With = ({ route, version }: IWithProps) => {
  console.log(route.relations);
  return (
    <Li>
      <Feature title="with" description="Listable related models">
        <Relations>
          {route.relations.map((relation) => (
            <DBColumnStyle key={relation.name}>{relation.name}</DBColumnStyle>
          ))}
        </Relations>

        <RequestExample
          method="GET"
          url={route.url}
          queryString={`with=${route.relations.map((item) => item.name)}`}
        />
      </Feature>
    </Li>
  );
};

export default With;
