import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function ImageTextBox({ topline, headline, text1, image, alt, flexflow, mobileFlexflow }) {
  return (
    <StyledImageTextBox $flexflow={flexflow} $mobileFlexflow={mobileFlexflow}>
      <StyledImageContainer>
        <StyledImage src={image} alt={alt} fill quality={100} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" />
      </StyledImageContainer>

      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h3>{headline}</h3>
        <p>{text1}</p>
      </StyledTextWrapper>
    </StyledImageTextBox>
  );
}

const StyledImageTextBox = styled.div`
  display: flex;
  flex-direction: ${({ $mobileFlexflow }) => $mobileFlexflow || "column"};
  width: 100%;
  background-color: ${theme.color.beige};

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: ${({ $flexflow }) => $flexflow || "row"};
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--spacing-xxl) var(--side-padding);

  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: var(--side-padding);
    padding: calc(2 * var(--spacing-xxl)) var(--side-padding);
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 50%;
    padding: var(--side-padding);
  }
`;

const StyledImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;

  @media (min-width: ${theme.breakpoints.tablet}) {
    aspect-ratio: 3 / 2;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin: var(--side-padding);
    width: 50%;
    aspect-ratio: 1 / 1;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-radius: 0;
  }
`;
