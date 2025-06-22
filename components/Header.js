import styled, { keyframes } from "styled-components";
import { theme } from "@/styles";
import { PiArrowDownLight } from "react-icons/pi";

const bounce = keyframes`
0% {
  transform: translateY(0);
}
30% {
  transform: translateY(-10px);
}
50% {
  transform: translateY(0);
}
70% {
  transform: translateY(-5px);
}
100% {
  transform: translateY(0);
}
`;

export default function Header({ videoSrc, src, headlineThin, headlineBold1, headlineBold2, headline2 }) {
  return (
    <>
      {/* <StyledHeadContainer src={src}> */}
      <StyledHeadContainer>
        <VideoBackground autoPlay loop muted playsInline>
          <source src="/videos/Klubstudio_video.mp4" type="video/mp4" />
          Dein Browser unterstützt das Video-Tag nicht.
        </VideoBackground>
        <StyledHeadlineContainer>
          <h2>VISUAL CONTENT DER SICHTBAR MACHT</h2>
          <h1>
            WER GESEHEN WIRD
            <br />
            GESTALTET MIT
          </h1>
        </StyledHeadlineContainer>
        <StyledPiArrowDownLight />
      </StyledHeadContainer>
    </>
  );
}

// const StyledHeadContainer = styled.div`
//   display: flex;
//   position: relative;
//   justify-content: start;
//   align-items: end;
//   z-index: 0;
//   width: 100%;
//   height: 400px;
//   background-image: url(${(props) => props.src});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;

//   @media (min-width: 750px) {
//     height: 600px;
//   }
//   @media (min-width: 1100px) {
//     height: 800px;
//   }
// `;

const StyledHeadContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: start;
  align-items: end;
  width: 100%;
  height: 400px;
  overflow: hidden;
  height: ${theme.height.mobile};
  @media (min-width: 750px) {
    height: ${theme.height.tablet};
  }
  @media (min-width: 1100px) {
    height: ${theme.height.desktop};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background: rgba(0, 0, 0, 0.3);  //optionales overlay
    z-index: 1;
  }
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

const StyledHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: start;
  /* left: ${theme.spacing.mobile.side};
  bottom: ${theme.spacing.xl}; */
  /* top: 50%; */
  /* left: 50%; */
  z-index: 2;
  bottom: ${theme.spacing.xxl};
  left: ${theme.spacing.mobile.side};
  @media (min-width: 750px) {
    margin: 0;
    left: ${theme.spacing.tablet.side};
    bottom: ${theme.spacing.xxl};
  }
  @media (min-width: 1100px) {
    margin: 0;
    left: ${theme.spacing.desktop.side};
    bottom: ${theme.spacing.xxl};
  }

  h1 {
    margin: 0 0 -10px -6px;
    color: ${theme.color.beige};
    text-transform: uppercase;
  }
  h2 {
    margin: 0 0 -5px -6px;
    color: ${theme.color.beige};
    text-transform: uppercase;
  }
  span {
    font-weight: 200;
    width: 100%;
  }
`;

const StyledPiArrowDownLight = styled(PiArrowDownLight)`
  position: absolute;
  left: 50%;
  bottom: 4rem;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.color.beige};

  animation: ${bounce} 3s ease infinite;

  @media (max-width: 750px) {
    display: none;
  }
`;
