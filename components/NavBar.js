import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles";
import DakieksteLogo from "@/Icons/DakieksteLogo";
import Menu from "./Menu";

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0); // Zustand für die Fensterbreite
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verzögerung, bevor das Icon angezeigt wird
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // 200ms Verzögerung

    return () => clearTimeout(timeout); // Aufräumen des Timers
  }, [windowWidth]); // Abhängig von der Fensterbreite

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Aktualisiert die Fensterbreite beim Resize
    };

    // Initiales Setzen der Fensterbreite nach dem Laden
    setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize); // Resize-Event hinzufügen

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize); // Clean-up
    };
  }, []); // Nur beim ersten Rendern und bei Resize

  const logoWidth = windowWidth > 1100 ? 200 : windowWidth > 750 ? 200 : 125; // Dynamische Breite basierend auf der Fenstergröße
  const iconWidth = windowWidth < 750 ? 45 : windowWidth < 1100 ? 45 : 45;
  return (
    <>
      {isVisible && (
        <StyledNavBar $scrollY={scrollY}>
          <Link href="/">
            <DakieksteLogo color={scrollY > 200 ? theme.color.dark : theme.color.dark} transition="color 0.5s ease" width={logoWidth} />
          </Link>
          <Menu color={scrollY > 200 ? theme.color.dark : theme.color.dark} transition="background-color 0.5s ease" iconWidth={iconWidth} />
        </StyledNavBar>
      )}
    </>
  );
}

const StyledNavBar = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  height: ${theme.spacing.xxl};
  width: 100%;
  z-index: 100;
  background-color: ${({ $scrollY }) => ($scrollY > 200 ? theme.color.beige : "transparent")};

  transition: background-color 0.5s ease, opacity 10s ease;
  opacity: ${({ isVisible }) => (isVisible ? 0 : 1)};
  padding: 0 ${theme.spacing.mobile.side};

  @media (min-width: 750px) {
    padding: 0 ${theme.spacing.tablet.side};
  }

  @media (min-width: 1100px) {
    padding: 0 ${theme.spacing.desktop.side};
  }
`;
