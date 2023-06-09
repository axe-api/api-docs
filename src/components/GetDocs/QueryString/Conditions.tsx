import { IRoute } from "../../../Interfaces";
import QueryStringExample from "../../QueryStringExample";
import Feature from "../Feature";

interface IConditionsProps {
  route: IRoute;
}

const Conditions = ({ route }: IConditionsProps) => {
  const otherColumn = route.columns
    .filter((column) => column.name !== "id")
    .at(0) || { name: "name" };

  return (
    <Feature title="q" description="JSON query to send to filter data">
      <QueryStringExample
        method="GET"
        url={route.url}
        queryString={`q=[{"id":1},{"$or.${otherColumn.name}.$like":"*value*"}]`}
      />
    </Feature>
  );
};

export default Conditions;
