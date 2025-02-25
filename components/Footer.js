import Link from "next/link";
import styled from "styled-components";

import { PiEnvelopeSimpleLight, PiInstagramLogoLight, PiMapPinLight } from "react-icons/pi";
import { theme } from "@/styles";

export default function Footer() {
  const email = "info" + "@" + "dakiekste" + ".com";
  const subject = "Anfrage";

  const createMailToLink = () => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <StyledFooter>
      <StyledLeftWrapper>
        <div>
          <StyledLink href="/impressum">
            <StyledImpressum>impressum</StyledImpressum>
          </StyledLink>
        </div>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledLink href={createMailToLink()} target="_blank" rel="noopener noreferrer">
          <StyledIconMail />
        </StyledLink>
        <StyledLink href="https://www.instagram.com/dakiekste_/" target="_blank" rel="noopener noreferrer">
          <StyledIconInsta />
        </StyledLink>
        <StyledLink
          href="https://www.google.com/maps/place/Lienaustra%C3%9Fe+32,+22159+Hamburg/@53.629392,10.1259215,17.04z/data=!4m6!3m5!1s0x47b18a414be2f41d:0x39bdeb585c50610!8m2!3d53.6293927!4d10.1258898!16s%2Fg%2F11c4jnq7nl?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIconMap />
        </StyledLink>
      </StyledRightWrapper>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  bottom: 0;
  flex-shrink: 0;
  width: 100%;
  font-size: 1.2rem;
  margin: 0;
  height: 18rem;
  background-color: ${theme.color.beige};
  padding: 0 ${theme.spacing.mobile.side};

  @media (min-width: 750px) {
    padding: 0 ${theme.spacing.tablet.side};
  }

  @media (min-width: 1100px) {
    padding: 0 ${theme.spacing.desktop.side};
  }
`;

const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.xxl};

  @media (min-width: 750px) {
  }

  @media (min-width: 1100px) {
    gap: ${theme.spacing.m};
  }
`;

const StyledLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: ${theme.spacing.xxl};
`;

const StyledLink = styled(Link)`
  margin-bottom: -0.2rem;
  font-size: ${theme.fontSizes.l};

  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.xxl};
  }

  @media (min-width: 1100px) {
    font-size: ${theme.fontSizes.xxl};
  }
`;

const StyledImpressum = styled.p`
  font-size: 1rem;
  margin: 0;
  padding-top: 1rem;
`;

const StyledIconMail = styled(PiEnvelopeSimpleLight)`
  &:hover {
    color: ${theme.color.green};
    stroke-width: 10;
  }
`;

const StyledIconInsta = styled(PiInstagramLogoLight)`
  &:hover {
    color: ${theme.color.green};
    stroke-width: 10;
  }
`;

const StyledIconMap = styled(PiMapPinLight)`
  &:hover {
    color: ${theme.color.green};
    stroke-width: 10;
  }
`;
