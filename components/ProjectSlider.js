import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { theme } from "@/styles";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ProjectSlider({ projects }) {
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
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
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
      <StyledSlider ref={sliderRef} {...settings}>
        {projects.map((project, index) => (
          <Slide key={index}>
            <StyledImage src={project.image} alt={project.title} width={1400} height={1400} />
            <ProjectDetails></ProjectDetails>
          </Slide>
        ))}
      </StyledSlider>
      <TitleAndIndex>
        <span>
          {" "}
          0{currentSlide + 1}
          {/* /{projects.length}  */}
        </span>
        <h4>|&nbsp; &nbsp;{projects[currentSlide]?.title}</h4>
      </TitleAndIndex>
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
  margin-bottom: -0.5rem;
  color: ${theme.color.dark};
  overflow: hidden;

  &::after {
    position: absolute;

    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 100%
    );
    pointer-events: none;
  }
`;

const StyledSlider = styled(Slider)`
  z-index: 0;
  .slick-list {
    overflow: visible !important;
  }

  .slick-dots {
    display: flex !important;
    position: absolute;
    bottom: ${theme.spacing.m};
    justify-content: center;
    align-items: end;
    gap: ${theme.spacing.s};
    padding: 10px 0;
    z-index: 100;
  }

  .slick-dots li {
  }

  .slick-dots li button {
    background-color: ${theme.color.dark};
    height: 8px;
    width: 8px;
    border: none;
    border-radius: 50%;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  .slick-dots li.slick-active button {
    opacity: 1;
    background-color: ${theme.color.green};
  }

  .slick-dots li button::before {
    content: "";
    display: none;
  }
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 800px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;

  @media (max-width: 1000px) {
    height: 700px;
  }

  @media (max-width: 800px) {
    height: 600px;
  }
`;

const ProjectDetails = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const TitleAndIndex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing.xxxs};
  position: absolute;
  top: ${theme.spacing.l};
  left: ${theme.spacing.xl};
  font-weight: 600;
  z-index: 10;

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

  @media (min-width: 750px) {
    top: ${theme.spacing.xl};
    left: ${theme.spacing.xxl};
    gap: ${theme.spacing.s};
  }

  @media (min-width: 1100px) {
    top: ${theme.spacing.xl};
    left: ${theme.spacing.xxl};
    gap: ${theme.spacing.s};
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: ${theme.spacing.xl};
  right: ${theme.spacing.xxl};
  width: 110px;

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
