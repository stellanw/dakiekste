import styled from "styled-components";
import { theme } from "@/styles";

export default function Video({ src }) {
  return (
    <StyledContainer>
      <StyledVideo autoPlay loop muted playsInline>
        <source src={src} type="video/mp4" />
        Dein Browser unterstützt das Video-Tag nicht.
      </StyledVideo>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: var(--height-hero);
  overflow: hidden;
  margin: -2px 0;
  @media (min-width: ${theme.breakpoints.wide}) {
    height: calc(1.5 * var(--height-hero));
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
`;
