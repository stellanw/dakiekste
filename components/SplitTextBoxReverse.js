import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function SplitTextBoxReverse({
  headline,
  text,
  imageURLs = [],
  imageDescriptions = [],
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
        <h1>{headline}</h1>
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
  background-color: ${theme.secondaryColorBeige};
  height: 600px;
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  min-width: 370px;
  max-width: 700px;
  padding: 4rem 4rem 4rem 4rem;
  margin: auto;

  height: auto;

  h1 {
    font-size: ${theme.fontSizes.large};
    text-transform: uppercase;
    padding-bottom: 1rem;
  }

  p {
    font-size: ${theme.fontSizes.small};
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  flex: 1 1 30%;
  min-width: 370px;
  min-height: 500px;
  max-width: 32%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ImageWrapper = styled.div`
  position: absolute;
  ${({ position }) =>
    position === 0 ? `top: 0; right: 0rem;` : `bottom: 0; left: 0rem;`}
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
      rgba(255, 255, 255, 0.5) 100%
    );
    pointer-events: none;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
