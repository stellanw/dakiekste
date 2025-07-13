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
              <h2>{faq.caption}</h2>
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
  margin-left: var(--spacing-m);
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
  padding: var(--spacing-xxxl) var(--side-padding);

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: var(--spacing-xxl) var(--side-padding);
  }
`;

const FAQHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: var(--spacing-xl);
  width: 100%;

  h3 {
    font-weight: ${theme.fontWeight.lightBold};
  }
`;

const FAQList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 450px;
  overflow-y: scroll;
  border-right: solid 1px ${theme.color.beige};
  padding-right: var(--spacing-m);

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding-right: var(--spacing-xxl);
  }

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.beige};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.green};
  }
`;

const FAQItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${({ isOpen }) => (isOpen ? theme.color.green : "transparent")};
  color: ${({ isOpen }) => (isOpen ? theme.color.dark : "inherit")};

  h2 {
    min-width: 280px;
    margin: 0;
    padding: var(--spacing-m) 0 var(--spacing-m) var(--spacing-m);
    font-size: var(--font-s);
    @media (max-width: ${theme.breakpoints.tablet}) {
      display: none;
    }
  }
`;

const FAQQuestion = styled.span`
  font-weight: ${theme.fontWeight.regular};
  font-size: var(--font-m);

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-weight: ${theme.fontWeight.light};
  }
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
  padding: var(--spacing-m);
`;

const FAQQuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AnswerOverlay = styled.p`
  animation: slide-animation 0.5s ease;
  margin-top: var(--spacing-m);
  overflow: hidden;
  font-weight: ${theme.fontWeight.light};

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-weight: ${theme.fontWeight.regular};
  }

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
