import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles";
import AugenIcon from "@/Icons/AugenIcon";
import { PiX } from "react-icons/pi";

export default function Menu({ iconWidth = 13, color }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  const eyesRef = useRef(null);
  const menuRef = useRef(null);

  const normalizeAngle = (angle) => ((angle + 180) % 360) - 180;
  const getShortestAngle = useCallback((from, to) => from + normalizeAngle(to - from), []);
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
    const handleMouseMove = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const newAngle = calculateRotation(eyesRef.current, cursorPosition.x, cursorPosition.y);
    setRotation((prev) => getShortestAngle(prev, newAngle));
  }, [cursorPosition, calculateRotation, getShortestAngle]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((v) => !v);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Fotografie", href: "/fotografie" },
    { label: "Website", href: "/website" },
    { label: "Design", href: "/design" },
    { label: "Video", href: "/video" },
    { label: "Studio", href: "/studio" },
    { label: "Team", href: "/team" },
    { label: "Preise", href: "/preise" },
    { label: "FAQ", href: "/#faq" },
    { label: "Kontakt", href: "/contact" },
  ];

  return (
    <Wrapper ref={menuRef} $isOpen={menuOpen}>
      {menuOpen && (
        <CloseButton type="button" onClick={() => setMenuOpen(false)} aria-label="Menü schließen">
          <PiX />
        </CloseButton>
      )}

      <MenuContainer>
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

      <EyesToggle $isOpen={menuOpen} onClick={toggleMenu} aria-expanded={menuOpen}>
        <EyesAnchor ref={eyesRef} style={{ "--rot": `${rotation}deg` }}>
          <StyledIconWrapper>
            <AugenIcon color={color} width={iconWidth} height={iconWidth} />
          </StyledIconWrapper>
          <StyledIconWrapper>
            <AugenIcon color={color} width={iconWidth} height={iconWidth} />
          </StyledIconWrapper>
        </EyesAnchor>
      </EyesToggle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  position: fixed;
  top: var(--spacing-m);
  right: 0;
  align-items: center;
  background-color: ${theme.color.beige};
  border-radius: calc(0.5 * ${theme.borderRadius}) 0 0 calc(0.5 * ${theme.borderRadius});
  z-index: var(--index-menu);
  transition: background-color 120ms ease;
  padding: var(--spacing-s) 0;

  box-shadow:
    -4px 4px 4px rgba(37, 37, 34, 0.01),
    /* harte Kante, kein Blur */ 1px 0 20px rgba(0, 0, 0, 0.06),
    /* feine Seitenkante rechts */ -1px 0 0 rgba(0, 0, 0, 0.06); /* feine Seitenkante links */

  &:hover {
    transform: translateY(-1px);
    background-color: ${({ $isOpen }) => (!$isOpen ? theme.color.green : theme.color.beige)};
  }

  &:active {
    transform: translateY(0);
    background-color: ${({ $isOpen }) => (!$isOpen ? theme.color.green : theme.color.beige)};
  }

  :root.overlay-open & {
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    align-items: end;
    justify-content: center;
    right: 0;
    /* padding: var(--spacing-l) 0; */
    top: calc(1 * var(--spacing-l));
    padding: calc(1.5 * var(--spacing-m)) 0;
    transform: none;
    transition: background-color 100ms ease;

    &:hover,
    &:active {
      transform: none;
    }
  }

  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  @media (hover: none), (pointer: coarse) {
    &:focus,
    &:focus-within {
      outline: none;
      box-shadow: none;
    }
  }
`;

const EyesToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 var(--spacing-s);

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? "none" : "flex")};
    padding: 0 calc(1.2 * var(--spacing-m));
  }

  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  @media (hover: none), (pointer: coarse) {
    &:focus,
    &:focus-within {
      outline: none;
      box-shadow: none;
    }
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  transform: rotate(var(--rot, 0deg));
  transition: transform 120ms ease;
  margin: 0;
`;

const MenuContainer = styled.div`
  position: relative;
`;

const LinkList = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: row;
  gap: var(--spacing-m);
  list-style: none;
  padding: 0 var(--spacing-m);
  margin: 0;
  line-height: 1 !important;
  margin-bottom: -2px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: var(--spacing-xl);
    gap: var(--spacing-l);
  }

  li a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${theme.color.dark};
    font-size: var(--font-s);
    -webkit-tap-highlight-color: transparent;

    &:hover {
      color: ${theme.color.green};
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  display: none;
  z-index: var(--index-menu-content);
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: inline-flex;
  }

  top: 10px;
  right: 10px;

  width: 32px;
  height: 32px;
  border: none;

  align-items: center;
  justify-content: center;

  background: none;
  color: ${theme.color.dark};
  cursor: pointer;

  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  touch-action: manipulation;

  transition:
    transform 100ms ease,
    color 120ms ease;

  &:hover {
    color: ${theme.color.green};
  }
  &:active {
    transform: scale(0.96);
    color: ${theme.color.green};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const EyesAnchor = styled.div`
  display: flex;
`;
