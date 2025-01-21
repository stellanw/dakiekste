import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function SplitTextBoxReverseDoubleImage({
  headline,
  text,
  imageURLs = [],
  imageDescriptions = [],
  topline,
}) {
  return (
    <StyledSplitTextBox>
      <StyledImageContainer>
        {imageURLs.map((url, index) => (
          <ImageWrapper key={index} position={index}>
            <StyledImage
              src={url}
              alt={imageDescriptions[index] || "Image"}
              width={500}
              height={500}
            />
          </ImageWrapper>
        ))}
      </StyledImageContainer>
      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h3>{headline}</h3>
        <p>{text}</p>
      </StyledTextWrapper>
    </StyledSplitTextBox>
  );
}

const StyledSplitTextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: ${theme.color.green};
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  min-width: 370px;
  max-width: 700px;
  padding: ${theme.spacing.xxxl} ${theme.spacing.xl};
  margin: auto;
  height: auto;

  @media (min-width: 750px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  flex: 1 1 30%;
  min-width: 370px;
  min-height: 600px;
  max-width: 32%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ImageWrapper = styled.div`
  position: absolute;
  ${({ position }) => (position === 0 ? `top: 0; right: 0rem;` : `bottom: 0; left: 0rem;`)}
  width: 250px;
  height: 48%;

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
      rgba(249, 248, 242, 0.5) 100%
    );
    pointer-events: none;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
