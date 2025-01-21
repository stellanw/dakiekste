import { theme } from "@/styles";
import styled from "styled-components";
import { PiUsersLight, PiCameraLight, PiInstagramLogoLight } from "react-icons/pi";

export default function Leistungen({ leistungen }) {
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
            <h4>{title}</h4>
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
  background-color: ${theme.color.dark};
  padding: ${theme.spacing.xxxl} ${theme.spacing.xl} ${theme.spacing.xxxl} ${theme.spacing.xl};
  @media (min-width: 750px) {
    padding: ${theme.spacing.xxxxl} 0 ${theme.spacing.xxxxl} 0;
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl} ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }
`;

const StyledLeistungBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${theme.color.beige};
  padding: ${theme.spacing.l} ${theme.spacing.m} ${theme.spacing.l} ${theme.spacing.m};
  overflow: hidden;
  max-width: 300px;
`;

const StyledIconWrapper = styled.div`
  font-size: ${theme.fontSizes.xxxl};
  color: ${theme.color.green};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 ${theme.spacing.sm} 0;
`;
