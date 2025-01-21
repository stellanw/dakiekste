import { theme } from "@/styles";
import styled from "styled-components";

export default function DoubleTextTeam({ topline, headline, text1, text2 }) {
  return (
    <StyledDoubleTextBox>
      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h3>{headline}</h3>
      </StyledTextWrapper>
      <StyledTextWrapper>
        <p>{text1}</p>
        <p>{text2}</p>
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
  padding: ${theme.spacing.xxxl} ${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing.xl};

  @media (min-width: 750px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }

  p {
    padding: 0 0 ${theme.spacing.m} 0;
  }
`;
