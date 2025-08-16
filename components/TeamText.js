import { theme } from "@/styles";
import styled from "styled-components";
import { PiPhone, PiEnvelopeSimple } from "react-icons/pi";

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
  width: 100%;
  background-color: ${theme.color.beige};
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: var(--spacing-xxxl) var(--side-padding) var(--spacing-xxl) var(--side-padding);

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 70%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-m);
  padding-top: var(--spacing-m);

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding-top: var(--spacing-l);
    gap: var(--spacing-l);
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);

  border-radius: ${theme.borderRadius};
  border: solid 1.5px ${theme.color.dark};
  padding: var(--spacing-xs) var(--spacing-m);
  font-size: var(--font-s);
  font-weight: ${theme.fontWeight.light};

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: var(--font-m);
  }

  &:hover {
    background-color: ${theme.color.green};
  }
`;
