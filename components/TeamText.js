import { theme } from "@/styles";
import styled from "styled-components";

export default function TeamText({ topline, headline, text }) {
  return (
    <StyledDoubleTextBox>
      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h3>{headline}</h3>
        <p>{text}</p>
      </StyledTextWrapper>
    </StyledDoubleTextBox>
  );
}

const StyledDoubleTextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: ${theme.color.beige};
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${theme.spacing.mobile.height.xxl} ${theme.spacing.mobile.side};
  width: 100%;
  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.xxl} ${theme.spacing.tablet.side};
    max-width: 70%;
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.xxl} ${theme.spacing.desktop.side};
    max-width: 50%;
  }
`;
