import { IRoute, IVersion } from "../../../Interfaces";
import { DBColumnStyle } from "../../DBColumn";
import QueryStringExample from "../../QueryStringExample";
import Feature from "../Feature";

interface IPerPageProps {
  route: IRoute;
  version: IVersion;
}

const PerPage = ({ route, version }: IPerPageProps) => {
  const perPage = version.config.query.defaults.perPage || 10;
  const minPerPage = version.config.query.defaults.minPerPage || 1;
  const maxPerPage = version.config.query.defaults.maxPerPage || 100;

  return (
    <Feature title="per_page" description="Number of records to list on a page">
      <div>
        The default value is <DBColumnStyle>{perPage}</DBColumnStyle>. The
        client can send a value between {minPerPage}-{maxPerPage}.
      </div>
      <QueryStringExample
        method="GET"
        url={route.url}
        queryString={`per_page=${perPage}`}
      />
    </Feature>
  );
};

export default PerPage;
