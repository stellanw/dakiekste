import Link from "next/link";
import styled from "styled-components";
import { PiArrowUpRightLight } from "react-icons/pi";
import { theme } from "@/styles";
import PrideFlag from "@/Icons/PrideFlag";

export default function Footer({ hideTitle }) {
  const email = "info" + "@" + "dakiekste" + ".com";
  const subject = "Anfrage";

  const createMailToLink = () => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <StyledFooter hideTitle={hideTitle}>
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
          <Link href="https://maps.app.goo.gl/U5qQZS9DziesNXbT6" target="_blank" rel="noopener noreferrer">
            <StyledLinkWrapper>
              <p>Map</p>
              <StyledIcon />
            </StyledLinkWrapper>
          </Link>
        </OnlyMobile>

        <OnlyTabletUp>
          <StyledLinkWrapper>
            <p>Map</p>
            <Link href="https://maps.app.goo.gl/U5qQZS9DziesNXbT6" target="_blank" rel="noopener noreferrer">
              <StyledIcon />
            </Link>
          </StyledLinkWrapper>
        </OnlyTabletUp>
      </StyledLinkListWrapper>
      <StyledBottomWrapper>
        <StyledCopyright>
          © 2025 | Dakiekste. Alle Rechte vorbehalten. <Link href="/impressum">Impressum</Link>
          <CookieButton
            onClick={() => {
              try {
                localStorage.removeItem("dak:consent");
                window[`ga-disable-${GA_ID}`] = true;
                window.gtag?.("consent", "update", {
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                  analytics_storage: "denied",
                });
              } catch {}
              window.dispatchEvent(new CustomEvent("dak:cookie-open"));
            }}
          >
            Cookie-Einstellungen
          </CookieButton>
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
  padding: var(--spacing-xxl) var(--side-padding) var(--spacing-m) var(--side-padding);
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
    display: ${({ hideTitle }) => (hideTitle ? "none" : "inline")};
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

  @media (max-width: ${theme.breakpoints.tablet}) {
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
  display: block;
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;
const OnlyTabletUp = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -0.2rem;

  p {
    margin: 0;
    font-size: var(--font-l);
    @media (max-width: ${theme.breakpoints.tablet}) {
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

    @media (max-width: ${theme.breakpoints.tablet}) {
      margin-left: 0;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: start;
    /* padding-top: var(--spacing-xxl); */
  }
`;

const FlagWrapper = styled.div`
  margin-left: var(--spacing-xs);
  width: 25px;

  @media (max-width: ${theme.breakpoints.tablet}) {
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

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

const CookieButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-bottom: 2px;
  margin-left: var(--spacing-xs);

  &:hover {
    transform: none !important;
    color: ${theme.color.beige} !important;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-left: 0;
  }
`;
