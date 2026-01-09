import styled, { css } from "styled-components";
import { theme } from "@/styles";
import { useState, useEffect, useRef } from "react";
import { PiPushPinLight, PiPlus, PiMinus, PiTrash, PiArrowDownThin, PiX } from "react-icons/pi";
import ContactOverlayForm from "./ContactOverlayForm";
import { useRouter } from "next/router";

const SPECIAL_SERVICE_TITLE = "Leistungen für Vereine & Organisationen";
const ORG_SERVICE = {
  title: SPECIAL_SERVICE_TITLE,
  description: "Individuelle Angebote für gemeinnützige Organisationen, Vereine, NGOs & Initiativen – fair, bedarfsorientiert und an eurer Mission ausgerichtet.",
  category: "Spezial",
  price: 0,
  isCountable: false,
  unit: "",
};

const initialOverlayFormData = {
  fullName: "",
  pronouns: "",
  customPronouns: "",
  company: "",
  email: "",
  message: "",
  acceptedTerms: false,
};

const DEC0 = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const euroDash = (value, { star = false } = {}) => {
  const rounded = Math.round(Number(value) || 0);
  return `${DEC0.format(rounded)},- ` + (star ? "*" : "");
};

// --- Rundungs-Helper: auf nächste 10 (5 rundet auf)
const roundToTen = (n) => Math.round((Number(n) || 0) / 10) * 10;

/* =========================
   ACCESSIBILITY UTILITIES
   ========================= */
const srOnly = css`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`;

const SROnly = styled.span`
  ${srOnly}
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  ${srOnly}
`;
const HiddenServiceCheckbox = styled.input.attrs({ type: "checkbox" })`
  ${srOnly}
`;

