import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import { useRef } from "react";

export default function StudioBox({ topline, headline, text1, text2, slides }) {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("active");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Geschwindigkeit
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <StyledStudioBox>
      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h3>{headline}</h3>
        <p>
          {text1}
          <br />
          <br />
          {text2}
        </p>
      </StyledTextWrapper>

      <SlideContainer>
        <ScrollContainer ref={scrollRef} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
          {slides.map((slide, index) => (
            <Slide key={index}>
              <ImageWrapper>
                <StyledImage src={slide.image} alt={slide.title} layout="fill" />
                <StyledTextOverlay>
                  <h6>{slide.title}</h6>
                  <p>{slide.description}</p>
                </StyledTextOverlay>
              </ImageWrapper>
            </Slide>
          ))}
        </ScrollContainer>
      </SlideContainer>
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
`;

const SlideContainer = styled.div`
  position: relative;
  flex: 1;
  padding: var(--spacing-xxl) 0 var(--spacing-xxl) var(--side-padding);
  overflow-x: hidden;
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 50%;
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
  user-select: none;
  scroll-behavior: smooth;

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

const Slide = styled.div`
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
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: var(--spacing-l);
  aspect-ratio: 1 / 1;
  min-height: 300px;
  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: var(--spacing-m);
    aspect-ratio: 4 / 5;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
`;

const StyledTextOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(163, 255, 183, 0.8);
  color: ${theme.color.dark};
  padding: var(--spacing-l);
  border-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }

  h2,
  h3,
  p {
    margin: 0;
  }
`;
