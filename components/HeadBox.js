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
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.color.beige};
  overflow: hidden;
  padding: ${theme.spacing.mobile.height.xxl} ${theme.spacing.mobile.side};
  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.xxl} ${theme.spacing.tablet.side};
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.xxl} ${theme.spacing.desktop.side};
  }

  p {
    max-width: 1100px;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeight.l};
    font-weight: ${theme.fontWeight.lightBold};
    @media (min-width: 750px) {
      font-size: ${theme.fontSizes.m};
      line-height: ${theme.lineHeight.xl};
    }
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.l};
      line-height: ${theme.lineHeight.xxl};
    }

    @media (max-width: 750px) {
      br {
        display: none;
      }
    }
  }
`;

const StyledTopTextWrapper = styled.div`
  margin: auto;
  text-align: center;
  overflow: hidden;

  padding: 0 0 ${theme.spacing.mobile.height.xl} 0;
  @media (min-width: 750px) {
    padding: 0 0 ${theme.spacing.tablet.height.xl} 0;
  }
  @media (min-width: 1100px) {
    padding: 0 0 ${theme.spacing.desktop.height.xl} 0;
  }
`;
