import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 30px;
`;

export default function PaginateContent() {
  return (
    <Container>
      <h4>Params</h4>
      <ul>
        <li>:customerId: Customer table id</li>
        <li>:id: Post id</li>
      </ul>

      <h4>Query string</h4>
      <ul>
        <li>fields: name, surname, etc</li>
        <li>sort: All fields</li>
        <li>page: Current page</li>
        <li>per_page: Per page (1-100)</li>
        <li>with: Related data (Maybe relation map)</li>
        <li>trashed: Only for soft delete feature</li>
        <li>q: Conditions</li>
      </ul>
    </Container>
  );
}
