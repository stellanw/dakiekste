import styled, { keyframes } from "styled-components";
import { theme } from "@/styles";
import { PiArrowDownLight } from "react-icons/pi";
import Image from "next/image";
import section01_header_01 from "/public/images/01_Header/branding-fotografie-erneuerbare-energie-dakiekste-01.jpg";

const bounce = keyframes`
  0% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
  50% { transform: translateY(0); }
  70% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

export default function Header({ useImageBackground = false }) {
  return (
    <StyledHeadContainer>
      {useImageBackground ? (
        <ImageBackground src={section01_header_01} alt="Branding Fotografie" layout="fill" />
      ) : (
        <VideoBackground autoPlay loop muted playsInline>
          <source src="/videos/Test.mp4" type="video/mp4" />
          Dein Browser unterstützt das Video-Tag nicht.
        </VideoBackground>
      )}

      <StyledHeadlineContainer>
        <h2>VISUAL CONTENT DER SICHTBAR MACHT</h2>
        <h1>
          WER GESEHEN WIRD
          <br />
          GESTALTET MIT
        </h1>
      </StyledHeadlineContainer>
      {/* <StyledPiArrowDownLight /> */}
    </StyledHeadContainer>
  );
}

const StyledHeadContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: start;
  align-items: end;
  width: 100%;
  overflow: hidden;
  height: var(--height-header);
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

const ImageBackground = styled(Image)`
  object-fit: cover;
  object-position: center;
  z-index: 0;
`;

const StyledHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: start;
  z-index: 2;
  bottom: var(--side-padding);
  left: var(--side-padding);

  h1,
  h2 {
    margin: 0;
    color: ${theme.color.beige};
    text-transform: uppercase;
  }
`;

const StyledPiArrowDownLight = styled(PiArrowDownLight)`
  position: absolute;
  left: 50%;
  bottom: var(--spacing-xl);
  font-size: var(--font-xl);
  color: ${theme.color.beige};
  animation: ${bounce} 3s ease infinite;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;
