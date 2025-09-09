import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function ImageTextBox({ topline, headline, text1, image, alt, flexflow }) {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <StyledImageTextBox $flexflow={flexflow}>
          <StyledImageContainer $flexflow={flexflow}>
            <ImageBox>
              <StyledImage src={image} alt={alt} fill quality={100} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" />
            </ImageBox>
          </StyledImageContainer>

          <StyledTextWrapper>
            <h2>{topline}</h2>
            <h3>{headline}</h3>
            <p>{text1}</p>
          </StyledTextWrapper>
        </StyledImageTextBox>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  width: 100%;
  background-color: ${theme.color.beige};
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--max-content);
  margin: 0 auto;
  padding: var(--spacing-xl) 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0;
  }
`;

const StyledImageTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: ${({ $flexflow }) => $flexflow || "row"};
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--spacing-xxxl) var(--side-padding);
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    min-width: 50%;
    max-width: 50%;
    padding: var(--side-padding);
  }

  p {
    max-width: var(--max-text);
  }
`;

const StyledImageContainer = styled.div`
  display: grid;
  place-items: ${({ $flexflow }) => ($flexflow === "row-reverse" ? "end" : "start")};
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin: var(--side-padding);
    width: 50%;
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 684px; */
  aspect-ratio: 684 / 598;
  border-radius: ${theme.borderRadius};
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-radius: 0;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
