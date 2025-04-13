import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { theme } from "@/styles";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/legacy/image";

export default function ProjectSlider({ projects, dots }) {
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
    responsive: [
      {
        breakpoint: 750,
        settings: {
          dots: true,
        },
      },
    ],
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
            <StyledImage src={project.image} alt={project.title} layout="fill" />
            <ProjectDetails></ProjectDetails>
          </Slide>
        ))}
      </StyledSlider>
      <TitleAndIndex>
        {/* <span>
          {" "}
          0{currentSlide + 1}
          /{projects.length} 
        </span> */}
        {/* <h4>{projects[currentSlide]?.title}</h4> */}
      </TitleAndIndex>
      <ArrowContainer>
        <Arrow onClick={handlePrevClick}>
          <StyledPiArrowLeftLight />
        </Arrow>
        <Arrow onClick={handleNextClick}>
          <StyledPiArrowRightLight />
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
  margin-bottom: -5px;
  .slick-list {
    overflow: visible !important;
  }

  .slick-dots {
    display: flex !important;
    position: absolute;
    bottom: ${theme.spacing.l};
    justify-content: center;
    align-items: end;
    gap: 0;
    margin: 0;
    z-index: 100;

    @media (max-width: 750px) {
      bottom: ${theme.spacing.ml};
    }
  }

  .slick-dots li {
    //opacity: 0; /* Nur die zweiten bis vierten Punkte sichtbar machen */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 -1px;
  }

  .slick-dots li:nth-child(n + 2):nth-child(-n + 4) {
    //opacity: 1; /* Nur die zweiten bis vierten Punkte sichtbar machen */
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

    transform: scale(0.8);
  }

  .slick-dots li button::before {
    content: "";
    display: none;
  }
`;

const Slide = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  min-width: 100%;

  height: 100%;

  @media (max-width: 750px) {
    aspect-ratio: 1/1;
  }
  @media (min-width: 750px) {
    height: ${theme.height.tablet};
  }

  @media (min-width: 1100px) {
    height: ${theme.height.desktop};
  }

  &::after {
    position: absolute;
    overflow: hidden;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%);
    pointer-events: none;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
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

  @media (max-width: 750px) {
    display: none;
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

const StyledPiArrowLeftLight = styled(PiArrowLeftLight)`
  transform: scale(0.8);
`;

const StyledPiArrowRightLight = styled(PiArrowRightLight)`
  transform: scale(0.8);
`;
