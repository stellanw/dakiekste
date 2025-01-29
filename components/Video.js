import styled from "styled-components";

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
  height: 100vh; /* Füllt den gesamten Bildschirm */
  overflow: hidden;
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
