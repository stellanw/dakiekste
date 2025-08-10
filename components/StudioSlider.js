import React, { useState, useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "@/styles";

export default function StudioSlider({ studio }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

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
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <SliderWrapper>
      <StyledSlider ref={sliderRef} {...settings}>
        {studio.map((item, index) => (
          <Slide key={index}>
            <StyledImage
              src={item.image}
              alt={item.alt}
              quality={80}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw"
              priority={false}
              placeholder="empty"
            />
          </Slide>
        ))}
      </StyledSlider>
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
  margin-bottom: -0.3rem;
`;

const StyledSlider = styled(Slider)`
  z-index: 3;
  .slick-list {
    overflow: visible !important;
  }

  .slick-dots {
    display: flex !important;
    position: absolute;
    bottom: ${theme.spacing.m};
    justify-content: center;
    align-items: end;
    gap: 0;
    padding: 12px;
    z-index: 100;
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
  display: flex;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 860px;
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
  font-size: var(--font-m);
  &:hover,
  :active {
    color: ${theme.color.green};
  }

  @media (min-width: 750px) {
    font-size: var(--font-l);
  }
  @media (min-width: 1100px) {
    font-size: var(--font-xl);
  }
`;

const StyledPiArrowLeftLight = styled(PiArrowLeftLight)`
  transform: scale(0.8);
`;

const StyledPiArrowRightLight = styled(PiArrowRightLight)`
  transform: scale(0.8);
`;
