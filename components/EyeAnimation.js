import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { theme } from "@/styles";
import AugenIcon from "@/Icons/AugenIcon";

export default function EyeAnimation({ color, iconWidth }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const eyesRef = useRef(null);

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
    angle -= 45; // Apply your additional adjustment here

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

  const rotation = calculateRotation(eyesRef.current, cursorPosition.x, cursorPosition.y);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <EyeAnimationContainer onClick={toggleMenu} color={color}>
      {/* <h4>menu »</h4> */}

      <Eyes>
        <StyledIconWrapper ref={eyesRef} animationActive={animationActive} rotation={rotation}>
          <AugenIcon color={color} width={iconWidth} height={iconWidth} style={{ transition: "width 5s ease, height 5s ease" }} />
        </StyledIconWrapper>
        <StyledIconWrapper ref={eyesRef} animationActive={animationActive} rotation={rotation}>
          <AugenIcon color={color} width={iconWidth} height={iconWidth} style={{ transition: "width 5s ease, height 5s ease" }} />
        </StyledIconWrapper>
      </Eyes>

      {menuOpen && (
        <StyledMenu>
          <LinkList>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#pricing">Preise</Link>
            </li>
            <li>
              <Link href="#services">Leistungen</Link>
            </li>
            <li>
              <Link href="#workflow">Workflow</Link>
            </li>
            <li>
              <Link href="#team">Team</Link>
            </li>
            <li>
              <Link href="#studio">Studio</Link>
            </li>
            <li>
              <Link href="#faq">faq</Link>
            </li>
            <li>
              <Link href="#contact">Kontakt</Link>
            </li>
          </LinkList>
        </StyledMenu>
      )}
    </EyeAnimationContainer>
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

const Eyes = styled.div`
  display: flex;
`;

const EyeAnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  h4 {
    padding: 0 2rem 0 0;
    color: ${({ color }) => color};
    transition: color 0.5s ease;
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 15;
  margin: 0 -1.7rem;
  @media (max-width: 750px) {
    margin: 0 -1.7rem;
  }
  transform: rotate(${({ rotation }) => rotation}deg);
  transition: transform 0.5s ease;
  transform: scaleX(-1);
  ${({ animationActive, rotation }) =>
    animationActive
      ? css`
          animation: ${rotateAnimation} 0.8s linear forwards;
        `
      : css`
          transform: rotate(${rotation}deg);
        `}
`;

const StyledMenu = styled.div`
  position: absolute;
  z-index: 0;
  background-color: ${theme.color.green};
  padding: ${theme.spacing.xxl};
  border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
  top: -2.2rem;
  right: calc(${theme.spacing.desktop.side} - 1.5rem);
  @media (max-width: 750px) {
    right: calc(${theme.spacing.mobile.side} - 1.5rem);
    padding: ${theme.spacing.m} ${theme.spacing.l};
  }
  a {
    display: block;
    padding: ${theme.spacing.m} 0;
    font-size: ${theme.fontSizes.m};
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: ${theme.color.beige};
    }

    @media (max-width: 750px) {
      font-size: ${theme.fontSizes.xs};
      padding: ${theme.spacing.s} 0;
    }
  }
`;

const LinkList = styled.ul`
  padding-top: ${theme.spacing.xxxl};
  @media (max-width: 750px) {
    padding-top: ${theme.spacing.xxl};
  }
`;
