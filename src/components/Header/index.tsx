import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../Sizes";
import Logo from "../Logo";
import VersionSelector from "../VersionSelector";
import { IVersion } from "../../Interfaces";

const Container = styled.div`
  background-color: ${({ theme }) => theme.primary};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 19px 24px;
  border-bottom: 1px solid #282828;
  z-index: 99;
`;

interface IHeaderProps {
  setVersion: (version: IVersion) => void;
}

function Header({ setVersion }: IHeaderProps) {
  return (
    <Container>
      <Logo />
      <VersionSelector setVersion={setVersion} />
    </Container>
  );
}

export default Header;