export default function Pricing({ pricingData, servicesData }) {
  const [selectedCategory, setSelectedCategory] = useState({
    businessType: "Soloselbstständige & Gründer*innen",
    projectType: "Fotografie",
  });
  const [serviceCounts, setServiceCounts] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [openKey, setOpenKey] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [overlayFormData, setOverlayFormData] = useState(initialOverlayFormData);
  const [hoverKey, setHoverKey] = useState(null);

  const stashRef = useRef({ services: [], counts: {} });
  const selRef = useRef([]);
  const countsRef = useRef({});
  const router = useRouter();

  useEffect(() => {
    selRef.current = selectedServices;
  }, [selectedServices]);

  useEffect(() => {
    countsRef.current = serviceCounts;
  }, [serviceCounts]);

  useEffect(() => {
    setOpenKey(null);
  }, [selectedCategory.businessType, selectedCategory.projectType]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const isOrg = selectedCategory.businessType === "Vereine & Organisationen";
    if (isOrg) {
      stashRef.current = {
        services: selRef.current.filter((s) => s.title !== ORG_SERVICE.title),
        counts: { ...countsRef.current },
      };
      setSelectedServices([ORG_SERVICE]);
      setServiceCounts({});
    } else {
      const withoutOrg = selRef.current.filter((s) => s.title !== ORG_SERVICE.title);
      const restoreServices = withoutOrg.length > 0 ? withoutOrg : stashRef.current.services || [];
      const restoreCounts = Object.keys(countsRef.current).length > 0 ? countsRef.current : stashRef.current.counts || {};
      setSelectedServices(restoreServices);
      setServiceCounts(restoreCounts);
    }
    setOpenKey(null);
  }, [selectedCategory.businessType]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const shouldRestore = sessionStorage.getItem("dak:restore-flag") === "1";
    if (!shouldRestore) return;

    try {
      const raw = sessionStorage.getItem("dak:quote");
      if (!raw) {
        sessionStorage.removeItem("dak:restore-flag");
        return;
      }

      const saved = JSON.parse(raw);
      if (Date.now() - (saved.ts || 0) > 30 * 60 * 1000) {
        sessionStorage.removeItem("dak:quote");
        sessionStorage.removeItem("dak:restore-flag");
        return;
      }

      // Auswahl & Counts
      setSelectedServices(Array.isArray(saved.selectedServices) ? saved.selectedServices : []);
      setServiceCounts(saved.serviceCounts || {});

      // Business-Typ
      if (saved.businessType) {
        setSelectedCategory((prev) => ({ ...prev, businessType: saved.businessType }));
      }

      // Formular
      const form = saved.form || {};
      const restoredForm = {
        fullName: form.fullName || [form.firstName, form.lastName].filter(Boolean).join(" ").trim(),
        pronouns: form.pronouns || "",
        customPronouns: form.customPronouns || "",
        company: form.company || "",
        email: form.email || "",
        message: form.message || "",
        acceptedTerms: !!form.acceptedTerms,
      };
      setOverlayFormData((prev) => ({ ...prev, ...restoredForm }));

      // Overlay öffnen
      setShowOverlay(true);
    } catch (_) {
      // noop
    } finally {
      // Aufräumen
      sessionStorage.removeItem("dak:quote");
      sessionStorage.removeItem("dak:restore-flag");

      // URL auf #preise belassen (falls nötig)
      if (location.hash !== "#preise") {
        history.replaceState({}, "", "/#preise");
      }
    }
  }, []);

  const handleCategorySelection = (key, option) => {
    setSelectedCategory((prev) => ({ ...prev, [key]: option }));
  };
  const toggleOverlay = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };
  const handleServiceSelection = (service) => {
    setSelectedServices((prev) => {
      const isSelected = prev.some((s) => s.title === service.title);
      if (selectedCategory.businessType === "Vereine & Organisationen") {
        return isSelected ? [] : [service];
      }
      if (isSelected) {
        const updatedCounts = { ...serviceCounts };
        delete updatedCounts[service.title];
        setServiceCounts(updatedCounts);
        return prev.filter((s) => s.title !== service.title);
      } else {
        if (service.isCountable) {
          setServiceCounts((prevCounts) => ({ ...prevCounts, [service.title]: 1 }));
        }
        if (service.title === SPECIAL_SERVICE_TITLE) return prev;
        return [...prev, service];
      }
    });
  };
  const removeService = (serviceToRemove) => {
    setSelectedServices((prev) => prev.filter((s) => s.title !== serviceToRemove.title));
  };

  // Rabatt anwenden (Basis in €)
  const applyDiscount = (price) => {
    const p = Number(price) || 0;
    if (selectedCategory.businessType === "Soloselbstständige & Gründer*innen") {
      return Math.round((p * 0.85 + Number.EPSILON) * 100) / 100;
    }
    return p;
  };

  const handleCountChange = (title, delta) => {
    setServiceCounts((prevCounts) => {
      const current = prevCounts[title] || 1;
      const newValue = Math.max(1, current + delta);
      return { ...prevCounts, [title]: newValue };
    });
  };

  const priceOnRequest = selectedCategory.businessType === "Vereine & Organisationen" || selectedServices.some((s) => s.title === SPECIAL_SERVICE_TITLE);
  const isOrg = selectedCategory.businessType === "Vereine & Organisationen";
  const isOrgSelected = selectedServices.some((s) => s.title === SPECIAL_SERVICE_TITLE);

  const filteredServices = selectedCategory.businessType === "Vereine & Organisationen" ? [ORG_SERVICE] : servicesData && servicesData.length > 0 ? servicesData.filter((service) => service.category === selectedCategory.projectType) : [];

  // --- Gesamtsumme in €: Basis -> 10er runden -> Rabatt -> erneut auf 10er runden
  const totalRaw = selectedServices.reduce((sum, service) => {
    const count = service.isCountable ? serviceCounts[service.title] || 1 : 1;
    const baseRounded = roundToTen(Number(service.price) || 0);
    const discounted = applyDiscount(baseRounded);
    const finalTen = roundToTen(discounted);
    return sum + finalTen * count;
  }, 0);
  const totalPrice = totalRaw; // schon glatte 10er

  const clearAllSelections = () => {
    setSelectedServices([]);
    setServiceCounts({});
    setOpenKey(null);
  };

  const formatCeil = (value) => {
    const num = Math.ceil(Number(value) || 0);
    return DEC0.format(num);
  };

  const outcomeListRef = useRef(null);
  const [showOutcomeHint, setShowOutcomeHint] = useState(false);

  useEffect(() => {
    const el = outcomeListRef.current;
    if (!el) {
      setShowOutcomeHint(false);
      return;
    }

    const update = () => {
      const canScroll = el.scrollHeight > el.clientHeight + 1;
      const atBottom = el.scrollTop >= el.scrollHeight - el.clientHeight - 2;
      setShowOutcomeHint(canScroll && !atBottom);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [selectedServices.length]);

  const MARKUP_PCT = 8;
  const installmentPriceWithMarkup = (total, pct = 0, months = 6) => (total * (1 + pct / 100)) / months;

  const MONTHS = 6;
  const anyInstallmentsAllowed = selectedServices.some((s) => s.allowInstallments !== false);
  const anyInstallmentsForbidden = selectedServices.some((s) => s.allowInstallments === false);

  // --- Ratenfähige Summe: auch hier Endpreis pro Position auf 10er runden
  const allowedInstallmentsTotal = selectedServices.reduce((sum, s) => {
    if (s.allowInstallments === false) return sum;
    const count = s.isCountable ? serviceCounts[s.title] || 1 : 1;
    const baseRounded = roundToTen(Number(s.price) || 0);
    const discounted = applyDiscount(baseRounded);
    const finalTen = roundToTen(discounted);
    return sum + finalTen * count;
  }, 0);

  const hideInstallments = priceOnRequest || !anyInstallmentsAllowed || allowedInstallmentsTotal <= 0;

  // Dynamische Texte:
  const scopeInline = anyInstallmentsForbidden ? "(Hinweis beachten)" : "";
  const scopeHint = anyInstallmentsForbidden ? "Hinweis: Die Rate berechnet sich nur aus den ratenfähigen Leistungen. Nicht ratenfähige Bausteine sind nicht enthalten." : "";
  const showInstallmentBadges = anyInstallmentsAllowed && anyInstallmentsForbidden;

  return (
    <OuterWrapper aria-labelledby="calc-head" aria-describedby="calc-desc">
      <InnerWrapper>
        <PricingContainer>
          {showOverlay && <ContactOverlayForm selectedServices={selectedServices} serviceCounts={serviceCounts} businessType={selectedCategory.businessType} formData={overlayFormData} setFormData={setOverlayFormData} onClose={() => setShowOverlay(false)} priceOnRequest={priceOnRequest} />}

          <HeadlineContainer>
            <h2 id="calc-head">Preiskalkulator</h2>
            <SROnly id="calc-desc">Wähle dein Business, deinen Projekttyp und anschließend Leistungen. Preise und Raten aktualisieren sich automatisch.</SROnly>
            {isMobile ? (
              <h4>Jedes Projekt ist individuell – genau wie dein Budget. Für eine erste Orientierung nutze unseren Preiskalkulator, um deinen Invest zu planen.</h4>
            ) : (
              <h4>
                Jedes Projekt ist individuell – genau wie dein Budget. <br />
                Für eine erste Orientierung nutze unseren Preiskalkulator, um deinen Invest zu planen.
              </h4>
            )}
          </HeadlineContainer>

          <CalculatorContainer>
            <CategoriesContainer>
              {pricingData.map((category, categoryIndex) => {
                const hideThisCategory = selectedCategory.businessType === "Vereine & Organisationen" && category.category === "Dein Projekt";
                const groupId = `cat-${categoryIndex}`;
                return (
                  <CategoryContainer key={categoryIndex} $hide={hideThisCategory}>
                    <h6 id={groupId}>{category.category}</h6>
                    <OptionContainer role="radiogroup" aria-labelledby={groupId}>
                      {category.options.map((option, i) => {
                        const checked = selectedCategory[category.key] === option;
                        const id = `${category.key}-${i}`;
                        return (
                          <Option key={id} $checked={checked} as="label" htmlFor={id}>
                            <HiddenRadio id={id} name={category.key} checked={checked} onChange={() => handleCategorySelection(category.key, option)} aria-checked={checked} />
                            <Dot aria-hidden="true" $checked={checked} />
                            <OptionName $checked={checked}>{option}</OptionName>
                          </Option>
                        );
                      })}
                    </OptionContainer>
                  </CategoryContainer>
                );
              })}
            </CategoriesContainer>

            <ServiceContainer>
              <OutcomeContainer>
                <OutcomeContent>
                  {isOrg ? (
                    <>
                      <h6>Deine Auswahl</h6>
                      {isOrgSelected && (
                        <ul role="list" aria-label="Ausgewählte Leistungen">
                          <li role="listitem">
                            <SelectedItem>
                              <ItemWrapper>
                                <PiPushPinLight />
                                <span>Leistungen für Vereine & Organisationen</span>
                              </ItemWrapper>
                              <RemoveButton type="button" onClick={() => setSelectedServices([])} aria-label="Spezialleistung entfernen" title="Spezialleistung entfernen">
                                <StyledRemoveIcon />
                              </RemoveButton>
                            </SelectedItem>
                          </li>
                        </ul>
                      )}
                      <OverlayInfo>Mit deiner Anfrage buchst du noch nichts – wir vereinbaren zunächst ein Erstgespräch, um den Umfang deines Projekts genauer zu bestimmen und ein individuelles Angebot zu erstellen.</OverlayInfo>
                      <StyledButton type="button" onClick={() => setShowOverlay(true)} aria-label="Anfrage für Vereine & Organisationen starten">
                        Anfrage starten
                      </StyledButton>
                    </>
                  ) : (
                    <>
                      <h6>Deine Auswahl</h6>
                      <OutcomeListWrap>
                        <OutcomeList ref={outcomeListRef} role="list" aria-label="Ausgewählte Leistungen">
                          {selectedServices.map((service, index) => {
                            const isCountable = service.isCountable;
                            return (
                              <li role="listitem" key={index}>
                                <SelectedItem>
                                  <ItemWrapper>
                                    <RemoveButton type="button" onClick={() => removeService(service)} aria-label={`${service.title} aus Auswahl entfernen`} title={`${service.title} entfernen`}>
                                      <StyledRemoveIcon />
                                    </RemoveButton>
                                    <span>{service.title}</span>

                                    {isCountable && (
                                      <Counter>
                                        <button type="button" aria-label={`${service.title}: Anzahl verringern`} onClick={() => handleCountChange(service.title, -1)}>
                                          –
                                        </button>
                                        <span aria-live="polite" aria-atomic="true">
                                          {serviceCounts[service.title]}
                                        </span>
                                        <button type="button" aria-label={`${service.title}: Anzahl erhöhen`} onClick={() => handleCountChange(service.title, 1)}>
                                          +
                                        </button>
                                      </Counter>
                                    )}
                                  </ItemWrapper>
                                </SelectedItem>
                              </li>
                            );
                          })}
                          {showOutcomeHint && (
                            <OutcomeScrollHint
                              type="button"
                              aria-label="Weiter nach unten"
                              title="Weiter nach unten"
                              onClick={() =>
                                outcomeListRef.current?.scrollBy({
                                  top: outcomeListRef.current.clientHeight * 0.8,
                                  behavior: "smooth",
                                })
                              }
                            >
                              <PiArrowDownThin />
                            </OutcomeScrollHint>
                          )}
                        </OutcomeList>
                      </OutcomeListWrap>

                      {selectedServices.length > 0 && (
                        <ClearAllButton type="button" onClick={clearAllSelections} aria-label="Gesamte Auswahl leeren">
                          <PiTrash />
                          <span>Gesamte Auswahl leeren</span>
                        </ClearAllButton>
                      )}

                      <Price>Preis ab {euroDash(totalPrice, { star: true })}</Price>
                      <SROnly aria-live="polite" aria-atomic="true">
                        Aktueller Gesamtpreis: {DEC0.format(totalPrice)},-
                      </SROnly>

                      {!hideInstallments && (
                        <>
                          <InstallmentPrice>
                            Oder in {MONTHS} Raten: {euroDash(installmentPriceWithMarkup(allowedInstallmentsTotal, MARKUP_PCT))} &nbsp;<span>{scopeInline}</span>
                          </InstallmentPrice>
                          <SROnly aria-live="polite" aria-atomic="true">
                            Ratenoption verfügbar: {MONTHS} Zahlungen à {DEC0.format(Math.ceil(installmentPriceWithMarkup(allowedInstallmentsTotal, MARKUP_PCT)))},-
                          </SROnly>
                        </>
                      )}
                      <OverlayInfo>
                        *EUR zzgl. MwSt. Die Preisangaben sind eine unverbindliche Ersteinschätzung. Mit deiner Anfrage buchst du noch nichts – du erhältst entweder direkt ein individuelles Angebot oder wir vereinbaren ein Erstgespräch, um den Umfang deines Projekts genauer zu bestimmen. <br />
                        <br />
                        {!hideInstallments && scopeHint && <span>{scopeHint}</span>}
                      </OverlayInfo>
                      <StyledButton type="button" onClick={() => setShowOverlay(true)} aria-label="Anfrage mit aktueller Auswahl starten">
                        Anfrage starten
                      </StyledButton>
                    </>
                  )}
                </OutcomeContent>
              </OutcomeContainer>

              <Services>
                {Array.isArray(filteredServices) && filteredServices.length > 0 ? (
                  filteredServices.map((service) => {
                    const key = service.id || service.title;
                    const serviceKey = String(key);
                    const isOpen = openKey === key;
                    const isSelected = selectedServices.some((s) => s.title === service.title);

                    // Endpreis pro Service (für Anzeige): 10er->Rabatt->10er
                    const displayPrice = roundToTen(applyDiscount(roundToTen(service.price)));

                    return (
                      <ServiceUL key={serviceKey} className={isOpen ? "open" : ""}>
                        <Service>
                          <ServiceTitleGroup $hovered={hoverKey === serviceKey}>
                            {/* Checkbox + Titel als Label-Gruppe */}
                            <TitleCheckboxContainer $checked={isSelected} as="label" htmlFor={`svc-${serviceKey}`}>
                              <HiddenServiceCheckbox id={`svc-${serviceKey}`} checked={isSelected} onChange={() => handleServiceSelection(service)} aria-label={`${service.title} ${isSelected ? "abwählen" : "auswählen"}`} />
                              <ServiceDot aria-hidden="true" $checked={isSelected} />
                              <ServiceTitle id={`svc-title-${serviceKey}`}>{service.title}</ServiceTitle>
                            </TitleCheckboxContainer>

                            {/* Toggle als Button, mit Verbindung zum Panel */}
                            <ToggleButton
                              type="button"
                              aria-expanded={isOpen}
                              aria-controls={`panel-${serviceKey}`}
                              aria-label={`Details zu ${service.title} ${isOpen ? "schließen" : "öffnen"}`}
                              onClick={() => toggleOverlay(key)}
                              onMouseEnter={() => setHoverKey(serviceKey)}
                              onMouseLeave={() => setHoverKey(null)}
                              onFocus={() => setHoverKey(serviceKey)}
                              onBlur={() => setHoverKey(null)}
                            >
                              {isOpen ? <PiMinus /> : <PiPlus />}
                            </ToggleButton>
                          </ServiceTitleGroup>

                          <OverlayDescription $open={isOpen} id={`panel-${serviceKey}`} role="region" aria-labelledby={`svc-title-${serviceKey}`} aria-hidden={!isOpen}>
                            <Description>
                              {service.description}
                              {service.price > 0 && (
                                <ServicePrice>
                                  Preis ab <span>{DEC0.format(displayPrice)}</span>,-
                                  {service.isCountable && <span> {service.unit}</span>}
                                </ServicePrice>
                              )}
                              {service.allowInstallments === false && (
                                <Badge aria-label="Nicht ratenfähig" title="Nicht ratenfähig – nicht in der Ratenberechnung enthalten">
                                  Hinweis: Bei dieser Leistung ist keine Ratenzahlung möglich.
                                </Badge>
                              )}
                            </Description>
                          </OverlayDescription>
                        </Service>
                      </ServiceUL>
                    );
                  })
                ) : (
                  <p>Keine Services verfügbar</p>
                )}
              </Services>
            </ServiceContainer>
          </CalculatorContainer>
        </PricingContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
}

/* =========================
   STYLES
   ========================= */

const OuterWrapper = styled.section`
  width: 100%;
  background-color: ${theme.color.beige};
  padding: var(--spacing-xxxl) 0;
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--max-content);
  margin: 0 auto;
  padding: 0 var(--side-padding);
`;

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    background-color: ${theme.color.beige};
    border: solid 3px ${theme.color.dark};
    min-width: 30px;
    min-height: 30px;

    &:checked {
      background-color: ${theme.color.green};
    }
    &:active {
      background-color: none !important;
    }
    &:focus {
      background-color: none !important;
    }
  }
`;

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xxl);
  width: 100%;

  h4 {
    text-align: center;
    max-width: 1000px;
  }
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  padding: 0;
  border-bottom: 1px solid ${theme.color.dark};

  @media (max-width: ${theme.breakpoints.desktop}) {
    flex-direction: column;
    gap: var(--spacing-m);
    padding: var(--spacing-m) 0 var(--spacing-l) 0;
  }
`;

const CategoryContainer = styled.div`
  display: ${({ $hide }) => ($hide ? "none" : "flex")};
  flex-direction: column;
  width: 100%;
  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 50%;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: calc(0.5 * var(--spacing-xs));
  padding-bottom: var(--spacing-xs);
  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    gap: var(--spacing-m);
  }
`;

const Option = styled.label`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  cursor: pointer;
  user-select: none;
  padding: var(--spacing-xxs) var(--spacing-xs);
  margin-right: var(--spacing-s);

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-right: 0;
  }

  ${({ $checked }) =>
    !$checked &&
    css`
      &:hover ${Dot} {
        border-color: ${theme.color.green};
      }
      &:hover ${OptionName} {
        color: ${theme.color.green};
      }
    `}
`;

const Dot = styled.span`
  width: 15px;
  min-width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid ${theme.color.dark};
  background: ${({ $checked }) => ($checked ? theme.color.green : "transparent")};
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
`;

const OptionName = styled.span`
  text-transform: uppercase;
  font-size: var(--font-xs);
  color: ${theme.color.dark};
  transition: color 0.2s ease;
  font-weight: 500;
  letter-spacing: 0.03rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-weight: 600;
  }
`;

const OutcomeContainer = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 50%;
  }
