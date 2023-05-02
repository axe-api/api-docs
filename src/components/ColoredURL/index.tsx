import styled from "styled-components";

const Simple = styled.span``;

const Param = styled(Simple)`
  color: #95acf0;
  font-weight: 600;
`;

interface IColoredURLProps {
  url: string;
}

interface ISectionProps {
  section: string;
  index: number;
  parts: string[];
}

const Section = ({ section, index, parts }: ISectionProps) => {
  if (section.startsWith(":")) {
    return (
      <>
        <Param>{section}</Param>/
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

export default function ColoredURL({ url }: IColoredURLProps) {
  const parts = url.split("/");
  return (
    <>
      {parts.map((section: string, index: number) => (
        <Section key={index} section={section} index={index} parts={parts} />
      ))}
    </>
  );
}
