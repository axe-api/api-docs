import styled from "styled-components";
import { NAVBAR_HEIGHT, LEFTBAR_WIDTH } from "../Sizes";
import SearchBox from "../SearchBox";
import Resources from "../Resources";

const Container = styled.div`
  position: fixed;
  left: 0px;
  top: ${NAVBAR_HEIGHT}px;
  height: calc(100% - ${NAVBAR_HEIGHT}px);
  width: ${LEFTBAR_WIDTH}px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.white};
  overflow-y: scroll;
  border-right: 1px solid #282828;
`;

function LeftBar() {
  return (
    <Container>
      <SearchBox />
      <Resources />
    </Container>
  );
}

export default LeftBar;
