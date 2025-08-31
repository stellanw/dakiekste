import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles";
import AugenIcon from "@/Icons/AugenIcon";
import { PiX } from "react-icons/pi";

export default function Menu({ iconWidth = 45, color }) {
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
    { label: "Preise", href: "#pricing" },
    { label: "Leistungen", href: "#services" },
    { label: "Workflow", href: "#workflow" },
    { label: "Team", href: "#team" },
    { label: "Studio", href: "#studio" },
    { label: "Kontakt", href: "#contact" },
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
        <EyesAnchor ref={eyesRef}>
          <StyledIconWrapper rotation={rotation}>
            <AugenIcon color={color} width={iconWidth} height={iconWidth} />
          </StyledIconWrapper>
          <StyledIconWrapper rotation={rotation}>
            <AugenIcon color={color} width={iconWidth} height={iconWidth} />
          </StyledIconWrapper>
        </EyesAnchor>
      </EyesToggle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: calc(1 * var(--spacing-s));
  right: -6px;
  align-items: center;
  background-color: ${theme.color.beige};
  border-radius: calc(0.5 * ${theme.borderRadius}) 0 0 calc(0.5 * ${theme.borderRadius});
  padding: calc(0.5 * var(--spacing-xs)) 0;
  outline: 1px solid ${theme.color.dark};

  transition:
    border-radius 160ms cubic-bezier(0.2, 0.8, 0.2, 1),
    background-color 120ms ease,
    transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    border-radius: calc(1 * ${theme.borderRadius}) 0 0 calc(1 * ${theme.borderRadius});
    transform: translateY(-1px);
    background-color: ${({ $isOpen }) => (!$isOpen ? theme.color.green : theme.color.beige)};
  }

  &:active {
    border-radius: calc(1.5 * ${theme.borderRadius}) 0 0 calc(1.5 * ${theme.borderRadius});
    transform: translateY(0);
    background-color: ${({ $isOpen }) => (!$isOpen ? theme.color.green : theme.color.beige)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column-reverse;
    align-items: end;
    justify-content: center;
    right: -8px;
    padding: var(--spacing-xs);
    top: calc(1.8 * var(--spacing-s));

    /* wichtig: kein Scale/Transform auf Mobile, damit Schließen sofort ist */
    transform: none;
    transition:
      border-radius 140ms cubic-bezier(0.2, 0.8, 0.2, 1),
      background-color 100ms ease;

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

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: ${({ $isOpen }) => ($isOpen ? "none" : "flex")};
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
  transform: rotate(${({ rotation }) => rotation}deg);
  transition: transform 120ms ease;
  margin: 0 -0.9rem;
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

  @media (max-width: ${theme.breakpoints.mobile}) {
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

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: inline-flex;
  }

  top: 10px;
  right: 10px;
  z-index: 1000;

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
    width: 18px;
    height: 18px;
  }
`;

const EyesAnchor = styled.div`
  display: flex;
`;

// import { useState, useEffect, useRef, useCallback } from "react";
// import Link from "next/link";
// import styled from "styled-components";
// import { theme } from "@/styles";
// import AugenIcon from "@/Icons/AugenIcon";
// import { PiX } from "react-icons/pi";

// export default function Menu({ iconWidth = 45, color }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [rotation, setRotation] = useState(0);

//   const eyesRef = useRef(null);
//   const menuRef = useRef(null);

//   const normalizeAngle = (angle) => ((angle + 180) % 360) - 180;

//   const getShortestAngle = useCallback((from, to) => {
//     return from + normalizeAngle(to - from);
//   }, []);

//   const calculateRotation = useCallback((element, cursorX, cursorY) => {
//     if (!element) return 0;
//     const rect = element.getBoundingClientRect();
//     const dx = cursorX - (rect.left + rect.width / 2);
//     const dy = cursorY - (rect.top + rect.height / 2);
//     let angle = Math.atan2(dy, dx) * (180 / Math.PI);
//     angle -= 35;
//     return normalizeAngle(angle);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setCursorPosition({ x: event.clientX, y: event.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const newAngle = calculateRotation(eyesRef.current, cursorPosition.x, cursorPosition.y);
//     setRotation((prev) => getShortestAngle(prev, newAngle));
//   }, [cursorPosition, calculateRotation, getShortestAngle]);

//   useEffect(() => {
//     if (!menuOpen) return;
//     const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [menuOpen]);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const menuItems = [
//     { label: "Home", href: "/" },
//     { label: "Preise", href: "#pricing" },
//     { label: "Leistungen", href: "#services" },
//     { label: "Workflow", href: "#workflow" },
//     { label: "Team", href: "#team" },
//     { label: "Studio", href: "#studio" },
//     { label: "Kontakt", href: "#contact" },

//     // { label: "FAQ", href: "#faq" },
//   ];

//   return (
//     <Wrapper ref={menuRef} $isOpen={menuOpen}>
//       {menuOpen && (
//         <CloseButton type="button" onClick={() => setMenuOpen(false)} aria-label="Menü schließen">
//           <PiX />
//         </CloseButton>
//       )}
//       <MenuContainer $isOpen={menuOpen}>
//         <LinkList $isOpen={menuOpen}>
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <Link href={item.href} onClick={() => setMenuOpen(false)}>
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </LinkList>
//       </MenuContainer>
//       <EyesToggle $isOpen={menuOpen} onClick={toggleMenu}>
//         <StyledIconWrapper ref={eyesRef} rotation={rotation}>
//           <AugenIcon color={color} width={iconWidth} height={iconWidth} />
//         </StyledIconWrapper>
//         <StyledIconWrapper ref={eyesRef} rotation={rotation}>
//           <AugenIcon color={color} width={iconWidth} height={iconWidth} />
//         </StyledIconWrapper>
//       </EyesToggle>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   display: flex;
//   position: fixed;
//   top: calc(1 * var(--spacing-s));
//   right: -6px;
//   align-items: center;
//   /* background-color: ${({ $isOpen }) => ($isOpen ? theme.color.beige : theme.color.green)}; */
//   background-color: ${theme.color.beige};
//   border-radius: ${({ $isOpen }) => ($isOpen ? `calc(0.5 * ${theme.borderRadius}) 0 0 calc(0.5 * ${theme.borderRadius})` : `calc(0.5 * ${theme.borderRadius}) 0 0 calc(0.5 * ${theme.borderRadius})`)};
//   padding: calc(0.5 * var(--spacing-xs)) 0;

//   outline: 1px solid ${theme.color.dark};

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     height: auto;
//     flex-direction: column-reverse;
//     align-items: end;
//     justify-content: center;
//     right: -8px;
//     padding: var(--spacing-xs);
//     top: calc(1.8 * var(--spacing-s));
//     transform: scale(0.8);
//   }

//   transition:
//     border-radius 320ms cubic-bezier(0.2, 0.8, 0.2, 1),
//     background-color 200ms ease,
//     transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);

//   &:hover {
//     border-radius: calc(1 * ${theme.borderRadius}) 0 0 calc(1 * ${theme.borderRadius});
//     transform: translateY(-1px);
//     background-color: ${({ $isOpen }) => ($isOpen ? theme.color.beige : theme.color.green)};
//     @media (max-width: ${theme.breakpoints.mobile}) {
//       border-radius: calc(1 * (${theme.borderRadius})) 0 0 calc(1 * (${theme.borderRadius}));
//       background-color: ${theme.color.beige};
//       transform: ${({ $isOpen }) => ($isOpen ? `scale(1)` : `scale(0.8)`)};
//     }
//   }

//   &:active {
//     border-radius: calc(1.5 * ${theme.borderRadius}) 0 0 calc(1.5 * ${theme.borderRadius});
//     transform: translateY(0);
//     @media (max-width: ${theme.breakpoints.mobile}) {
//       border-radius: calc(1.25 * (${theme.borderRadius})) 0 0 calc(1.25 * (${theme.borderRadius}));
//       background-color: ${theme.color.beige};
//       transform: ${({ $isOpen }) => ($isOpen ? `scale(1)` : `scale(0.8)`)};
//     }
//   }

//   /* Mobile Tap-Highlight/Callout/Selection aus */
//   -webkit-tap-highlight-color: transparent;
//   -webkit-touch-callout: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;

//   /* Auf Mobile keine Default-Focus-Ränder */
//   @media (hover: none), (pointer: coarse) {
//     &:focus,
//     &:focus-within {
//       outline: none;
//       box-shadow: none;
//     }
//   }
// `;

// const EyesToggle = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   padding: 0 var(--spacing-s);
//   @media (max-width: ${theme.breakpoints.mobile}) {
//     display: ${({ $isOpen }) => ($isOpen ? "none" : "flex")};
//   }

//   /* Mobile Tap-Highlight/Callout/Selection aus */
//   -webkit-tap-highlight-color: transparent;
//   -webkit-touch-callout: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;

//   /* Auf Mobile keine Default-Focus-Ränder */
//   @media (hover: none), (pointer: coarse) {
//     &:focus,
//     &:focus-within {
//       outline: none;
//       box-shadow: none;
//     }
//   }
// `;

// const StyledIconWrapper = styled.div`
//   display: flex;
//   transform: rotate(${({ rotation }) => rotation}deg);
//   transition: transform 0.3s ease;
//   margin: 0 -0.9rem;
// `;

// const MenuContainer = styled.div`
//   position: relative;
//   transition: all 0.3s ease;
// `;

// const LinkList = styled.ul`
//   display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
//   flex-direction: row;

//   gap: var(--spacing-m);
//   list-style: none;
//   padding: 0 var(--spacing-m);
//   margin: 0;

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     flex-direction: column;
//     /* padding: calc(1.5 * var(--spacing-xl)); */
//     padding: var(--spacing-xl);
//     gap: var(--spacing-l);
//   }

//   li a {
//     text-decoration: none;
//     text-transform: uppercase;
//     color: ${theme.color.dark};
//     font-size: var(--font-s);
//     &:hover {
//       color: ${theme.color.green};
//     }

//     -webkit-tap-highlight-color: transparent;
//   }
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   display: none;

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     display: inline-flex;
//   }

//   top: 10px;
//   right: 10px;
//   z-index: 1000;

//   width: 32px;
//   height: 32px;
//   border: none;

//   align-items: center;
//   justify-content: center;

//   background: none;
//   color: ${theme.color.dark};
//   cursor: pointer;

//   -webkit-tap-highlight-color: transparent;
//   -webkit-touch-callout: none;
//   user-select: none;
//   touch-action: manipulation;

//   transition:
//     transform 0.15s ease,
//     color 0.2s ease;

//   &:hover {
//     color: ${theme.color.green};
//   }
//   &:active {
//     transform: scale(0.96);
//     color: ${theme.color.green};
//   }

//   svg {
//     width: 18px;
//     height: 18px;
//   }
// `;
