import styled from "styled-components";
import { theme } from "@/styles";
import LogoCarousel from "./LogoCarousel";

export default function HeadTextBox() {
  return (
    <StyledTextContainer>
      <StyledTopTextWrapper>
        <StyledHeadline>Personal Branding fotografie</StyledHeadline>
        <StyledTopText>
          Wir machen deine Marke sichtbar und bringen deine Werte und Persönlichkeit visuell auf den
          Punkt – mit modernen Ideen und frischen Ansätzen.
        </StyledTopText>
      </StyledTopTextWrapper>
      <LogoCarousel />
    </StyledTextContainer>
  );
}
const StyledTextContainer = styled.div`
  width: 100%;
  margin-top: 1.8rem; // Warum margin nötig??? Warum nicht abschließend mit header?
  padding: ${theme.spacing.xxxxl} ${theme.spacing.ml} ${theme.spacing.xxxxl} ${theme.spacing.ml};
  background-color: ${theme.secondaryColorBeige};
  overflow: hidden;
`;

const StyledHeadline = styled.h1`
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 0.09rem;
  font-size: ${theme.fontSizes.xxxs};

  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.xss};
  }
  @media (min-width: 1100px) {
    font-size: ${theme.fontSizes.xs};
  }
`;

const StyledTopTextWrapper = styled.div`
  min-width: auto;
  max-width: 800px;
  padding: 0 0 ${theme.spacing.xxxl} 0;
  margin: auto;
  text-align: center;
  overflow: hidden;
`;

const StyledTopText = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: 300;
  line-height: ${theme.lineHeight.xxl};
  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.m};
  }
  @media (min-width: 1100px) {
    font-size: ${theme.fontSizes.l};
  }
`;
