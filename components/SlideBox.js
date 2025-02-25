import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "@/styles";

export default function SlideBox({ boxData = [], headline1, headline2, autoplay }) {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1100) {
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
    autoplay,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    swipeToSlide: true,
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
        {boxData.map(({ label, title, text }, index) => (
          <StyledBox key={index}>
            <span>{label || `0${index + 1}`}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </StyledBox>
        ))}
      </StyledSlider>
      <InteractiveProgressBar>
        {boxData.map((_, index) => (
          <ProgressSegment key={index} isActive={index === currentSlide} onClick={() => goToSlide(index)} />
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
  position: relative;
  padding: ${theme.spacing.xxl} 0;

  /* transform: translateX(${theme.spacing.mobile.side}); */
  @media (min-width: 750px) {
    padding: ${theme.spacing.xxl} 0;
    transform: translateX(+8rem);
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxl} 0;
    transform: translateX(+10rem);
  }

  .slick-slide {
    display: flex;
    justify-content: center;

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
  margin: auto;

  h3 {
    text-transform: capitalize;
    line-height: ${theme.lineHeight.xxxl};
    padding: ${theme.spacing.xs} ${theme.spacing.mobile.side};
    margin: 0 0 ${theme.spacing.m} 0;
    font-weight: ${theme.fontWeight.bold};
    @media (min-width: 750px) {
      padding: ${theme.spacing.xs} 0;
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
  padding: 0 ${theme.spacing.mobile.side};

  span {
    text-transform: uppercase;
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeight.m};
    font-weight: ${theme.fontWeight.regular};
    @media (min-width: 750px) {
      line-height: ${theme.lineHeight.l};
      font-size: ${theme.fontSizes.m};
      font-size: ${theme.fontSizes.xs};
    }

    @media (min-width: 1100px) {
      line-height: ${theme.lineHeight.xxl};
      font-size: ${theme.fontSizes.s};
    }
  }
`;

const InteractiveProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 30%;
  height: 1px;
  background-color: ${theme.color.beige};
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  @media (max-width: 750px) {
    max-width: 50%;
  }
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
