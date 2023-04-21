import styled from "styled-components";
import autoAnimate from "@formkit/auto-animate";
import HandlerMenu from "../HandlerMenu";
import { ArrowUp, ArrowDown } from "../Icons";
import { useEffect, useRef, useState } from "react";

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
  text-transform: uppercase;
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

const DUMMY_RESOURCES = [
  { title: "Insert", method: "POST", color: "#35370A", bgColor: "#E4EB45" },
  { title: "Paginate", method: "GET", color: "#1D2B25", bgColor: "#00F4B9" },
  { title: "Fetch", method: "GET", color: "#1D2B25", bgColor: "#00F4B9" },
  { title: "Delete", method: "DELETE", color: "#530C02", bgColor: "#FD847E" },
  { title: "Update", method: "PUT", color: "#35370A", bgColor: "#E4EB45" },
  { title: "Patch", method: "PATCH", color: "#35370A", bgColor: "#E4EB45" },
];

function Resource() {
  const [isOpen, setOpen] = useState(true);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <Container ref={parent}>
      <Title>
        User
        <TitleToggle type="button" onClick={() => setOpen(!isOpen)}>
          {isOpen && <ArrowUp width={14} height={14} />}
          {!isOpen && <ArrowDown width={14} height={14} />}
        </TitleToggle>
      </Title>
      {isOpen && (
        <Handlers>
          {DUMMY_RESOURCES.map((item) => (
            <HandlerMenu key={item.title} {...item} />
          ))}
        </Handlers>
      )}
    </Container>
  );
}

export default Resource;
