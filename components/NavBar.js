import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles";
import DakieksteLogo from "@/Icons/DakieksteLogo";
import EyeAnimation from "./EyeAnimation";

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  ); // Zustand für die Fensterbreite

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrollY(window.scrollY);
      }
    };

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth); // Aktualisiert die Fensterbreite beim Resize
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize); // Resize-Event hinzufügen

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize); // Clean-up
    };
  }, []);

  const logoWidth = windowWidth > 1100 ? 220 : windowWidth > 750 ? 180 : 150; // Dynamische Breite basierend auf der Fenstergröße

  return (
    <StyledNavBar $scrollY={scrollY}>
      <Link href="/">
        <DakieksteLogo
          color={scrollY > 200 ? theme.color.dark : theme.color.beige}
          transition="color 0.5s ease"
          width={logoWidth}
        />
      </Link>
      <EyeAnimation
        color={scrollY > 200 ? theme.color.dark : theme.color.beige}
        transition="background-color 0.5s ease"
      />
    </StyledNavBar>
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

  transition: background-color 0.5s ease;
  padding: 0 ${theme.spacing.xl} 0 ${theme.spacing.xl};
  @media (min-width: 750px) {
    padding: 0 ${theme.spacing.xxl} 0 ${theme.spacing.xxl};
  }
  @media (min-width: 1100px) {
    padding: 0 ${theme.spacing.xxl} 0 ${theme.spacing.xxl};
  }
`;
