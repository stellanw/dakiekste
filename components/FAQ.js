import styled from "styled-components";
import { theme } from "@/styles";
import { useMemo, useState, useEffect, useRef } from "react";
import { PiPlus, PiMinus } from "react-icons/pi";

export default function FAQ({ faqData = [] }) {
  const [activeCaption, setActiveCaption] = useState("Allgemein");
  const [openIndex, setOpenIndex] = useState(null);

  const listRef = useRef(null);
  const itemRefs = useRef([]);

  const centerItem = (index, { behavior = "auto" } = {}) => {
    const container = listRef.current;
    const el = itemRefs.current[index];
    if (!container || !el) return;

    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();

    const target = container.scrollTop + (eRect.top - cRect.top) + eRect.height / 2 - container.clientHeight / 2;

    container.scrollTo({ top: Math.max(target, 0), behavior });
  };

  const captions = useMemo(() => {
    const set = new Set(faqData.map((f) => f.caption).filter(Boolean));
    return [...Array.from(set), "Alle"];
  }, [faqData]);

  const filteredFaqs = useMemo(() => {
    return faqData.filter((f) => activeCaption === "Allgemein" || f.caption === activeCaption);
  }, [faqData, activeCaption]);

  useEffect(() => {
    itemRefs.current = [];
  }, [filteredFaqs]);

  useEffect(() => {
    setOpenIndex(null);
  }, [activeCaption]);

  const toggleOverlay = (index) => setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    if (openIndex == null) return;

    centerItem(openIndex, { behavior: "auto" });
    const t = setTimeout(() => centerItem(openIndex, { behavior: "auto" }), 180); // feinjustage
    return () => clearTimeout(t);
  }, [openIndex, filteredFaqs]);

  return (
    <FAQContainer>
      <FAQHeader>
        <h2>FAQ</h2>
        <h3>Die häufigsten Fragen</h3>
      </FAQHeader>

      <FilterBar role="tablist" aria-label="FAQ Kategorien">
        {captions.map((cap) => {
          const active = activeCaption === cap;
          return (
            <FilterChip key={cap} role="tab" aria-selected={active} $active={active} onClick={() => setActiveCaption(cap)}>
              {cap}
            </FilterChip>
          );
        })}
      </FilterBar>

      <FAQList ref={listRef}>
        {filteredFaqs.map((faq, index) => (
          <FAQItem key={`${faq.caption}-${faq.question}`} $isOpen={openIndex === index} ref={(el) => (itemRefs.current[index] = el)}>
            <FAQItemContent $isOpen={openIndex === index}>
              <h2>{faq.caption}</h2>
              <FAQItemDetails>
                <FAQQuestionWrapper>
                  <FAQQuestion $isOpen={openIndex === index} onClick={() => toggleOverlay(index)}>
                    {faq.question}
                  </FAQQuestion>
                  <ToggleIcon $isOpen={openIndex === index} onClick={() => toggleOverlay(index)}>
                    {openIndex === index ? <PiMinus /> : <PiPlus />}
                  </ToggleIcon>
                </FAQQuestionWrapper>
                {openIndex === index && <AnswerOverlay>{faq.answer}</AnswerOverlay>}
              </FAQItemDetails>
            </FAQItemContent>
          </FAQItem>
        ))}
        {filteredFaqs.length === 0 && <EmptyState>Keine Fragen in dieser Kategorie.</EmptyState>}
      </FAQList>
    </FAQContainer>
  );
}

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
  max-width: var(--max-content);
  h3 {
    font-weight: ${theme.fontWeight.bold};
  }
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  width: 100%;
  max-width: var(--max-content);
  margin-bottom: var(--spacing-l);

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: space-between;
  }
`;

const FilterChip = styled.button`
  appearance: none;
  width: 140px;
  border: 1px solid ${({ $active }) => ($active ? theme.color.green : theme.color.beige)};
  background: ${({ $active }) => ($active ? theme.color.green : "transparent")};
  color: ${({ $active }) => ($active ? theme.color.dark : theme.color.beige)};
  padding: calc(0.4 * var(--spacing-s)) var(--spacing-s);
  border-radius: calc(0.5 * ${theme.borderRadius});
  font-size: var(--font-m);
  letter-spacing: 0.04em;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 48%;
  }

  &:hover {
    border-color: ${theme.color.green};
    color: ${({ $active }) => ($active ? theme.color.dark : theme.color.green)};
  }

  &:active {
    border-color: ${theme.color.green};
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 1px ${theme.color.green},
      0 0 0 1px ${theme.color.green};
  }
`;

const FAQList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: var(--max-content);
  max-height: 300px;
  overflow-y: scroll;
  border-right: solid 1px ${theme.color.beige};
  padding-right: var(--spacing-m);
  scroll-behavior: auto;
  overscroll-behavior: contain;
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding-right: var(--spacing-xl);
    max-height: 350px;
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

const EmptyState = styled.p`
  opacity: 0.7;
  padding: var(--spacing-m) 0;
`;

const FAQItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${({ $isOpen }) => ($isOpen ? theme.color.green : "transparent")};
  color: ${({ $isOpen }) => ($isOpen ? theme.color.dark : "inherit")};
  border-radius: ${({ $isOpen }) => ($isOpen ? theme.borderRadius : "0")};
  h2 {
    min-width: 200px;
    margin: 0;
    padding: ${({ $isOpen }) => ($isOpen ? "var(--spacing-m) 0 var(--spacing-m) var(--spacing-m)" : "var(--spacing-m) 0")};
    @media (max-width: ${theme.breakpoints.tablet}) {
      display: none;
    }
  }
`;

const FAQQuestion = styled.span`
  font-size: var(--font-m);
  font-weight: ${({ $isOpen }) => ($isOpen ? theme.fontWeight.bold : theme.fontWeight.light)};
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-weight: ${({ $isOpen }) => ($isOpen ? theme.fontWeight.bold : theme.fontWeight.light)};
    font-size: var(--font-l);
  }

  cursor: pointer;
`;

const FAQItemContent = styled.div`
  display: flex;
  width: 100%;
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
  animation: slide-animation 1s ease;
  margin-top: var(--spacing-s);
  padding-right: var(--spacing-m);
  overflow: hidden;
  font-weight: ${theme.fontWeight.light};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: var(--font-s);
    padding: 0;
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

const ToggleIcon = styled.div`
  margin-left: var(--spacing-m);
  font-size: var(--spacing-s);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ $isOpen }) => ($isOpen ? theme.color.dark : theme.color.beige)};
  transition: color 0.3s ease;
  align-self: ${({ $isOpen }) => ($isOpen ? "flex-start" : "center")};
  &:hover {
    color: ${({ $isOpen }) => ($isOpen ? theme.color.dark : theme.color.green)};
    svg {
      stroke-width: 1.5;
      scale: 1.1;
    }
  }

  svg {
    pointer-events: none;
  }
`;
