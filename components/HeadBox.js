import styled from "styled-components";
import { theme } from "@/styles";
import LogoCarousel from "./LogoCarousel";

export default function HeadBox({ headline, text }) {
  return (
    <StyledHeadBoxContainer>
      <StyledTopTextWrapper>
        <h1>{headline}</h1>
        <p>{text}</p>
      </StyledTopTextWrapper>
      <LogoCarousel />
    </StyledHeadBoxContainer>
  );
}
const StyledHeadBoxContainer = styled.div`
  width: 100%;
  margin-top: 1.8rem; // Warum margin nötig??? Warum nicht abschließend mit header?
  padding: ${theme.spacing.xxxxl} ${theme.spacing.ml} ${theme.spacing.xxxxl} ${theme.spacing.ml};
  background-color: ${theme.color.beige};
  overflow: hidden;

  h1 {
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
  }
  p {
    font-size: ${theme.fontSizes.s};
    font-weight: 300;
    line-height: ${theme.lineHeight.xxl};
    @media (min-width: 750px) {
      font-size: ${theme.fontSizes.m};
    }
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.l};
    }
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
