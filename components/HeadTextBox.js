import styled from "styled-components";
import { theme } from "@/styles";

export default function HeadTextBox() {
  return (
    <StyledTextContainer>
      <StyledTopTextWrapper>
        {/* <StyledHeadline>
          {" "}
          Ihr schreibt Geschichten - wir halten sie fest
        </StyledHeadline> */}
        <StyledTopText>
          Unsere Business-Fotografie bringt eure Vision und Leidenschaft zum
          Ausdruck. Mit modernen Ideen und jungem Blick rücken wir den Menschen
          hinter der Marke in den Fokus.
        </StyledTopText>
      </StyledTopTextWrapper>
      <StyledBottomContainer>
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
      </StyledBottomContainer>
    </StyledTextContainer>
  );
}
const StyledTextContainer = styled.div`
  width: 100%;
  margin: 0;
  margin-top: 5.8rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 4rem;
  padding-right: 4rem;
  background-color: ${theme.secondaryColorBeige};
`;

const StyledHeadline = styled.h2`
  font-size: ${theme.fontSizes.xs};
  margin: 0;
`;

const StyledTopTextWrapper = styled.div`
  min-width: auto;
  max-width: 900px;
  padding-bottom: 2rem;
  /* margin: auto; */
`;

const StyledTopText = styled.p`
  font-size: ${theme.fontSizes.medium};
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 2.5rem;
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
