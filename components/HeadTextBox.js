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
    </StyledTextContainer>
  );
}
const StyledTextContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  padding: 6rem 2rem 6rem 2rem;
  background-color: ${theme.secondaryColorBeige};
  overflow: hidden;
`;

const StyledHeadline = styled.h2`
  font-size: ${theme.fontSizes.xs};
  text-transform: uppercase;
`;

const StyledTopTextWrapper = styled.div`
  min-width: auto;
  max-width: 600px;
  padding: 0 0 8rem 0;
  margin: auto;
  text-align: center;
  overflow: hidden;
`;

const StyledTopText = styled.p`
  font-size: ${theme.fontSizes.medium};
  padding: 0.5rem 0 0 0;
  font-weight: 300;
`;
