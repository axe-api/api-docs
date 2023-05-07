import styled from "styled-components";
import RequestBody from "../RequestBody";
import { IRoute, IVersion } from "../../Interfaces";
import { HANDLER_TITLE_DESCRIPTION, HANDLER_TITLE_MAP } from "../../Constants";
import URLBar from "../URLBar";
import QueryString, { DEFAULT_OPTIONS } from "../GetDocs/QueryString";
import Params from "../GetDocs/Params";
import RequestExample from "../RequestExample";
import ResponseExample from "../ResponseExample";

const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  &.bg-1 {
    background-color: #1c1c1c;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sticky = styled.div`
  position: sticky;
  top: 63px;
  z-index: 9;
  padding-top: 10px;
  padding-bottom: 0px;
  background-color: #161616;
  // border-bottom: 1px solid #1c1c1c;
  width: 100%;

  &.bg-1 {
    background-color: #1c1c1c;
    // border-bottom: 1px solid #151515;
  }
`;

export const FixedBox = styled.div`
  width: 100%;
  max-width: 900px;
`;

const TitleLine = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.a`
  display: block;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
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
    <Container className={`bg-${zebra}`} id={toURLLink(route)}>
      <Sticky className={`bg-${zebra}`}>
        <Flex>
          <FixedBox>
            <TitleLine>
              <Title href={`#` + toURLLink(route)}>
                {route.model} / {HANDLER_TITLE_MAP[route.handler]}
              </Title>
              <Description>
                {HANDLER_TITLE_DESCRIPTION[route.handler]}
              </Description>
            </TitleLine>
            <URLBar zebra={zebra} route={route} />
          </FixedBox>
        </Flex>
      </Sticky>
      <Flex>
        <FixedBox>
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

          <RequestExample route={route} />
          <ResponseExample route={route} />
        </FixedBox>
      </Flex>
    </Container>
  );
}

export default ResourceContent;
