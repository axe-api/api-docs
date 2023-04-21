import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const Title = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  opacity: 0.75;
`;

const ActiveVersion = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
`;

function VersionSelector() {
  return (
    <Container>
      <Title>API Version:</Title>
      <ActiveVersion>V2</ActiveVersion>
    </Container>
  );
}

export default VersionSelector;
