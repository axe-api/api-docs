import { IRoute } from "../../../Interfaces";
import RequestExample from "../../RequestExample";
import Feature from "../Feature";
import { Li } from "../shared";

interface ITrashedProps {
  route: IRoute;
}

const Trashed = ({ route }: ITrashedProps) => {
  return (
    <Li>
      <Feature
        title="trashed"
        description="List of deleted data with soft-delete."
      >
        You can add the `trashed=true` value to the query strings.
        <RequestExample
          method="GET"
          url={route.url}
          queryString="trashed=true"
        />
      </Feature>
    </Li>
  );
};

export default Trashed;
