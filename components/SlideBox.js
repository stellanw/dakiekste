import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "@/styles";

export default function SlideBox({ boxData = [], headline1, headline2 }) {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    focusOnSelect: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    ref: sliderRef,
  };

  // Gehe zu einem bestimmten Slide
  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <StyledSlideBoxContainer>
      <StyledTextBox>
        <h2>{headline1}</h2>
        <h3>{headline2}</h3>
      </StyledTextBox>
      <StyledSlider {...settings} ref={sliderRef}>
        {boxData.map(({ title, text }, index) => (
          <StyledBox key={index}>
            <p>{`0${index + 1}`}</p>
            <h4>{title}</h4>
            <p>{text}</p>
          </StyledBox>
        ))}
      </StyledSlider>
      <InteractiveProgressBar>
        {boxData.map((_, index) => (
          <ProgressSegment
            key={index}
            isActive={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </InteractiveProgressBar>
    </StyledSlideBoxContainer>
  );
}

const StyledSlideBoxContainer = styled.div`
  background-color: ${theme.color.dark};
  padding: ${theme.spacing.xxxl} 0;
  overflow: hidden;
  @media (min-width: 750px) {
    padding: ${theme.spacing.xxxxl} 0;
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxxxl} 0;
  }
`;

const StyledSlider = styled(Slider)`
  padding: ${theme.spacing.xxl} 0;
  @media (min-width: 750px) {
    padding: ${theme.spacing.xxl} 0;
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxl} 0;
  }
  position: relative;
  transform: translateX(+10rem);

  .slick-slide {
    display: flex;
    justify-content: center;
    padding: ${theme.spacing.s};
    box-sizing: border-box;
  }

  .slick-track {
    display: flex;
  }
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${theme.color.beige};
  max-width: 700px;
  margin: auto;
  padding: 0 ${theme.spacing.sm};
  h3 {
    padding: ${theme.spacing.xs} 0;
    margin: 0 0 ${theme.spacing.m} 0;
    font-weight: ${theme.fontWeight.bold};
    @media (min-width: 750px) {
      font-weight: ${theme.fontWeight.bold};
    }

    @media (min-width: 1100px) {
      margin: 0 0 ${theme.spacing.xl} 0;
    }
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  color: ${theme.color.beige};
  padding: 0 ${theme.spacing.m} 0 ${theme.spacing.m};
  max-width: 320px;
`;

const InteractiveProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: 1px;
  background-color: ${theme.color.beige};
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const ProgressSegment = styled.div`
  flex: 1;
  height: 3px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? theme.color.beige : "transparent")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.color.green};
  }
`;
