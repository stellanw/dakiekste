import styled, { keyframes } from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function LeistungBox() {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  const toggleOverlay = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      for (let i = 0; i < newState.length; i++) {
        if (i !== index) {
          newState[i] = false;
        }
      }
      return newState;
    });
  };

  return (
    <StyledLeistungContainer>
      <StyledLeftContainer>
        <StyledHeadline>
          UNSERE LEISTUNGEN
          <br />
          IM ÜBERBLICK
        </StyledHeadline>
        <StyledParagraph>
          Wir bieten ein breites Spektrum an Leistungen, um euer Unternehmen
          optimal zu präsentieren. Ob Image-Kampagne, Webseite, Mitarbeiterfotos
          oder Firmenevents – mit Dakiekste habt ihr ein starkes Team an eurer
          Seite, das euch ins beste Licht rückt.
        </StyledParagraph>
        <StyledUl>
          <StyledLi>
            <StyledSpanBold>CORPORATE BRANDING</StyledSpanBold>{" "}
            <StyledPlusIcon
              className={isOpen[0] ? "rotate" : ""}
              onClick={() => toggleOverlay(0)}
            />
          </StyledLi>
          {isOpen[0] && (
            <StyledOverlayParagraph>
              Unsere Corporate Branding Fotografie visualisiert eure
              Unternehmensidentität und Werte, stärkt eure Markenpräsenz und
              fördert mir einprägsamen Bildern eine emotionale Bindung zu eurer
              Zielgruppe.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <StyledSpanBold>BUSINESS PORTRAITS</StyledSpanBold>{" "}
            <StyledPlusIcon
              className={isOpen[1] ? "rotate" : ""}
              onClick={() => toggleOverlay(1)}
            />
          </StyledLi>
          {isOpen[1] && (
            <StyledOverlayParagraph>
              Mit individuellen Business-Portraits setzen wir euch und eure
              Führungskräfte perfekt in Szene. Authentische Bilder vermitteln
              Kompetenz und Vertrauen für Webseiten, Geschäftsberichte und
              PR-Materialien.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            {" "}
            <StyledSpanBold>MITARBEITER*INNEN FOTOS</StyledSpanBold>{" "}
            <StyledPlusIcon
              className={isOpen[2] ? "rotate" : ""}
              onClick={() => toggleOverlay(2)}
            />
          </StyledLi>
          {isOpen[2] && (
            <StyledOverlayParagraph>
              Zeigt die Menschen hinter eurer Marke mit hochwertigen Fotos eurer
              Mitarbeiter*innen. Wir präsentieren euer Team von seiner besten
              Seite.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <StyledSpanBold>EVENT FOTOGRAFIE</StyledSpanBold>{" "}
            <StyledPlusIcon
              className={isOpen[3] ? "rotate" : ""}
              onClick={() => toggleOverlay(3)}
            />
          </StyledLi>
          {isOpen[3] && (
            <StyledOverlayParagraph>
              Unsere Event-Fotografie hält die besonderen Momente eurer
              Firmenveranstaltungen fest. Ob Konferenzen, Feiern oder
              Produktpräsentationen – wir fangen die besten Momente ein.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <StyledSpanBold>SOCIAL MEDIA CONTENT</StyledSpanBold>{" "}
            <StyledPlusIcon
              className={isOpen[4] ? "rotate" : ""}
              onClick={() => toggleOverlay(4)}
            />
          </StyledLi>
          {isOpen[4] && (
            <StyledOverlayParagraph>
              Unser Team produziert speziell auf eure Marke zugeschnittenen
              Content für Social Media Kanäle. Mit fesselnden und ansprechenden
              Inhalten helfen wir euch, eure Online-Präsenz zu steigern.
            </StyledOverlayParagraph>
          )}
        </StyledUl>
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledImage
          src="/images/Leistungen.jpg"
          alt="image of person working"
          layout="fill"
          // width={1400}
          // height={1400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          objectFit="cover"
        />
      </StyledRightContainer>
    </StyledLeistungContainer>
  );
}

const StyledPlusIcon = styled(FaPlus)`
  transform: scale(1.2);

  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    stroke-width: 10;
  }

  &.rotate {
    transform: rotate(45deg);
    stroke-width: 10;
  }
`;

const StyledLeistungContainer = styled.section`
  display: flex;
  flex-direction: row;

  width: 100%;
  max-height: 800px;
  margin: 0;
  padding: 0;

  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColorBeige};
  margin-bottom: -0.5rem;
  @media (max-width: 750px) {
    flex-direction: column;
    max-height: 2000px;
  }
`;

const StyledLeftContainer = styled.div`
  padding: 4rem;
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  @media (max-width: 750px) {
    margin: auto;
  }
`;

const StyledRightContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 800px;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledHeadline = styled.h1`
  padding-bottom: 1rem;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  font-weight: 300;
  max-width: 500px;
  padding-bottom: 1.5rem;
`;

const StyledSpanBold = styled.span`
  font-weight: 800;
`;

const StyledUl = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 250px;
  max-width: 500px;

  padding: 0;

  height: 500px;
`;

const StyledLi = styled.li`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 2rem;
  padding-left: 0;
  padding-right: 0;
`;

const StyledOverlayParagraph = styled.p`
  font-weight: 200;
  margin: -1rem 0rem 0 0rem;
  height: 100px;
  background-color: ${theme.primaryColor};
  /* border-top: solid white 1px; */
  height: fit-content;
  animation-name: slide-animation;
  animation-duration: 0.5s;

  @media (max-width: 400px) {
    margin: -1rem 0rem 0 0rem;
  }
  @keyframes slide-animation {
    0% {
      height: 0;
      opacity: -2;
    }
    100% {
      height: fit-content;
      opacity: 1;
    }
  }
`;
