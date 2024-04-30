import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { theme } from "@/styles";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

export default function ProjectSlider({ projects }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = projects.length;
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.intersectionRatio >= 0.7);
        });
      },
      { threshold: [0, 0.3, 0.7, 1] }
    );

    // Ensure that sliderRef and its children are valid
    if (
      sliderRef.current &&
      sliderRef.current.children &&
      sliderRef.current.children.length > 0
    ) {
      observer.observe(sliderRef.current.children[0]);
    }

    return () => {
      if (
        sliderRef.current &&
        sliderRef.current.children &&
        sliderRef.current.children.length > 0
      ) {
        observer.unobserve(sliderRef.current.children[0]);
      }
    };
  }, [sliderRef.current]);

  const handleAfterChange = (index) => {
    if (isVisible) {
      setCurrentSlide(index);
    }
  };

  const handleScroll = (event) => {
    const { scrollLeft, clientWidth } = event.target;
    const slideWidth = clientWidth;
    const scrollPosition = scrollLeft + clientWidth / 20;

    let newIndex = Math.floor(scrollPosition / slideWidth);
    newIndex = Math.max(0, Math.min(newIndex, totalSlides - 1));
    setCurrentSlide(newIndex);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: currentSlide,
    afterChange: handleAfterChange,
  };

  const handlePrevClick = () => {
    if (sliderRef.current && sliderRef.current.slickPrev) {
      // Check if the current slide is already at the beginning
      if (currentSlide === 0) {
        return; // Exit the function early to prevent decrementing the index below 0
      }
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current && sliderRef.current.slickNext) {
      // Check if the current slide is already at the end
      if (currentSlide === totalSlides - 1) {
        return; // Exit the function early to prevent incrementing the index beyond the last slide
      }
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  return (
    <ProjectSliderWrapper>
      <StyledIndex className="current-project">
        {currentSlide + 1}/{totalSlides}
      </StyledIndex>
      <SliderContainer onScroll={handleScroll}>
        <StyledSlider ref={sliderRef} {...settings}>
          {projects.map((project, index) => (
            <Slide key={index}>
              <StyledImage
                src={project.image}
                alt={project.title}
                width={1400}
                height={1400}
              />
              <ProjectDetails>
                <StyledTitle>{project.title}</StyledTitle>
                <StyledTags>
                  {project.tags.map((tag, index) => (
                    <StyledTag key={index}>#{tag}</StyledTag>
                  ))}
                </StyledTags>
                <StyledLink href="/portfolio">Mehr Projekte</StyledLink>
                <CustomPrevArrow onClick={handlePrevClick}>
                  <IoChevronBackOutline />
                </CustomPrevArrow>
                <CustomNextArrow onClick={handleNextClick}>
                  <IoChevronForwardOutline />
                </CustomNextArrow>
              </ProjectDetails>
            </Slide>
          ))}
        </StyledSlider>
      </SliderContainer>
    </ProjectSliderWrapper>
  );
}

const StyledTitle = styled.h1`
  margin-top: 1rem;
  font-weight: 500;
`;

const StyledTags = styled.ul`
  display: flex;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  gap: 1rem;
  justify-content: end;
  align-items: end;
  height: 100%;
`;

const StyledTag = styled.li`
  color: ${theme.primaryColor};
  font-size: ${theme.fontSizes.xs};
  border: solid 1px;
  border-radius: 20px;
  padding: 0.3rem 0.5rem 0.3rem;
`;

const Slide = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 800px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  @media (max-width: 1000px) {
    height: 700px;
  }
  @media (max-width: 800px) {
    height: 600px;
  }
`;

const ProjectDetails = styled.div`
  color: ${theme.primaryColor};
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const ProjectSliderWrapper = styled.div`
  margin: 0;
  margin-bottom: -0.5rem;
  position: relative;
  /* height: 600px; */
`;

const SliderContainer = styled.div`
  position: relative;
  overflow-x: auto; /* Enable horizontal scrolling */
  overflow-y: hidden; /* Disable vertical scrolling */
  white-space: nowrap; /* Keep slider items in a single line */
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    overflow: visible !important; /* Ensure content is visible */
  }
`;

const StyledIndex = styled.div`
  position: absolute;
  top: 1rem;
  left: 2rem;
  z-index: 2;
  color: ${theme.primaryColor};
`;

const CustomPrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  z-index: 1;
  color: ${theme.primaryColor};
  cursor: pointer;
`;

const CustomNextArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  z-index: 1;
  color: ${theme.primaryColor};
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background-color: ${theme.primaryColor};
  color: white;
  font-size: ${theme.fontSizes.xs};
  border-radius: 20px;
  padding: 0.3rem 0.5rem 0.3rem;
  &:hover {
    padding: 0.35rem 0.55rem 0.35rem;
    font-weight: 500;
  }
`;
