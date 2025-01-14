import styled from "styled-components";
import { theme } from "@/styles";
import { useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";

export default function FAQ({ faqData }) {
  const [isOpen, setIsOpen] = useState(Array(faqData.length).fill(false));

  const toggleOverlay = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState.map((item, i) => (i === index ? item : false));
    });
  };

  return (
    <StyledFAQContainer>
      <StyledUl>
        <StyledHeadlineContainer>
          <h2>FAQ</h2>
          <h3>Die Häufigsten Fragen</h3>
        </StyledHeadlineContainer>
        {faqData.map((faq, index) => (
          <StyledLiGroup key={index} className={isOpen[index] ? "open" : ""}>
            <StyledGroup>
              <StyledGroupChild1>
                <StyledCaption>{faq.caption}</StyledCaption>
              </StyledGroupChild1>
              <StyledGroupChild2 key={index} className={isOpen[index] ? "open" : ""}>
                <StyledQuestionIconGroup>
                  <StyledQuestion>{faq.question}</StyledQuestion>
                  <StyledArrowIcon
                    className={isOpen[index] ? "rotate" : ""}
                    onClick={() => toggleOverlay(index)}
                  />
                </StyledQuestionIconGroup>
                {isOpen[index] && <StyledOverlayParagraph>{faq.answer}</StyledOverlayParagraph>}
              </StyledGroupChild2>
            </StyledGroup>
          </StyledLiGroup>
        ))}
        <li></li>
      </StyledUl>
    </StyledFAQContainer>
  );
}

const StyledArrowIcon = styled(PiArrowUpRight)`
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
  background-color: ${theme.color.dark};
  color: ${theme.color.beige};
  margin: 0;
  margin-bottom: -0.5rem;
  padding: ${theme.spacing.xs} 0;
`;

const StyledHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  margin: 0 0 ${theme.spacing.xl} 0;
  width: 100%;
`;

const StyledCaption = styled.h5`
  min-width: 180px;
  margin: 0;
  padding: 0;
`;

const StyledQuestion = styled.span`
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

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${theme.spacing.xxl};

  li {
    border-top: 1px solid ${theme.color.beige};
  }

  @media (min-width: 750px) {
    width: 80%;
  }
  @media (min-width: 1100px) {
    width: 60%;
  }
`;

const StyledLiGroup = styled.li`
  display: flex;
  flex-direction: column;
`;

const StyledGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const StyledGroupChild1 = styled.div`
  padding: ${theme.spacing.l} 0 ${theme.spacing.l} ${theme.spacing.l};

  @media (max-width: 750px) {
    display: none;
  }
`;

const StyledGroupChild2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${theme.spacing.l} ${theme.spacing.l} ${theme.spacing.l} 0;
  transition: background-color 0.3s ease, color 0.3s ease;
  &.open {
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }

  @media (max-width: 750px) {
    padding: ${theme.spacing.m};
  }
`;

const StyledQuestionIconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const StyledOverlayParagraph = styled.p`
  padding: ${theme.spacing.m} 0 0 0;
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
