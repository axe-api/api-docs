import styled from "styled-components";
import { Ul, Li } from "../shared";
import { IRoute, IVersion } from "../../../Interfaces";
import QueryFields from "./QueryFields";
import Sort from "./Sort";
import Page from "./Page";
import PerPage from "./PerPage";
import With from "./With";

const Container = styled.div`
  margin-bottom: 30px;
`;

const Trashed = () => {
  return <Li>trashed: Only for soft delete feature</Li>;
};

const Conditions = () => {
  return <Li>q: Conditions</Li>;
};

interface IQueryStringProps {
  route: IRoute;
  version: IVersion;
}

export default function QueryString({ route, version }: IQueryStringProps) {
  return (
    <Container>
      <h3>Query string</h3>
      <Ul>
        <QueryFields route={route} />
        <Sort route={route} />
        <Page route={route} />
        <PerPage route={route} version={version} />
        <With route={route} version={version} />
        <Trashed />
        <Conditions />
      </Ul>
    </Container>
  );
}
