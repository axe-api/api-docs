import styled from "styled-components";

const Container = styled.span<{ color: string; backgroundColor: string }>`
  text-transform: uppercase;
  display: block;
  width: 56px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  text-align: center;
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IHTTPMethodProps {
  color: string;
  backgroundColor: string;
  children: any;
}

function HTTPMethod({ color, backgroundColor, children }: IHTTPMethodProps) {
  return (
    <Container color={color} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
}

export default HTTPMethod;
