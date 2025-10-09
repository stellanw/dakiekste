import { theme } from "@/styles";
import styled from "styled-components";

export default function TeamText({ topline, headline, text }) {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <StyledTextWrapper>
          <h2>{topline}</h2>
          <h3>{headline}</h3>
          <p>{text}</p>
        </StyledTextWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.section`
  width: 100%;
  background-color: ${theme.color.beige};
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--max-content);
  margin: 0 auto;
  padding: var(--spacing-xxxl) var(--side-padding) var(--spacing-xxl) var(--side-padding);
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 535px;
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 50%;
  }
`;
