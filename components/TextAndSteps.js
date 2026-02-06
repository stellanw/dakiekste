// components/TextAndSteps.js

import styled from "styled-components";
import { theme } from "@/styles";

export default function TextAndSteps({ topline = "", headline = "", intro = "", steps = [], ariaLabel = "" }) {
  const hasSteps = Array.isArray(steps) && steps.length > 0;

  return (
    <Outer>
      <Inner>
        <Header>
          {topline && <h2>{topline}</h2>}
          {headline && <h3>{headline}</h3>}
          {intro && <Intro>{intro}</Intro>}
        </Header>

        {hasSteps && (
          <List role="list" aria-label={ariaLabel}>
            {steps.map((s, idx) => (
              <Item key={`${idx}-${s.title || "step"}`}>
                <Marker aria-hidden="true">
                  <Number>{String(idx + 1).padStart(2, "0")}</Number>
                  {idx < steps.length - 1 && <Line />}
                </Marker>

                <Content>
                  {s.title && <StepTitle>{s.title}</StepTitle>}
                  {s.text && <StepText>{s.text}</StepText>}
                </Content>
              </Item>
            ))}
          </List>
        )}
      </Inner>
    </Outer>
  );
}

/* ================= STYLES ================= */

const Outer = styled.section`
  width: 100%;
  background: ${theme.color.beige};
  padding: var(--spacing-xxl) var(--side-padding);
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: var(--spacing-xxl) var(--side-padding) var(--spacing-xl) var(--side-padding);
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--max-content);
  margin: 0 auto;
  gap: var(--spacing-xxl);

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: var(--side-padding);
  }
`;

const Header = styled.div`
  flex: 1;
  h2 {
  }

  h3 {
    margin: 0;
  }
`;

const Intro = styled.p`
  white-space: pre-line;
  margin: var(--spacing-s) 0 0 0;
  max-width: 820px;
`;

const List = styled.ul`
  flex: 1;
  list-style: none;
  margin: 0;

  display: grid;
  gap: var(--spacing-m);
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: var(--spacing-m);
  align-items: start;

  grid-template-columns: 48px 1fr;
  gap: var(--spacing-s);
`;

const Marker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2px;
`;

const Number = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${theme.color.dark};
  color: ${theme.color.dark};
  background: transparent;

  font-size: var(--font-s);
  letter-spacing: 0.06rem;
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 38px;
    height: 38px;
  }
`;

const Line = styled.div`
  width: 1px;
  flex: 1;
  background: ${theme.color.dark};
  opacity: 0.25;
  margin-top: var(--spacing-xs);
  min-height: 40px;
`;

const Content = styled.div`
  background: ${theme.color.dark};
  color: ${theme.color.beige};
  border-radius: ${theme.borderRadius};
  padding: var(--spacing-m) var(--spacing-l);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: var(--spacing-m);
  }
`;

const StepTitle = styled.h4`
  margin: 0 0 var(--spacing-xs) 0;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

const StepText = styled.p`
  margin: 0;
  opacity: 0.9;
`;
