import { theme } from "@/styles";
import styled from "styled-components";
import { IoPeopleOutline, IoLogoInstagram, IoCameraOutline } from "react-icons/io5";
import { PiUsersLight, PiCameraLight, PiInstagramLogoLight } from "react-icons/pi";

export default function Leistungen() {
  const leistungenData = [
    {
      Icon: PiCameraLight,
      title: "CORPORATE FOTOGRAFIE",
      text: "Setze auf nahbare Fotos, um Vertrauen aufzubauen und deine Marke klar zu präsentieren. Setze auf nahbare Fotos, um Vertrauen aufzubauen und deine Marke klar zu präsentieren.",
    },
    {
      Icon: PiUsersLight,
      title: "Mitarbeiter*innen & Buisness portraits",
      text: "Zeige dein Team und baue ein starkes und einheitliches Markenimage auf. Zeige dein Team und baue ein starkes und einheitliches Markenimage auf.",
    },
    {
      Icon: PiInstagramLogoLight,
      title: "Social Media Content",
      text: "Individuelle Fotos vermitteln mehr Persönlichkeit als typische Stockfotos. Individuelle Fotos vermitteln mehr Persönlichkeit als typische Stockfotos.",
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
  background-color: ${theme.secondaryColorDust};
  padding: ${theme.spacing.xxxxl} 0 ${theme.spacing.xxxxl} 0;
  @media (min-width: 750px) {
  }
  @media (min-width: 1100px) {
  }
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
    @media (min-width: 750px) {
    }
    @media (min-width: 1100px) {
    }
  }

  p {
    font-size: ${theme.fontSizes.s};
    font-weight: 100;
    line-height: ${theme.lineHeight.l};

    @media (min-width: 750px) {
    }
    @media (min-width: 1100px) {
    }
  }
`;

const StyledIconWrapper = styled.div`
  font-size: ${theme.fontSizes.xxxl};
  color: ${theme.highlightColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 ${theme.spacing.sm} 0;
`;
