import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/styles";
import { useEffect, useState } from "react";
import AugenIcon from "@/Icons/AugenIcon";

export default function PackagesBox({
  topline,
  headline,
  text,
  items = [],
  extras = [],
  showPrices = false,
  ctaLabel = "Zum Preiskalkulator",
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

  // Falls du später businessType von außen änderst, syncen wir es
  useEffect(() => {
    setLocalBusinessType(businessType);
  }, [businessType]);

  /* ------------------------
     Helpers
  ------------------------ */

  const renderText = () => {
    if (!text) return null;
    if (typeof text === "string") return <p>{text}</p>;
    return text; // JSX (z.B. <p>...</p>)
  };

  const findService = (serviceTitle) => {
    if (!serviceTitle) return null;
    return servicesData.find((s) => s.title === serviceTitle) || null;
  };

  const roundToTen = (n) => Math.round((Number(n) || 0) / 10) * 10;

  const isFounder = localBusinessType === "Soloselbstständige & Gründer*innen";

  const applyFounderDiscount = (price) => {
    const baseRounded = roundToTen(price);
    const discounted = isFounder ? baseRounded * 0.85 : baseRounded;
    return roundToTen(discounted);
  };

  const getPriceLine = (svc) => {
    if (!svc || typeof svc.price !== "number") return null;

    const finalPrice = applyFounderDiscount(svc.price);
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

                <SwitchText $active={isFounder}>Gründer*innen (-15%)</SwitchText>
              </SwitchWrap>
            </SwitchRow>
          )}
        </Header>

        <Grid>
          {items.map((p, idx) => {
            const serviceTitle = p.serviceTitle || p.title;
            const svc = findService(serviceTitle);

            const title = serviceTitle || svc?.title;
            const description = p.packageDescription || p.description || svc?.description;

            const priceLine = getPriceLine(svc);

            return (
              <Card key={`${serviceTitle}-${idx}`} $highlighted={p.highlighted}>
                {p.badge && <Badge>{p.badge}</Badge>}

                {title && <h3>{title}</h3>}

                {description && <CardText>{description}</CardText>}

                {Array.isArray(p.bullets) && p.bullets.length > 0 && (
                  <ul>
                    {p.bullets.map((b, i) => (
                      <li key={`${serviceTitle}-b-${i}`}>
                        {" "}
                        <IconWrapper>
                          <AugenIcon />
                        </IconWrapper>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {showPrices && priceLine && <PriceFooter>{priceLine}</PriceFooter>}
              </Card>
            );
          })}
        </Grid>

        {extras.length > 0 && (
          <Extras>
            {extras.map((e, idx) => {
              const serviceTitle = e.serviceTitle || e.title;
              const svc = findService(serviceTitle);

              const title = serviceTitle || svc?.title;
              const description = e.packageDescription || e.description || svc?.description;

              const priceLine = getPriceLine(svc);

              return (
                <ExtraCard key={`${serviceTitle}-${idx}`}>
                  {title && <h3>{title}</h3>}
                  {description && <CardText>{description}</CardText>}
                  {showPrices && priceLine && <PriceFooter>{priceLine}</PriceFooter>}
                </ExtraCard>
              );
            })}
          </Extras>
        )}

        <CtaRow>
          <CtaLink href={ctaUrl} passHref>
            <CtaButton type="button">{ctaLabel}</CtaButton>
          </CtaLink>
        </CtaRow>
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
  margin-bottom: var(--spacing-xl);
  p {
    a {
      :hover {
        color: ${theme.color.green};
      }
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
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  border-radius: ${theme.borderRadius};
  background: ${theme.color.dark};
  border: none;
  padding: var(--spacing-xl) var(--spacing-l);
  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: var(--spacing-l) var(--spacing-l);
  }
  position: relative;
  color: ${theme.color.beige};
  /* ${({ $highlighted }) =>
    $highlighted
      ? `
    background-color:${theme.color.lightGreen};
    color: ${theme.color.dark};
    transform: translateY(-2px);
  `
      : ""} */

  h3 {
    margin: 0 0 var(--spacing-s) 0;
    min-height: 80px;
    @media (min-width: ${theme.breakpoints.mobile}) {
      min-height: 100px;
    }
  }

  ul {
    margin: var(--spacing-m) 0 0 0;
    padding-left: 10px;
    min-height: 100px;
    @media (min-width: ${theme.breakpoints.mobile}) {
      min-height: 200px;
    }
  }

  li {
    padding-bottom: var(--spacing-xs);
    font-size: var(--font-l);
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: var(--spacing-s);
    align-items: center;
  }
`;

const IconWrapper = styled.div`
  width: 15px;
  height: 15px;
  margin: 0;
  padding: 0;

  svg {
    width: 100%;
    height: 100%;
    fill: ${theme.color.beige};
    transform: rotate(-45deg);
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    width: 15px;
    height: 15px;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: calc(-1 * var(--spacing-xs));
  right: var(--spacing-s);
  font-size: var(--font-s);
  padding: 6px 10px;
  border-radius: 5px;
  background: ${theme.color.green};
  color: ${theme.color.dark};
`;

const CardText = styled.p`
  margin: 0;
  min-height: 100px;
  @media (min-width: ${theme.breakpoints.mobile}) {
    min-height: 120px;
  }
`;

const Extras = styled.div`
  display: grid;
  gap: var(--spacing-m);
  grid-template-columns: 1fr;
  margin-top: var(--spacing-m);

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${theme.breakpoints.mobile}) {
    margin-top: var(--spacing-xl);
  }
`;

const ExtraCard = styled.div`
  border-radius: ${theme.borderRadius};
  // background: rgba(0, 0, 0, 0.03);
  background: ${theme.color.lightGreen};
  padding: var(--spacing-l);

  h4 {
    margin: 0 0 var(--spacing-s) 0;
  }

  p {
    min-height: 0 !important;
  }
`;

const CtaRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-xl);
  width: 100%;
`;

const CtaLink = styled(Link)`
  display: inline;
  width: 100%;
`;

const CtaButton = styled.button`
  display: block;
  width: 50%;
  margin: 0 auto;
  padding: var(--spacing-xs) var(--spacing-l);
  border: 1px solid ${theme.color.dark};
  background: transparent;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${theme.color.green};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    padding: var(--spacing-s) var(--spacing-xl);
  }
`;

const PriceFooter = styled.p`
  margin: var(--spacing-m) 0 0 0;
  font-weight: ${theme.fontWeight.light};
  letter-spacing: 0.04rem;
  min-height: min-content;
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
  opacity: ${({ $active }) => ($active ? 1 : 0.55)};
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
