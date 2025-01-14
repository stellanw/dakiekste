import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "@/styles";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function Workflow({ boxData = [] }) {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
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
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    nextArrow: <StyledIoChevronForwardOutline />,
    prevArrow: <StyledIoChevronBackOutline />,
  };

  return (
    <StyledSlideContainer>
      <StyledTextBox>
        <h2>Sorgloser Ablauf</h2>
        <h3>Konzentriere dich auf das Wesentliche während wir uns um den Rest kümmern.</h3>
      </StyledTextBox>
      <StyledSlider {...settings}>
        {boxData.map(({ Icon, title, text }, index) => (
          <StyledBox key={index}>
            <StyledIconWrapper>
              <Icon />
            </StyledIconWrapper>
            <h4>{title}</h4>
            <p>{text}</p>
          </StyledBox>
        ))}
      </StyledSlider>
    </StyledSlideContainer>
  );
}

const StyledSlideContainer = styled.div`
  background-color: ${theme.color.dark};
  padding: ${theme.spacing.xxxxl} 5rem ${theme.spacing.xxxxl} 5rem;
`;

const StyledSlider = styled(Slider)`
  padding: ${theme.spacing.l} 0 0 0;
  .slick-slide {
    display: flex;
    justify-content: center;
    padding: ${theme.spacing.s};
    box-sizing: border-box;
  }
  .slick-dots {
    & li {
      button {
        &::before {
          color: ${theme.color.lightGreen};
        }
      }
      &.slick-active {
        button::before {
          color: ${theme.color.green};
        }
      }
    }
  }
`;

const StyledIoChevronForwardOutline = styled(IoChevronForwardOutline)`
  color: ${theme.color.beige};

  &:hover {
    color: ${theme.color.green};
  }
`;

const StyledIoChevronBackOutline = styled(IoChevronBackOutline)`
  color: ${theme.color.beige};

  &:hover {
    color: ${theme.color.green};
  }
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${theme.color.beige};
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  text-align: center;
  color: ${theme.color.beige};
  padding: 0 ${theme.spacing.m} 0 ${theme.spacing.m};
  width: 250px;
`;

const StyledIconWrapper = styled.div`
  font-size: ${theme.fontSizes.xxxl};
  margin: 0 0 ${theme.spacing.xs} 0;
  color: ${theme.color.green};
  display: block;
`;
