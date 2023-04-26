import styled from "styled-components";
import { NAVBAR_HEIGHT, LEFTBAR_WIDTH, RIGHTBAR_WIDTH } from "../Sizes";
import ResourceContent from "../ResourceContent";
import { useContext } from "react";
import { IDoc } from "../../Interfaces";
import { DocContext } from "../../contexts/DocContext";
import GeneralInformation from "../GeneralInformation";

const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.primary};
  margin-left: ${LEFTBAR_WIDTH}px;
  margin-right: ${RIGHTBAR_WIDTH}px;
  margin-top: ${NAVBAR_HEIGHT}px;
`;

function Content() {
  const data = useContext<IDoc>(DocContext);

  return (
    <Container>
      <GeneralInformation />
      {data.routes.map((route, index) => (
        <ResourceContent key={index} route={route} />
      ))}
    </Container>
  );
}

export default Content;
