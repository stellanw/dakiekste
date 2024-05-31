import styled from "styled-components";

export default function SplitTextBox() {
  return (
    <StyledContentArea>
      <StyledTextWrapper>
        <h2>VISION</h2>
        <StyledText>
          {" "}
          Willkommen bei Dakiekste! Wir sind eine Agentur für
          Branding-Fotografie und bieten ein umfassendes Paket an
          Dienstleistungen im Bereich Kommunikations-Design, Webdevelopment und
          UI/UX Design an. Unser Ziel ist es, Unternehmen dabei zu unterstützen,
          sich durch hochwertige Fotografie und kreative Gestaltung zu
          präsentieren. Wir bieten Unterstützung bei der Entwicklung von
          Unternehmens-Webauftritten, der Erstellung von Marketing- und
          Image-Fotos für Web- und Social-Media-Auftritte, der Logo-Erstellung,
          dem Corporate Design, Marken-Branding, Konzepterstellung und
          Moodboards. Mit unserer langjährigen Erfahrung und vielfältigen
          Fähigkeiten sind wir bereit, Ihre Vision zum Leben zu erwecken.
        </StyledText>
      </StyledTextWrapper>
      <StyledTextWrapper>
        <h2>WAS WIR MACHEN</h2>
        <StyledText>
          {" "}
          Willkommen bei Dakiekste! Wir sind eine Agentur für
          Branding-Fotografie und bieten ein umfassendes Paket an
          Dienstleistungen im Bereich Kommunikations-Design, Webdevelopment und
          UI/UX Design an. Unser Ziel ist es, Unternehmen dabei zu unterstützen,
          sich durch hochwertige Fotografie und kreative Gestaltung zu
          präsentieren. Wir bieten Unterstützung bei der Entwicklung von
          Unternehmens-Webauftritten, der Erstellung von Marketing- und
          Image-Fotos für Web- und Social-Media-Auftritte, der Logo-Erstellung,
          dem Corporate Design, Marken-Branding, Konzepterstellung und
          Moodboards. Mit unserer langjährigen Erfahrung und vielfältigen
          Fähigkeiten sind wir bereit, Ihre Vision zum Leben zu erwecken.
        </StyledText>
      </StyledTextWrapper>
    </StyledContentArea>
  );
}

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
