import styled from "styled-components";
import { ArrowDown } from "../Icons";
import { useContext, useState } from "react";
import { IDoc, IVersion } from "../../Interfaces";
import { DocContext } from "../../contexts/DocContext";
import { toast } from "react-toastify";

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  opacity: 0.75;
`;

const ActiveVersion = styled.button`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: transparent;
  padding: 0px;
  border: none;
  cursor: pointer;

  &:hover {
    color: #f1f1f1;
  }
`;

const MenuBox = styled.div`
  position: absolute;
  top: 30px;
  right: 0px;
  min-width: 60px;
  background: #1c1c1c;
  border: 1px solid #393939;
  border-radius: 4px;
  padding: 16px;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

const VersionSelectButton = styled.button`
  display: block;
  padding: 10px;
  border: none;
  background-color: transparent;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  cursor: pointer;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

interface IVersionSelectorProps {
  setVersion: (version: IVersion) => void;
}

function VersionSelector({ setVersion }: IVersionSelectorProps) {
  const data = useContext<IDoc>(DocContext);
  const [isActive, setActive] = useState(false);

  const handleVersionSelect = (version: IVersion) => {
    setVersion(version);
    setActive(false);
    toast.success("API version has been changed!", {
      position: "bottom-right",
      theme: "dark",
    });
  };

  return (
    <Container>
      <Title>API Version:</Title>
      <ActiveVersion type="button" onClick={() => setActive(!isActive)}>
        <div>{data.selectedVersion}</div>
        <ArrowDown height={16} width={16} />
      </ActiveVersion>

      {isActive && (
        <MenuBox>
          {data.versions.map((version) => (
            <VersionSelectButton
              key={version.name}
              type="button"
              onClick={() => handleVersionSelect(version)}
            >
              {version.name}
            </VersionSelectButton>
          ))}
        </MenuBox>
      )}
    </Container>
  );
}

export default VersionSelector;
