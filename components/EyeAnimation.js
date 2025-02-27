import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { theme } from "@/styles";
import AugenIcon from "@/Icons/AugenIcon";

export default function EyeAnimation({ color }) {
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

  const rotation = calculateRotation(eyesRef.current, cursorPosition.x, cursorPosition.y);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <EyeAnimationContainer onClick={toggleMenu} color={color}>
      {/* <h4>menu »</h4> */}
      <Eyes>
        <StyledIconWrapper ref={eyesRef} animationActive={animationActive} rotation={rotation}>
          <AugenIcon color={color} />
        </StyledIconWrapper>
        <StyledIconWrapper ref={eyesRef} animationActive={animationActive} rotation={rotation}>
          <AugenIcon color={color} />
        </StyledIconWrapper>
      </Eyes>
      {menuOpen && (
        <StyledMenu>
          <LinkList>
            <Link href="/">Home</Link>
            <Link href="#pricing">Preise</Link>
            <Link href="#services">Leistungen</Link>
            <Link href="#team">Team</Link>
            <Link href="#faq">faq</Link>
            <Link href="#contact">Kontakt</Link>
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
  transform: scale(0.6);

  @media (max-width: 750px) {
    transform: scale(0.4);
  }

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
  margin: 0 -1.85rem;
  transition: transform 0.5s ease;
  transform: scaleX(-1);
  ${({ animationActive, rotation }) =>
    animationActive &&
    css`
      animation: ${rotateAnimation} 0.8s linear forwards;
    `}
  transform: rotate(${({ rotation }) => rotation}deg);
`;

const StyledMenu = styled.div`
  position: absolute;
  z-index: 0;
  top: -2.2rem;
  right: -2.4rem;
  background-color: ${theme.color.green};
  padding: ${theme.spacing.xxl};
  border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  font-size: ${theme.fontSizes.xxl};
  a {
    display: block;
    padding: ${theme.spacing.m} 0;

    text-decoration: none;

    &:hover {
      color: ${theme.color.beige};
    }
  }
`;

const LinkList = styled.div`
  padding-top: ${theme.spacing.xxxl};
  a {
    text-transform: uppercase;
    font-size: ${theme.fontSizes.xl};
  }
`;
