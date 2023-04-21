import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const RuleName = styled.div`
  width: 40%;
`;

const Description = styled.div``;

function Validation() {
  return (
    <Container>
      <RuleName>name</RuleName>
      <Description>This field should be an email address.</Description>
    </Container>
  );
}

export default Validation;
