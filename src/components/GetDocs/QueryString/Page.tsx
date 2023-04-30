import { IRoute } from "../../../Interfaces";
import { DBColumnStyle } from "../../DBColumn";
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
      </Feature>
    </Li>
  );
};

export default Page;
