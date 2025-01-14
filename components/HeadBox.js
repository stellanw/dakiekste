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
  padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl} ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  background-color: ${theme.color.beige};
  overflow: hidden;

  p {
    font-size: ${theme.fontSizes.m};
    font-weight: 300;
    line-height: ${theme.lineHeight.l};
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
  min-width: auto;
  max-width: 800px;
  padding: 0 0 ${theme.spacing.xxxl} 0;
  margin: auto;
  text-align: center;
  overflow: hidden;
`;
