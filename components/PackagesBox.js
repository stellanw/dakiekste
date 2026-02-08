// PackagesBox.js
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { theme } from "@/styles";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AugenIcon from "@/Icons/AugenIcon";
import { PiArrowUpRight, PiArrowRight, PiCircleFill } from "react-icons/pi";

const slideDockUp = keyframes`
  0% {
    transform: translateY(160px);
    opacity: 0;
  }

  60% {
    opacity: 1;
  }

  75% {
    transform: translateY(0);
  }

  85% {
    transform: translateY(10px);  /* kleiner overshoot */
  }

  95% {
    transform: translateY(-2px);   /* sanft zurück */
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default function PackagesBox({
  topline,
  headline,
  text = (
    <p>
      Wähle eines unserer Pakete als Einstieg. Im{" "}
      <Link href="/preise">
        <strong>
          Preiskalkulator
          <PiArrowUpRight />
        </strong>
      </Link>{" "}
      kannst du passende Zusatzleistungen ergänzen.
      <br />
      <span>
        <strong>So funktioniert’s:</strong> Paket wählen <PiArrowRight /> zum Preiskalkulator hinzufügen <PiArrowRight /> Anfrage senden.
      </span>
    </p>
  ),
  items = [],
  extras = [],
  showPrices = false,
  ctaLabel = "Paket hinzufügen", // default für Card-CTA
  ctaUrl = "/preise",
  servicesData = [],

  // Toggle
  showBusinessToggle = true,
  businessType = "Unternehmen", // default
}) {
  /* ------------------------
     Local State (Toggle)
  ------------------------ */
  const [localBusinessType, setLocalBusinessType] = useState(businessType);
  const [visibleMap, setVisibleMap] = useState({});
  /* ------------------------
    Router
  ------------------------ */
  const router = useRouter();

  /* ------------------------
    Ref
  ------------------------ */
  const cardRefs = useRef([]);

  /* ------------------------
    UseEffect
  ------------------------ */
  useEffect(() => {
    setLocalBusinessType(businessType);
  }, [businessType]);

  /* ------------------------
    Animation - Cards
  ------------------------ */
  useEffect(() => {
    const total = (items?.length || 0) + (extras?.length || 0);
    if (!total) return;

    const prefersReduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) {
      const all = {};
      for (let i = 0; i < total; i++) all[i] = true;
      setVisibleMap(all);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleMap((prev) => {
          const next = { ...prev };

          for (const entry of entries) {
            if (entry.isIntersecting) {
              const idx = parseInt(entry.target.dataset.idx, 10);
              next[idx] = true;
              observer.unobserve(entry.target); // einmalig
            }
          }

          return next;
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 20% 0px", // wirkt "später" beim Scrollen
      }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items, extras]);

  /* ------------------------
     Helpers
  ------------------------ */

  const renderText = () => {
    if (!text) return null;
    if (typeof text === "string") return <p>{text}</p>;
    return text;
  };

  // Normalisiert Titel fürs Matching: \n, Tabs, doppelte Spaces -> 1 Space + lower
  const normalizeTitle = (v) =>
    String(v || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  // Clean Title für URL/Query (ohne lowercasing, aber ohne \n & Mehrfachspaces)
  const toCleanTitle = (v) =>
    String(v || "")
      .replace(/\s+/g, " ")
      .trim();

  const buildHref = (url, extraQuery = {}) => {
    const [path, qs] = String(url || "").split("?");
    const baseQuery = qs ? Object.fromEntries(new URLSearchParams(qs)) : {};
    return {
      pathname: path || "/preise",
      query: { ...baseQuery, ...extraQuery },
    };
  };

  const getCtaHrefForService = (serviceTitle) => {
    const cleanTitle = toCleanTitle(serviceTitle);

    const fromPath = router.asPath.split("?")[0]; // "/fotografie"
    const categoryFromPath = fromPath.split("/")[1] || ""; // "fotografie"

    return buildHref(ctaUrl, {
      package: cleanTitle,
      businessType: localBusinessType,
      from: fromPath,
      category: categoryFromPath,
    });
  };

  const findService = (serviceTitle) => {
    if (!serviceTitle) return null;
    const wanted = normalizeTitle(serviceTitle);
    return servicesData.find((s) => normalizeTitle(s.title) === wanted) || null;
  };

  const roundToTen = (n) => Math.round((Number(n) || 0) / 10) * 10;

  const isFounder = localBusinessType === "Soloselbstständige & Gründer*innen";

  const applyFounderDiscount = (price) => {
    const baseRounded = roundToTen(price);
    const discounted = isFounder ? baseRounded * 0.85 : baseRounded;
    return roundToTen(discounted);
  };

  const getPriceLine = (svc) => {
    if (!svc) return null;

    const price = Number(svc.price);
    if (!Number.isFinite(price)) return null;

    const finalPrice = applyFounderDiscount(price);
    const unit = svc.unit ? ` ${svc.unit}` : "";
    return `Preis ab ${finalPrice.toLocaleString("de-DE")} €${unit}`;
  };

  return (
    <Outer>
      <Inner>
        <Header>
          {topline && <h2>{topline}</h2>}
          {headline && <h3>{headline}</h3>}
          {text && renderText()}

          {showBusinessToggle && showPrices && (
            <SwitchRow>
              <SwitchLabel>Preisansicht:</SwitchLabel>

              <SwitchWrap>
                <SwitchText $active={!isFounder}>Unternehmen</SwitchText>

                <SwitchButton type="button" role="switch" aria-checked={isFounder} onClick={() => setLocalBusinessType(isFounder ? "Unternehmen" : "Soloselbstständige & Gründer*innen")}>
                  <SwitchTrack $on={isFounder}>
                    <SwitchThumb $on={isFounder} />
                  </SwitchTrack>
                </SwitchButton>

                <SwitchText $active={isFounder}>Soloselbstständige & Gründer*innen (-15%)</SwitchText>
              </SwitchWrap>
            </SwitchRow>
          )}
        </Header>

        <Grid>
          {items.map((p, idx) => {
            const rawServiceTitle = p.serviceTitle || p.title; // kann \n enthalten
            const svc = findService(rawServiceTitle);

            // Anzeige-Titel darf \n behalten (für bewusstes Linebreak-Layout)
            const displayTitle = rawServiceTitle || svc?.title;

            // Für URL/Query bitte clean (ohne \n etc.)
            const cleanServiceTitleForUrl = toCleanTitle(rawServiceTitle);

            const description = p.packageDescription || p.description || svc?.description;

            const priceLine = getPriceLine(svc);

            const cardCtaLabel = p.ctaLabel || ctaLabel;

            const ctaHref = getCtaHrefForService(rawServiceTitle);

            const globalIdx = idx;

            return (
              <Card key={`${cleanServiceTitleForUrl}-${idx}`} $highlighted={p.highlighted} ref={(el) => (cardRefs.current[globalIdx] = el)} data-idx={globalIdx} $visible={!!visibleMap[globalIdx]} style={{ animationDelay: `${globalIdx * 250}ms` }}>
                {p.badge && <Badge $highlighted={p.highlighted}>{p.badge}</Badge>}

                {displayTitle && <h3>{displayTitle}</h3>}

                {description && <CardText>{description}</CardText>}

                {Array.isArray(p.bullets) && p.bullets.length > 0 && (
                  <ul>
                    {p.bullets.map((b, i) => (
                      <li key={`${cleanServiceTitleForUrl}-b-${i}`}>
                        <IconWrapper $highlighted={p.highlighted}>
                          <PiCircleFill />
                        </IconWrapper>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {showPrices && priceLine && <PriceFooter>{priceLine}</PriceFooter>}
                <CardCtaRow>
                  <CardCtaLink href={ctaHref} $highlighted={p.highlighted}>
                    {cardCtaLabel}
                  </CardCtaLink>
                </CardCtaRow>
              </Card>
            );
          })}
        </Grid>
        {extras.length > 0 && (
          <Extras>
            {extras.map((e, idx) => {
              const rawServiceTitle = e.serviceTitle || e.title;
              const svc = findService(rawServiceTitle);

              const displayTitle = rawServiceTitle || svc?.title;
              const description = e.packageDescription || e.description || svc?.description;
              const priceLine = getPriceLine(svc);

              const ctaHref = getCtaHrefForService(rawServiceTitle);
              const extraBadge = e.badge;
              const globalIdx = items.length + idx;

              return (
                <ExtraCard key={`${toCleanTitle(rawServiceTitle)}-${idx}`} ref={(el) => (cardRefs.current[globalIdx] = el)} data-idx={globalIdx} $visible={!!visibleMap[globalIdx]} style={{ animationDelay: `${globalIdx * 250}ms` }}>
                  {extraBadge && <ExtraBadge>{extraBadge}</ExtraBadge>}
                  {displayTitle && <h3>{displayTitle}</h3>}
                  {description && <CardText>{description}</CardText>}
                  <span>{showPrices && priceLine && <PriceFooter>{priceLine}</PriceFooter>}</span>
                  <ExtraCtaRow>
                    <ExtraCtaButton href={ctaHref} passHref>
                      Hinzufügen
                    </ExtraCtaButton>
                  </ExtraCtaRow>
                </ExtraCard>
              );
            })}
          </Extras>
        )}
      </Inner>
    </Outer>
  );
}

/* ================= STYLES ================= */

const Outer = styled.section`
  background: ${theme.color.beige};
  padding: var(--spacing-xxl) 0;
  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: var(--spacing-xl) 0;
  }