`;

const OutcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: end;
  width: 100%;
  padding-top: calc(1.5 * var(--spacing-xl));

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding-top: calc(1.5 * var(--spacing-xl));
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding-top: var(--spacing-m);
  }

  ul {
    margin-bottom: calc(0.75 * var(--spacing-s));
    li {
      letter-spacing: 0.02rem;
      font-weight: 400;
      padding: calc(0.75 * var(--spacing-xs)) 0;
    }
  }
  p {
    font-size: var(--font-xs);
  }
`;

const SelectedItem = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  align-items: center;
  justify-content: space-between;
  width: auto;
  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 310px;
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 310px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  align-items: center;
  span {
    text-transform: uppercase;
    font-size: var(--font-xs);
  }

  svg {
    min-height: 16px;
    min-width: 16px;
  }
`;

const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledRemoveIcon = styled(PiX)`
  stroke-width: 1px;

  &:hover {
    transform: scale(1.05);
    stroke-width: 1px;
    color: ${theme.color.green};
  }
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const Service = styled.li`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-m) 0;
  border-bottom: 1px solid ${theme.color.dark};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: var(--spacing-l) 0;
  }
`;

const Services = styled.div`
  padding: 0;
  width: 100%;
  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 50%;
  }

  p {
    padding-top: var(--spacing-m);
  }
`;

