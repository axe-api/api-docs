export interface IRoute {
  model: string;
  handler: string;
  url: string;
  method: string;
}

export interface IDoc {
  routes: IRoute[];
}
