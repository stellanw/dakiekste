import styled, { keyframes } from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function FAQ() {
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
    <StyledFAQContainer>
      <StyledUl>
        <StyledHeadlineContainer>
          <h1>Häufige Fragen</h1>
        </StyledHeadlineContainer>
        <StyledLi>
          <StyledSpanBold>
            Welche Vorbereitung ist für ein Shooting erforderlich?
          </StyledSpanBold>{" "}
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
          <StyledSpanBold>
            Was bietet ihr neben der Fotografie noch an?
          </StyledSpanBold>{" "}
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
          <StyledSpanBold>
            Wie lange dauert es, bis wir die fertigen Bilder erhalten?
          </StyledSpanBold>{" "}
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
          <StyledSpanBold>Wie gestalten sich Eure Preise?</StyledSpanBold>{" "}
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
          <StyledSpanBold>Arbeitet ihr auch am Wochenende?</StyledSpanBold>{" "}
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
        <StyledLi>
          <StyledSpanBold>
            Wie weit im Voraus kann ich einen Termin buchen?
          </StyledSpanBold>{" "}
          <StyledPlusIcon
            className={isOpen[5] ? "rotate" : ""}
            onClick={() => toggleOverlay(5)}
          />
        </StyledLi>
        {isOpen[5] && (
          <StyledOverlayParagraph>
            Unser Team produziert speziell auf eure Marke zugeschnittenen
            Content für Social Media Kanäle. Mit fesselnden und ansprechenden
            Inhalten helfen wir euch, eure Online-Präsenz zu steigern.
          </StyledOverlayParagraph>
        )}
        <StyledLi>
          <StyledSpanBold>
            Ich komme nicht aus Hamburg, kann ich euch dennoch buchen
          </StyledSpanBold>{" "}
          <StyledPlusIcon
            className={isOpen[6] ? "rotate" : ""}
            onClick={() => toggleOverlay(6)}
          />
        </StyledLi>
        {isOpen[6] && (
          <StyledOverlayParagraph>
            Unser Team produziert speziell auf eure Marke zugeschnittenen
            Content für Social Media Kanäle. Mit fesselnden und ansprechenden
            Inhalten helfen wir euch, eure Online-Präsenz zu steigern.
          </StyledOverlayParagraph>
        )}
      </StyledUl>
    </StyledFAQContainer>
  );
}

const StyledPlusIcon = styled(FaPlus)`
  margin-left: 1rem;
  transform: scale(1.2);
  width: 15px;
  height: 15px;
  flex-shrink: 0;
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

const StyledFAQContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;

  margin: 0;
  padding: 0;

  background-color: ${theme.secondaryColorBeige};
  color: ${theme.textColor};

  margin-bottom: -0.5rem;
  /* @media (max-width: 750px) {
    flex-direction: column;
    max-height: 2000px;
  } */
`;

const StyledHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  margin: 0rem 2rem 2rem 0rem;

  width: 100%;

  h1 {
    font-size: ${theme.fontSizes.xl};
    text-transform: uppercase;
  }
`;

const StyledSpanBold = styled.span`
  font-weight: 600;
  text-transform: uppercase;
`;

const StyledUl = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 250px;
  max-width: 800px;

  padding: 0;
  margin-top: 1rem;
  margin-bottom: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 5rem 2rem 4rem 2rem;
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
  height: fit-content;
  animation-name: slide-animation;
  animation-duration: 0.5s;
  max-width: 600px;
  /* @media (max-width: 400px) {
    margin: -1rem 0rem 0 0rem;
  } */
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
