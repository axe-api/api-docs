import styled from "styled-components";
import RequestBody from "../RequestBody";
import { IRoute } from "../../Interfaces";
import { HANDLER_TITLE_MAP } from "../../Constants";
import PaginateContent from "../PaginateContent";

const Title = styled.a`
  display: block;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #282828;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

interface IResourceContentProps {
  route: IRoute;
}

export const toURLLink = (route: IRoute) => {
  return `${route.model}-${HANDLER_TITLE_MAP[route.handler]}`.toLowerCase();
};

function ResourceContent({ route }: IResourceContentProps) {
  return (
    <div>
      <Title id={toURLLink(route)} href={`#` + toURLLink(route)}>
        {route.model} / {HANDLER_TITLE_MAP[route.handler]}
      </Title>
      {route.handler === "paginate" && <PaginateContent />}
      {["POST", "PUT", "PATCH", "DELETE"].includes(route.method) && (
        <RequestBody route={route} />
      )}
    </div>
  );
}

export default ResourceContent;
