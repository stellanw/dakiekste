import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function SplitTextBoxReverse({ topline, headline, text, url, imageDescription }) {
  return (
    <StyledSplitTextBoxReverse>
      <StyledImageContainer>
        <ImageWrapper>
          <StyledImage src={url} alt={imageDescription} width={500} height={500} />
        </ImageWrapper>
      </StyledImageContainer>
      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h3>{headline}</h3>
        <p>{text}</p>
      </StyledTextWrapper>
    </StyledSplitTextBoxReverse>
  );
}

const StyledSplitTextBoxReverse = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: ${theme.color.beige};
`;

const StyledTextWrapper = styled.div`
  flex: 0 0 50%;
  padding: 4rem 4rem 4rem 4rem;
  margin: auto;
`;

const StyledImageContainer = styled.div`
  position: relative;
  flex: 0 0 50%;
  min-height: 600px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ImageWrapper = styled.div`
  /* width: 100%; */
  object-fit: cover;
  overflow: hidden;
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

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
