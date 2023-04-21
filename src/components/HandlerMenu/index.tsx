import styled from "styled-components";
import HTTPMethod from "../HTTPMethod";

interface IHandlerMenuProps {
  title: string;
  color: string;
  bgColor: string;
  method: string;
}

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -8px;
  margin-right: -8px;
  border-radius: 8px;
  padding: 8px;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: all 100ms;

  &:hover {
    background-color: #393939;
  }
`;

function HandlerMenu({ title, method, bgColor, color }: IHandlerMenuProps) {
  return (
    <Link>
      {title}
      <HTTPMethod color={color} backgroundColor={bgColor}>
        {method}
      </HTTPMethod>
    </Link>
  );
}

export default HandlerMenu;
