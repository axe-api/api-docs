import styled from "styled-components";
import { SearchIcon } from "../Icons";

const Container = styled.div`
  padding: 24px;
  position: relative;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  width: 100%;
  padding: 11px 8px 11px 32px;
  border: none;
  border-radius: 8px;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

const IconBox = styled.div`
  position: absolute;
  left: 34px;
  top: 34px;
`;

function SearchBox() {
  return (
    <Container>
      <IconBox>
        <SearchIcon width={16} height={16} />
      </IconBox>
      <Input type="text" placeholder="Find anything..." />
    </Container>
  );
}

export default SearchBox;
