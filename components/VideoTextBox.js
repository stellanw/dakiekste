import { theme } from "@/styles";
import styled from "styled-components";
import { PiArrowRightLight } from "react-icons/pi";

export default function VideoTextBox({ topline, headline, text1, text2, videoSrc, flexflow, posterSrc }) {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <StyledVideoTextBox $flexflow={flexflow}>
          <StyledVideoContainer $flexflow={flexflow}>
            <VideoBox>
              <StyledVideo src={videoSrc} controls playsInline preload="metadata" poster={posterSrc} />
            </VideoBox>
          </StyledVideoContainer>

          <StyledTextWrapper>
            {topline && <h2>{topline}</h2>}
            {headline && <h3>{headline}</h3>}
            {text1 && <p>{text1}</p>}
            {text2 && (
              <p>
                <StyledPiArrowRightLight />

                {text2}
              </p>
            )}
          </StyledTextWrapper>
        </StyledVideoTextBox>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  width: 100%;
  background-color: ${theme.color.beige};
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--max-content);
  margin: 0 auto;
  padding: var(--spacing-xl) 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0;
  }
`;

const StyledVideoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: ${({ $flexflow }) => $flexflow || "row"};
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--spacing-xxxl) var(--side-padding);
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    min-width: 30%;
    max-width: 30%;
    padding: var(--side-padding) var(--side-padding) var(--side-padding) 0;
  }

  p {
    max-width: var(--max-text);
    padding-bottom: var(--spacing-s);
  }
`;

const StyledVideoContainer = styled.div`
  display: grid;
  place-items: ${({ $flexflow }) => ($flexflow === "row-reverse" ? "end" : "start")};
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin: var(--side-padding);
    width: 60%;
  }
`;

const VideoBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${theme.borderRadius};
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-radius: 0;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const StyledPiArrowRightLight = styled(PiArrowRightLight)`
  margin-right: calc(0.25 * var(--spacing-xs));
  margin-bottom: -2px;

  stroke-width: 8px;
`;
