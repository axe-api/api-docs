import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 50px;
`;

const TitleSection = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Title = styled.code`
  font-weight: 500;
  background: rgba(108, 142, 239, 0.5);
  padding: 5px 8px;
  border-radius: 8px;
  display: block;
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
`;

const Content = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

interface IFeatureProps {
  title: string;
  description: string;
  children?: any;
}

export default function Feature({
  title,
  description,
  children,
}: IFeatureProps) {
  return (
    <Container>
      <TitleSection>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleSection>
      {children && <Content>{children}</Content>}
    </Container>
  );
}
