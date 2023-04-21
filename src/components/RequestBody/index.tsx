import styled from "styled-components";
import FieldDoc from "../FieldDoc";

const Title = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 24px;
`;

function RequestBody() {
  return (
    <div>
      <Title>Request Body</Title>
      {[1, 2, 3, 4, 6].map((item) => (
        <FieldDoc key={item} />
      ))}
    </div>
  );
}

export default RequestBody;
