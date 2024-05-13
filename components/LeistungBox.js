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
      for (let i = 0; i < newState.length; i++) {
        if (i !== index) {
          newState[i] = false;
        }
      }
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
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <span>02</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline onClick={() => toggleOverlay(1)} />
          </StyledLi>
          {isOpen[1] && (
            <StyledOverlayParagraph>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <span>03</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline onClick={() => toggleOverlay(2)} />
          </StyledLi>
          {isOpen[2] && (
            <StyledOverlayParagraph>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </StyledOverlayParagraph>
          )}
          <StyledLi>
            <span>04</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline onClick={() => toggleOverlay(3)} />
          </StyledLi>
          {isOpen[3] && (
            <StyledOverlayParagraph>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </StyledOverlayParagraph>
          )}
        </StyledUl>
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledImage
          src="/images/Klubstudio.png"
          alt="image of person working"
          layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          objectFit="cover"
        />
      </StyledRightContainer>
    </StyledLeistungContainer>
  );
}

const StyledLeistungContainer = styled.section`
  display: flex;
  flex-direction: row;

  width: 100%;
  max-height: 800px;
  margin: 0;
  padding: 0;

  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColorBeige};
  margin-bottom: -0.5rem;
  @media (max-width: 750px) {
    flex-direction: column;
    max-height: 2000px;
  }
`;

const StyledLeftContainer = styled.div`
  padding: 2rem;
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  @media (max-width: 750px) {
    margin: auto;
  }
`;

const StyledRightContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 800px;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledHeadline = styled.h1`
  padding-bottom: 1rem;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  font-weight: 300;
  max-width: 500px;
`;

const StyledSpanBold = styled.span`
  font-weight: 800;
`;

const StyledUl = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 250px;
  max-width: 500px;

  padding: 0;

  height: 500px;
`;

const StyledLi = styled.li`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 2rem;
`;

const StyledOverlayParagraph = styled.p`
  font-weight: 200;
  padding-top: 0.5rem;
  margin: -1rem 2rem 0 2rem;
  height: 100px;
  background-color: ${theme.primaryColor};
  border-top: solid white 1px;
  height: fit-content;
  animation-name: slide-animation;
  animation-duration: 0.5s;

  @keyframes slide-animation {
    0% {
      height: 0;
      opacity: -2;
    }
    100% {
      height: fit-content;
      opacity: 1;
    }
  }
`;
