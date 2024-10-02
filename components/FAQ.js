import styled from "styled-components";
import { theme } from "@/styles";
import { useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";

export default function FAQ() {
  const [isOpen, setIsOpen] = useState([false, false, false, false, false, false, false]);

  const faqData = [
    {
      caption: "Vorgespräch",
      question: "Welche Vorbereitung ist für ein Shooting erforderlich?",
      answer: "Unsere Corporate Branding Fotografie ...",
    },
    {
      caption: "Dienstleistungen",
      question: "Was bietet ihr neben der Fotografie noch an?",
      answer: "Mit individuellen Business-Porträts ...",
    },
    {
      caption: "Lieferung",
      question: "Wie lange dauert es, bis wir die fertigen Bilder erhalten?",
      answer: "Zeigt die Menschen hinter eurer Marke ...",
    },
    {
      caption: "Preise",
      question: "Wie gestalten sich Eure Preise?",
      answer: "Unsere Event-Fotografie ...",
    },
    {
      caption: "Zeiten",
      question: "Arbeitet ihr auch am Wochenende?",
      answer: "Unser Team produziert ...",
    },
    {
      caption: "Termin",
      question: "Wie weit im Voraus kann ich einen Termin buchen?",
      answer: "Unser Team produziert ...",
    },
    {
      caption: "Buchung",
      question: "Ich komme nicht aus Hamburg, kann ich euch dennoch buchen?",
      answer: "Unser Team produziert ...",
    },
  ];

  const toggleOverlay = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      // Close other items
      return newState.map((item, i) => (i === index ? item : false));
    });
  };

  return (
    <StyledFAQContainer>
      <StyledUl>
        <StyledHeadlineContainer>
          <h1>Die Häufigsten Fragen</h1>
        </StyledHeadlineContainer>
        {faqData.map((faq, index) => (
          <StyledLiGroup key={index} className={isOpen[index] ? "open" : ""}>
            <StyledGroup>
              <StyledGroupChild1>
                <StyledCaption>{faq.caption}</StyledCaption>
                <StyledSpanBold>{faq.question}</StyledSpanBold>
              </StyledGroupChild1>
              <StyledPlusIcon
                className={isOpen[index] ? "rotate" : ""}
                onClick={() => toggleOverlay(index)}
              />
            </StyledGroup>
            {isOpen[index] && <StyledOverlayParagraph>{faq.answer}</StyledOverlayParagraph>}
          </StyledLiGroup>
        ))}
      </StyledUl>
    </StyledFAQContainer>
  );
}

const StyledPlusIcon = styled(PiArrowUpRight)`
  margin-left: 1rem;
  transform: scale(1.2);
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  &.rotate {
    transform: rotate(180deg);
  }
`;

const StyledFAQContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: ${theme.spacing.l} 0;

  background-color: ${theme.darkBackgroundColor};
  color: ${theme.highlightColor};
  margin-bottom: -0.5rem;
`;

const StyledHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  margin: 0rem 2rem 2rem 0rem;
  width: 100%;

  h1 {
    font-size: ${theme.fontSizes.l};
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.bold};
  }
`;

const StyledCaption = styled.h4`
  text-transform: uppercase;
  font-weight: ${theme.fontWeight.light};
  width: 200px;
  margin: 0;
`;

const StyledSpanBold = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 1rem;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${theme.spacing.xxl};
`;

const StyledLiGroup = styled.li`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.xl};
  background-color: ${theme.defaultBackgroundColor};
  color: ${theme.defaultTextColor};
  transition: background-color 0.3s ease, color 0.3s ease;
  border-top: 1px solid ${theme.highlightColor};
  border-bottom: 1px solid ${theme.highlightColor};
  &.open {
    background-color: ${theme.highlightColor};
    color: ${theme.textColor};
  }
`;

const StyledGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledGroupChild1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space;
  gap: ${theme.spacing.xl};
`;

const StyledOverlayParagraph = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: 200;
  margin: 1rem 0 0 0;
  padding-left: 15.1rem;
  background-color: ${theme.overlayBackgroundColor};
  color: ${theme.overlayTextColor};
  animation-name: slide-animation;
  animation-duration: 0.5s;
  transition: opacity 0.3s ease;

  @keyframes slide-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: fit-content;
      opacity: 1;
    }
  }
`;
