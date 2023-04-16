import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../Sizes";

const Container = styled.div`
  background-color: rebeccapurple;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  color: white;
`;

function Header() {
  return <Container>Header</Container>;
}

export default Header;
