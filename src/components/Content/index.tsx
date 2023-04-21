import styled from "styled-components";
import { NAVBAR_HEIGHT, LEFTBAR_WIDTH, RIGHTBAR_WIDTH } from "../Sizes";
import ResourceContent from "../ResourceContent";

const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.primary};
  margin-left: ${LEFTBAR_WIDTH}px;
  margin-right: ${RIGHTBAR_WIDTH}px;
  margin-top: ${NAVBAR_HEIGHT}px;
`;

function Content() {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <ResourceContent key={item} title="Users / Paginate" />
      ))}
    </Container>
  );
}

export default Content;
