import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../Sizes";
import CodeSample from "../CodeSample";

const Container = styled.div`
  position: fixed;
  right: 0px;
  top: ${NAVBAR_HEIGHT}px;
  height: calc(100% - ${NAVBAR_HEIGHT}px);
  background-color: yellow;
  padding: 24px;
  background-color: ${({ theme }) => theme.secondary};
  color: white;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: scroll;
  border-left: 1px solid #282828;
`;

function RightBar() {
  return (
    <Container>
      <CodeSample />
      <CodeSample />
    </Container>
  );
}

export default RightBar;
