import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function SplitTextBoxReverse({ topline, headline, text, url, imageDescription }) {
  return (
    <StyledSplitTextBoxReverse>
      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h3>{headline}</h3>
        <p>{text}</p>
      </StyledTextWrapper>

      <StyledImageContainer>
        <StyledImage src={url} alt={imageDescription} width={500} height={500} />
        <GradientOverlay />
      </StyledImageContainer>
    </StyledSplitTextBoxReverse>
  );
}

const StyledSplitTextBoxReverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: ${theme.color.beige};
  @media (min-width: 750px) {
    flex-direction: row-reverse;
  }
  @media (min-width: 1100px) {
    flex-direction: row-reverse;
  }
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${theme.spacing.xxxl} ${theme.spacing.xl};

  @media (min-width: 750px) {
    padding: ${theme.spacing.xxxl} ${theme.spacing.xxl};
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 50%;
  @media (min-width: 750px) {
    max-width: 50%;
  }

  @media (min-width: 1100px) {
    max-width: 50%;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  position: relative;
  width: 100%;
  height: 100%;

  @media (min-width: 750px) {
    position: absolute;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(249, 248, 242, 0.5) 100%);
  pointer-events: none;
  overflow: hidden;
`;
