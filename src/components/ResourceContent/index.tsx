import styled from "styled-components";
import RequestBody from "../RequestBody";

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
  title: string;
}

function ResourceContent({ title }: IResourceContentProps) {
  return (
    <div>
      <Title>{title}</Title>
      <RequestBody />
    </div>
  );
}

export default ResourceContent;
