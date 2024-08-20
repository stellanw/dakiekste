import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "@/styles";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoMegaphoneOutline,
  IoPeopleOutline,
  IoLogoInstagram,
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
        <h1>Sorgloser Ablauf</h1>
        <p>
          Konzentriere dich auf das Wesentliche während wir uns um den Rest
          kümmern.
        </p>
      </StyledTextBox>
      <StyledSlider {...settings}>
        <StyledBox>
          <StyledIoBulbOutline />
          <h1>
            ERSTGESPRÄCH &
            <br />
            KONZEPTION
          </h1>
          <p>
            {" "}
            Mit einer detaillierten Analyse deiner Werte und Ziele entwickeln
            wir eine Strategie die deine Positionierung klar stärkt.
          </p>
        </StyledBox>
        <StyledBox>
          <StyledIoCameraReverseOutline />
          <h1>
            SHOOTING, ABLAUF &
            <br />
            ORGANISATION
          </h1>
          <p>
            {" "}
            Wir erstellen Briefings & Timetables, organisieren alles fürs
            Shooting und kümmern uns um Styling, Setdesign und ums Hair &
            Make-up.
          </p>
        </StyledBox>
        <StyledBox>
          <StyledIoFingerPrintOutline />
          <h1>
            HOCHWERTIGES
            <br />
            VISUELLES FOOTAGE
          </h1>
          <p>
            {" "}
            Die fertigen, professionell bearbeiteten Fotos stehen dir zeitnah
            zur Verfügung und sind sofort für alle Kanäle einsatzbereit.
          </p>
        </StyledBox>
      </StyledSlider>
    </StyledSlideContainer>
  );
}

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

const StyledSlideContainer = styled.div`
  background-color: ${theme.darkBackgroundColor};

  padding: 3rem 2rem 3rem 2rem;
`;

const StyledSlider = styled(Slider)`
  padding: 3rem 0 0 0;
  .slick-slide {
    display: flex;
    justify-content: center;
    padding: 1rem;
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

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${theme.secondaryColorBeige};
  h1 {
    font-size: ${theme.fontSizes.small};
    text-transform: uppercase;
    margin: 0 0 1rem 0;
    font-weight: 400;
  }
  p {
    font-size: ${theme.fontSizes.xl};
    max-width: 600px;
    font-weight: 300;
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  text-align: center;
  color: ${theme.secondaryColorBeige};
  padding: 0 2rem 0 2rem;
  width: 200px;

  h1 {
    font-size: ${theme.fontSizes.small};
    width: 200px;
    text-transform: uppercase;
  }

  p {
    font-size: ${theme.fontSizes.xs};
    margin-top: 1.5rem;
    width: 200px;
    line-height: 1.2rem;
  }
`;

const StyledIoBulbOutline = styled(IoBulbOutline)`
  font-size: 3rem;
  width: 200px;
  margin: 0 0 1.5rem 0;
  color: ${theme.highlightColor};
  display: block;
`;

const StyledIoCameraReverseOutline = styled(IoCameraReverseOutline)`
  font-size: 3rem;
  width: 200px;
  margin: 0 0 1.5rem 0;
  color: ${theme.highlightColor};
  display: block;
`;

const StyledIoFingerPrintOutline = styled(IoFingerPrintOutline)`
  font-size: 3rem;
  width: 200px;
  margin: 0 0 1.5rem 0;
  color: ${theme.highlightColor};
  display: block;
`;
