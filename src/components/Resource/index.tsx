import styled from "styled-components";
import autoAnimate from "@formkit/auto-animate";
import HandlerMenu from "../HandlerMenu";
import { ArrowUp, ArrowDown } from "../Icons";
import { useContext, useEffect, useRef, useState } from "react";
import { IDoc } from "../../Interfaces";
import { DocContext } from "../../contexts/DocContext";
import { COLOR_MAP, HANDLER_TITLE_MAP } from "../../Constants";

const Container = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 40px;
  margin-top: 8px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 10px;
`;

const TitleToggle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Handlers = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IResourceProps {
  model: string;
}

function Resource({ model }: IResourceProps) {
  const data = useContext<IDoc>(DocContext);
  const [isOpen, setOpen] = useState(true);
  const parent = useRef(null);

  const routes = data.routes.filter((item) => item.model === model);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <Container ref={parent}>
      <Title>
        {model}
        <TitleToggle type="button" onClick={() => setOpen(!isOpen)}>
          {isOpen && <ArrowUp width={14} height={14} />}
          {!isOpen && <ArrowDown width={14} height={14} />}
        </TitleToggle>
      </Title>
      {isOpen && (
        <Handlers>
          {routes.map((item) => (
            <HandlerMenu
              key={`${item.method}.${item.url}`}
              title={HANDLER_TITLE_MAP[item.handler]}
              method={item.method}
              color={COLOR_MAP[item.method].color}
              bgColor={COLOR_MAP[item.method].bgColor}
            />
          ))}
        </Handlers>
      )}
    </Container>
  );
}

export default Resource;