`;

const Inner = styled.div`
  max-width: var(--max-content);
  margin: 0 auto;
  padding: 0 var(--side-padding);
`;

export const Header = styled.div`
  margin-bottom: var(--spacing-l);
  p {
    a {
      :hover {
        color: ${theme.color.green};
      }
      svg {
        margin: 0 0 -4px 0;
        stroke-width: 3px;
      }
    }
    span {
      svg {
        margin: 0 0 -3px 0;
      }
    }
  }
`;

const Grid = styled.div`
  display: grid;
  gap: var(--spacing-m);
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    //grid-template-columns: 1fr;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  /* Animation */
  transform: translateY(280px);
  opacity: 0;

  animation: ${({ $visible }) => ($visible ? slideDockUp : "none")} 1150ms cubic-bezier(0.16, 1, 0.3, 1) both;

  will-change: transform, opacity;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    opacity: 1;
    animation: none;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  background: ${theme.color.dark};
  color: ${theme.color.beige};
  border-radius: ${theme.borderRadius};
  border: none;
  min-width: 0;
  width: 100%;
  padding: var(--spacing-xl) var(--spacing-l);
  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: var(--spacing-l);
  }

  h3 {
    white-space: pre-line;
    overflow-wrap: break-word !important;
    margin: 0 0 var(--spacing-s) 0;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* max 2 Zeilen */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 1.2;
    min-height: calc(2 * 1.2em);
  }

  ul {
    margin: var(--spacing-xl) 0 var(--spacing-xl) 0;
    padding-left: 10px;

    min-height: 0x;
    @media (min-width: ${theme.breakpoints.tablet}) {
      margin: var(--spacing-m) 0 0 0;
      min-height: 180px;
    }
    li {
      padding-bottom: var(--spacing-xs);
      font-size: var(--font-l);
      display: grid;
      grid-template-columns: 20px 1fr;
      gap: calc(0.5 * var(--spacing-xs));
      align-items: center;
    }
  }
