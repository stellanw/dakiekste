import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { theme } from "@/styles";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageSliderLight({ projects, autoplay }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const downRef = useRef(false);
  const startXRef = useRef(0);
  const draggedRef = useRef(false);
  const THRESH = 6;

  const onDown = (e) => {
    downRef.current = true;
    draggedRef.current = false;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    startXRef.current = x ?? 0;
  };
  const onMove = (e) => {
    if (!downRef.current) return;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    if (x != null && Math.abs(x - startXRef.current) > THRESH) draggedRef.current = true;
  };
  const onUp = () => {
    downRef.current = false;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.7) {
          setCurrentSlide(sliderRef.current?.innerSlider?.state.currentSlide || 0);
        }
      },
      { threshold: 0.7 }
    );

    const firstSlide = sliderRef.current?.innerSlider?.list?.firstChild;
    if (firstSlide) observer.observe(firstSlide);

    return () => {
      if (firstSlide) observer.unobserve(firstSlide);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 10,
    autoplay,
    autoplaySpeed: 3200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: false,
    arrows: false,
    swipe: true,
    afterChange: (index) => setCurrentSlide(index),
  };

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  return (
    <SliderWrapper>
      <ArrowContainer>
        <Arrow onClick={prev}>
          <PiArrowLeftLight />
        </Arrow>
        <Arrow onClick={next}>
          <PiArrowRightLight />
        </Arrow>
      </ArrowContainer>

      <StyledSlider ref={sliderRef} {...settings}>
        {projects.map((project, index) => (
          <Slide key={index}>
            <StyledImage src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" quality={100} priority={index === 0} />
            <ClickLayer
              aria-label="Nächstes Bild"
              onClick={() => {
                if (!draggedRef.current) next();
              }}
              onMouseDown={onDown}
              onMouseMove={onMove}
              onMouseUp={onUp}
              onMouseLeave={onUp}
              onTouchStart={onDown}
              onTouchMove={onMove}
              onTouchEnd={onUp}
            />
          </Slide>
        ))}
      </StyledSlider>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  color: ${theme.color.dark};
  height: 100%;
  background-color: ${theme.color.beige};
  z-index: 3;
  padding: var(--spacing-xxl) 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: var(--spacing-xxxl) 0 var(--spacing-xxl) 0;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: var(--spacing-xl);
  right: var(--side-padding);
  width: 100px;
  z-index: 2;

  @media (min-width: ${theme.breakpoints.tablet}) {
    top: var(--spacing-xs);
    right: var(--side-padding);
    width: 120px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    top: var(--spacing-l);
    right: var(--side-padding);
    width: 120px;
  }

  svg {
    stroke-width: 1px;
    font-size: 1.6rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1.2rem;
    }
  }
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${theme.color.beige};
  background-color: ${theme.color.dark};
  cursor: pointer;
  transition:
    background-color 0.1s ease,
    transform 0.1s ease;

  &:hover,
  &:active {
    background-color: ${theme.color.green};
    transform: scale(1.05);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
  }
`;

const StyledSlider = styled(Slider)`
  padding: 0 var(--side-padding);
  width: 100%;

  .slick-dots {
    display: flex;
    position: relative;
    width: 100%;
    gap: 0;
    z-index: 100;
    bottom: calc(-1 * var(--spacing-s));
  }

  .slick-dots li {
    margin: 0 2px;
  }

  .slick-dots li button {
    background-color: ${theme.color.dark};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    opacity: 1;
    transition: opacity 0.3s ease;
    transform: scale(0.5);
  }

  .slick-dots li.slick-active button {
    opacity: 1;
    background-color: ${theme.color.green};
    transform: scale(0.7);
  }

  .slick-dots li button:hover {
    background-color: ${theme.color.green};
    transform: scale(0.65);
  }

  .slick-dots li button::before {
    content: "";
    display: none;
  }

  .slick-dots li:first-child button,
  .slick-dots li:last-child button {
    transform: scale(0.35);
  }
`;

const Slide = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.borderRadius};
  width: 100%;
  height: var(--height-hero);

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-height: var(--height-section);
  }
  @media (min-width: ${theme.breakpoints.wide}) {
    height: calc(1.5 * var(--height-hero));
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 10%;
`;

const ClickLayer = styled.button`
  position: absolute;
  inset: 0;
  z-index: 1;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;
