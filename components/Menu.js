import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { theme } from "@/styles";
import AugenIcon from "@/Icons/AugenIcon";

export default function Menu({ color, iconWidth }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  const eyesRef = useRef(null);
  const menuRef = useRef(null);

  // Cursor tracking
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Augen rotation
  useEffect(() => {
    const newAngle = calculateRotation(eyesRef.current, cursorPosition.x, cursorPosition.y);
    setRotation((prev) => getShortestAngle(prev, newAngle));
  }, [cursorPosition]);

  const calculateRotation = (element, cursorX, cursorY) => {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const dx = cursorX - (rect.left + rect.width / 2);
    const dy = cursorY - (rect.top + rect.height / 2);
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    angle -= 35;
    return normalizeAngle(angle);
  };

  const normalizeAngle = (angle) => ((angle + 180) % 360) - 180;
  const getShortestAngle = (from, to) => from + normalizeAngle(to - from);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Leistungen", href: "#services" },
    { label: "Workflow", href: "#workflow" },
    { label: "About", href: "#team" },
    { label: "Studio", href: "#studio" },
    { label: "Preise", href: "#pricing" },
    { label: "Kontakt", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <MenuContainer ref={menuRef} $isOpen={menuOpen}>
      <Eyes $isOpen={menuOpen} onClick={toggleMenu}>
        <StyledIconWrapper ref={eyesRef} rotation={rotation}>
          <AugenIcon color={color} width={iconWidth} height={iconWidth} />
        </StyledIconWrapper>
        <StyledIconWrapper ref={eyesRef} rotation={rotation}>
          <AugenIcon color={color} width={iconWidth} height={iconWidth} />
        </StyledIconWrapper>
      </Eyes>
      <LinkList $isOpen={menuOpen}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.label === "Home" ? "/" : `/${item.href}`}>{item.label}</Link>
          </li>
        ))}
      </LinkList>
    </MenuContainer>
  );
}

const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-30deg); }
`;

const Eyes = styled.div`
  display: flex;
  padding-left: var(--spacing-xs);
  justify-content: center;
  align-items: center;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    justify-content: end;
    transform: padding-right 0.7 ease;
    padding-right: ${({ $isOpen }) => ($isOpen ? `1.45rem` : `2.2rem`)};
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  display: flex;
  flex-direction: row;
  padding: 0 var(--spacing-xl) 0 0;
  height: 3rem;
  background-color: ${({ $isOpen }) => ($isOpen ? theme.color.beige : theme.color.green)};
  border-radius: calc(0.5 * (${theme.borderRadius})) 0 0 calc(0.5 * (${theme.borderRadius}));
  z-index: 100;

  transition: width 0.6s ease-out, transform 0.6s ease-in;
  width: ${({ $isOpen }) => ($isOpen ? "45rem" : "0")};
  &:hover {
    color: ${({ $isOpen }) => ($isOpen ? theme.color.green : theme.color.beige)};
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    transition: width 0.3s ease-out, transform 0.3s ease-in;
    width: ${({ $isOpen }) => ($isOpen ? "6rem" : "3rem")};
    transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(calc(-100% + 3rem))")};
    height: auto;
    border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
    top: 0;
    right: var(--spacing-xs);
    padding: ${({ $isOpen }) => ($isOpen ? "0 var(--spacing-s)" : "0")};
    flex-direction: column-reverse;
    align-items: end;
    justify-content: center;
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;

  z-index: 15;
  margin: 0 -0.95rem;
  transform: rotate(${({ rotation }) => rotation}deg);
  transition: transform 0.5s ease;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: var(--spacing-s);
  margin: var(--spacing-l) 0 var(--spacing-xs) 0;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: none;
  text-align: end;
  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: var(--spacing-m);
    flex-direction: row;
    margin: 0 0 0 var(--spacing-l);
    align-items: center;
  }

  li {
    line-height: 0.5rem;
  }
  li a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${theme.color.dark};
    font-size: var(--font-xs);
    &:hover {
      color: ${theme.color.green};
    }
  }
`;
