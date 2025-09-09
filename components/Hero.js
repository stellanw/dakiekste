import styled from "styled-components";
import { theme } from "@/styles";
import LogoCarousel from "./LogoCarousel";

export default function Hero({ headline, text }) {
  return (
    <StyledHeadBoxContainer>
      <StyledTopTextWrapper>
        <h2>{headline}</h2>
        <h4>{text}</h4>
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
  padding: var(--spacing-xxxl) var(--side-padding);
`;

const StyledTopTextWrapper = styled.div`
  margin: auto;
  text-align: center;
  overflow: hidden;
  padding-bottom: var(--spacing-xl);
  max-width: 1200px;
`;
