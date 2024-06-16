import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "@/styles";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function WorkflowSlider() {
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

    // Initial call to set slidesToShow based on current screen width
    handleResize();

    // Add event listener to update slidesToShow on window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
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
    autoplaySpeed: 8000,
    pauseOnHover: true,
    swipe: true,
    nextArrow: <StyledIoChevronForwardOutline />,
    prevArrow: <StyledIoChevronBackOutline />,
  };

  return (
    <StyledSlideContainer>
      <StyledH1>UNSER WORKFLOW</StyledH1>
      <StyledH1>SCHRITT FÜR SCHRITT</StyledH1>
      <StyledSlider {...settings}>
        <StyledBox>
          <StyledHeadline>
            SCHRITT 1 <br />
            VORBEREITUNG
          </StyledHeadline>

          <StyledUl>
            <StyledLi>Kennenlernen</StyledLi>
            <StyledLi>Konzepterstellung & Planung</StyledLi>
            <StyledLi>Locationscouting</StyledLi>
            <StyledLi>Erstellung eines Timetables</StyledLi>
            <StyledLi>Erstellung eines Posing-Guides</StyledLi>
          </StyledUl>
          <StyledText>
            Bevor wir beginnen, nehmen wir uns Zeit für ein persönliches
            Kennenlernen, um eure Vision und Wünsche zu besprechen. Wir
            erstellen ein Konzept oder Moodboard, besichtigen die Fotolocation
            bei Bedarf und organisieren auf Wunsch das Make-Up und Styling durch
            passende Artists.
          </StyledText>
        </StyledBox>

        <StyledBox>
          <StyledHeadline>02 MAKE-UP UND STYLING</StyledHeadline>
          <StyledUl>
            <StyledLi>Make-Up & Styling vor dem Shooting</StyledLi>
            <StyledLi>Besprechung der Garderobe</StyledLi>
          </StyledUl>
          <StyledText>
            Zu Beginn des Shootings wirst du von unseren erfahrenen Hair &
            Make-Up Artists empfangen, die für das passende Make-Up sorgen.
            Gemeinsam besprechen wir deine Garderobe im Detail, um
            sicherzustellen, dass sie perfekt zum gewünschten Stil der Fotos
            passt. Das schafft eine entspannte Atmosphäre, bevor wir mit dem
            Shooting beginnen.
          </StyledText>
        </StyledBox>

        <StyledBox>
          <StyledHeadline>03 DAS SHOOTING</StyledHeadline>

          <StyledUl>
            <StyledLi>Lichtset-up</StyledLi>
            <StyledLi>Durchführung des Shootings</StyledLi>
            <StyledLi>Anleitung durch verschiedene Posings</StyledLi>
            <StyledLi>Gemeinsame Vorauswahl der Fotos</StyledLi>
          </StyledUl>
          <StyledText>
            Wir beginnen mit dem Einrichten des Lichtset-ups für optimale
            Ergebnisse. Während des Shootings leiten wir dich durch verschiedene
            Posen, um sicherzustellen, dass wir die besten Aufnahmen erzielen.
            Unser Fokus liegt darauf, eine entspannte Atmosphäre zu schaffen,
            damit du im Flow bist und authentisch wirken kannst. Nach dem
            Shooting treffen wir eine erste gemeinsame Auswahl der besten Fotos,
            um sicherzustellen, dass eure Favoriten berücksichtigt werden.
          </StyledText>
        </StyledBox>

        <StyledBox>
          <StyledHeadline>04 FOTORETUSCHE UND LOOK</StyledHeadline>

          <StyledUl>
            <StyledLi>Finale Foto-Auswahl treffen</StyledLi>
            <StyledLi>Fotoretusche und Farbanpassung (Look)</StyledLi>
          </StyledUl>
          <StyledText>
            Sobald du deine Favoriten ausgewählt hast, starten wir mit der
            finalen Postproduktion. Dabei werden die Fotos bearbeitet, um einen
            einheitlichen Look gemäß deinen Wünschen zu erzielen, inklusive
            Basic Beautyretusche und Farbanpassung. Die fertigen Fotos stellen
            wir anschließend in einer passwortgeschützten Online-Galerie zum
            Download bereit.
          </StyledText>
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
  height: 600px;
  border-radius: 15px;
`;

const StyledHeadline = styled.h3`
  color: ${theme.secondaryColorPurple};
  padding: 0 0 1rem 0;
`;

const StyledText = styled.p`
  color: ${theme.secondaryColorPurple};
  padding-top: 1.5rem;
`;

const StyledUl = styled.ul``;

const StyledLi = styled.li`
  list-style: inside;
  color: ${theme.secondaryColorPurple};
  padding: 0.4rem 0rem 0.5rem 0rem;
`;
