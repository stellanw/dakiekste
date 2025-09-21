import { theme } from "@/styles";
import styled from "styled-components";

export default function DoubleTextBox({ topline1, headline1, text1, topline2, headline2, text2 }) {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <StyledDoubleTextBox>
          <StyledTextWrapper>
            <h2>{topline1}</h2>
            <h3>{headline1}</h3>
            <p>{text1}</p>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <h2>{topline2}</h2>
            <h3>{headline2}</h3>
            <p>{text2}</p>
          </StyledTextWrapper>
        </StyledDoubleTextBox>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  width: 100%;
  background-color: ${theme.color.beige};
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--max-content);
  margin: 0 auto;
  padding: var(--spacing-xxl) 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: var(--spacing-xxxl) 0;
  }
`;

const StyledDoubleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: var(--spacing-xxl);

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 0;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: var(--side-padding);

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }

  p {
    max-width: var(--max-text);
  }
`;
