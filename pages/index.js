import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import Slider from "@/components/Slider";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  const slides = [
    ["Slide 1 Section 1 Content", "Slide 1 Section 2 Content"],
    ["Slide 2 Section 1 Content", "Slide 2 Section 2 Content"],
    ["Slide 3 Section 1 Content", "Slide 3 Section 2 Content"],
  ];

  const items = [
    <div key={1}>Container 1</div>,
    <div key={2}>Container 2</div>,
    <div key={3}>Container 3</div>,
  ];

  return (
    <Layout>
      <StyledImageHeadContainer>
        <StyledImage
          src="/images/Platzhalter.jpg"
          alt="Klubstudio"
          width={1200}
          height={500}
        />
      </StyledImageHeadContainer>
      <StyledH1>Corperate Fotografie</StyledH1>
      <StyledContentArea>
        <StyledTextWrapper>
          <h2>VISION</h2>
          <StyledText>
            {" "}
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
        </StyledTextWrapper>
        <StyledTextWrapper>
          <h2>WAS WIR MACHEN</h2>
          <StyledText>
            {" "}
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
        </StyledTextWrapper>
      </StyledContentArea>
      <StyledImageContainer>
        <StyledImage
          src="/images/Platzhalter.jpg"
          alt="Klubstudio"
          width={1200}
          height={500}
        />
      </StyledImageContainer>
      <div>
        <h1>My Slider Component</h1>
        <Slider slides={slides} />
      </div>
      <div>
        <h1>Horizontal Gallery</h1>
        <Gallery items={items} />
      </div>
    </Layout>
  );
}

const StyledImageHeadContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 400px;
  overflow: hidden;
  top: 0;
`;

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  font-size: 1.9rem;
  margin: 0;
  margin-top: 10rem;
  margin-bottom: 3rem;
  color: black;
`;

const StyledContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin: 0;
  margin-top: 11rem;
`;

const StyledTextWrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  min-width: auto;
  max-width: 600px;
`;

const StyledText = styled.p``;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
