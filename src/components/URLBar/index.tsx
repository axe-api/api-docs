import styled from "styled-components";
import HTTPMethod from "../HTTPMethod";
import { CopyIcon } from "../Icons";
import { IRoute } from "../../Interfaces";
import ColoredURL from "../ColoredURL";
import { COLOR_MAP } from "../../Constants";

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 10px 8px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 20px;
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
      <HTTPMethod
        color={COLOR_MAP[route.method].color}
        backgroundColor={COLOR_MAP[route.method].bgColor}
      >
        {route.method}
      </HTTPMethod>
      <URL>
        <ColoredURL url={route.url} />
      </URL>
      <CopyButton type="button">
        <CopyIcon width={24} height={24} />
      </CopyButton>
    </Container>
  );
}

export default URLBar;
