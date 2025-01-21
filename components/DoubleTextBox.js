import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function DoubleTextBox({ topline1, headline1, text1, topline2, headline2, text2 }) {
  return (
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
  );
}

const StyledDoubleTextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: ${theme.color.lightGreen};
  padding: 0;
  gap: ${theme.spacing.xl};
  padding: ${theme.spacing.xxxl} ${theme.spacing.xl};
  @media (min-width: 750px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
    gap: ${theme.spacing.xxl};
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
    gap: ${theme.spacing.xxl};
  }
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;
