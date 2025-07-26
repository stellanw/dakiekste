import { useState, useEffect, useRef, useCallback } from "react";
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

  const normalizeAngle = (angle) => ((angle + 180) % 360) - 180;

  const getShortestAngle = useCallback((from, to) => {
    return from + normalizeAngle(to - from);
  }, []);

  const calculateRotation = useCallback((element, cursorX, cursorY) => {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const dx = cursorX - (rect.left + rect.width / 2);
    const dy = cursorY - (rect.top + rect.height / 2);
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    angle -= 35;
    return normalizeAngle(angle);
  }, []);

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
  }, [cursorPosition, calculateRotation, getShortestAngle]);

  // Toggle-Funktion
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
  padding: 0 var(--spacing-m);
  align-items: center;
  justify-content: end;
  width: 1rem;
  padding-right: ${({ $isOpen }) => ($isOpen ? `0` : `0.5rem`)};
  @media (min-width: ${theme.breakpoints.tablet}) {
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
    transform: ${({ $isOpen }) => ($isOpen ? `0` : `0.5rem`)};
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    justify-content: center;
    /* transform: translateX(1rem); */
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

  transition: width 0.3s ease-out, transform 0.3s ease-in;

  &:hover {
    color: ${({ $isOpen }) => ($isOpen ? theme.color.green : theme.color.beige)};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: ${({ $isOpen }) => ($isOpen ? "70%" : "0")};
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: ${({ $isOpen }) => ($isOpen ? "95%" : "0")};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    transition: width 0.3s ease-out, transform 0.3s ease-in;
    width: ${({ $isOpen }) => ($isOpen ? "50%" : "3rem")};
    transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(calc(-100% + 3rem))")};
    height: auto;
    border-radius: 0 0 calc(0.5 * (${theme.borderRadius})) calc(0.5 * (${theme.borderRadius}));
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
  transition: transform 0.3s ease;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: var(--spacing-s);
  margin: var(--spacing-l) 0 var(--spacing-xs) 0;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: none;
  text-align: end;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: var(--spacing-m);
    flex-direction: row;
    margin: 0 0 0 var(--spacing-xl);

    align-items: center;
    justify-content: space-evenly;
  }

  li {
    line-height: 1.5rem;
  }
  li a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${theme.color.dark};
    font-size: var(--font-s);
    &:hover {
      color: ${theme.color.green};
    }
  }
`;
