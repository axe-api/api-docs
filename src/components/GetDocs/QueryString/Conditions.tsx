import { IRoute } from "../../../Interfaces";
import RequestExample from "../../RequestExample";
import Feature from "../Feature";
import { Li } from "../shared";

interface IConditionsProps {
  route: IRoute;
}

const Conditions = ({ route }: IConditionsProps) => {
  const otherColumn = route.columns
    .filter((column) => column.name !== "id")
    .at(0) || { name: "name" };

  return (
    <Li>
      <Feature title="q" description="JSON query to send to filter data">
        <RequestExample
          method="GET"
          url={route.url}
          queryString={`q=[{"id":1},{"$or.${otherColumn.name}.$like":"*value*"}]`}
        />
      </Feature>
    </Li>
  );
};

export default Conditions;
