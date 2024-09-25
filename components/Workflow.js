import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "@/styles";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoBulbOutline,
  IoCameraReverseOutline,
  IoFingerPrintOutline,
} from "react-icons/io5";

export default function Workflow() {
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
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    nextArrow: <StyledIoChevronForwardOutline />,
    prevArrow: <StyledIoChevronBackOutline />,
  };

  const boxData = [
    {
      Icon: IoBulbOutline,
      title: "ERSTGESPRÄCH & KONZEPTION",
      text: "Mit einer detaillierten Analyse deiner Werte und Ziele entwickeln wir eine Strategie die deine Positionierung klar stärkt.",
    },
    {
      Icon: IoCameraReverseOutline,
      title: "SHOOTING, ABLAUF & ORGANISATION",
      text: "Wir erstellen Briefings & Timetables, organisieren alles fürs Shooting und kümmern uns um Styling, Setdesign und ums Hair & Make-up.",
    },
    {
      Icon: IoFingerPrintOutline,
      title: "HOCHWERTIGES VISUELLES FOOTAGE",
      text: "Die fertigen, professionell bearbeiteten Fotos stehen dir zeitnah zur Verfügung und sind sofort für alle Kanäle einsatzbereit.",
    },
  ];

  return (
    <StyledSlideContainer>
      <StyledTextBox>
        <h2>Sorgloser Ablauf</h2>
        <h1>Konzentriere dich auf das Wesentliche während wir uns um den Rest kümmern.</h1>
      </StyledTextBox>
      <StyledSlider {...settings}>
        {boxData.map(({ Icon, title, text }, index) => (
          <StyledBox key={index}>
            <StyledIconWrapper>
              <Icon />
            </StyledIconWrapper>
            <h1>{title}</h1>
            <p>{text}</p>
          </StyledBox>
        ))}
      </StyledSlider>
    </StyledSlideContainer>
  );
}

const StyledSlideContainer = styled.div`
  background-color: ${theme.darkBackgroundColor};
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
          color: ${theme.primaryColor};
        }
      }
      &.slick-active {
        button::before {
          color: ${theme.primaryColor};
        }
      }
    }
  }
`;

const StyledIoChevronForwardOutline = styled(IoChevronForwardOutline)`
  color: ${theme.secondaryColorBeige};

  &:hover {
    color: ${theme.highlightColor};
  }
`;

const StyledIoChevronBackOutline = styled(IoChevronBackOutline)`
  color: ${theme.secondaryColorBeige};

  &:hover {
    color: ${theme.highlightColor};
  }
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${theme.secondaryColorBeige};

  h2 {
    text-transform: uppercase;
    margin: 0 0 ${theme.spacing.xs} 0;
    font-weight: 100;
    letter-spacing: 0.09rem;
    font-size: ${theme.fontSizes.xs};

    @media (min-width: 750px) {
    }
    @media (min-width: 1100px) {
    }
  }
  h1 {
    font-size: ${theme.fontSizes.xl};
    font-weight: 400;
    max-width: 700px;
    @media (min-width: 750px) {
    }
    @media (min-width: 1100px) {
    }
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  text-align: center;
  color: ${theme.secondaryColorBeige};
  padding: 0 ${theme.spacing.m} 0 ${theme.spacing.m};
  width: 250px;

  h1 {
    font-size: ${theme.fontSizes.m};
    width: 250px;
    text-transform: uppercase;
    font-weight: 500;
  }

  p {
    font-size: ${theme.fontSizes.xs};
    margin-top: ${theme.spacing.m};
    width: 250px;
    line-height: ${theme.lineHeight.s};
    font-weight: 100;
  }
`;

const StyledIconWrapper = styled.div`
  font-size: 3rem;
  width: 250px;
  margin: 0 0 ${theme.spacing.xs} 0;
  color: ${theme.highlightColor};
  display: block;
`;
