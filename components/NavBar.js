import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles";
import DakieksteLogo from "@/Icons/DakieksteLogo";
import EyeAnimation from "./EyeAnimation";

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      setScrollY((prevScrollY) => Math.max(0, prevScrollY + e.deltaY)); // Scroll-Position auf Basis des deltaY-Werts aktualisieren
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // For Debugging
  // useEffect(() => {
  //   console.log(scrollY);
  // }, [scrollY]);

  return (
    <StyledNavBar $scrollY={scrollY}>
      <Link href="/">
        <StyledLogoWrapper color={scrollY > 200 ? theme.color.beige : theme.color.dark}>
          <DakieksteLogo
            color={scrollY > 200 ? theme.color.dark : theme.color.beige}
            transition="color 0.5s ease"
          />
        </StyledLogoWrapper>
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
  height: 4rem;
  width: 100%;
  z-index: 100;

  background-color: ${({ $scrollY }) => ($scrollY > 200 ? theme.color.beige : "transparent")};

  transition: background-color 0.5s ease;
`;

const StyledLogoWrapper = styled.div`
  margin-left: 2.6rem; //eigentlich 4rem aber wegen space um svg -1.4rem weniger
`;
