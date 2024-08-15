import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function SplitTextBox() {
  return (
    <StyledSplitTextBox>
      <StyledTextWrapper>
        <h1>
          Einheitlicher Auftritt <br />
          auf allen Kanälen
        </h1>
        <p>
          {" "}
          Wir bringen die Persönlichkeit deines Unternehmens in Fotos und Videos
          zum Ausdruck. Mit einem durchdachten Konzept stärken wir das Vertrauen
          deiner Wunschkund*innen und machen deine Marke klar erkennbar. Unser
          Ziel ist es, einen passenden Look und einen umfassenden Bild- und
          Videopool zu schaffen, den du selbstständig für deine
          Kommunikations-kanäle nutzen kannst.
        </p>
      </StyledTextWrapper>
      <StyledImageContainer>
        <StyledImage
          src="/images/Herr Raffel_Tisch_1_final.jpg" // Update with your image path
          alt="Description of image"
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
    font-size: ${theme.fontSizes.xs};
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