const ServiceUL = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TitleCheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  cursor: pointer;
  user-select: none;
  margin: 0;
`;

const ServiceDot = styled.span`
  min-width: 15px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid ${theme.color.dark};
  background: ${({ $checked }) => ($checked ? theme.color.green : "transparent")};
  cursor: pointer;

  ${({ $checked }) =>
    !$checked &&
    css`
      &:hover {
        border-color: ${theme.color.green};
      }
      &:focus-visible {
        outline: 2px solid ${theme.color.green};
        outline-offset: 2px;
      }
    `}
`;

const ServiceTitle = styled.h2`
  padding: 0;
  font-weight: ${theme.fontWeight.mediumBold};
  margin: 0;
  color: ${theme.color.dark};
  font-size: var(--font-m);
  padding-top: 2px;
  line-height: 1.25;
  letter-spacing: 0.05rem;
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-top: 1px;
  }
`;

const ROWS_DUR = "250ms";
const OPACITY_DUR = "200ms";
const EASE = "cubic-bezier(0.16,1,0.3,1)";

const OverlayDescription = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  overflow: hidden;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  will-change: grid-template-rows, opacity, padding;

  transition:
    grid-template-rows ${ROWS_DUR} ${EASE},
    opacity ${OPACITY_DUR} ${EASE},
    padding ${OPACITY_DUR} ${EASE};

  padding: ${({ $open }) => ($open ? "var(--spacing-xs) var(--spacing-l) 0 var(--spacing-m)" : "0 var(--spacing-l) 0 var(--spacing-m)")};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${({ $open }) => ($open ? "var(--spacing-xs) var(--spacing-l) 0 calc(0.9 * var(--spacing-l))" : "0 var(--spacing-l) 0 calc(0.9 * var(--spacing-l))")};
  }
`;

