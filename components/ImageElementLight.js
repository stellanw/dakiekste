import styled from "styled-components";
import Image from "next/legacy/image";
import { theme } from "@/styles";

export default function ImageElement({ image, alt }) {
  return (
    <ImageElementContainer>
      <ImageWrapper>
        <StyledImage src={image} alt={alt} fill />
      </ImageWrapper>
    </ImageElementContainer>
  );
}

const ImageElementContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  padding: 0;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: var(--side-padding) var(--side-padding);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  height: var(--height-hero);
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};

  @media (max-width: 750px) {
    border-radius: 0;
  }
`;
