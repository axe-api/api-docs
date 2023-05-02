import { IRoute } from "../../../Interfaces";
import { DBColumnStyle } from "../../DBColumn";
import QueryStringExample from "../../QueryStringExample";
import Feature from "../Feature";

interface IPageProps {
  route: IRoute;
}

const Page = ({ route }: IPageProps) => {
  return (
    <Feature title="page" description="The page number to list">
      Default value: <DBColumnStyle>1</DBColumnStyle>
      <QueryStringExample method="GET" url={route.url} queryString="page=1" />
    </Feature>
  );
};

export default Page;
