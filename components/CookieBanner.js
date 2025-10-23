// components/CookieBanner.js
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Link from "next/link";
import { theme } from "@/styles";

// ---- Einstellungen ----
const SHOW_AFTER_SCROLL_PERCENT = 35; // z.B. 20% Scroll
const SHOW_AFTER_DELAY_MS = 0; // alternativ: 3000 für 3s Delay (0 = aus)

export default function CookieBanner() {
  const [shouldShow, setShouldShow] = useState(false); // grundsätzlich nötig?
  const [visible, setVisible] = useState(false); // tatsächlich eingeblendet?

  // 1) Prüfen, ob bereits entschieden wurde (granted/denied) → Banner grundsätzlich nötig?
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dak:consent");
      if (saved === "granted" || saved === "denied") {
        setShouldShow(false);
        return;
      }
    } catch {}
    setShouldShow(true);
  }, []);

  // 2) Footer-Event: „Cookie-Einstellungen“ erneut öffnen – ohne Reload
  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener("dak:cookie-open", handler);
    return () => window.removeEventListener("dak:cookie-open", handler);
  }, []);

  // 3) Trigger zum Einblenden (Scroll ODER Delay), nur wenn grundsätzlich nötig
  useEffect(() => {
    if (!shouldShow) return;

    let timer;
    const onShow = () => setVisible(true);

    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      if (percent >= SHOW_AFTER_SCROLL_PERCENT) {
        window.removeEventListener("scroll", onScroll);
        onShow();
      }
    };

    if (SHOW_AFTER_SCROLL_PERCENT > 0) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    if (SHOW_AFTER_DELAY_MS > 0) {
      timer = setTimeout(onShow, SHOW_AFTER_DELAY_MS);
    }

    // Falls weder Scroll noch Delay konfiguriert sind → sofort zeigen
    if (SHOW_AFTER_SCROLL_PERCENT === 0 && SHOW_AFTER_DELAY_MS === 0) onShow();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) clearTimeout(timer);
    };
  }, [shouldShow]);

  // 4) Aktionen
  const acceptAll = () => {
    try {
      localStorage.setItem("dak:consent", "granted");
      window["ga-disable-G-655QK78ENX"] = false;
      window.gtag?.("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    } catch {}
    setVisible(false);
  };

  const denyAll = () => {
    try {
      localStorage.setItem("dak:consent", "denied");
      window["ga-disable-G-655QK78ENX"] = true;
      window.gtag?.("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    } catch {}
    setVisible(false);
  };

  // „X“ = nur ausblenden, keine Entscheidung speichern
  const closeBanner = () => setVisible(false);

  // 5) Konditionales Rendern:
  // - wenn grundsätzlich NICHT nötig (shouldShow=false) UND auch nicht via Footer geöffnet (visible=false) → gar nicht rendern
  if (!shouldShow && !visible) return null;

  return (
    <Wrap $visible={visible} role="dialog" aria-label="Cookie-Einstellungen">
      <CloseBtn onClick={closeBanner} aria-label="Schließen">
        ×
      </CloseBtn>
      <TextMobile>
        Wir nutzen Cookies für Analyse und Werbung – damit du uns leichter findest und wir sichtbar bleiben.
        <br />
        Mehr Infos im <StyledLink href="/impressum">Datenschutz</StyledLink>.
      </TextMobile>
      <TextDesktop>
        Wir nutzen Cookies für Analyse und Werbung – damit du uns leichter findest und wir sichtbar bleiben. Mehr Infos im <StyledLink href="/impressum">Datenschutz</StyledLink>.
      </TextDesktop>
      <BtnRow>
        <Btn onClick={denyAll}>Nur notwendige</Btn>
        <BtnPrimary onClick={acceptAll}>Alle akzeptieren</BtnPrimary>
      </BtnRow>
    </Wrap>
  );
}

const fadeSlideIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrap = styled.div`
  position: fixed;

  inset: auto var(--side-padding) var(--side-padding) var(--side-padding);
  z-index: 99999;
  max-width: 220px;
  background: ${theme.color.beige};
  color: ${theme.color.dark};
  border: 1px solid ${theme.color.dark};
  border-radius: ${theme.borderRadius};
  padding: var(--spacing-l);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  pointer-events: none;

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 300px;
    padding: var(--spacing-m);
  }

  /* Startzustand */
  opacity: 0;
  transform: translateY(12px);

  /* Smooth erscheinen, wenn sichtbar */
  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${fadeSlideIn} 500ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
      pointer-events: auto;
    `}

  /* Bewegungsreduktion respektieren */
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: none;
    pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  }
`;

const TextMobile = styled.p`
  margin: 0 0 var(--spacing-xs) 0;
  line-height: ${theme.lineHeight.xl};
  font-size: var(--font-xs);
  text-align: start;
  display: block;
  @media (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const TextDesktop = styled.p`
  margin: 0 0 var(--spacing-xs) 0;
  line-height: ${theme.lineHeight.xl};
  font-size: var(--font-xs);
  text-align: start;

  display: none;
  @media (min-width: ${theme.breakpoints.desktop}) {
    display: block;
  }
`;

const BtnRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
`;
const Btn = styled.button`
  width: 100%;
  border: 1px solid ${theme.color.dark};
  background: ${theme.color.beige};
  padding: var(--spacing-xs);
  text-transform: uppercase;
  font-size: var(--font-xs);
  cursor: pointer;
  &:hover {
    background: ${theme.color.green};
  }
`;
const BtnPrimary = styled(Btn)`
  font-weight: ${theme.fontWeight.bold};
`;
const StyledLink = styled(Link)`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.dark};
  text-underline-offset: 2px;
  &:hover {
    color: ${theme.color.green};
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  border: none;
  background: transparent;
  font-size: 1.4rem;
  cursor: pointer;
  color: ${theme.color.dark};
  &:hover {
    color: ${theme.color.green};
  }
`;
