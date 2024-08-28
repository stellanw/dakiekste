import { theme } from "@/styles";
import styled from "styled-components";
import { IoPeopleOutline, IoLogoInstagram, IoCameraOutline } from "react-icons/io5";

export default function Leistungen() {
  const leistungenData = [
    {
      Icon: IoCameraOutline,
      title: "CORPORATE FOTOGRAFIE",
      text: "Setze auf nahbare Fotos, um Vertrauen aufzubauen und deine Marke klar zu präsentieren.",
    },
    {
      Icon: IoPeopleOutline,
      title: "Mitarbeiter*innen & Buisness portraits",
      text: "Zeige dein Team und baue ein starkes und einheitliches Markenimage auf.",
    },
    {
      Icon: IoLogoInstagram,
      title: "Social Media Content",
      text: "Individuelle Fotos vermitteln mehr Persönlichkeit als typische Stockfotos.",
    },
  ];

  return (
    <StyledLeistungenContainer>
      {leistungenData.map(({ Icon, title, text }, index) => (
        <StyledLeistungBox key={index}>
          <StyledIconWrapper>
            <Icon />
          </StyledIconWrapper>
          <h1>{title}</h1>
          <p>{text}</p>
        </StyledLeistungBox>
      ))}
    </StyledLeistungenContainer>
  );
}

const StyledLeistungenContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${theme.darkBackgroundColor};
  padding: ${theme.spacing.xxxl} 0 ${theme.spacing.xxxl} 0;
`;

const StyledLeistungBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${theme.secondaryColorBeige};
  padding: ${theme.spacing.m} ${theme.spacing.m} ${theme.spacing.m} ${theme.spacing.m};
  overflow: hidden;
  max-width: 300px;

  h1 {
    font-size: ${theme.fontSizes.m};
    text-transform: uppercase;
    font-weight: 500;
  }

  p {
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeight.s};
    margin-top: ${theme.spacing.m};
    font-weight: 100;
  }
`;

const StyledIconWrapper = styled.div`
  font-size: ${theme.fontSizes.xxxl};
  height: 100px;
  color: ${theme.highlightColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
