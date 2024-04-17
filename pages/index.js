import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";

export default function HomePage() {
  return (
    <Layout>
      <StyledDiv>
        <StyledHeadlineWrapper>
          <StyledH1>DAKIEKSTE</StyledH1>
          <StyledIconWrapper>
            <svg
              width="20"
              height="20"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13C1 19.6274 6.37258 25 13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 0.999999C6.37258 0.999999 1 6.37258 1 13Z"
                stroke="#000000"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M11.0064 15.4961C11.0064 19.0812 13.9127 21.9875 17.4978 21.9875C21.0829 21.9875 23.9893 19.0812 23.9893 15.4961C23.9893 11.911 21.0829 9.00467 17.4978 9.00467C13.9127 9.00467 11.0064 11.911 11.0064 15.4961Z"
                stroke="#000000"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M23.493 15.4965C23.493 18.8102 20.8067 21.4965 17.493 21.4965C14.1793 21.4965 11.493 18.8102 11.493 15.4965C11.493 12.1828 14.1793 9.4965 17.493 9.4965C20.8067 9.4965 23.493 12.1828 23.493 15.4965Z"
                fill="#000000"
              />
            </svg>
          </StyledIconWrapper>
        </StyledHeadlineWrapper>
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

const StyledHeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIconWrapper = styled.div`
  padding-left: 0.2rem;
`;

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
