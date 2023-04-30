import styled from "styled-components";
import RequestBody from "../RequestBody";
import { IRoute, IVersion } from "../../Interfaces";
import { HANDLER_TITLE_MAP } from "../../Constants";
import URLBar from "../URLBar";
import QueryString, { DEFAULT_OPTIONS } from "../GetDocs/QueryString";
import Params from "../GetDocs/Params";

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
  version: IVersion;
}

export const toURLLink = (route: IRoute) => {
  return `${route.model}-${HANDLER_TITLE_MAP[route.handler]}`.toLowerCase();
};

function ResourceContent({ route, version }: IResourceContentProps) {
  return (
    <div>
      <Title id={toURLLink(route)} href={`#` + toURLLink(route)}>
        {route.model} / {HANDLER_TITLE_MAP[route.handler]}
      </Title>
      <URLBar />

      {route.handler === "paginate" && (
        <>
          <Params />
          <QueryString
            route={route}
            version={version}
            options={DEFAULT_OPTIONS}
          />
        </>
      )}

      {route.handler === "show" && (
        <>
          <Params />
          <QueryString
            route={route}
            version={version}
            options={{
              fields: true,
              sort: false,
              page: false,
              perPage: false,
              with: true,
              conditions: true,
            }}
          />
        </>
      )}

      {["store", "update", "patch"].includes(route.handler) && (
        <RequestBody route={route} />
      )}
    </div>
  );
}

export default ResourceContent;
