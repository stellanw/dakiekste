import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function ImageTextBox({ topline, headline, text1, image, alt, flexflow }) {
  return (
    <StyledImageTextBox $flexflow={flexflow}>
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
  flex-direction: column;
  width: 100%;
  background-color: ${theme.color.beige};

  @media (min-width: ${theme.breakpoints.tablet}) {
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
    width: 50%;
    padding: var(--side-padding);
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
    margin: var(--side-padding);
    width: 50%;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin: var(--side-padding);
    width: 50%;
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
