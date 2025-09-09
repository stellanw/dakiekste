// BackToTopButton.jsx
import { useEffect, useState } from "react";
import styled from "styled-components";
import { PiArrowUpLight } from "react-icons/pi";
import { theme } from "@/styles";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Fixed>
      <Btn onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Nach oben">
        <PiArrowUpLight />
      </Btn>
    </Fixed>
  );
}

const Fixed = styled.div`
  position: fixed;
  bottom: calc(24px + env(safe-area-inset-bottom));
  z-index: 10000;
  right: calc((100vw - min(100vw, var(--max-content))) / 2 + 0.5 * var(--side-padding) + env(safe-area-inset-right));

  @media (max-width: ${theme.breakpoints.mobile}) {
    right: calc(0.5 * var(--side-padding) + env(safe-area-inset-right));
    bottom: calc(16px + env(safe-area-inset-bottom));
  }
`;

const Btn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;
  background: ${theme.color.dark};
  color: ${theme.color.green};
  opacity: 0.5;
  transition:
    opacity 0.2s,
    transform 0.15s;

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;
