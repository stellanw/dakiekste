import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { theme } from "@/styles";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageSlider({ projects, autoplay }) {
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
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    arrows: false,
    swipe: true,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 750,
        settings: {
          dots: true,
        },
      },
    ],
  };

  const handlePrevClick = () => sliderRef.current?.slickPrev();
  const handleNextClick = () => sliderRef.current?.slickNext();

  return (
    <SliderWrapper>
      <StyledSlider ref={sliderRef} {...settings}>
        {projects.map((project, index) => (
          <Slide key={index}>
            <StyledImage src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" quality={100} />
          </Slide>
        ))}
      </StyledSlider>
      <ArrowContainer>
        <Arrow onClick={handlePrevClick}>
          <PiArrowLeftLight />
        </Arrow>
        <Arrow onClick={handleNextClick}>
          <PiArrowRightLight />
        </Arrow>
      </ArrowContainer>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  z-index: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin-bottom: -10px;

  .slick-list {
    overflow: visible !important;
  }

  .slick-dots {
    display: flex !important;
    position: absolute;
    bottom: var(--spacing-l);
    justify-content: center;
    align-items: end;
    gap: 0;
    margin: 0;
    z-index: 100;

    @media (min-width: ${theme.breakpoints.tablet}) {
      bottom: var(--spacing-m);
    }
  }

  .slick-dots li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .slick-dots li button {
    background-color: ${theme.color.dark};
    height: 10px;
    width: 10px;
    border: none;
    border-radius: 50%;
    opacity: 1;
    transform: scale(0.5);

    @media (max-width: ${theme.breakpoints.mobile}) {
      background-color: ${theme.color.beige};
    }
  }

  .slick-dots li.slick-active button {
    transform: scale(0.8);
  }

  .slick-dots li button::before {
    content: "";
    display: none;
  }

  .slick-dots li button:hover {
    background-color: ${theme.color.green};
  }
`;

const Slide = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: var(--height-hero);

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-height: var(--height-section);
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 5%;
`;

const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: var(--spacing-m);
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
