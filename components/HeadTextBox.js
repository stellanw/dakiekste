import styled from "styled-components";
import { theme } from "@/styles";
import LogoCarousel from "./LogoCarousel";

export default function HeadTextBox() {
  return (
    <StyledTextContainer>
      <StyledTopTextWrapper>
        <StyledHeadline> fotografie echt sichtbar</StyledHeadline>
        <StyledTopText>
          Wir machen deine Marke sichtbar und bringen deine Werte und
          Persönlichkeit visuell auf den Punkt – mit modernen Ideen und frischen
          Ansätzen.
        </StyledTopText>
      </StyledTopTextWrapper>
      <LogoCarousel />
      {/* <StyledBottomContainer>
        <StyledBottomTextWrapper>
          <StyledHeadline>STÄRKT EURE MARKE</StyledHeadline>
          <StyledBottomText>
            Authentische Fotografie mit Wiedererkennungswert die zeigt, wofür
            ihr steht.
          </StyledBottomText>
        </StyledBottomTextWrapper>
        <StyledBottomTextWrapper>
          <StyledHeadline>VERTRAUEN DURCH QUALITÄT</StyledHeadline>
          <StyledBottomText>
            Hochwertige Fotos schaffen Vertrauen und fördern eine positive
            Wahrnehmung eurer Marke.
          </StyledBottomText>
        </StyledBottomTextWrapper>
        <StyledBottomTextWrapper>
          <StyledHeadline>MAXIMIERT EURE SICHTBARKEIT</StyledHeadline>
          <StyledBottomText>
            Besondere Bilder bleiben im Gedächtnis und erhöhen eure Reichweite.
          </StyledBottomText>
        </StyledBottomTextWrapper>
      </StyledBottomContainer> */}
    </StyledTextContainer>
  );
}
const StyledTextContainer = styled.div`
  width: 100%;

  margin: 0;
  margin-top: 4rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: ${theme.secondaryColorBeige};
  overflow: hidden;
`;

const StyledHeadline = styled.h2`
  font-size: ${theme.fontSizes.xs};
  margin: 0;
  text-transform: uppercase;
`;

const StyledTopTextWrapper = styled.div`
  min-width: auto;
  /* max-width: 900px; */

  padding-bottom: 2rem;
  margin: auto;
  text-align: center;
  overflow: hidden;
`;

const StyledTopText = styled.p`
  font-size: ${theme.fontSizes.medium};
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 2.5rem;
  font-weight: 300;
`;

const StyledBottomTextWrapper = styled.div`
  min-width: auto;
  max-width: 300px;
`;

const StyledBottomText = styled.p`
  font-size: ${theme.fontSizes.xs};
  margin: 0;
  padding-top: 0.5rem;
`;

const StyledBottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  /* @media (max-width: 1030px) {
    justify-content: center;
  }

  @media (max-width: 700px) {
    justify-content: start;
  } */
`;
