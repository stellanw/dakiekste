import styled from "styled-components";
import Image from "next/legacy/image";

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
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  height: var(--height-hero);
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
