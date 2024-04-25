import styled from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";

export default function LeistungBox() {
  return (
    <StyledLeistungContainer>
      <StyledLeftContainer>
        <h2>HEADLINE ZU UNSEREN TOLLEN LEISTUNGEN</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <StyledUl>
          <StyledLi>
            <span>01</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline />
          </StyledLi>
          <StyledLi>
            <span>02</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline />
          </StyledLi>
          <StyledLi>
            <span>03</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline />
          </StyledLi>
          <StyledLi>
            <span>04</span>{" "}
            <StyledSpanBold>BRANDING + CORPORATE</StyledSpanBold>{" "}
            <IoAddOutline />
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
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const StyledUl = styled.ul`
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly; */
  min-width: 350px;
  max-width: 500px;
  /* margin: auto; */
  padding: 0;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
