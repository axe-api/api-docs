import styled from "styled-components";
import FieldDoc from "../FieldDoc";
import { IRoute } from "../../Interfaces";

const Title = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 24px;
`;

interface IRequestBodyProps {
  route: IRoute;
}

function RequestBody({ route }: IRequestBodyProps) {
  return (
    <div>
      <Title>Request Body</Title>
      {route.fillables.map((fillable) => (
        <FieldDoc key={fillable} field={fillable} route={route} />
      ))}
    </div>
  );
}

export default RequestBody;
