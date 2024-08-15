import { theme } from "@/styles";
import styled from "styled-components";
import {
  IoMegaphoneOutline,
  IoPeopleOutline,
  IoLogoInstagram,
  IoCameraOutline,
} from "react-icons/io5";

export default function Leistungen() {
  return (
    <StyledLeistungenContainer>
      <StyledLeistungBox>
        {/* <StyledIoMegaphoneOutline /> */}
        <StyledIoCameraOutline />
        <h1>
          CORPORATE <br />
          FOTOGRAFIE
        </h1>
        <p>
          {" "}
          Setze auf nahbare Fotos, um Vertrauen aufzubauen und deine Marke klar
          zu präsentieren.
        </p>
      </StyledLeistungBox>
      <StyledLeistungBox>
        <StyledIoPeopleOutline />
        <h1>Mitarbeiter*innen & Buisness portraits</h1>
        <p>
          {" "}
          Zeige dein Team und baue ein starkes und einheitliches Markenimage
          auf. recruiting
        </p>
      </StyledLeistungBox>
      <StyledLeistungBox>
        <StyledIoLogoInstagram />
        <h1>
          Social Media <br />
          Content
        </h1>
        <p>
          {" "}
          Individuelle Fotos vermitteln mehr Persönlichkeit als typische
          Stockfotos.
        </p>
      </StyledLeistungBox>
    </StyledLeistungenContainer>
  );
}

const StyledLeistungenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: ${theme.darkBackgroundColor};
  padding-top: 4rem;
  padding-bottom: 6rem;
`;

const StyledLeistungBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${theme.secondaryColorBeige};
  padding-left: 2rem;
  padding-right: 2rem;

  h1 {
    font-size: ${theme.fontSizes.small};
    width: 200px;
    text-transform: uppercase;
  }

  p {
    font-size: ${theme.fontSizes.xs};
    margin-top: 1.5rem;
    width: 200px;
  }
`;

const StyledIoMegaphoneOutline = styled(IoMegaphoneOutline)`
  transform: scale(3);
  height: 100px;
  color: ${theme.highlightColor};
`;

const StyledIoCameraOutline = styled(IoCameraOutline)`
  transform: scale(3);
  height: 100px;
  color: ${theme.highlightColor};
`;

const StyledIoPeopleOutline = styled(IoPeopleOutline)`
  transform: scale(3);
  height: 100px;
  color: ${theme.highlightColor};
`;

const StyledIoLogoInstagram = styled(IoLogoInstagram)`
  transform: scale(3);
  height: 100px;
  color: ${theme.highlightColor};
`;
