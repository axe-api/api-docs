import styled from "styled-components";
import Resource from "../Resource";
import { useContext } from "react";
import { DocContext } from "../../contexts/DocContext";
import { IDoc } from "../../Interfaces";

const Container = styled.div``;

function Resources() {
  const data = useContext<IDoc>(DocContext);
  const models = Array.from(new Set(data.routes.map((i) => i.model))).sort();

  return (
    <Container>
      {models.map((model) => (
        <Resource model={model} key={model} />
      ))}
    </Container>
  );
}

export default Resources;
