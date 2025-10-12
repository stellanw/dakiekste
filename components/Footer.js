import Link from "next/link";
import styled from "styled-components";
import { PiArrowUpRightLight } from "react-icons/pi";
import { theme } from "@/styles";
import PrideFlag from "@/Icons/PrideFlag";

export default function Footer() {
  const email = "info" + "@" + "dakiekste" + ".com";
  const subject = "Anfrage";

  const createMailToLink = () => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <StyledFooter>
      <h3>
        Lass uns gemeinsam starten
        <br />
        denn wer gesehen wird
        <br />
        gestaltet mit
      </h3>
      <StyledLinkListWrapper>
        <StyledLinkWrapper>
          <p>{email}</p>
          <Link href={createMailToLink()} target="_blank" rel="noopener noreferrer">
            <StyledIcon />
          </Link>
        </StyledLinkWrapper>

        <OnlyMobile>
          <Link href="https://www.instagram.com/dakiekste_/" target="_blank" rel="noopener noreferrer">
            <StyledLinkWrapper>
              <p>Instagram</p>
              <StyledIcon />
            </StyledLinkWrapper>
          </Link>
        </OnlyMobile>

        <OnlyTabletUp>
          <StyledLinkWrapper>
            <p>Instagram</p>
            <Link href="https://www.instagram.com/dakiekste_/" target="_blank" rel="noopener noreferrer">
              <StyledIcon />
            </Link>
          </StyledLinkWrapper>
        </OnlyTabletUp>

        <OnlyMobile>
          <Link href="https://www.linkedin.com/company/dakiekste" target="_blank" rel="noopener noreferrer">
            <StyledLinkWrapper>
              <p>LinkedIn</p>
              <StyledIcon />
            </StyledLinkWrapper>
          </Link>
        </OnlyMobile>

        <OnlyTabletUp>
          <StyledLinkWrapper>
            <p>LinkedIn</p>
            <Link href="https://www.linkedin.com/company/dakiekste" target="_blank" rel="noopener noreferrer">
              <StyledIcon />
            </Link>
          </StyledLinkWrapper>
        </OnlyTabletUp>

        <OnlyMobile>
          <Link href="https://www.google.com/maps/place/KLUB+STUDIO/@53.6293927,10.1252447,19z/data=!3m1!4b1!4m6!3m5!1s0x47b18b1dc2c88901:0x73c4a52033da48af!8m2!3d53.6293927!4d10.1258898!16s%2Fg%2F11vx3b9kkl?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <StyledLinkWrapper>
              <p>Map</p>
              <StyledIcon />
            </StyledLinkWrapper>
          </Link>
        </OnlyMobile>

        <OnlyTabletUp>
          <StyledLinkWrapper>
            <p>Map</p>
            <Link href="https://www.google.com/maps/place/KLUB+STUDIO/@53.6293927,10.1252447,19z/data=!3m1!4b1!4m6!3m5!1s0x47b18b1dc2c88901:0x73c4a52033da48af!8m2!3d53.6293927!4d10.1258898!16s%2Fg%2F11vx3b9kkl?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <StyledIcon />
            </Link>
          </StyledLinkWrapper>
        </OnlyTabletUp>
      </StyledLinkListWrapper>
      <StyledBottomWrapper>
        <StyledCopyright>
          © 2025 | Dakiekste. Alle Rechte vorbehalten. <Link href="/impressum">Impressum</Link>
        </StyledCopyright>{" "}
        <StyledPrideWrapper>
          <p>Wir möchten ein Saferspace für dich sein.</p>
          <FlagWrapper>
            <PrideFlag />
          </FlagWrapper>
        </StyledPrideWrapper>
      </StyledBottomWrapper>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: end;
  gap: var(--spacing-s);
  width: 100%;
  padding: var(--spacing-xxl) var(--side-padding);
  background-color: ${theme.color.green};
  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: space-between;
  }

  &::selection,
  & *::selection {
    background: ${theme.color.beige};
    color: ${theme.color.dark};
  }

  h3 {
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: var(--font-xl) !important;
    }
  }
`;

const StyledPrideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  p {
    font-size: var(--font-s);
  }

  h3 {
    margin: 0;
    font-size: var(--font-xxxl);
    font-weight: ${theme.fontWeight.mediumBold};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: start;
    flex-direction: row-reverse;
  }
`;

const StyledLinkListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: var(--spacing-l);
  margin: var(--spacing-m) 0 var(--spacing-xxxl) 0;
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: start;
  }
`;

const OnlyMobile = styled.div`
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;
const OnlyTabletUp = styled.div`
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -0.2rem;

  p {
    margin: 0;
    font-size: var(--font-l);
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: var(--font-m);
    }
    font-weight: ${theme.fontWeight.light};
    margin-right: calc(0.4 * var(--spacing-xs));
  }

  a {
    line-height: 0;
  }
`;

const StyledIcon = styled(PiArrowUpRightLight)`
  font-size: calc(1.1 * var(--font-m));
  stroke-width: 10;

  &:hover {
    transform: scale(1.2);
    color: ${theme.color.beige};
  }
`;

const StyledCopyright = styled.p`
  display: flex;
  flex-direction: row;
  align-items: end;
  font-size: var(--font-s);

  a {
    font-size: var(--font-s);
    margin-left: var(--spacing-s);
    &:hover {
      color: ${theme.color.beige};
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      margin-left: 0;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: start;
    /* padding-top: var(--spacing-xxl); */
  }
`;

const FlagWrapper = styled.div`
  margin-left: var(--spacing-xs);
  width: 25px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 20px;
    margin-left: 0;
    margin-right: var(--spacing-xs);
  }
`;

const StyledBottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;
