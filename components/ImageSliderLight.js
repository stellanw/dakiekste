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
    speed: 1000,
    fade: true,
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
            <StyledImage
              src={project.image}
              alt={project.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              priority={index === 0}
            />
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
  top: var(--spacing-xl);
  right: var(--side-padding);
  width: 100px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Arrow = styled.div`
  position: relative;
  cursor: pointer;
  font-size: var(--font-xl);

  &:hover,
  :active {
    color: ${theme.color.green};
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
    bottom: calc(-1 * var(--spacing-xs));
  }

  .slick-dots li {
    margin: 0 -1px;
  }

  .slick-dots li button {
    background-color: ${theme.color.dark};
    height: 10px;
    width: 10px;
    border: none;
    border-radius: 50%;
    opacity: 1;
    transition: opacity 0.3s ease;
    transform: scale(0.5);
  }

  .slick-dots li.slick-active button {
    opacity: 1;
    background-color: ${theme.color.dark};
    transform: scale(0.8);
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
  height: var(--height-hero);

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-height: var(--height-section);
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 10%;
`;
