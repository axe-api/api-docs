import styled from "styled-components";
import { IRoute, IVersion } from "../../../Interfaces";
import QueryFields from "./QueryFields";
import Sort from "./Sort";
import Page from "./Page";
import PerPage from "./PerPage";
import With from "./With";
import Trashed from "./Trashed";
import Conditions from "./Conditions";
import { QueryFeature } from "../../../Enums";
import { isQueryFeatureSupported } from "../../../helpers";

const Container = styled.div`
  margin-bottom: 30px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DEFAULT_OPTIONS: IOptions = {
  fields: true,
  sort: true,
  page: true,
  perPage: true,
  with: true,
  conditions: true,
};

export interface IOptions {
  fields: boolean;
  sort: boolean;
  page: boolean;
  perPage: boolean;
  with: boolean;
  conditions: boolean;
}

interface IQueryStringProps {
  route: IRoute;
  version: IVersion;
  options: IOptions;
}

export default function QueryString({
  route,
  version,
  options = DEFAULT_OPTIONS,
}: IQueryStringProps) {
  const trashedFeature = isQueryFeatureSupported(
    route.queryLimits,
    QueryFeature.Trashed
  );

  return (
    <Container>
      <h3>Query string</h3>
      <Items>
        {options.page && <Page route={route} />}
        {options.perPage && <PerPage route={route} version={version} />}
        {options.sort && <Sort route={route} />}
        {options.fields && <QueryFields route={route} />}
        {options.with && <With route={route} version={version} />}
        {trashedFeature && <Trashed route={route} />}
        {options.conditions && <Conditions route={route} />}
      </Items>
    </Container>
  );
}
