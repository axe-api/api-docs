import styled from "styled-components";
import Validation from "../Validation";

const Container = styled.div`
  border-bottom: 1px solid #2b2b2b;
  padding-bottom: 16px;
  margin-bottom: 40px;
`;

const Title = styled.div`
  display: flex;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 16px;
`;

const Title1 = styled.div`
  width: 40%;
`;

const Rules = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
`;

const Validations = () => {
  return (
    <Container>
      <Title>
        <Title1>Validation</Title1>
        <div>Description</div>
      </Title>
      <Rules>
        {[1, 2, 3, 4, 5].map((item) => (
          <Validation key={item} />
        ))}
      </Rules>
    </Container>
  );
};

export default Validations;
