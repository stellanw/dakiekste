import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import { useRef, useState } from "react";
import { PiPlus, PiMinus } from "react-icons/pi";

export default function StudioBox({ topline, headline, text1, text2, cards }) {
  const scrollRef = useRef(null);

  // Drag-Handling + Guard gegen Click nach Drag
  const dragRef = useRef({ down: false, startX: 0, scrollLeft: 0 });
  const didDragRef = useRef(false);

  const handleMouseDown = (e) => {
    dragRef.current.down = true;
    didDragRef.current = false;
    scrollRef.current.classList.add("active");
    dragRef.current.startX = e.pageX - scrollRef.current.offsetLeft;
    dragRef.current.scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    dragRef.current.down = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    dragRef.current.down = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!dragRef.current.down) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragRef.current.startX) * 1.5; // „Gewicht“ beim Ziehen
    if (Math.abs(x - dragRef.current.startX) > 6) didDragRef.current = true;
    scrollRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  // Nur eine Card gleichzeitig offen
  const [openIndex, setOpenIndex] = useState(null);
  const toggleCard = (idx) => {
    if (didDragRef.current) return; // nicht togglen, wenn gerade gescrolled wurde
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <StyledStudioBox>
      <StyledTextWrapper>
        <TextInner>
          <h2>{topline}</h2>
          <h3>{headline}</h3>
          <p>
            {text1}
            <br />
            <br />
            {text2}
          </p>
        </TextInner>
      </StyledTextWrapper>

      <CardContainer>
        <CardWrapper ref={scrollRef} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
          {cards.map((card, index) => {
            const isOpen = openIndex === index;
            return (
              <Card key={index}>
                <ImageWrapper
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`card-overlay-${index}`}
                  aria-label={isOpen ? "Details schließen" : "Mehr Infos anzeigen"}
                  onClick={() => toggleCard(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " " || e.code === "Space") {
                      e.preventDefault();
                      toggleCard(index);
                    }
                  }}
                >
                  <StyledImage src={card.image} alt={card.title} layout="fill" draggable={false} />
                  <ToggleBadge
                    type="button"
                    aria-label={isOpen ? "Details schließen" : "Mehr Infos anzeigen"}
                    aria-pressed={isOpen}
                    $open={isOpen}
                    onClick={(e) => {
                      e.stopPropagation(); // sonst doppelt togglen
                      toggleCard(index);
                    }}
                  >
                    {isOpen ? <PiMinus /> : <PiPlus />}
                  </ToggleBadge>

                  <StyledTextOverlay id={`card-overlay-${index}`} $visible={isOpen}>
                    <h6>{card.title}</h6>
                    <p>{card.description}</p>
                  </StyledTextOverlay>
                </ImageWrapper>
              </Card>
            );
          })}
        </CardWrapper>
      </CardContainer>
    </StyledStudioBox>
  );
}

const StyledStudioBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.color.beige};
  overflow: hidden;

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  }

  &::selection,
  & *::selection {
    background: ${theme.color.beige};
    color: ${theme.color.dark};
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: ${theme.color.green};
  padding: var(--spacing-xxxl) var(--side-padding);
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 50%;
  }

  h3 {
    word-break: keep-all !important;
    hyphens: auto;
  }
`;

const TextInner = styled.div`
  width: 100%;
  @media (min-width: ${theme.breakpoints.wide}) {
    max-width: 800px;
    margin-inline: auto;
  }
`;

const CardContainer = styled.div`
  position: relative;
  flex: 1;
  padding: var(--spacing-xxl) 0 var(--spacing-xxl) var(--side-padding);
  overflow-x: hidden;
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 50%;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  user-select: none;
  scroll-behavior: smooth;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-right: var(--side-padding);
  }

  padding-inline-end: var(--side-padding);
  scroll-padding-inline-end: var(--side-padding);

  & > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
    margin-right: var(--side-padding);
  }

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.color.dark};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.green};
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  max-width: 310px;
  padding-bottom: var(--spacing-xs);

  @media (min-width: ${theme.breakpoints.tablet}) {
    min-width: 430px;
  }

  h6 {
    width: 100%;
    line-height: 1.2;
    word-wrap: normal;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: var(--spacing-l);
  aspect-ratio: 4 / 5;
  min-height: 370px;
  cursor: pointer;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: var(--spacing-m);
  }

  outline: none;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
  &:focus-visible {
    box-shadow:
      0 0 0 3px rgba(0, 0, 0, 0.2),
      0 0 0 5px ${theme.color.green};
    border-radius: ${theme.borderRadius};
  }
  overflow: hidden;
  border-radius: ${theme.borderRadius};
  contain: paint;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
  user-select: none;
  -webkit-user-drag: none;
`;

/* Overlay mit diagonaler Einblend-Animation von links-unten */
const StyledTextOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(163, 255, 183, 0.85);
  color: ${theme.color.dark};
  padding: var(--spacing-l);
  border-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  transform-origin: left bottom;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: ${(p) => (p.$visible ? "translate3d(0,0,0) scale(1)" : "translate3d(-90%, 90%, 0) scale(0.96)")};
  transition:
    opacity 240ms ease,
    transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1);

  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};

  h2,
  h3,
  p {
    margin: 0;
  }
`;

/* Grüner Toggle-Kasten (+/−), bleibt immer sichtbar */
const ToggleBadge = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3; /* über dem Overlay bleiben */
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: ${({ $open }) => ($open ? `0 ${theme.borderRadius} 0 ${theme.borderRadius}` : `0 ${theme.borderRadius} 0 0`)};
  font-weight: 800;
  font-size: 20px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: ${theme.color.green};
  color: ${theme.color.dark};
  background-color: ${({ $open }) => ($open ? "transparent" : theme.color.green)};
  transition:
    transform 0.1s ease,
    background-color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1.2);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:focus-visible {
  }

  svg {
    stroke-width: 1.9;
  }
`;
