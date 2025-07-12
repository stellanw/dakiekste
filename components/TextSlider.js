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
      setIsMobile(window.innerWidth <= parseInt(theme.breakpoints.tablet));
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
    autoplaySpeed: 6000,
    arrows: false,
    // fade: isMobile,
    fade: false,
    swipe: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    ref: sliderRef,
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <TextSliderContainer>
      <SlideContainer {...settings}>
        {reviews.map((review, index) => (
          <Slide key={index}>
            <SlideContent>
              <h2>{review.client}</h2>
              <p>{review.text}</p>
              <StyledLink href={review.url}>{review.link}</StyledLink>
            </SlideContent>
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
  flex-direction: column;
  position: relative;
  width: 100%;
  text-align: center;
  justify-content: center;
  background-color: ${theme.color.green};
  padding: var(--spacing-xxl) 0;
`;

const SlideContainer = styled(Slider)`
  position: relative;
  z-index: 2;
  width: 100%;

  p {
    font-size: var(--font-l);
    font-weight: ${theme.fontWeight.regular};
    text-transform: none;
    line-height: ${theme.lineHeight.xl};
    letter-spacing: 0.04rem;
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: var(--font-xl);
    }
  }
`;

const Slide = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  padding: 0 var(--side-padding);
`;

const SlideContent = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 60%;
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  font-weight: ${theme.fontWeight.lightBold};
  text-transform: uppercase;
  letter-spacing: 0.09rem;
  font-size: var(--font-m);
  margin-top: var(--spacing-xl);

  &:hover {
    color: ${theme.color.beige};
  }
`;

const ProgessBarContainer = styled.div`
  position: relative;
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var(--spacing-xl) var(--side-padding) 0 var(--side-padding);
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

  @media (min-width: ${theme.breakpoints.tablet}) {
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
