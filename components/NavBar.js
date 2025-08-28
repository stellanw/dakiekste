import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles";
import DakieksteLogo from "@/Icons/DakieksteLogo";
import Menu from "./Menu";

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);

    setWindowWidth(window.innerWidth);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoWidth = windowWidth > parseInt(theme.breakpoints.desktop) ? 200 : 125;
  const iconWidth = 45;

  return (
    <>
      {isVisible && (
        <StyledNavBar $scrollY={scrollY} isVisible={isVisible}>
          <Link href="/">
            <DakieksteLogo color={theme.color.beige} transition="color 0.5s ease" width={logoWidth} />
          </Link>
          <Menu color={theme.color.dark} transition="background-color 0.5s ease" iconWidth={iconWidth} />
        </StyledNavBar>
      )}
    </>
  );
}

const StyledNavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  z-index: 100;

  display: flex;
  align-items: center;
  padding: 0 var(--side-padding);

  background-color: transparent;
  transition:
    background-color 0.5s ease,
    opacity 10s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  /* >> entscheidend: Klicks durchlassen, außer auf die Kinder */
  pointer-events: none;
  & > * {
    pointer-events: auto;
  }
`;
