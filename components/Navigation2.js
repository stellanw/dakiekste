import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { theme } from "@/styles";
import AugenIcon from "@/Icons/AugenIcon";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setAnimationActive(!menuOpen);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const calculateRotation = (element, cursorX, cursorY) => {
    if (!element || typeof window === "undefined") {
      return 0;
    }
    const rect = element.getBoundingClientRect();
    const elementX = rect.left + rect.width / 2;
    const elementY = rect.top + rect.height / 2;
    const dx = cursorX - elementX;
    const dy = cursorY - elementY;

    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    angle -= 20; // Apply your additional adjustment here

    // Normalize the angle to stay within -180 to 180 range
    angle = ((angle + 180) % 360) - 180;

    // Ensure smooth transitions across the boundary from positive to negative angles
    if (angle > 180) {
      angle -= 360;
    } else if (angle < -180) {
      angle += 360;
    }

    // Restrict the range of movement to between 45 and 180 degrees
    if (angle < 45) {
      angle = 45;
    } else if (angle >= 180) {
      angle = 180;
    }

    return angle;
  };

  return (
    <StyledNavigation menuOpen={menuOpen}>
      <StyledMenuToggle onClick={handleMenuToggle}>
        <StyledIconsWrapper>
          <StyledIconWrapper
            ref={leftEyeRef}
            animationActive={animationActive}
            rotation={calculateRotation(
              leftEyeRef.current,
              cursorPosition.x,
              cursorPosition.y
            )}
          >
            <AugenIcon />
          </StyledIconWrapper>
          <StyledIconWrapper
            ref={rightEyeRef}
            animationActive={animationActive}
            rotation={calculateRotation(
              rightEyeRef.current,
              cursorPosition.x,
              cursorPosition.y
            )}
          >
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
    transform: rotate(-30deg);
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
  /* box-shadow: 4px 4px 0px 0px rgb(255, 255, 255, 50%); */
  /* border-bottom: solid white 1px; */
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
  ${({ animationActive, rotation }) =>
    animationActive &&
    css`
      animation: ${rotateAnimation} 0.8s linear forwards;
    `}
  transform: rotate(${({ rotation }) => rotation}deg);
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
