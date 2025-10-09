import styled from "styled-components";
import { theme } from "@/styles";
import LogoCarousel from "./LogoCarousel";
import { useState, useEffect } from "react";

export default function Hero({ headline, text, textMobile }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bpToPx = (bp) => (typeof bp === "string" && bp.endsWith("rem") ? parseFloat(bp) * 16 : parseInt(bp, 10));

  const desktopBpPx = bpToPx(theme.breakpoints.desktop);

  const isMobileOrTablet = windowWidth < desktopBpPx;

  return (
    <StyledHeadBoxContainer>
      <StyledTopTextWrapper>
        <h2>{headline}</h2>
        <h4>{isMobileOrTablet ? textMobile || text : text}</h4>
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
  padding: calc(1.25 * var(--spacing-xxxl)) var(--side-padding);
`;

const StyledTopTextWrapper = styled.div`
  margin: auto;
  text-align: center;
  overflow: hidden;
  padding-bottom: var(--spacing-xl);

  max-width: 600px;
  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 1200px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-bottom: var(--spacing-xxl);
  }
`;
