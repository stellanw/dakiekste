import styled from "styled-components";
import { useState, useEffect } from "react";
import { theme } from "@/styles";
import Link from "next/link";
import DakieksteLogo from "@/Icons/DakieksteLogo";
import Menu from "./Menu";
import { FixedContainer } from "./FixedContainer";

export default function ServiceHeader({ topline, desktopH1, mobileH1, backgroundColor = theme.color.dark, logoColor = theme.color.beige, menuColor = theme.color.dark, iconWidth = 45, headlineColor = theme.color.beige, toplineColor }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabletBp = parseInt(theme.breakpoints.tablet, 10);
  const isMobile = mounted && windowWidth <= tabletBp;
  const logoWidth = windowWidth > parseInt(theme.breakpoints.desktop, 10) ? 160 : 120;

  return (
    <StyledHeadContainer $bg={backgroundColor}>
      <StyledLink href="/">
        <DakieksteLogo color={logoColor} transition="color 0.5s ease" width={logoWidth} />
      </StyledLink>

      <FixedContainer>
        <StyledMenu color={menuColor} transition="background-color 0.5s ease" iconWidth={iconWidth} />
      </FixedContainer>

      <StyledHeadlineContainer $headlineColor={headlineColor} $toplineColor={toplineColor}>
        {topline && <h2>{topline}</h2>}
        {desktopH1 && <h1>{isMobile ? mobileH1 || desktopH1 : desktopH1}</h1>}
      </StyledHeadlineContainer>
    </StyledHeadContainer>
  );
}

const StyledHeadContainer = styled.header`
  display: flex;
  position: relative;
  justify-content: start;
  align-items: end;
  width: 100%;
  overflow: hidden;
  height: var(--height-header);

  @media (min-width: ${theme.breakpoints.wide}) {
    height: calc(1.5 * var(--height-hero));
  }
  background-color: ${({ $bg }) => $bg};
`;

const StyledHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  bottom: var(--side-padding);
  left: var(--side-padding);
  padding-right: var(--side-padding);

  h1,
  h2 {
    margin: 0;
    text-transform: uppercase;

    br {
      display: none;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      br {
        display: block;
      }
    }
  }

  h1 {
    color: ${({ $headlineColor }) => $headlineColor};
  }

  h2 {
    color: ${({ $toplineColor, $headlineColor }) => $toplineColor || $headlineColor};
    opacity: 0.7;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: calc(0.75 * var(--side-padding));
  left: var(--side-padding);
  z-index: 5;
`;

const StyledMenu = styled(Menu)`
  position: fixed;
  top: var(--side-padding);
  right: var(--side-padding);
  z-index: 5000;
`;
