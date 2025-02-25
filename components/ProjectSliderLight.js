import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { theme } from "@/styles";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ProjectSliderLight({ projects }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.7) {
          setCurrentSlide(sliderRef.current?.innerSlider?.state.currentSlide || 0);
        }
      },
      { threshold: 0.7 }
    );

    const firstSlide = sliderRef.current?.innerSlider?.list?.firstChild;
    if (firstSlide) observer.observe(firstSlide);

    return () => {
      if (firstSlide) observer.unobserve(firstSlide);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: false,
    arrows: false,
    swipe: true,
    afterChange: (index) => setCurrentSlide(index),
  };

  const handlePrevClick = () => {
    if (currentSlide > 0) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (currentSlide < projects.length - 1) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <SliderWrapper>
      <TitleandArrowContainer>
        <TitleAndIndex>
          <h4>{projects[currentSlide]?.title}</h4>
        </TitleAndIndex>
        <ArrowContainer>
          <Arrow onClick={handlePrevClick}>
            <StyledPiArrowLeftLight />
          </Arrow>
          <Arrow onClick={handleNextClick}>
            <StyledPiArrowRightLight />
          </Arrow>
        </ArrowContainer>
      </TitleandArrowContainer>

      <StyledSlider ref={sliderRef} {...settings}>
        {projects.map((project, index) => (
          <Slide key={index}>
            <StyledImage src={project.image} alt={project.title} layout="fill" />
          </Slide>
        ))}
      </StyledSlider>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  color: ${theme.color.dark};
  height: 100%;
  background-color: ${theme.color.beige};
  z-index: 3;
  padding: ${theme.spacing.mobile.height.l} 0 ${theme.spacing.mobile.height.xl} 0;
  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.l} 0 ${theme.spacing.tablet.height.xl} 0;
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.l} 0 ${theme.spacing.desktop.height.xl} 0;
  }
`;

const TitleandArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.spacing.mobile.side} ${theme.spacing.mobile.height.s} ${theme.spacing.mobile.side};

  @media (min-width: 750px) {
    padding: 0 ${theme.spacing.tablet.side} ${theme.spacing.tablet.height.s} ${theme.spacing.tablet.side};
  }

  @media (min-width: 1100px) {
    padding: 0 ${theme.spacing.desktop.side} ${theme.spacing.desktop.height.s} ${theme.spacing.desktop.side};
  }
`;

const TitleAndIndex = styled.div`
  gap: ${theme.spacing.xxxs};

  @media (min-width: 750px) {
    gap: ${theme.spacing.s};
  }

  @media (min-width: 1100px) {
    gap: ${theme.spacing.s};
  }

  h4 {
    padding: 0;
  }
  span {
    letter-spacing: 0.2rem;
    font-size: ${theme.fontSizes.xs};
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.m};
    }
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 110px;
  top: ${theme.spacing.mobile.height.l};
  right: ${theme.spacing.mobile.side};

  @media (min-width: 750px) {
    top: ${theme.spacing.tablet.height.l};
    right: ${theme.spacing.tablet.side};
  }

  @media (min-width: 1100px) {
    top: ${theme.spacing.desktop.height.l};
    right: ${theme.spacing.desktop.side};
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

const Arrow = styled.div`
  position: relative;
  cursor: pointer;
  font-size: ${theme.fontSizes.m};
  &:hover,
  :active {
    color: ${theme.color.green};
  }

  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.l};
  }
  @media (min-width: 1100px) {
    font-size: ${theme.fontSizes.xl};
  }
`;

const StyledPiArrowLeftLight = styled(PiArrowLeftLight)`
  transform: scale(0.8);
`;

const StyledPiArrowRightLight = styled(PiArrowRightLight)`
  transform: scale(0.8);
`;

const StyledSlider = styled(Slider)`
  padding: 0 ${theme.spacing.mobile.side};

  @media (min-width: 750px) {
    padding: 0 ${theme.spacing.tablet.side};
  }

  @media (min-width: 1100px) {
    padding: 0 ${theme.spacing.desktop.side};
  }
  width: 100%;

  .slick-dots {
    display: flex;
    position: relative;
    width: 100%;
    gap: 0;
    z-index: 100;

    bottom: -${theme.spacing.mobile.height.s};
    @media (min-width: 750px) {
      bottom: -${theme.spacing.tablet.height.s};
    }

    @media (min-width: 1100px) {
      bottom: -${theme.spacing.desktop.height.s};
    }
  }

  .slick-dots li {
  }

  .slick-dots li:nth-child(n + 2):nth-child(-n + 4) {
    // opacity: 1; /* Nur die zweiten bis vierten Punkte sichtbar machen */
  }

  .slick-dots li button {
    background-color: ${theme.color.green};
    height: 10px;
    width: 10px;
    border: none;
    border-radius: 50%;
    opacity: 1;
    transition: opacity 0.3s ease;
    transform: scale(0.8);
  }

  .slick-dots li.slick-active button {
    opacity: 1;
    background-color: ${theme.color.green};
    transform: scale(1.2);
  }

  .slick-dots li button::before {
    content: "";
    display: none;
  }
`;

const Slide = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.borderRadius};
  width: 100%;

  height: 100%;

  @media (max-width: 750px) {
    aspect-ratio: 2/3;
  }
  @media (min-width: 750px) {
    height: ${theme.height.tablet};
  }

  @media (min-width: 1100px) {
    height: ${theme.height.desktop};
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
