import { theme } from "@/styles";
import Image from "next/legacy/image";
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
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: ${theme.color.beige};
  overflow-x: hidden;
  padding: ${theme.spacing.mobile.height.xxl} 0;
  gap: ${theme.spacing.mobile.height.xl};
  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.xxl} 0;
    flex-direction: row;
    gap: 0;
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.xxl} 0;
    flex-direction: row;
    gap: 0;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0 ${theme.spacing.mobile.side};

  @media (min-width: 750px) {
    padding: 0 ${theme.spacing.tablet.side};
    width: 50%;
  }

  @media (min-width: 1100px) {
    padding: 0 ${theme.spacing.desktop.side};
    width: 50%;
  }
`;
