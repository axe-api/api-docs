import styled from "styled-components";
import { FixedBox } from "../ResourceContent";

const Container = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function GeneralInformation() {
  return (
    <Container>
      <FixedBox>
        <h1>Axe API Docs</h1>

        <p>
          Deserunt nulla nisi sunt nulla ad duis magna dolor elit ipsum. Ut ut
          fugiat ex commodo magna culpa enim velit ad eu. Eu non quis
          adipisicing incididunt magna nulla ad qui.
        </p>

        <p>
          Deserunt nulla nisi sunt nulla ad duis magna dolor elit ipsum. Ut ut
          fugiat ex commodo magna culpa enim velit ad eu. Eu non quis
          adipisicing incididunt magna nulla ad qui.
        </p>
      </FixedBox>
    </Container>
  );
}

export default GeneralInformation;
