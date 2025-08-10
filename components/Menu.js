import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles";
import AugenIcon from "@/Icons/AugenIcon";

export default function Menu({ iconWidth = 45, color }) {
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

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const newAngle = calculateRotation(eyesRef.current, cursorPosition.x, cursorPosition.y);
    setRotation((prev) => getShortestAngle(prev, newAngle));
  }, [cursorPosition, calculateRotation, getShortestAngle]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Leistungen", href: "#services" },
    { label: "Workflow", href: "#workflow" },
    { label: "Team", href: "#team" },
    { label: "Studio", href: "#studio" },
    { label: "Kontakt", href: "#contact" },
    { label: "Preise", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <Wrapper ref={menuRef} $isOpen={menuOpen}>
      <MenuContainer $isOpen={menuOpen}>
        <LinkList $isOpen={menuOpen}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </LinkList>
      </MenuContainer>
      <EyesToggle $isOpen={menuOpen} onClick={toggleMenu}>
        <StyledIconWrapper ref={eyesRef} rotation={rotation}>
          <AugenIcon color={color} width={iconWidth} height={iconWidth} />
        </StyledIconWrapper>
        <StyledIconWrapper ref={eyesRef} rotation={rotation}>
          <AugenIcon color={color} width={iconWidth} height={iconWidth} />
        </StyledIconWrapper>
      </EyesToggle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: calc(1 * var(--spacing-s));
  right: 0;
  align-items: center;
  background-color: ${({ $isOpen }) => ($isOpen ? theme.color.beige : theme.color.green)};
  border-radius: calc(0.5 * ${theme.borderRadius}) 0 0 calc(0.5 * ${theme.borderRadius});

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: auto;
    border-radius: 0 0 calc(0.5 * (${theme.borderRadius})) calc(0.5 * (${theme.borderRadius}));
    top: -0.25rem;
    right: var(--side-padding);
    flex-direction: column-reverse;
    align-items: end;
    justify-content: center;
  }
`;

const EyesToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 var(--spacing-xs);
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: ${({ $isOpen }) => ($isOpen ? "none" : "flex")};
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  transform: rotate(${({ rotation }) => rotation}deg);
  transition: transform 0.3s ease;
  margin: 0 -0.9rem;
`;

const MenuContainer = styled.div`
  position: relative;
  transition: all 0.3s ease;
`;

const LinkList = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: row;

  gap: var(--spacing-xl);
  list-style: none;
  padding: 0 var(--spacing-xl);
  margin: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: calc(1.5 * var(--spacing-xl));
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
