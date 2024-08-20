import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function SplitTextBox({
  headline,
  text,
  imageURL,
  imageDescription,
}) {
  return (
    <StyledSplitTextBox>
      <StyledTextWrapper>
        <h1>{headline}</h1>
        <p>{text}</p>
      </StyledTextWrapper>
      <StyledImageContainer>
        <StyledImage
          src={imageURL}
          alt={imageDescription}
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
        />
      </StyledImageContainer>
    </StyledSplitTextBox>
  );
}

const StyledSplitTextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-evenly;
  width: 100%;
  background-color: ${theme.brightBackgroundColor};
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  min-width: 370px;
  max-width: 800px;
  padding: 4rem;
  margin: auto;

  h1 {
    font-size: ${theme.fontSizes.large};
    text-transform: uppercase;
    padding-bottom: 1rem;
  }

  p {
    font-size: ${theme.fontSizes.small};
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const StyledImageContainer = styled.div`
  position: relative;
  flex: 1;
  width: 30%;
  min-width: 370px;
  min-height: 500px;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 100%
    );
    pointer-events: none;
  }
`;
