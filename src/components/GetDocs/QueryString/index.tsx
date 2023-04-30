import styled from "styled-components";
import { Ul, Li } from "../shared";
import { IRoute, IVersion } from "../../../Interfaces";
import QueryFields from "./QueryFields";
import Sort from "./Sort";
import Page from "./Page";
import PerPage from "./PerPage";
import With from "./With";
import Trashed from "./Trashed";
import { QueryFeature } from "../../../Enums";
import { isQueryFeatureSupported } from "../../../helpers";

const Container = styled.div`
  margin-bottom: 30px;
`;

const Conditions = () => {
  return <Li>q: Conditions</Li>;
};

interface IQueryStringProps {
  route: IRoute;
  version: IVersion;
}

export default function QueryString({ route, version }: IQueryStringProps) {
  const trashedFeature = isQueryFeatureSupported(
    route.queryLimits,
    QueryFeature.Trashed
  );

  return (
    <Container>
      <h3>Query string</h3>
      <Ul>
        <QueryFields route={route} />
        <Sort route={route} />
        <Page route={route} />
        <PerPage route={route} version={version} />
        <With route={route} version={version} />
        {trashedFeature && <Trashed />}
        <Conditions />
      </Ul>
    </Container>
  );
}
