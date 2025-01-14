import { theme } from "@/styles";
import styled from "styled-components";
import { PiCarLight, PiCoffeeLight, PiSunLight } from "react-icons/pi";

export default function StudioBox({ topline, headline, text, benefit1, benefit2, benefit3 }) {
  return (
    <StyledDoubleTextBox>
      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h3>{headline}</h3>
        <p>{text}</p>
      </StyledTextWrapper>
      <StyledTextWrapper>
        <StyledIconContainer>
          <StyledBenefit>
            <IconBox>
              <Icon>
                <PiCarLight />
              </Icon>
              <h4>{benefit1}</h4>
            </IconBox>
          </StyledBenefit>
          <StyledBenefit>
            <IconBox>
              <Icon>
                <PiCoffeeLight />
              </Icon>
              <h4>{benefit2}</h4>
            </IconBox>
          </StyledBenefit>
          <StyledBenefit>
            <IconBox>
              <Icon>
                <PiSunLight />
              </Icon>
              <h4>{benefit3}</h4>
            </IconBox>
          </StyledBenefit>
        </StyledIconContainer>
      </StyledTextWrapper>
    </StyledDoubleTextBox>
  );
}

const StyledDoubleTextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: ${theme.color.beige};
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  min-width: 370px;
  max-width: 800px;
  min-height: 400px;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
`;

const StyledIconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const StyledBenefit = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing.m};
  padding: 0 ${theme.spacing.s} 0 ${theme.spacing.s};
  width: 100%;
  h4 {
    text-align: center;
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    width: 60%;
  }
`;

const Icon = styled.div`
  font-size: ${theme.fontSizes.xxxl};
  color: ${theme.color.green};
`;
