import styled from "styled-components";
import { NAVBAR_HEIGHT, LEFTBAR_WIDTH } from "../Sizes";
import ResourceContent from "../ResourceContent";
import { useContext } from "react";
import { IDoc } from "../../Interfaces";
import { DocContext } from "../../contexts/DocContext";
import GeneralInformation from "../GeneralInformation";

const Container = styled.div`
  background-color: ${({ theme }) => theme.primary};
  margin-left: ${LEFTBAR_WIDTH}px;
  margin-top: ${NAVBAR_HEIGHT}px;
  display: flex;
  justify-content: center;
`;

const FixedSizeBox = styled.div`
  max-width: 800px;
  padding: 20px;
`;

function Content() {
  const data = useContext<IDoc>(DocContext);

  return (
    <Container>
      <FixedSizeBox>
        <GeneralInformation />
        {data.routes.map((route, index) => (
          <ResourceContent key={index} route={route} />
        ))}
      </FixedSizeBox>
    </Container>
  );
}

export default Content;
