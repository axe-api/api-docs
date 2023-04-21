import styled from "styled-components";
import Resource from "../Resource";

const Container = styled.div``;

function Resources() {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Resource key={item} />
      ))}
    </Container>
  );
}

export default Resources;
