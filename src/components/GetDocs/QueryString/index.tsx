import styled from "styled-components";
import { Ul, Li } from "../shared";

const Container = styled.div`
  margin-bottom: 30px;
`;

const QueryFields = () => {
  return <Li>fields: name, surname, etc</Li>;
};

const Sort = () => {
  return <Li>sort: All fields</Li>;
};

const Page = () => {
  return <Li>page: Current page</Li>;
};

const PerPage = () => {
  return <Li>per_page: Per page (1-100)</Li>;
};

const With = () => {
  return <Li>with: Related data (Maybe relation map)</Li>;
};

const Trashed = () => {
  return <Li>trashed: Only for soft delete feature</Li>;
};

const Conditions = () => {
  return <Li>q: Conditions</Li>;
};

export default function QueryString() {
  return (
    <Container>
      <h3>Query string</h3>
      <Ul>
        <QueryFields />
        <Sort />
        <Page />
        <PerPage />
        <With />
        <Trashed />
        <Conditions />
      </Ul>
    </Container>
  );
}
