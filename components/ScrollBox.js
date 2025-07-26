import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import { useRef } from "react";

export default function ScrollBox({ boxData = [], headline1, headline2, introText, mobileTitle, text }) {
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
        {boxData.map(({ icon: Icon, label, title, mobileTitle, text, image }, index) => (
          <StyledScrollBox key={index}>
            {Icon && index !== boxData.length - 1 && (
              <IconWrapper>
                <Icon size={48} />
              </IconWrapper>
            )}
            <h2>{label || `0${index + 1}`}</h2>
            <StyledDesktopTitle>{title}</StyledDesktopTitle>
            <StyledMobileTitle>{mobileTitle}</StyledMobileTitle>

            {image && (
              <ImageWrapper>
                <StyledImage src={image} alt={title} layout="fill" />
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

const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  right: -9rem;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    right: -13.5rem;
  }

  svg {
    width: 100%;
    min-height: 20px;
    max-height: 30px;

    @media (max-width: ${theme.breakpoints.tablet}) {
      min-height: 15px;
      max-height: 20px;
    }
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
`;
