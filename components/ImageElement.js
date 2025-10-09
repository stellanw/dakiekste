import styled, { css } from "styled-components";
import Image from "next/image";
import { theme } from "@/styles";

export default function ImageElement({ image, alt, hide }) {
  return (
    <ImageElementContainer $hide={hide}>
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

  ${({ $hide }) => {
    if (!$hide) return "";
    const bpMap = {
      mobile: theme.breakpoints.mobile,
      tablet: theme.breakpoints.tablet,
      desktop: theme.breakpoints.desktop,
    };
    const bp = bpMap[$hide];
    if (!bp) return "";

    // "hide" bedeutet: bis einschließlich dieses Breakpoints ausblenden
    return css`
      @media (max-width: ${bp}) {
        display: none !important;
      }
    `;
  }}
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: var(--height-hero);

  @media (min-width: ${theme.breakpoints.wide}) {
    height: calc(1.5 * var(--height-hero));
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
