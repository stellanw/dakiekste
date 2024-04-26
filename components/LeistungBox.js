import styled from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";

export default function LeistungBox() {
  const [isOpen1, setIsOpen1] = useState(false); // State for first overlay
  const [isOpen2, setIsOpen2] = useState(false); // State for second overlay
  const [isOpen3, setIsOpen3] = useState(false); // State for third overlay
  const [isOpen4, setIsOpen4] = useState(false); // State for fourth overlay

  const toggleOverlay = (index) => {
    switch (index) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      default:
        break;
    }
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
            <IoAddOutline onClick={() => toggleOverlay(1)} />
            {isOpen1 && (
              <OverlayParagraph>
                This is the content for overlay 1. You can customize it as
                needed.
              </OverlayParagraph>
            )}
          </StyledLi>
          <StyledLi>
            <span>02</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline onClick={() => toggleOverlay(2)} />
            {isOpen2 && (
              <OverlayParagraph>
                This is the content for overlay 1. You can customize it as
                needed.
              </OverlayParagraph>
            )}
          </StyledLi>
          <StyledLi>
            <span>03</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline onClick={() => toggleOverlay(3)} />
          </StyledLi>
          <StyledLi>
            <span>04</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline onClick={() => toggleOverlay(4)} />
          </StyledLi>
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

const OverlayParagraph = styled.p`
  position: absolute;
  top: 3.28rem;
  left: -0.06rem;
  height: 200px;
  background-color: ${theme.primaryColor};
  color: white;
  padding: 20px;
  /* border-top: solid white 1px; */
  border-radius: 0 0 5px 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 5;
`;

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
  padding: 4rem;
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
  height: 660px;
  object-fit: cover;
  object-position: center;
  @media (max-width: 385px) {
    height: 400px;
  }
`;

const StyledSpanBold = styled.span`
  font-weight: 800;
`;

const StyledLi = styled.li`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid white 1px;
`;

const StyledUl = styled.ul`
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly; */
  position: relative;
  min-width: 350px;
  max-width: 500px;
  /* margin: auto; */
  padding: 0;
  padding-right: 2rem;
  padding-top: 4rem;
  padding-bottom: 1rem;
`;
