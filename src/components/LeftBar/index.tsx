import styled from "styled-components";
import { NAVBAR_HEIGHT, LEFTBAR_WIDTH } from "../Sizes";

const Container = styled.div`
  position: fixed;
  left: 0px;
  top: ${NAVBAR_HEIGHT}px;
  height: calc(100% - ${NAVBAR_HEIGHT}px);
  width: ${LEFTBAR_WIDTH}px;
  background-color: yellow;
`;

function LeftBar() {
  return <Container>LeftBar</Container>;
}

export default LeftBar;
