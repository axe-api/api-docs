import Feature from "../Feature";
import { Li } from "../shared";

const Trashed = () => {
  return (
    <Li>
      <Feature
        title="trashed"
        description="List of deleted data with soft-delete."
      >
        You can add the `trashed=true` value to the query strings.
      </Feature>
    </Li>
  );
};

export default Trashed;
