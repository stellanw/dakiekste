import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { theme } from "@/styles";
import AugenIcon from "@/Icons/AugenIcon";

export default function Menu({ color, iconWidth }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  const eyesRef = useRef(null);
  const menuRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const normalizeAngle = (angle) => {
    return ((angle + 180) % 360) - 180;
  };

  const getShortestAngle = (from, to) => {
    const diff = normalizeAngle(to - from);
    return from + diff;
  };

  useEffect(() => {
    const newAngle = calculateRotation(eyesRef.current, cursorPosition.x, cursorPosition.y);
    setRotation((prev) => getShortestAngle(prev, newAngle));
  }, [cursorPosition]);

  const calculateRotation = (element, cursorX, cursorY) => {
    if (!element || typeof window === "undefined") return 0;

    const rect = element.getBoundingClientRect();
    const elementX = rect.left + rect.width / 2;
    const elementY = rect.top + rect.height / 2;

    const dx = cursorX - elementX;
    const dy = cursorY - elementY;

    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    angle -= 45;
    angle = normalizeAngle(angle);

    if (angle > -60 && angle < 60) {
      return 0;
    }

    return angle;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MenuContainer ref={menuRef} color={color} $isOpen={menuOpen}>
      <Eyes $isOpen={menuOpen} onClick={toggleMenu}>
        <StyledIconWrapper ref={eyesRef} animationActive={animationActive} rotation={rotation}>
          <AugenIcon color={color} width={iconWidth} height={iconWidth} style={{ transition: "width 5s ease, height 5s ease" }} />
        </StyledIconWrapper>
        <StyledIconWrapper ref={eyesRef} animationActive={animationActive} rotation={rotation}>
          <AugenIcon color={color} width={iconWidth} height={iconWidth} style={{ transition: "width 5s ease, height 5s ease" }} />
        </StyledIconWrapper>
      </Eyes>
      <LinkList $isOpen={menuOpen}>
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
    </MenuContainer>
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
  padding-left: ${theme.spacing.xs};
`;

const MenuContainer = styled.div`
  position: absolute;
  top: ${theme.spacing.xs};
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.color.beige};
  border-radius: ${theme.borderRadius} 0 0 ${theme.borderRadius};
  padding: ${theme.spacing.xxs} ${theme.spacing.l};
  z-index: 100;

  transition: transform 1s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(calc(100% - 4rem))")};

  @media (max-width: 750px) {
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(calc(100% - 1.7rem))")};
  }

  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      &:hover {
        background-color: ${theme.color.green};
      }
    `}
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

const LinkList = styled.ul`
  display: flex;
  gap: ${theme.spacing.l};
  margin-left: ${theme.spacing.l};

  li a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${theme.fontSizes.s};
    color: ${theme.color.dark};

    &:hover {
      color: ${theme.color.green};
    }
  }
`;
