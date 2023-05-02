import styled from "styled-components";
import { IRoute, IVersion } from "../../../Interfaces";
import { DBColumnStyle } from "../../DBColumn";
import Feature from "../Feature";
import QueryStringExample from "../../QueryStringExample";

const Relations = styled.div`
  display: flex;
  gap: 5px;
`;

interface IWithProps {
  route: IRoute;
  version: IVersion;
}

const With = ({ route, version }: IWithProps) => {
  if (route.relations.length === 0) {
    return <></>;
  }

  return (
    <Feature title="with" description="Listable related models">
      <Relations>
        {route.relations.map((relation) => (
          <DBColumnStyle key={relation.name}>{relation.name}</DBColumnStyle>
        ))}
      </Relations>

      <QueryStringExample
        method="GET"
        url={route.url}
        queryString={`with=${route.relations.map((item) => item.name)}`}
      />
    </Feature>
  );
};

export default With;
