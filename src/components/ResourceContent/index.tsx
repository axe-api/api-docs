import styled from "styled-components";
import RequestBody from "../RequestBody";
import { IRoute, IVersion } from "../../Interfaces";
import { HANDLER_TITLE_MAP } from "../../Constants";
import URLBar from "../URLBar";
import QueryString, { DEFAULT_OPTIONS } from "../GetDocs/QueryString";
import Params from "../GetDocs/Params";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;

  &.bg-1 {
    background-color: #1c1c1c;
  }
`;

export const FixedBox = styled.div`
  width: 100%;
  max-width: 800px;
`;

const Title = styled.a`
  display: block;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 10px;
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
  zebra: number;
}

export const toURLLink = (route: IRoute) => {
  return `${route.model}-${HANDLER_TITLE_MAP[route.handler]}`.toLowerCase();
};

function ResourceContent({ route, version, zebra }: IResourceContentProps) {
  return (
    <Container className={`bg-${zebra}`}>
      <FixedBox>
        <Title id={toURLLink(route)} href={`#` + toURLLink(route)}>
          {route.model} / {HANDLER_TITLE_MAP[route.handler]}
        </Title>
        <URLBar route={route} />

        <Params route={route} />

        {route.handler === "paginate" && (
          <QueryString
            route={route}
            version={version}
            options={DEFAULT_OPTIONS}
          />
        )}

        {route.handler === "show" && (
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
        )}

        {["store", "update", "patch"].includes(route.handler) && (
          <RequestBody route={route} />
        )}
      </FixedBox>
    </Container>
  );
}

export default ResourceContent;
