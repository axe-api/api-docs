export interface IColumn {
  name: string;
  data_type: string;
}

export interface IRoute {
  model: string;
  handler: string;
  url: string;
  method: string;
  fillables: string[];
  columns: IColumn[];
  validations: Record<string, string>;
  searchKey: string;
}

export interface IDoc {
  routes: IRoute[];
}

export interface IColorPair {
  color: string;
  bgColor: string;
}
