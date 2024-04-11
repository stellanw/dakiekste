import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";

export default function HomePage() {
  return (
    <Layout>
      <StyledDiv>
        <StyledH1>DAKIEKSTE</StyledH1>
        <StyledWrapper>
          <StyledImage
            src="/images/klubstudio.jpg"
            alt="Klubstudio"
            width={1200}
            height={500}
          />
          <StyledText>
            Willkommen bei Dakiekste! Wir sind eine Agentur für
            Branding-Fotografie und bieten ein umfassendes Paket an
            Dienstleistungen im Bereich Kommunikations-Design, Webdevelopment
            und UI/UX Design an. Unser Ziel ist es, Unternehmen dabei zu
            unterstützen, sich durch hochwertige Fotografie und kreative
            Gestaltung zu präsentieren. Wir bieten Unterstützung bei der
            Entwicklung von Unternehmens-Webauftritten, der Erstellung von
            Marketing- und Image-Fotos für Web- und Social-Media-Auftritte, der
            Logo-Erstellung, dem Corporate Design, Marken-Branding,
            Konzepterstellung und Moodboards. Mit unserer langjährigen Erfahrung
            und vielfältigen Fähigkeiten sind wir bereit, Ihre Vision zum Leben
            zu erwecken.
          </StyledText>
        </StyledWrapper>
      </StyledDiv>
    </Layout>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  width: 500px;
  height: auto;
`;

const StyledText = styled.p`
  padding: 0;
  margin-top: 1rem;
  margin-right: 1rem;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  color: black;
`;

const StyledDiv = styled.div`
  margin-left: 2rem;
  margin-top: 4rem;
`;
