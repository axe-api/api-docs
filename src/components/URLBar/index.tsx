import styled from "styled-components";
import HTTPMethod from "../HTTPMethod";
import { CopyIcon } from "../Icons";
import { IRoute } from "../../Interfaces";

const Container = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 10px 8px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`;

const URL = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  flex-grow: 2;
`;

const CopyButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

interface IURLBarProps {
  route: IRoute;
}

function URLBar({ route }: IURLBarProps) {
  return (
    <Container>
      <HTTPMethod color="#1D2B25" backgroundColor="#00F4B9">
        {route.method}
      </HTTPMethod>
      <URL>{route.url}</URL>
      <CopyButton type="button">
        <CopyIcon width={24} height={24} />
      </CopyButton>
    </Container>
  );
}

export default URLBar;
