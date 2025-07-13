import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "@/styles";
import { PiArrowUpLight } from "react-icons/pi";
import AugeIcon from "@/Icons/AugeIcon";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <BackToTopContainer>
      <StyledButton onClick={scrollToTop} className="hover-cursor">
        <StyledPiArrowUpLight />
      </StyledButton>
    </BackToTopContainer>
  );
}
const BackToTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.s};
  align-items: center;
  position: fixed;
  bottom: ${theme.spacing.l};
  right: ${theme.spacing.l};
  z-index: 100;
  p {
    font-size: var(--font-xs);
  }
`;

const StyledButton = styled.button`
  background: ${theme.color.dark};
  color: ${theme.color.green};
  border: none;
  border-radius: 100%;
  width: 2.8rem;
  height: 2.8rem;
  padding: ${theme.spacing.xs};
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 600px) {
    bottom: 20px;
    right: 20px;
    padding: 8px 12px;
  }
`;

const StyledPiArrowUpLight = styled(PiArrowUpLight)`
  transform: scale(0.9);
`;
