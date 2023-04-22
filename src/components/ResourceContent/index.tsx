import styled from "styled-components";
import RequestBody from "../RequestBody";
import { IRoute } from "../../Interfaces";
import { HANDLER_TITLE_MAP } from "../../Constants";

const Title = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #282828;
`;

interface IResourceContentProps {
  route: IRoute;
}

function ResourceContent({ route }: IResourceContentProps) {
  return (
    <div>
      <Title>
        {route.model} / {HANDLER_TITLE_MAP[route.handler]}
      </Title>
      {["POST", "PUT", "PATCH", "DELETE"].includes(route.method) && (
        <RequestBody route={route} />
      )}
    </div>
  );
}

export default ResourceContent;
