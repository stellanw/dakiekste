import styled from "styled-components";
import { theme } from "@/styles";

export default function CenterTextBox() {
  return (
    <StyledTextContainer>
      <StyledTopTextWrapper>
        <StyledHeadline> WIR BRINGEN FRISCHEN WIND</StyledHeadline>
        <StyledTopText>
          Dakiekste ist ein kreatives Trio, das seit über zehn Jahren als Team
          zusammenarbeitet. Respekt und Empathie sind die Basis unserer Arbeit.
          Im engen Austausch mit unseren Kund*innen schaffen wir Bildwelten, die
          Menschen und ihre Geschichten in den Mittelpunkt stellen. Mit unserer
          Expertise in Fotografie, Videografie, Kommunikationsdesign und
          Webentwicklung bieten wir euch alles aus einer Hand. Wir lieben
          interdisziplinäre Zusammenarbeit und nutzen unser Netzwerk an
          3D-Artists, Produktdesigner*innen, Visagist*innen, Stylist*innen und
          vielen mehr.
        </StyledTopText>
      </StyledTopTextWrapper>
    </StyledTextContainer>
  );
}
const StyledTextContainer = styled.div`
  width: 100%;
  margin: 0;
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
`;

const StyledTopText = styled.p`
  font-size: ${theme.fontSizes.medium};
  font-weight: 300;
  line-height: 2rem;
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 0;
`;
