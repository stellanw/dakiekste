import styled from "styled-components";
import { theme } from "@/styles";
import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";

export default function TextSlider({ reviews, autoplay }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
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
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 5000,
    arrows: false,
    fade: false,
    fade: isMobile,
    swipe: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    ref: sliderRef,
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  console.log(reviews[currentSlide]?.screenshot?.src);

  return (
    <TextSliderContainer background={reviews[currentSlide]?.screenshot?.src}>
      <SlideContainer {...settings}>
        {reviews.map((review, index) => (
          <Slide key={index}>
            <h2>{review.client}</h2>
            <p>{review.text}</p>

            <StyledLink href={review.url}>{review.link}</StyledLink>
          </Slide>
        ))}
      </SlideContainer>
      <ProgessBarContainer>
        <InteractiveProgressBar>
          {reviews.map((_, index) => (
            <ProgressSegment
              key={index}
              isActive={index === currentSlide}
              onClick={() => {
                setCurrentSlide(index);
                goToSlide(index);
              }}
            />
          ))}
        </InteractiveProgressBar>
      </ProgessBarContainer>
    </TextSliderContainer>
  );
}

const TextSliderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  width: 100%;
  text-align: center;
  flex-direction: column;

  justify-content: center;
  background-image: ${({ background }) => (background ? `url(${background})` : "none")};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 750px) {
    padding: ${theme.spacing.mobile.height.l} 0;
  }

  @media (min-width: 750px) {
    height: ${theme.height.tablet};
  }

  @media (min-width: 1100px) {
    height: ${theme.height.desktop};
  }

  transition: background-image 2s ease-in-out, opacity 2s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.color.green};
    opacity: ${({ background }) => (background && background.trim() !== "" ? 0.9 : 1)};
    z-index: 1;
  }
`;

const SlideContainer = styled(Slider)`
  position: relative;
  z-index: 2;
  width: 100%;
`;

const Slide = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;

  @media (max-width: 750px) {
    padding: 0 ${theme.spacing.mobile.side};
  }

  p {
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeight.xl};
    font-weight: ${theme.fontWeight.lightBold};
    margin: auto;
    @media (min-width: 750px) {
      font-size: ${theme.fontSizes.l};
      line-height: ${theme.lineHeight.xxl};
      max-width: 60%;
    }
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.xl};
      line-height: ${theme.lineHeight.xxxl};
      max-width: 60%;
    }
  }

  h5 {
    margin-top: ${theme.spacing.mobile.height.s};
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  font-weight: ${theme.fontWeight.lightBold};
  text-transform: uppercase;
  letter-spacing: 0.09rem;
  font-size: ${theme.fontSizes.xxs};
  margin-top: ${theme.spacing.mobile.height.s};

  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.s};
    margin-top: ${theme.spacing.tablet.height.s};
  }
  @media (min-width: 1100px) {
    font-size: ${theme.fontSizes.s};
    margin-top: ${theme.spacing.desktop.height.s};
  }
`;

const ProgessBarContainer = styled.div`
  position: relative;
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: ${theme.spacing.mobile.height.s} ${theme.spacing.mobile.side} 0 ${theme.spacing.mobile.side};

  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.xl} ${theme.spacing.tablet.side} 0 ${theme.spacing.tablet.side};
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.xl} ${theme.spacing.desktop.side} 0 ${theme.spacing.desktop.side};
  }
`;

const InteractiveProgressBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 2;
  margin: auto;

  height: 1px;
  background-color: ${theme.color.dark};
  cursor: pointer;

  @media (min-width: 750px) {
    width: 25%;
  }

  @media (min-width: 1100px) {
    width: 25%;
  }
`;

const ProgressSegment = styled.div`
  flex: 1;
  height: 3px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? theme.color.dark : "transparent")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.color.beige};
  }
`;
