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

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

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
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current && sliderRef.current.slickNext) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <ProjectSliderWrapper>
      <StyledIndex className="current-project">
        {currentSlide + 1}/{totalSlides}
      </StyledIndex>
      <SliderContainer ref={sliderRef} onScroll={handleScroll}>
        <StyledSlider {...settings}>
          {projects.map((project, index) => (
            <Slide key={index}>
              <ContentContainer>
                <StyledImage1
                  src={project.image1}
                  alt={project.title}
                  width={1400}
                  height={500}
                />
                <ProjectDetails>
                  <h1>{project.title}</h1>
                  <StyledImage2
                    src={project.image2}
                    alt={project.title}
                    width={1400}
                    height={500}
                  />

                  <p>{project.description}</p>
                </ProjectDetails>
              </ContentContainer>
            </Slide>
          ))}
        </StyledSlider>
      </SliderContainer>
      <StyledLink href="/portfolio">Mehr Projekte</StyledLink>
      {/* <CustomPrevArrow onClick={handlePrevClick}>
        <IoChevronBackOutline />
      </CustomPrevArrow>
      <CustomNextArrow onClick={handleNextClick}>
        <IoChevronForwardOutline />
      </CustomNextArrow> */}
    </ProjectSliderWrapper>
  );
}
const Slide = styled.div`
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
`;

const StyledImage1 = styled(Image)`
  flex: 0 0 50%;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  height: 600px;
`;

const StyledImage2 = styled(Image)`
  position: absolute;
  top: 6rem;
  right: 3em;
  height: 300px;
  width: auto;
`;

const ProjectDetails = styled.div`
  color: ${theme.primaryColor};
  flex: 1;
  position: relative;
  background-color: ${theme.secondaryColorPurple};
  height: 600px;
  padding: 2rem;
`;

const ProjectSliderWrapper = styled.div`
  margin: 20px 0;
  position: relative; /* Ensure positioning context for arrows */
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
  left: 20px;
  z-index: 1;
  cursor: pointer;
  color: ${theme.secondaryColorBeige};
`;

const CustomNextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  z-index: 1;
  cursor: pointer;
  color: ${theme.secondaryColorBeige};
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: ${theme.primaryColor};
  font-size: ${theme.fontSizes.xs};
  border: solid;
  border-radius: 20px;
  padding: 0.3rem 0.5rem 0.3rem;
`;
