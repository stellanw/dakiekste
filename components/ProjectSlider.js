import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { theme } from "@/styles";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoArrowForwardOutline,
  IoArrowBackOutline,
} from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
            <ProjectDetails>
              <TitleAndIndex>
                <span>
                  {currentSlide + 1}/{projects.length}
                </span>
                <h1>{project.title}</h1>
              </TitleAndIndex>
              {/* <StyledLink href="/portfolio">Zum Projekt</StyledLink> */}
            </ProjectDetails>
          </Slide>
        ))}
      </StyledSlider>
      <ArrowContainer>
        <Arrow onClick={handlePrevClick}>
          {/* <IoChevronBackOutline /> */}
          <IoArrowBackOutline />
        </Arrow>
        <Arrow onClick={handleNextClick}>
          {/* <IoChevronForwardOutline /> */}
          <IoArrowForwardOutline />
        </Arrow>
      </ArrowContainer>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  position: relative;
  margin-bottom: -0.5rem;
  color: ${theme.textColor};
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
  padding: 2rem;
`;

const TitleAndIndex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: 3rem;
  left: 4rem;
  font-weight: 600;

  span {
    letter-spacing: 0.2rem;
  }

  h1 {
    font-size: ${theme.fontSizes.small};
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;

  bottom: 4rem;
  left: 4rem;
  background-color: ${theme.textColor};
  color: white;
  font-size: ${theme.fontSizes.xs};
  border-radius: 20px;
  padding: 0.3rem 0.9rem;

  &:hover {
    padding: 0.35rem 0.55rem 0.35rem;
    font-weight: 500;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: 3.15rem;
  right: 2rem;
  width: 40px;
`;
const Arrow = styled.div`
  position: relative;
  cursor: pointer;
`;
