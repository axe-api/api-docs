import styled from "styled-components";
import { IRoute, IVersion } from "../../../Interfaces";
import { DBColumnStyle } from "../../DBColumn";
import Feature from "../Feature";
import { Li } from "../shared";

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
      </Feature>
    </Li>
  );
};

export default With;
