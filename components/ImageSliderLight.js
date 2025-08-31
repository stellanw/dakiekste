import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { theme } from "@/styles";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageSliderLight({ projects, autoplay }) {
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
    // speed: 1000,
    fade: true,
    speed: 10,
    autoplay: autoplay,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: false,
    arrows: false,
    swipe: true,
    afterChange: (index) => setCurrentSlide(index),
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <SliderWrapper>
      <ArrowContainer>
        <Arrow onClick={handlePrevClick}>
          <PiArrowLeftLight />
        </Arrow>
        <Arrow onClick={handleNextClick}>
          <PiArrowRightLight />
        </Arrow>
      </ArrowContainer>

      <StyledSlider ref={sliderRef} {...settings}>
        {projects.map((project, index) => (
          <Slide key={index}>
            <StyledImage src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" quality={100} priority={index === 0} />
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
  padding: var(--spacing-xxl) 0 var(--spacing-xxl) 0;
`;

const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: var(--spacing-l);
  right: var(--side-padding);
  width: 120px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }

  svg {
    stroke-width: 1px;

    font-size: 1.6rem;
    /* font-size: var(--font-xl); */
  }
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${theme.color.beige};
  background-color: ${theme.color.dark};

  cursor: pointer;
  transition:
    background-color 0.1s ease,
    transform 0.1s ease;

  &:hover,
  &:active {
    background-color: ${theme.color.green};

    transform: scale(1.05);
  }
`;

const StyledSlider = styled(Slider)`
  padding: 0 var(--side-padding);
  width: 100%;

  .slick-dots {
    display: flex;
    position: relative;
    width: 100%;
    gap: 0;
    z-index: 100;
    bottom: calc(-1 * var(--spacing-s));
  }

  .slick-dots li {
    margin: 0 2px;
  }

  .slick-dots li button {
    background-color: ${theme.color.dark};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    opacity: 1;
    transition: opacity 0.3s ease;
    transform: scale(0.5);
  }

  .slick-dots li.slick-active button {
    opacity: 1;
    background-color: ${theme.color.green};
    transform: scale(0.7);
  }

  .slick-dots li button:hover {
    background-color: ${theme.color.green};
    transform: scale(0.65);
  }

  .slick-dots li button::before {
    content: "";
    display: none;
  }

  .slick-dots li:first-child button {
    transform: scale(0.35);
  }
  .slick-dots li:last-child button {
    transform: scale(0.35);
  }
`;

const Slide = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.borderRadius};
  width: 100%;
  height: var(--height-hero);

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-height: var(--height-section);
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 10%;
`;
