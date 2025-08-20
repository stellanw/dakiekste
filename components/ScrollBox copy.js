import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import { useRef } from "react";
import { PiArrowRightLight } from "react-icons/pi";

export default function ScrollBox({ boxData = [], headline1, headline2, introText, showIcon = false }) {
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
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <StyledSlideBoxContainer>
      <StyledTextBox>
        <h2>{headline1}</h2>
        <h4>{headline2}</h4>
        <p>{introText}</p>
      </StyledTextBox>
      <StyledScrollBoxContainer
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {boxData.map(({ label, title, mobileTitle, text, image }, index) => (
          <StyledScrollBox key={index}>
            <h2>
              {" "}
              {(showIcon === true || showIcon === "true") && (
                <StyledIcon>
                  <PiArrowRightLight />
                </StyledIcon>
              )}
              {label || `0${index + 1}`}
            </h2>
            <StyledDesktopTitle>{title}</StyledDesktopTitle>
            <StyledMobileTitle>{mobileTitle}</StyledMobileTitle>

            {image && (
              <ImageWrapper>
                <StyledImage src={image} alt={title} fill quality={80} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" />
              </ImageWrapper>
            )}

            <p>{text}</p>
          </StyledScrollBox>
        ))}
      </StyledScrollBoxContainer>
    </StyledSlideBoxContainer>
  );
}

const StyledSlideBoxContainer = styled.div`
  background-color: ${theme.color.dark};
  padding: var(--spacing-xxxl) 0;
  overflow: hidden;
`;

const StyledScrollBoxContainer = styled.div`
  display: flex;
  position: relative;
  user-select: none;
  overflow-x: scroll;
  background-color: ${theme.color.dark};
  min-width: 250px;
  margin-left: var(--side-padding);
  padding: var(--spacing-xxl) 0 0 0;
  cursor: grab;

  /* Firefox */
  & {
    scrollbar-width: thin;
    scrollbar-color: ${theme.color.beige} ${theme.color.dark};
  }

  /* Webkit */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.beige};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.green};
  }

  &.dragging {
    cursor: grabbing;
  }
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  color: ${theme.color.beige};
  max-width: 100%;
  padding: 0 var(--side-padding);

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 70%;
  }
`;

const StyledScrollBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  color: ${theme.color.beige};
  padding: 0 var(--spacing-xl) var(--spacing-xxl) 0;
  min-width: 600px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-width: 350px;
    margin-right: var(--spacing-xl);
  }

  p {
    line-height: ${theme.lineHeight.xxl};
  }
`;

const StyledIcon = styled.span`
  display: inline-flex;
  vertical-align: text-bottom;
  height: 100%;
  margin-right: var(--spacing-xs);
  font-size: 1.3rem;
  padding-bottom: 0rem;
`;

const StyledDesktopTitle = styled.h5`
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const StyledMobileTitle = styled.h5`
  display: block;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: var(--spacing-m);
  aspect-ratio: 3 / 2;
  width: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
`;
