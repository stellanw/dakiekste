import styled from "styled-components";
import { theme } from "@/styles";
import LogoCarousel from "./LogoCarousel";

export default function HeadBox({ headline, text }) {
  return (
    <StyledHeadBoxContainer>
      <StyledTopTextWrapper>
        <h2>{headline}</h2>
        <p>{text}</p>
      </StyledTopTextWrapper>
      <LogoCarousel />
    </StyledHeadBoxContainer>
  );
}
const StyledHeadBoxContainer = styled.div`
  width: 100%;
  padding: ${theme.spacing.xxxl} ${theme.spacing.xl} ${theme.spacing.xxxl} ${theme.spacing.xl};
  background-color: ${theme.color.beige};
  overflow: hidden;

  @media (min-width: 750px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl} ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl} ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }

  p {
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeight.l};
    font-weight: 300;
    @media (min-width: 750px) {
      font-size: ${theme.fontSizes.l};
      line-height: ${theme.lineHeight.xl};
    }
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.xl};
      line-height: ${theme.lineHeight.xxl};
    }
  }
`;

const StyledTopTextWrapper = styled.div`
  padding: 0 0 ${theme.spacing.xxxl} 0;
  margin: auto;
  text-align: center;
  overflow: hidden;
  width: 100%;
  @media (min-width: 750px) {
    width: 100%;
  }
  @media (min-width: 1100px) {
    width: 70%;
  }
`;
