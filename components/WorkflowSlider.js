import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "@/styles";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function WorkflowSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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
      <StyledH1>HEADLINE ZU</StyledH1>
      <StyledH1>UNSEREM WORKFLOW</StyledH1>
      <StyledSlider {...settings}>
        <StyledBox>
          <StyledHeadline>HEADLINE NUMMER 1</StyledHeadline>
          <StyledText>
            Workflow Step 1. Das ist der Workflow erste Schritt.{" "}
          </StyledText>
        </StyledBox>

        <StyledBox>
          <StyledHeadline>HEADLINE NUMMER 2</StyledHeadline>
          <StyledText>Workflow Step 2</StyledText>
        </StyledBox>

        <StyledBox>
          <StyledHeadline>HEADLINE NUMMER 3</StyledHeadline>
          <StyledText>Workflow Step 3</StyledText>
        </StyledBox>

        <StyledBox>
          <StyledHeadline>HEADLINE NUMMER 4</StyledHeadline>
          <StyledText>Workflow Step 4</StyledText>
        </StyledBox>

        <StyledBox>
          <StyledHeadline>HEADLINE NUMMER 5</StyledHeadline>
          <StyledText>Workflow Step 5</StyledText>
        </StyledBox>

        <StyledBox>
          <StyledHeadline>HEADLINE NUMMER 6</StyledHeadline>
          <StyledText>Workflow Step 6</StyledText>
        </StyledBox>
      </StyledSlider>
    </StyledSlideContainer>
  );
}

const StyledIoChevronForwardOutline = styled(IoChevronForwardOutline)`
  color: ${theme.primaryColor};
  opacity: 0.5;

  &:hover {
    color: ${theme.primaryColor};
    opacity: 1;
  }
`;

const StyledIoChevronBackOutline = styled(IoChevronBackOutline)`
  color: ${theme.primaryColor};
  opacity: 0.5;

  &:hover {
    color: ${theme.primaryColor};
    opacity: 1;
  }
`;

const StyledSlideContainer = styled.div`
  background-color: ${theme.secondaryColorPurple};

  padding: 3rem 2rem 3rem 2rem;
`;

const StyledH1 = styled.h1`
  color: ${theme.primaryColor};
  padding: 0 0 0 1rem;
  /* padding-bottom: 3rem; */
`;

const StyledSlider = styled(Slider)`
  padding: 3rem 0 0 0;
  .slick-slide {
    padding: 0 1rem;
    box-sizing: border-box;
  }
  .slick-dots {
    & li {
      button {
        &::before {
          color: ${theme.primaryColor}; // Color for inactive dots
        }
      }
      &.slick-active {
        button::before {
          color: ${theme.primaryColor}; // Color for active dot
        }
      }
    }
  }
`;

const StyledBox = styled.div`
  background-color: ${theme.primaryColor};
  padding: 2rem;
  height: 300px;

  border-radius: 15px;
`;

const StyledHeadline = styled.h3`
  color: ${theme.secondaryColorPurple};
  padding: 0 0 1rem 0;
`;

const StyledText = styled.p`
  color: ${theme.secondaryColorPurple};
`;
