import React, { useState } from "react";
import styled from "styled-components";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const SliderWrapper = styled.div`
  position: relative;
  padding: 0;
`;

const SliderContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Horizontales Scrollen aktivieren */
`;

const Slide = styled.div`
  flex: 0 0 auto; /* Flex-Elemente bleiben immer gleich breit */
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  width: 100%;
  justify-content: space-between;
  padding-right: 0.2rem;
  padding-left: 0.2rem;
  opacity: 20%;
`;

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <SliderWrapper>
      <SliderContainer>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slide}
          </Slide>
        ))}
      </SliderContainer>
      <ButtonWrapper>
        <IoChevronBackOutline onClick={prevSlide} />
        <IoChevronForwardOutline onClick={nextSlide} />
      </ButtonWrapper>
    </SliderWrapper>
  );
};

export default Slider;
