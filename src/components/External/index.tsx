import styled from "styled-components";

const Link = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

interface IExternalLinkProps {
  href: string;
  children: any;
}

export default function ExternalLink({ href, children }: IExternalLinkProps) {
  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  );
}
