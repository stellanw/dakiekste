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
          Moderne Unternehmensfotografie, die euch und eure Marke nach vorne
          bringt und einen bleibenden Eindruck hinterlässt.
        </StyledTopText>
      </StyledTopTextWrapper>
      <StyledBottomContainer>
        <StyledBottomTextWrapper>
          <StyledHeadline>STÄRKT EURE MARKE</StyledHeadline>
          <StyledBottomText>
            Gute Fotos sind das Aushängeschild eurer Marke. Mit unserer
            individuellen Business-Fotografie präsentiert ihr euch mit
            besonderem Wiedererkennungswert. Zeigt euren Kunden authentisch,
            wofür ihr steht.
          </StyledBottomText>
        </StyledBottomTextWrapper>
        <StyledBottomTextWrapper>
          <StyledHeadline>VERTRAUEN DURCH QUALITÄT</StyledHeadline>
          <StyledBottomText>
            Hochwertige Fotos von euch und eurem Team schaffen Vertrauen. Zeigt
            eure Wertschätzung für Qualität und fördert eine positive
            Markenwahrnehmung. Mit professionellen Bildern, die eure
            Unternehmensgeschichte eindrucksvoll erzählen.
          </StyledBottomText>
        </StyledBottomTextWrapper>
        <StyledBottomTextWrapper>
          <StyledHeadline>MAXIMIERT EURE SICHTBARKEIT</StyledHeadline>
          <StyledBottomText>
            Ansprechende und einladende Bilder sind euer Schlüssel zu mehr
            Aufmerksamkeit und sorgen dafür, dass eure Botschaft im Gedächtnis
            bleibt. Nutzt die Kraft der visuellen Kommunikation, um eure
            Reichweite zu maximieren.
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
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: ${theme.secondaryColorBeige};
`;

const StyledHeadline = styled.h2`
  font-size: ${theme.fontSizes.xs};
  margin: 0;
`;

const StyledTopTextWrapper = styled.div`
  min-width: auto;
  max-width: 600px;
  padding-bottom: 2rem;
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

  @media (max-width: 1030px) {
    justify-content: center;
  }

  @media (max-width: 700px) {
    justify-content: start;
  }
`;
