import styled, { keyframes } from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";

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
          Wir bieten euch mit unserem Know-how in der Business-Fotografie alle
          Arten von Fotografie, um euch und euer Unternehmen optimal zu
          präsentieren. Ob Fotos für eure Image-Kampagne, Bilder für eure
          Webseite, Mitarbeiterfotos oder Firmenevents – mit Dakiekste habt ihr
          ein starkes Team an eurer Seite, das euch bestmöglich ins Licht rückt.
        </StyledParagraph>
        <StyledUl>
          <StyledLi>
            <span>01</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <StyledIoAddOutline onClick={() => toggleOverlay(0)} />
          </StyledLi>
          {isOpen[0] && (
            <StyledOverlayParagraph>
              Unsere Branding- und Corporate-Fotografie verleiht eurer Marke ein
              unverwechselbares Gesicht. Wir erstellen professionelle und
              authentische Fotos, die eure Unternehmenswerte und -visionen
              widerspiegeln. Zeigt euren Kunden, wofür ihr steht, und stärkt
              eure Marke visuell.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <span>02</span> <StyledSpanBold>BUSINESS PORTRAITS</StyledSpanBold>{" "}
            <StyledIoAddOutline onClick={() => toggleOverlay(1)} />
          </StyledLi>
          {isOpen[1] && (
            <StyledOverlayParagraph>
              Wir setzen euch und eure Führungskräfte mit individuellen
              Business-Portraits perfekt in Szene. Authentische und
              professionelle Bilder vermitteln Kompetenz und Vertrauen. Ideal
              für Webseiten, Geschäftsberichte und PR-Materialien.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <span>03</span>{" "}
            <StyledSpanBold>MITARBEITER*INNEN FOTOS</StyledSpanBold>{" "}
            <StyledIoAddOutline onClick={() => toggleOverlay(2)} />
          </StyledLi>
          {isOpen[2] && (
            <StyledOverlayParagraph>
              Hochwertige Fotos eurer Mitarbeiter*innen stärken das
              Gemeinschaftsgefühl und präsentieren euer Team von seiner besten
              Seite. Zeigt die Menschen hinter eurer Marke und schafft eine
              persönliche Verbindung zu euren Kunden.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <span>04</span> <StyledSpanBold>EVENT FOTOGRAFIE</StyledSpanBold>{" "}
            <StyledIoAddOutline onClick={() => toggleOverlay(3)} />
          </StyledLi>
          {isOpen[3] && (
            <StyledOverlayParagraph>
              Unsere Event-Fotografie hält die besonderen Momente eurer
              Firmenveranstaltungen fest. Ob Konferenzen, Feiern oder
              Produktpräsentationen – wir fangen die Atmosphäre und Highlights
              ein, sodass ihr die Erinnerungen lange bewahren könnt.
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

const StyledIoAddOutline = styled(IoAddOutline)`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.4);
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
  padding: 2rem;
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
`;

const StyledOverlayParagraph = styled.p`
  font-weight: 200;
  padding: 0.5rem 3rem 0 3rem;
  margin: -1rem 2rem 0 2rem;
  height: 100px;
  background-color: ${theme.primaryColor};
  border-top: solid white 1px;
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
