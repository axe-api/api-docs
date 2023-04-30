import styled from "styled-components";
import { Ul, Li } from "../shared";

const Container = styled.div`
  margin-bottom: 30px;
`;

export default function Params() {
  return (
    <Container>
      <h3>Params</h3>
      <Ul>
        <Li>:customerId: Customer table id</Li>
        <Li>:id: Post id</Li>
      </Ul>
    </Container>
  );
}
