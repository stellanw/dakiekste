import { theme } from "@/styles";
import Image from "next/legacy/image";
import styled from "styled-components";

export default function ImageTextBox({ topline, headline, text1, text2, image, alt, flexflow }) {
  return (
    <StyledImageTextBox $flexflow={flexflow}>
      <StyledImageContainer>
        <StyledImage src={image} alt={alt} fill />
      </StyledImageContainer>

      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h3>{headline}</h3>
        <p>
          {text1}
          <br />
          <br />
          {text2}
        </p>
      </StyledTextWrapper>
    </StyledImageTextBox>
  );
}

const StyledImageTextBox = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: ${theme.color.beige};
  @media (min-width: 750px) {
    flex-flow: ${({ $flexflow }) => $flexflow || "row"};
  }
  @media (min-width: 1100px) {
    flex-flow: ${({ $flexflow }) => $flexflow || "row"};
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${theme.spacing.mobile.height.xxl} ${theme.spacing.mobile.side};
  width: 100%;
  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.xxl} ${theme.spacing.tablet.side};
    width: 50%;
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.xxl} ${theme.spacing.desktop.side};
    width: 50%;
  }
`;

const StyledImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100%;
  aspect-ratio: 1 / 1;
  padding: 0;
  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.side};
    width: 50%;
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.side};
    width: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    height: 20%;
    width: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(249, 248, 242, 0.5) 100%);
    pointer-events: none;
    overflow: hidden;
    left: 50%;
    transform: translate(-50%);
    bottom: 0;
    @media (min-width: 750px) {
      bottom: ${theme.spacing.tablet.side};
    }

    @media (min-width: 1100px) {
      bottom: ${theme.spacing.desktop.side};
    }
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
