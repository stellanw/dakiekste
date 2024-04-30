import styled, { keyframes } from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";

export default function LeistungBox() {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  const toggleOverlay = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <StyledLeistungContainer>
      <StyledLeftContainer>
        <StyledHeadline>
          UNSERE LEISTUNGEN
          <br />
          IM ÜBERBLICK
        </StyledHeadline>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </StyledParagraph>
        <StyledUl>
          <StyledLi>
            <span>01</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline onClick={() => toggleOverlay(0)} />
          </StyledLi>
          {isOpen[0] && (
            <StyledOverlayParagraph>
              This is the content for overlay 1. You can customize it as needed.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <span>02</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline onClick={() => toggleOverlay(1)} />
          </StyledLi>
          {isOpen[1] && (
            <StyledOverlayParagraph>
              This is the content for overlay 2. You can customize it as needed.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <span>03</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline onClick={() => toggleOverlay(2)} />
          </StyledLi>
          {isOpen[2] && (
            <StyledOverlayParagraph>
              This is the content for overlay 3. You can customize it as needed.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <span>04</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline onClick={() => toggleOverlay(3)} />
          </StyledLi>
          {isOpen[3] && (
            <StyledOverlayParagraph>
              This is the content for overlay 4. You can customize it as needed.
            </StyledOverlayParagraph>
          )}
        </StyledUl>
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledImage
          width={500}
          height={1200}
          src="/images/PlatzhalterLeistungen.png"
          alt="image of person working"
        />
      </StyledRightContainer>
    </StyledLeistungContainer>
  );
}

const StyledLeistungContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColorBeige};
  margin-bottom: -0.5rem;
  @media (max-width: 700px) {
    flex-wrap: wrap-reverse;
  }
`;

const StyledLeftContainer = styled.div`
  padding: 2rem;
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }

  @media (min-width: 385px) {
    width: 100%;
  }
`;

const StyledHeadline = styled.h1`
  padding-bottom: 1rem;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  font-weight: 300;
`;

const StyledRightContainer = styled.div`
  width: 50%;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (min-width: 385px) {
    width: 100%;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  @media (max-width: 385px) {
    height: 400px;
  }
`;

const StyledSpanBold = styled.span`
  font-weight: 800;
`;

const StyledUl = styled.ul`
  position: relative;
  min-width: 250px;
  max-width: 500px;
  margin: auto;
  padding: 0;

  padding-top: 4rem;
`;

const StyledLi = styled.li`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* overflow: hidden; */
`;

const StyledOverlayParagraph = styled.p`
  font-weight: 200;
  padding-top: 0.5rem;

  height: 100px;
  background-color: ${theme.primaryColor};
  border-top: solid white 1px;

  animation-name: slide-animation;
  animation-duration: 0.5s;

  @keyframes slide-animation {
    0% {
      height: 0;
      opacity: -2;
    }
    100% {
      height: 100px;
      opacity: 1;
    }
  }
`;
