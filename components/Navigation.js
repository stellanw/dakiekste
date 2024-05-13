import React, { useState } from "react";
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { theme } from "@/styles";
import AugenIcon from "./Icons/AugenIcon";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setAnimationActive(!menuOpen);
  };

  return (
    <StyledNavigation menuOpen={menuOpen}>
      <StyledMenuToggle onClick={handleMenuToggle}>
        <StyledIconsWrapper>
          <StyledIconWrapper animationActive={animationActive}>
            <AugenIcon />
          </StyledIconWrapper>
          <StyledIconWrapper animationActive={animationActive}>
            <AugenIcon />
          </StyledIconWrapper>
        </StyledIconsWrapper>
      </StyledMenuToggle>
      <StyledUl>
        <StyledNavButton>
          <StyledLink href="/">home</StyledLink>
        </StyledNavButton>
        <StyledNavButton>
          <StyledLink href="/portfolio">portfolio</StyledLink>
        </StyledNavButton>
        <StyledNavButton>
          <StyledLink href="/klubstudio">studio</StyledLink>
        </StyledNavButton>
        <StyledNavButton>
          <StyledLink href="/preise">preise</StyledLink>
        </StyledNavButton>
      </StyledUl>
    </StyledNavigation>
  );
}

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-10deg);
  }
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.3rem;
  &:hover {
    transform: scale(1.1); /* Scale up the SVG icon slightly on hover */
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  position: fixed;
  right: ${({ menuOpen }) => (!menuOpen ? "-18.5rem" : "-2px")};
  top: 0.5rem;
  width: 350px;
  height: 50px;
  background-color: white;
  box-shadow: 10px 0 5px 50% black;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  transition: right 0.5s ease; /* Transition for menu animation */
  background-color: ${theme.primaryColor};
  color: white;
  z-index: 100;
`;

const StyledMenuToggle = styled.div`
  margin: auto;
  cursor: pointer;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.1rem;
  transition: transform 0.5s ease;
  transform: scaleX(-1);

  ${({ animationActive }) =>
    animationActive &&
    css`
      animation: ${rotateAnimation} 0.8s linear forwards;
    `}
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  flex-shrink: 1;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: 1rem;
  padding-right: 0.1rem;
  padding-left: 0.1rem;
  padding-bottom: 1rem;
  gap: 0.6rem;
`;

const StyledNavButton = styled.li`
  font-size: 0.9rem;
  font-family: "Bricolage Grotesque", sans-serif;
  &:hover {
    font-size: 1rem;
    transition: font-size 0.3s ease;
  }
`;

const StyledLink = styled(Link)`
  color: white;
`;