const Description = styled.div`
  overflow: hidden;

  & > :first-child {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
  }
`;

const Price = styled.h6`
  margin: 0;
`;

const InstallmentPrice = styled.p`
  text-transform: uppercase;
  margin-top: calc(0.25 * var(--spacing-xs));
  margin-bottom: calc(0.5 * var(--spacing-xs));

  span {
    text-transform: none;
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(0.5 * var(--spacing-xs));

  background-color: transparent;
  transition: background-color 0.2s ease;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: calc(0.85 * var(--spacing-xs));
  }

  span {
    font-size: var(--font-s);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-s);
    padding: 0;
    height: 18px;
    width: 18px;
    border-radius: 5px;
    line-height: 0.2;
    border: 1px solid ${theme.color.dark};
    cursor: pointer;
    background-color: transparent;

    &:hover {
      background-color: ${theme.color.green};
      color: ${theme.color.dark};
      border-color: ${theme.color.dark};
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      line-height: 0.8;
    }
  }
`;

const StyledButton = styled.button`
  margin-top: var(--spacing-xs);
  width: 310px;
  padding: var(--spacing-xs);
  color: ${theme.color.dark};
  background-color: ${theme.color.beige};
  font-size: var(--font-s);
  font-weight: ${theme.fontWeight.regular};
  letter-spacing: 0.08rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid ${theme.color.dark};
  text-transform: uppercase;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 3.5rem;
  }

  &:hover {
    background-color: ${theme.color.green};
  }
  &:active {
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
    border-color: ${theme.color.dark};
  }
`;

