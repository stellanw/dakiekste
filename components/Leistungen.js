import { theme } from "@/styles";
import styled from "styled-components";
import { PiUsersLight, PiCameraLight, PiInstagramLogoLight } from "react-icons/pi";
import leistungen from "../data/leistungen.json";

export default function Leistungen() {
  const icons = [PiCameraLight, PiUsersLight, PiInstagramLogoLight];

  return (
    <StyledLeistungenContainer>
      {leistungen.map(({ title, text }, index) => {
        const Icon = icons[index];
        return (
          <StyledLeistungBox key={index}>
            <StyledIconWrapper>
              <Icon />
            </StyledIconWrapper>
            <h1>{title}</h1>
            <p>{text}</p>
          </StyledLeistungBox>
        );
      })}
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
  padding: ${theme.spacing.l} ${theme.spacing.m} ${theme.spacing.l} ${theme.spacing.m};
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
