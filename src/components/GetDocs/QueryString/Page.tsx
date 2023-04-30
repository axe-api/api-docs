import { IRoute } from "../../../Interfaces";
import { DBColumnStyle } from "../../DBColumn";
import RequestExample from "../../RequestExample";
import Feature from "../Feature";
import { Li } from "../shared";

interface IPageProps {
  route: IRoute;
}

const Page = ({ route }: IPageProps) => {
  return (
    <Li>
      <Feature title="page" description="The page number to list">
        Default value: <DBColumnStyle>1</DBColumnStyle>
        <RequestExample method="GET" url={route.url} queryString="page=1" />
      </Feature>
    </Li>
  );
};

export default Page;
