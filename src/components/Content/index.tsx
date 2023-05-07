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
`;

function Content() {
  const data = useContext<IDoc>(DocContext);
  const version = data.versions.find(
    (version) => version.name === data.selectedVersion
  );

  if (!version) {
    return <></>;
  }

  return (
    <Container>
      <GeneralInformation />
      {data.routes
        .filter((route) => route.version === version.name)
        .map((route, index) => (
          <ResourceContent
            zebra={index % 2}
            key={index}
            route={route}
            version={version}
          />
        ))}
    </Container>
  );
}

export default Content;
