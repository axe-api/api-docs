import { QueryFeature, QueryFeatureType } from "./Enums";

export interface IColumn {
  name: string;
  data_type: string;
}

export interface IQueryLimitConfig {
  feature: QueryFeature;
  type: QueryFeatureType;
  key: string | null;
}

export interface IRoute {
  model: string;
  handler: string;
  url: string;
  method: string;
  fillables: string[];
  columns: IColumn[];
  hiddens: string[];
  validations: Record<string, string>;
  searchKey: string;
  queryLimits: IQueryLimitConfig[];
}

export interface IVersionQueryDefaults {
  perPage?: number;
  minPerPage?: number;
  maxPerPage?: number;
}

export interface IVersionQueryConfig {
  defaults: IVersionQueryDefaults;
}

export interface IVersionConfig {
  query: IVersionQueryConfig;
}

export interface IVersion {
  config: IVersionConfig;
}

export interface IDoc {
  routes: IRoute[];
  versions: IVersion[];
}

export interface IColorPair {
  color: string;
  bgColor: string;
}