`;

const CardText = styled.p`
  margin: 0;

  min-height: 0;
  @media (min-width: ${theme.breakpoints.tablet}) {
    min-height: 150px;
  }

  @media (min-width: 1200px) {
    min-height: 230px;
  }

  @media (min-width: 1400px) {
    min-height: 180px;
  }

  @media (min-width: 1500px) {
    min-height: 150px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 8px;
  height: 8px;
  margin: 0;
  padding: 0;
  svg {
    width: 100%;
    height: 100%;
    fill: ${theme.color.beige};
    transform: rotate(-45deg);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: calc(-1 * var(--spacing-xs));
  right: var(--spacing-s);
  font-size: var(--font-s);
  padding: 8px 14px;
  border-radius: 5px;
  background: ${theme.color.green};
  color: ${theme.color.dark};
`;

const CardCtaRow = styled.div`
  padding-top: var(--spacing-m);
  margin: 0;
`;

const CardCtaLink = styled(Link)`
  display: block;
  width: 100%;
  padding: var(--spacing-s) var(--spacing-m);
  border: 1px solid;
  border-color: ${theme.color.beige};
  background: ${theme.color.dark};
  color: ${theme.color.beige};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: ${theme.color.green};
    color: ${theme.color.dark};
    border-color: ${theme.color.dark};
  }
`;

const PriceFooter = styled.p`
  margin-top: auto;
  font-weight: ${theme.fontWeight.light};
  font-size: var(--font-m);
  letter-spacing: 0.04rem;
  min-height: min-content;
`;

const Extras = styled.div`
  display: grid;
  margin-top: var(--spacing-xl);
  gap: var(--spacing-m);
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ExtraCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: ${theme.borderRadius};
  background: ${theme.color.green};
  gap: var(--spacing-xs);
  padding: var(--spacing-xl) var(--spacing-l);
  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: var(--spacing-l);
  }

  /* Animation */
  transform: translateY(280px);
  opacity: 0;

  animation: ${({ $visible }) => ($visible ? slideDockUp : "none")} 1150ms cubic-bezier(0.16, 1, 0.3, 1) both;

  will-change: transform, opacity;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    opacity: 1;
    animation: none;
  }

  h3 {
    margin: 0;

    display: -webkit-box;
    -webkit-line-clamp: 2; /* max 2 Zeilen */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 1.2;
    min-height: calc(2 * 1.2em);
  }

  p {
    min-height: 0;
  }
  span {
    margin-top: auto !important;
    p {
      min-height: 20px !important;
      margin-bottom: var(--spacing-xs);
    }
  }
