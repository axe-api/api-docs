/* eslint-disable react/jsx-no-target-blank */
import styled from "styled-components";
import { FixedBox } from "../ResourceContent";
import ExternalLink from "../External";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c;
  padding-top: 30px;
  padding-bottom: 50px;
`;

function GeneralInformation() {
  return (
    <Container>
      <FixedBox>
        <h1>Axe API Docs</h1>
        <p>
          This API project is built by{" "}
          <ExternalLink href="https://axe-api.com">Axe API</ExternalLink>. Axe
          API is a Node.js framework that helps you create a Rest API in a
          declarative way quickly. 🪓
        </p>
        <p>
          You can find all possible route documentation on this page. Also, you
          can use the Axe API documentation page to get more information.
        </p>
      </FixedBox>
    </Container>
  );
}

export default GeneralInformation;
