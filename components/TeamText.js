import { theme } from "@/styles";
import styled from "styled-components";
import { PiPhone } from "react-icons/pi";
import { PiEnvelopeSimple } from "react-icons/pi";

export default function TeamText({ topline, headline, text }) {
  return (
    <StyledTextBox>
      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h3>{headline}</h3>
        <p>{text}</p>

        {/* <ButtonContainer>
          <Button>
            <PiEnvelopeSimple />
            Schreib uns
          </Button>
          <Button>
            <PiPhone />
            Ruf uns an
          </Button>
        </ButtonContainer> */}
      </StyledTextWrapper>
    </StyledTextBox>
  );
}

const StyledTextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: ${theme.color.beige};
`;

const StyledTextWrapper = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  padding: ${theme.spacing.mobile.height.xxl} ${theme.spacing.mobile.side};
  width: 100%;
  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.xxl} ${theme.spacing.tablet.side};
    max-width: 70%;
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.xxl} ${theme.spacing.desktop.side};
    max-width: 70%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.m};
  padding-top: ${theme.spacing.mobile.height.m};

  @media (min-width: 750px) {
    padding-top: ${theme.spacing.tablet.height.m};
    gap: ${theme.spacing.l};
  }

  @media (min-width: 1100px) {
    padding-top: ${theme.spacing.desktop.height.m};
    gap: ${theme.spacing.l};
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xs};

  border-radius: ${theme.borderRadius};
  border: solid 1.5px ${theme.color.dark};
  padding: ${theme.spacing.xs} ${theme.spacing.m};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.light};

  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.m};
  }

  @media (min-width: 1100px) {
    font-size: ${theme.fontSizes.m};
  }

  &:hover {
    background-color: ${theme.color.green};
  }
`;