`;

const ExtraBadge = styled.div`
  position: absolute;
  top: calc(-1 * var(--spacing-xs));
  right: var(--spacing-s);
  font-size: var(--font-s);
  padding: 8px 14px;
  border-radius: 5px;
  background: ${theme.color.dark};
  color: ${theme.color.beige};
`;

const ExtrasIntro = styled.h3`
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-m);

  line-height: 1.2;
`;

const ExtraCtaRow = styled.div`
  margin: var(--spacing-xs) 0;
  align-self: center;
`;

const ExtraCtaButton = styled(Link)`
  padding: var(--spacing-s) var(--spacing-m);
  border: 1px solid ${theme.color.dark};
  border-radius: 10px;
  background: transparent;

  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 0.04rem;

  &:hover {
    background: ${theme.color.dark};
    color: ${theme.color.green};
    font-weight: ${theme.fontWeight.bold};
  }
`;

/* =========================
   Toggle Styles
   ========================= */
const SwitchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-m);
  background: ${theme.color.beige};
  color: ${theme.color.dark};
  padding: var(--spacing-xs) 0;
  max-width: fit-content;
`;

const SwitchLabel = styled.span`
  font-size: var(--font-xs);
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  opacity: 0.8;
`;

const SwitchWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
`;

const SwitchText = styled.span`
  font-size: var(--font-xs);
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  :hover {
  }

  font-weight: ${({ $active }) => ($active ? 700 : 300)};
`;

const SwitchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.color.dark};
    border-radius: 999px;
  }
`;

const SwitchTrack = styled.span`
  width: 44px;
  height: 24px;
  border-radius: 999px;
  border: 1px solid ${theme.color.dark};
  background: ${({ $on }) => ($on ? theme.color.green : "transparent")};
  position: relative;
  transition: background-color 0.2s ease;
`;

const SwitchThumb = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: ${theme.color.dark};
  position: absolute;
  top: 50%;
  left: ${({ $on }) => ($on ? "calc(100% - 12px)" : "12px")};
  transform: translate(-50%, -50%);
  transition: left 0.2s ease;
`;
