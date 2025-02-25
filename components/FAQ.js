import styled from "styled-components";
import { theme } from "@/styles";
import { useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";

export default function FAQ({ faqData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOverlay = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQHeader>
        <h2>FAQ</h2>
        <h3>Die Häufigsten Fragen</h3>
      </FAQHeader>
      <FAQList>
        {faqData.map((faq, index) => (
          <FAQItem key={index} isOpen={openIndex === index}>
            <FAQItemContent isOpen={openIndex === index}>
              <FAQCaption>{faq.caption}</FAQCaption>
              <FAQItemDetails>
                <FAQQuestionWrapper>
                  <FAQQuestion>{faq.question}</FAQQuestion>
                  <ArrowIcon onClick={() => toggleOverlay(index)} isOpen={openIndex === index} />
                </FAQQuestionWrapper>
                {openIndex === index && <AnswerOverlay>{faq.answer}</AnswerOverlay>}
              </FAQItemDetails>
            </FAQItemContent>
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
}

const ArrowIcon = styled(PiArrowUpRight)`
  margin-left: 1rem;
  transform: scale(1.3);
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.1s ease;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(180deg) scale(1.3);

  `}
`;

const FAQContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${theme.color.dark};
  color: ${theme.color.beige};
  margin: 0;

  padding: ${theme.spacing.mobile.height.xl} ${theme.spacing.mobile.side};

  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.xl} ${theme.spacing.tablet.side};
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.xl} ${theme.spacing.desktop.side};
  }
`;

const FAQHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: ${theme.spacing.xl};
  width: 100%;

  h3 {
    font-weight: ${theme.fontWeight.lightBold};
  }
`;

const FAQCaption = styled.h5`
  min-width: 280px;
  margin: 0;
  padding: ${theme.spacing.l} 0 ${theme.spacing.l} ${theme.spacing.l};

  @media (max-width: 750px) {
    display: none;
  }
`;

const FAQQuestion = styled.span`
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${theme.fontSizes.xs};

  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.xs};
  }
  @media (min-width: 1100px) {
    font-size: ${theme.fontSizes.s};
  }
`;

const FAQList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 450px;
  overflow-y: scroll;
  border-right: solid 1px ${theme.color.beige};
  padding-right: ${theme.spacing.m};
  @media (min-width: 750px) {
    padding-right: ${theme.spacing.xxl};
  }

  @media (min-width: 1100px) {
    padding-right: ${theme.spacing.xxl};
  }

  li {
    border-top: 1px solid ${theme.color.beige};
  }

  &::-webkit-scrollbar {
    width: 2px; /* Breite der vertikalen Scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Hintergrund der Track */
    border-radius: 0px; /* Kein Border-Radius für den Track */
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.beige};
    border-radius: 0px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.green};
  }
  //angeblich für Safari und Firefox
  /* & {
    scrollbar-width: thin; // Optionen: auto, thin, none
    scrollbar-color: ${theme.color.green} ${theme.color.beige}; // thumb color, track color
  } */
`;

const FAQItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${({ isOpen }) => (isOpen ? theme.color.green : "transparent")};
  color: ${({ isOpen }) => (isOpen ? theme.color.dark : "inherit")};
`;

const FAQItemContent = styled.div`
  display: flex;
  width: 100%;
  align-items: ${({ isOpen }) => (isOpen ? "start" : "center")};
`;

const FAQItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${theme.spacing.s};
  @media (min-width: 750px) {
    padding: ${theme.spacing.l};
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.l};
  }
`;

const FAQQuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AnswerOverlay = styled.p`
  animation: slide-animation 0.5s ease;
  margin-top: ${theme.spacing.m};
  overflow: hidden;

  @keyframes slide-animation {
    0% {
      max-height: 0;
      opacity: 0;
    }
    100% {
      max-height: 1000px;
      opacity: 1;
    }
  }
`;
