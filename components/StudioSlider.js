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
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
              alt={`Studio Image ${index + 1}`}
              width={1400}
              height={800}
            />
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
  margin-bottom: -0.3rem;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    overflow: hidden !important;
  }
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
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

const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: 3.15rem;
  right: ${theme.spacing.xxl};
  width: 110px;
`;

const Arrow = styled.div`
  position: relative;
  cursor: pointer;
  font-size: ${theme.fontSizes.xl};
  &:hover,
  :active {
    color: ${theme.highlightColor};
  }
`;
