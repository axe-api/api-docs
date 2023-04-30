import styled from "styled-components";

const Simple = styled.span``;

const Param = styled(Simple)`
  color: #95acf0;
  font-weight: 600;
`;

interface IColoredURLProps {
  url: string;
}
export default function ColoredURL({ url }: IColoredURLProps) {
  const parts = url.split("/");
  return (
    <>
      {parts.map((section: string, index: number) => {
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
      })}
    </>
  );
}
