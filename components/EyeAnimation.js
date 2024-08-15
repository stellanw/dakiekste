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

  const rotation = calculateRotation(
    eyesRef.current,
    cursorPosition.x,
    cursorPosition.y
  );

  return (
    <StyledIconsWrapper>
      <StyledIconWrapper
        ref={eyesRef}
        animationActive={animationActive}
        rotation={rotation}
      >
        <AugenIcon color={color} />
      </StyledIconWrapper>
      <StyledIconWrapper
        ref={eyesRef}
        animationActive={animationActive}
        rotation={rotation}
      >
        <AugenIcon color={color} />
      </StyledIconWrapper>
    </StyledIconsWrapper>
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
  padding-right: ${theme.spacing.l};
  &:hover {
    transform: scale(1.1); /* Scale up the SVG icon slightly on hover */
  }
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
