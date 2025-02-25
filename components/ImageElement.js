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

  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.xl} ${theme.spacing.tablet.side};
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.xl} ${theme.spacing.desktop.side};
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  height: ${theme.height.mobile};

  @media (min-width: 750px) {
    height: ${theme.height.tablet};
  }

  @media (min-width: 1100px) {
    height: ${theme.height.desktop};
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};

  @media (max-width: 750px) {
    border-radius: 0;
  }
`;
