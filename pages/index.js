import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import Slider from "@/components/Slider";
import SliderContent from "@/components/SliderContent";
import { theme } from "@/styles";

export default function HomePage() {
  const slides = [
    <StyledSlideContainer key={1}>
      <SliderContent
        title1="LEISTUNG"
        title2="BEISPIEL 01"
        paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
        svgColor={theme.primaryColor2}
        listItems={["USP BEISPIEL 1", "USP BEISPIEL 2", "USP BEISPIEL 3"]}
      />
    </StyledSlideContainer>,
    <StyledSlideContainer2 key={2}>
      {" "}
      <SliderContent
        title1="LEISTUNG"
        title2="BEISPIEL 02"
        paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
        svgColor={theme.secondaryColor}
        listItems={["USP BEISPIEL 1", "USP BEISPIEL 2", "USP BEISPIEL 3"]}
      />
    </StyledSlideContainer2>,
    <StyledSlideContainer key={3}>
      {" "}
      <SliderContent
        title1="LEISTUNG"
        title2="BEISPIEL 03"
        paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
        svgColor={theme.primaryColor2}
        listItems={["USP BEISPIEL 1", "USP BEISPIEL 2", "USP BEISPIEL 3"]}
      />
    </StyledSlideContainer>,
    <StyledSlideContainer2 key={2}>
      {" "}
      <SliderContent
        title1="LEISTUNG"
        title2="BEISPIEL 04"
        paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
        svgColor={theme.secondaryColor}
        listItems={["USP BEISPIEL 1", "USP BEISPIEL 2", "USP BEISPIEL 3"]}
      />
    </StyledSlideContainer2>,
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
      <StyledH1>
        CORPORATE&nbsp;&nbsp;<StyledSpanThin> FOTOGRAFIE</StyledSpanThin>
      </StyledH1>
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
      <StyledSliderWrapper>
        <h1>Leistungen</h1>
        <Slider slides={slides} />
      </StyledSliderWrapper>
      <StyledImageContainer>
        <StyledImage
          src="/images/Platzhalter.jpg"
          alt="Klubstudio"
          width={1200}
          height={500}
        />
      </StyledImageContainer>
      <StyledTeamMembersContainer>
        <StyledTeamMemberContainerLeft>
          <StyledMemberImageContainer>
            <StyledMemberImage
              src="/images/Platzhalter.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            Hallo ich bin <StyledSpanBold>Maischa</StyledSpanBold> und ich kann
            dir <StyledSpanBorder>Fotografie</StyledSpanBorder> anbieten{" "}
          </StyledParagraph>
        </StyledTeamMemberContainerLeft>
        <StyledTeamMemberContainerRight>
          <StyledMemberImageContainer>
            <StyledMemberImage
              src="/images/Platzhalter.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            Hallo ich bin <StyledSpanBold>Stellan</StyledSpanBold> und ich kann
            dir <StyledSpanBorder>Fotografie</StyledSpanBorder> anbieten{" "}
          </StyledParagraph>
        </StyledTeamMemberContainerRight>
        <StyledTeamMemberContainerLeft>
          <StyledMemberImageContainer>
            <StyledMemberImage
              src="/images/Platzhalter.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            Hallo ich bin <StyledSpanBold>Clara</StyledSpanBold> und ich kann
            dir <StyledSpanBorder>Fotografie</StyledSpanBorder> anbieten{" "}
          </StyledParagraph>
        </StyledTeamMemberContainerLeft>
      </StyledTeamMembersContainer>
    </Layout>
  );
}

const StyledSliderWrapper = styled.div`
  margin-top: 6rem;
`;

const StyledTeamMembersContainer = styled.div`
  padding: 1rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

const StyledMemberImageContainer = styled.div`
  width: 200px;
  height: 200px;
  padding: 1rem;
`;

const StyledMemberImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
`;

const StyledParagraph = styled.p`
  line-height: 1.5;
  color: ${theme.primaryColor1};
`;

const StyledSpanBold = styled.span`
  font-weight: 800;
`;

const StyledSpanBorder = styled.span`
  font-weight: 800;
  padding: 0.15rem;
  padding-left: 0.35rem;
  padding-right: 0.35rem;
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  border-radius: 15px;
  border: solid ${theme.primaryColor1};
`;

const StyledSpanThin = styled.span`
  font-weight: 200;
`;

const StyledTeamMemberContainerLeft = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: fit-content;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const StyledTeamMemberContainerRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: right;
  width: 100%;
  height: fit-content;
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* text-align: right; */
`;

const StyledSlideContainer = styled.div`
  width: 300px;
  height: 500px;
  padding: 1.5rem;
  background-color: ${theme.secondaryColor};
  color: ${theme.primaryColor2};
`;

const StyledSlideContainer2 = styled.div`
  width: 300px;
  height: 500px;
  padding: 1.5rem;
  background-color: ${theme.primaryColor2};
  color: ${theme.secondaryColor};
`;

const StyledImageHeadContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 400px;
  overflow: hidden;
  top: -0.1rem;
`;

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  font-size: 1.6rem;
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
  margin-top: 13.5rem;
  margin-bottom: 6rem;
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
  margin-top: -0.2rem;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
