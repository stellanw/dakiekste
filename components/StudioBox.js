import { theme } from "@/styles";
import styled from "styled-components";
import { PiCarLight, PiCoffeeLight, PiSunLight } from "react-icons/pi";

export default function StudioBox({ topline, headline, text, benefit1, benefit2, benefit3 }) {
  return (
    <StyledDoubleTextBox>
      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h1>{headline}</h1>
        <p>{text}</p>
      </StyledTextWrapper>
      <StyledTextWrapper>
        <StyledIconContainer>
          <StyledBenefit>
            <IconBox>
              <Icon>
                <PiCarLight />
              </Icon>
              <h3>{benefit1}</h3>
            </IconBox>
          </StyledBenefit>
          <StyledBenefit>
            <IconBox>
              <Icon>
                <PiCoffeeLight />
              </Icon>
              <h3>{benefit2}</h3>
            </IconBox>
          </StyledBenefit>
          <StyledBenefit>
            <IconBox>
              <Icon>
                <PiSunLight />
              </Icon>
              <h3>{benefit3}</h3>
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
  h2 {
    text-transform: uppercase;
    margin: 0 0 ${theme.spacing.xs} 0;
    font-weight: 100;
    letter-spacing: 0.09rem;
    font-size: ${theme.fontSizes.xs};

    @media (min-width: 750px) {
    }
    @media (min-width: 1100px) {
    }
  }

  h1 {
    font-size: ${theme.fontSizes.xl};

    font-weight: 600;

    @media (min-width: 750px) {
    }
    @media (min-width: 1100px) {
    }
  }

  p {
    font-size: ${theme.fontSizes.s};
    line-height: 1.3rem;
    padding: 0 0 ${theme.spacing.m} 0;
  }
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const StyledBenefit = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing.m};

  h3 {
    font-size: ${theme.fontSizes.s};
    text-align: center;
    margin: 0;
    text-transform: uppercase;
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  font-size: ${theme.fontSizes.xxxl};
  color: ${theme.color.green};
`;
