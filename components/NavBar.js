import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles";
import DakieksteLogoWhite from "@/Icons/DakieksteLogoWhite";
import EyeAnimation from "./EyeAnimation";
import DakieksteLogoBlack from "@/Icons/DakieksteLogoBlack";

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    setScrollY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {}, [scrollY]);

  return (
    <StyledNavBar $scrollY={scrollY}>
      <Link href="/">
        <StyledLogoWrapper>
          {scrollY > 100 ? <DakieksteLogoBlack /> : <DakieksteLogoWhite />}
        </StyledLogoWrapper>
      </Link>
      <EyeAnimation color={scrollY > 100 ? theme.textColor : theme.secondaryColorBeige} />
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

  background-color: ${({ $scrollY }) =>
    $scrollY > 100 ? theme.secondaryColorBeige : "transparent"};

  transition: background-color 0.1s ease;
`;

const StyledLogoWrapper = styled.div`
  margin-left: 2.6rem; //eigentlich 4rem aber wegen space um svg -1.4rem weniger
`;

const StyledDakieksteLogoWhite = styled(DakieksteLogoWhite)`
  /* .cls-1,
  .cls-2 {
    stroke: ${({ color }) => color};
  }
  .cls-3 {
    fill: ${({ color }) => color};
  } */
`;
