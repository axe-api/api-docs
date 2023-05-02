import { IRoute } from "../../../Interfaces";
import QueryStringExample from "../../QueryStringExample";
import Feature from "../Feature";

interface ITrashedProps {
  route: IRoute;
}

const Trashed = ({ route }: ITrashedProps) => {
  return (
    <Feature
      title="trashed"
      description="List of deleted data with soft-delete."
    >
      You can add the `trashed=true` value to the query strings.
      <QueryStringExample
        method="GET"
        url={route.url}
        queryString="trashed=true"
      />
    </Feature>
  );
};

export default Trashed;
