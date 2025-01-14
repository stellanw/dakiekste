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
  background-color: ${theme.color.beige};
  padding: ${theme.spacing.xxxl} 0;
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  min-width: 370px;
  max-width: 800px;
  min-height: 400px;
  padding: ${theme.spacing.xxl};
  flex-direction: column;
  justify-content: flex-start;
`;
