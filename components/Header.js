import styled from "styled-components";
import { theme } from "@/styles";

export default function Header({ videoSrc, src, headlineThin, headlineBold1, headlineBold2 }) {
  return (
    <>
      {/* <StyledHeadContainer src={src}> */}
      <StyledHeadContainer>
        <VideoBackground autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
          Dein Browser unterstützt das Video-Tag nicht.
        </VideoBackground>
        <StyledHeadlineContainer>
          <h1>
            {headlineBold1} <br /> <span>{headlineThin}&nbsp;</span>
            {headlineBold2}
          </h1>
        </StyledHeadlineContainer>
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
  position: relative;
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
  position: absolute;
  left: ${theme.spacing.xl};
  bottom: ${theme.spacing.xl};
  z-index: 2;

  @media (min-width: 750px) {
    margin: 0;
    left: ${theme.spacing.xxl};
    bottom: ${theme.spacing.xxl};
  }
  @media (min-width: 1100px) {
    margin: 0;
    left: ${theme.spacing.xxl};
    bottom: ${theme.spacing.xxl};
  }

  h1 {
    margin: 0 0 -10px -6px;
    color: ${theme.color.beige};
  }
  span {
    font-weight: 200;
    margin: 0 -4px 0 0;
  }
`;
