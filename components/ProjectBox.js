import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import { useRef } from "react";

export default function ProjectBox({ topline, headline, text1, text2, cards }) {
  const scrollRef = useRef(null);
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
    const walk = (x - dragRef.current.startX) * 1.5;
    if (Math.abs(x - dragRef.current.startX) > 6) didDragRef.current = true;
    scrollRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  const snapToCard = (idx) => {
    const wrapper = scrollRef.current;
    if (!wrapper) return;
    const cardEl = wrapper.children[idx];
    if (!cardEl) return;

    const wrapperCenter = wrapper.clientWidth / 2;
    const cardCenter = cardEl.offsetLeft + cardEl.offsetWidth / 2;
    const target = cardCenter - wrapperCenter;

    wrapper.scrollTo({ left: target, behavior: "smooth" });
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
          {cards.map((card, index) => (
            <Card key={index} data-last={index === cards.length - 1 ? "1" : "0"}>
              <ImageWrapper
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (didDragRef.current) return;
                  snapToCard(index);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " " || e.code === "Space") {
                    e.preventDefault();
                    snapToCard(index);
                  }
                }}
              >
                <StyledImage
                  src={card.image}
                  alt={card.alt}
                  fill
                  draggable={false}
                  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         80vw"
                  quality="80"
                />
              </ImageWrapper>
            </Card>
          ))}
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

  p {
    max-width: var(--max-text);
  }
`;

const TextInner = styled.div`
  width: 100%;
`;

const CardContainer = styled.div`
  position: relative;
  flex: 1;
  padding: var(--spacing-xxxl) 0 calc(0.85 * var(--spacing-xxxl)) var(--side-padding);
  overflow-x: hidden;
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 50%;
    padding: calc(1.3 * var(--spacing-xxl)) 0 var(--spacing-xxl) var(--side-padding);
  }
`;

const CardWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  user-select: none;
  scroll-behavior: smooth;

  padding-inline-end: var(--side-padding);
  scroll-padding-inline-end: var(--side-padding);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-right: var(--side-padding);
  }

  & > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
    margin-right: var(--side-padding);
  }

  &::-webkit-scrollbar {
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.dark};
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.color.green};
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  min-width: 310px;
  max-width: 310px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    min-width: 430px;
    max-width: 430px;
  }

  &[data-last="1"] {
    max-width: calc(310px * 1);
    min-width: calc(310px * 1);

    @media (min-width: ${theme.breakpoints.tablet}) {
      max-width: calc(430px * 1.5);
      min-width: calc(430px * 1.5);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: var(--spacing-l);
  overflow: hidden;
  border-radius: ${theme.borderRadius};
  contain: paint;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 540px;
    margin-bottom: var(--spacing-m);
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
  user-select: none;
  -webkit-user-drag: none;
`;
