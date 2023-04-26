import styled from "styled-components";
import Resource from "../Resource";
import { useContext, useEffect, useRef } from "react";
import { DocContext } from "../../contexts/DocContext";
import { IDoc } from "../../Interfaces";
import { useSelector } from "react-redux";
import autoAnimate from "@formkit/auto-animate";

const Container = styled.div``;

function Resources() {
  const parent = useRef(null);
  const data = useContext<IDoc>(DocContext);
  const search = useSelector((state: any) => state.search.value.toLowerCase());

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  // We should filder models
  let filteredRoutes = data.routes;
  if (search) {
    filteredRoutes = data.routes.filter((item) =>
      item.searchKey.includes(search)
    );
  }

  const models = Array.from(new Set(filteredRoutes.map((i) => i.model))).sort();

  return (
    <Container ref={parent}>
      {models.map((model) => (
        <Resource model={model} key={model} />
      ))}
    </Container>
  );
}

export default Resources;
