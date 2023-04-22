import styled from "styled-components";
import { IColumn } from "../../Interfaces";
import { VALIDATION_DESCRIPTIONS } from "../../Constants";

const Container = styled.div`
  display: flex;
`;

const RuleName = styled.div`
  width: 40%;
`;

const Description = styled.div``;

interface IValidationProps {
  name: string;
  column: IColumn;
}

function Validation({ name, column }: IValidationProps) {
  const [key, param1] = name.split(":");

  let description = VALIDATION_DESCRIPTIONS[key];

  if (typeof description === "object") {
    description = description.numeric;
  }

  if (!description) {
    description = "";
  }

  return (
    <Container>
      <RuleName>{key}</RuleName>
      <Description>
        {description
          .replace(":attribute", column.name)
          .replace(":min", param1)
          .replace(":max", param1)}
      </Description>
    </Container>
  );
}

export default Validation;
