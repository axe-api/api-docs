import styled from "styled-components";
import HTTPMethod from "../HTTPMethod";
import { IRoute } from "../../Interfaces";
import { COLOR_MAP, HANDLER_TITLE_MAP } from "../../Constants";
import { toURLLink } from "../ResourceContent";

const Link = styled.button`
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
  text-decoration: none;
  background-color: transparent;
  border: none;

  &:hover {
    background-color: #393939;
  }
`;

interface IHandlerMenuProps {
  route: IRoute;
}

function HandlerMenu({ route }: IHandlerMenuProps) {
  const link = toURLLink(route);

  const handleClick = () => {
    console.log("handleClick", link);
    const element = document.getElementById(link);
    const bodyRect = document.body.getBoundingClientRect();
    if (element) {
      const { top } = element.getBoundingClientRect();
      window.scrollTo({
        top: top - bodyRect.top,
        behavior: "smooth",
      });
    }
    console.log(element);
  };

  return (
    <Link type="button" onClick={handleClick}>
      {HANDLER_TITLE_MAP[route.handler]}
      <HTTPMethod
        color={COLOR_MAP[route.method].color}
        backgroundColor={COLOR_MAP[route.method].bgColor}
      >
        {route.method}
      </HTTPMethod>
    </Link>
  );
}

export default HandlerMenu;
