import React, { useState } from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  position: relative;
  padding-top: 2rem;
`;

const SliderContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Horizontales Scrollen aktivieren */
  width: 100%;
`;

const Slide = styled.div`
  flex: 0 0 auto; /* Flex-Elemente bleiben immer gleich breit */
  width: 100%; /* Jeder Slide nimmt die gesamte Breite ein */
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
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
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </ButtonWrapper>
    </SliderWrapper>
  );
};

export default Slider;