const ServicePrice = styled.div`
  padding-top: var(--spacing-xs) !important;
  text-transform: none;
  font-size: var(--font-m);
  span {
    font-weight: ${theme.fontWeight.bold};
  }
`;

const OverlayInfo = styled.p`
  font-size: var(--font-xs);
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.color.dark};
  opacity: 0.7;
  margin: calc(0.5 * var(--spacing-xs)) 0 0 0;
  max-width: 310px;
`;

const ToggleButton = styled.button`
  margin-left: var(--spacing-m);
  font-size: var(--spacing-s);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${theme.color.dark};
  transition: color 0.3s ease;
  background: none;
  border: 0;

  &:hover {
    color: ${theme.color.green};
  }

  svg {
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: var(--spacing-m);
  }
`;

const ServiceTitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${ServiceTitle}, ${ToggleButton} {
    color: ${theme.color.dark};
    transition: color 0.2s ease;
  }

  ${({ $hovered }) =>
    $hovered &&
    css`
      ${ToggleButton} {
        color: ${theme.color.green};
      }
    `}
`;

const ClearAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0;
  background: none;
  border: none;
  color: ${theme.color.dark};
  cursor: pointer;
  font-size: var(--font-xs);
  text-transform: uppercase;
  margin: 0 0 calc(1.25 * var(--spacing-xl)) 0;
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 0 0 calc(1.5 * var(--spacing-xl)) 0;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    stroke-width: 1px;
  }

  &:hover {
    transform: none;
    svg {
      transform: scale(1.05);
      stroke-width: 3px;
      color: ${theme.color.green};
    }
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.color.dark};
    border-radius: 6px;
  }
`;

const OutcomeListWrap = styled.div`
  position: relative;
`;

const OutcomeList = styled.ul`
  max-width: 310px;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 310px;
  overflow-y: auto;
  scroll-behavior: smooth;
  overscroll-behavior: contain;

  scrollbar-width: thin;
  scrollbar-color: ${theme.color.dark} ${theme.color.beige};
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.color.dark};
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.green};
  }
`;

const OutcomeScrollHint = styled.button`
  position: absolute;
  max-width: 310px;
  left: 0;
  right: 0;
  bottom: 15px;
  height: 30px;
  display: flex;
  align-items: end;
  justify-content: center;
  border: 0;
  background: none;
  cursor: pointer;
  color: ${theme.color.dark};
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    inset: -40px 0 0 0;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, ${theme.color.beige} 85%);
    z-index: -1;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 5px;
  }
  &:hover {
    color: ${theme.color.green};
    svg {
      stroke-width: 10px;
    }
  }
`;

const Badge = styled.span`
  margin-left: var(--spacing-xxs);
  font-size: calc(1 * var(--font-xs));
  line-height: 1;
  opacity: 0.85;
`;
