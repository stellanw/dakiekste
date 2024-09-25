import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function DoubleTextBox({ topline1, headline1, text1, topline2, headline2, text2 }) {
  return (
    <StyledDoubleTextBox>
      <StyledTextWrapper>
        <h2>{topline1}</h2>
        <h1>{headline1}</h1>
        <p>{text1}</p>
      </StyledTextWrapper>
      <StyledTextWrapper>
        <h2>{topline2}</h2>
        <h1>{headline2}</h1>
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
  background-color: ${theme.brightBackgroundColor};
  padding: ${theme.spacing.xxxl} 0;
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  min-width: 370px;
  max-width: 800px;
  min-height: 400px;
  padding: 4rem;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    text-transform: uppercase;
    margin: 0 0 ${theme.spacing.xs} 0;
    font-weight: 100;
    letter-spacing: 0.09rem;
    font-size: ${theme.fontSizes.xs};

    @media (min-width: 750px) {
    }
    @media (min-width: 1100px) {
    }
  }

  h1 {
    font-size: ${theme.fontSizes.xl};
    text-transform: uppercase;
    font-weight: 800;

    @media (min-width: 750px) {
    }
    @media (min-width: 1100px) {
    }
  }

  p {
    font-size: ${theme.fontSizes.s};
    line-height: 1.3rem;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const StyledImageContainer = styled.div`
  position: relative;
  flex: 1;
  width: 30%;
  min-width: 370px;
  min-height: 500px;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 100%
    );
    pointer-events: none;
  }
`;
