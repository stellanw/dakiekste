import styled from "styled-components";
import Image from "next/image";

export default function ImageElement({ image, alt }) {
  return (
    <ImageElementContainer>
      <ImageWrapper>
        <StyledImage src={image} alt={alt} fill quality={100} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" />
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
  position: relative;
  width: 100%;
  height: var(--height-hero);
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
