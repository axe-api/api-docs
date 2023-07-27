import styled from "styled-components";

const Container = styled.a`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  background: linear-gradient(90deg, #9747ff 0%, #6c8eef 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

function Logo() {
  return <Container href="/docs">Axe API Docs</Container>;
}

export default Logo;
