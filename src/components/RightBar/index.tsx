import styled from "styled-components";
import { NAVBAR_HEIGHT, RIGHTBAR_WIDTH } from "../Sizes";

const Container = styled.div`
  position: fixed;
  right: 0px;
  top: ${NAVBAR_HEIGHT}px;
  height: calc(100% - ${NAVBAR_HEIGHT}px);
  width: ${RIGHTBAR_WIDTH}px;
  background-color: yellow;
`;

function RightBar() {
  return <Container>RightBar</Container>;
}

export default RightBar;
