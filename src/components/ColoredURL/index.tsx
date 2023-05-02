import styled from "styled-components";

const Simple = styled.span``;

const Param = styled(Simple)`
  color: #95acf0;
  font-weight: 600;

  &.version {
    color: rgb(253, 132, 126);
  }
`;

interface IColoredURLProps {
  version: string;
  url: string;
}

interface ISectionProps {
  section: string;
  index: number;
  parts: string[];
  version: string;
}

const Section = ({ section, index, parts, version }: ISectionProps) => {
  if (section.startsWith(":")) {
    return (
      <>
        <Param>{section}</Param>/
      </>
    );
  }

  if (section === version) {
    return (
      <>
        <Param className="version">{section}</Param>/
      </>
    );
  }

  return (
    <>
      <Simple>{section}</Simple>
      {index < parts.length - 1 ? "/" : ""}
    </>
  );
};

export default function ColoredURL({ version, url }: IColoredURLProps) {
  const parts = url.split("/");
  return (
    <>
      {parts.map((section: string, index: number) => (
        <Section
          key={index}
          section={section}
          index={index}
          parts={parts}
          version={version}
        />
      ))}
    </>
  );
}
