// Pricing.js
import styled, { css } from "styled-components";
import Link from "next/link";
import { theme } from "@/styles";
import { useState, useEffect, useRef, useLayoutEffect, useMemo } from "react";
import { PiPushPinLight, PiPlus, PiMinus, PiTrash, PiArrowDownThin, PiX, PiArrowLeftBold } from "react-icons/pi";
import ContactOverlayForm from "./ContactOverlayForm";
import { useRouter } from "next/router";
import pricingConfig from "@/content/pricing/pricingData";
import Toast from "@/components/Toast";
import useSessionStorageState from "@/hooks/useSessionStorageState";

const ORG_KEY = "org-service";

const SPECIAL_SERVICE_TITLE = "Leistungen für Vereine & Organisationen";
const ORG_SERVICE = {
  title: SPECIAL_SERVICE_TITLE,
  id: ORG_KEY,
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

const DEFAULT_CATEGORY = {
  businessType: "Unternehmen",
  projectType: "Fotografie",
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

export default function Pricing({ pricingData = pricingConfig.pricingData, servicesData = pricingConfig.servicesData }) {
  const router = useRouter();

  const resolvedPricingData = Array.isArray(pricingData) ? pricingData : pricingConfig.pricingData;

  const resolvedServicesData = useMemo(() => {
    return Array.isArray(servicesData) ? servicesData : pricingConfig.servicesData;
  }, [servicesData]);

  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);

  const [serviceCounts, setServiceCounts] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [openKey, setOpenKey] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [overlayFormData, setOverlayFormData] = useState(initialOverlayFormData);
  const [hoverKey, setHoverKey] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const [calcPersist, setCalcPersist] = useSessionStorageState("dak_calc", {
    selectedCategory: DEFAULT_CATEGORY,
    selectedServices: [],
    serviceCounts: {},
    lastFrom: null,
  });

  /* =========================
     REFS
     ========================= */
  const stashRef = useRef({ services: [], counts: {} });
  const selRef = useRef([]);
  const countsRef = useRef({});
  const outcomeListRef = useRef(null);

  const didHydrateRef = useRef(false);
  const restoringRef = useRef(false);

  const pendingOpenKeyRef = useRef(null);

  /* =========================
     Helpers (Query + Mapping)
     ========================= */
  const normalizeTitle = (v) =>
    String(v || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  const mapCategoryToProjectType = (cat) => {
    const raw = Array.isArray(cat) ? cat[0] : cat;
    const c = String(raw || "")
      .toLowerCase()
      .trim();

    if (c === "website") return "Website";
    if (c === "abo") return "Abo";
    if (c === "branding") return "Branding";
    if (c === "foto" || c === "fotografie") return "Fotografie";
    if (c === "video") return "Video";
    return null;
  };

  const labelFromPath = (path) => {
    const map = {
      "/fotografie": "Fotografie",
      "/video": "Video",
      "/website": "Website",
      "/branding": "Branding",
    };
    return map[path] || "zur vorherigen Seite";
  };

  /* =========================
     Restore (Session Storage)
     ========================= */
  useEffect(() => {
    if (didHydrateRef.current) return;
    if (typeof window === "undefined") return;

    if (calcPersist?.selectedServices?.length) {
      restoringRef.current = true;

      setSelectedServices(calcPersist.selectedServices || []);
      setServiceCounts(calcPersist.serviceCounts || {});
      setSelectedCategory(calcPersist.selectedCategory || selectedCategory);
    }

    didHydrateRef.current = true;

    queueMicrotask(() => {
      restoringRef.current = false;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!didHydrateRef.current) return;

    setCalcPersist((prev) => ({
      ...prev,
      selectedCategory,
      selectedServices,
      serviceCounts,
    }));
  }, [selectedCategory, selectedServices, serviceCounts, setCalcPersist]);

  /* =========================
     Scroll/Fokus Lock (Overlay)
     ========================= */
  const scrollYRef = useRef(0);
  const lastFocusRef = useRef(null);

  const openOverlay = () => {
    if (typeof window !== "undefined") {
      scrollYRef.current = window.scrollY || 0;
      lastFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    }
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    setShowOverlay(false);
  };

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (!showOverlay) return;

    const html = document.documentElement;
    const body = document.body;

    const y = scrollYRef.current ?? window.scrollY ?? 0;

    const prev = {
      htmlOverflow: html.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
    };

    html.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.left = prev.bodyLeft;
      body.style.right = prev.bodyRight;
      body.style.width = prev.bodyWidth;

      window.scrollTo(0, y);
    };
  }, [showOverlay]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (showOverlay) return;

    requestAnimationFrame(() => {
      const el = lastFocusRef.current;
      if (el && typeof el.focus === "function") {
        try {
          el.focus({ preventScroll: true });
        } catch {
          el.focus();
        }
      }
    });
  }, [showOverlay]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("scrollRestoration" in window.history)) return;

    const prev = window.history.scrollRestoration;
    if (showOverlay) window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = prev;
    };
  }, [showOverlay]);

  /* =========================
     Refs Sync
     ========================= */
  useEffect(() => {
    selRef.current = selectedServices;
  }, [selectedServices]);

  useEffect(() => {
    countsRef.current = serviceCounts;
  }, [serviceCounts]);

  /* =========================
     Responsive
     ========================= */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* =========================
     ORG MODE TOGGLE
     ========================= */
  useEffect(() => {
    if (!didHydrateRef.current) return;
    if (restoringRef.current) return;

    const isOrg = selectedCategory.businessType === "Vereine & Organisationen";

    if (isOrg) {
      // vorherige Auswahl sichern
      stashRef.current = {
        services: selRef.current.filter((s) => s.id !== ORG_KEY),
        counts: { ...countsRef.current },
      };

      // ORG-Service setzen + Description öffnen
      setSelectedServices([ORG_SERVICE]);
      setServiceCounts({});
      setOpenKey(ORG_KEY);
    } else {
      // ORG verlassen → vorherige Auswahl wiederherstellen
      const withoutOrg = selRef.current.filter((s) => s.id !== ORG_KEY);

      const restoreServices = withoutOrg.length > 0 ? withoutOrg : stashRef.current.services || [];

      const restoreCounts = Object.keys(countsRef.current).length > 0 ? countsRef.current : stashRef.current.counts || {};

      setSelectedServices(restoreServices);
      setServiceCounts(restoreCounts);

      // nur schließen, wenn ORG-Panel offen war
      setOpenKey((prev) => (prev === ORG_KEY ? null : prev));
    }
  }, [selectedCategory.businessType]);

  /* =========================
     Query Init (ServicePages / PackagesBox -> /preise)
     ========================= */
  useEffect(() => {
    if (!router.isReady) return;
    if (typeof window === "undefined") return;

    const { category, package: pkg, businessType, from } = router.query;

    // 1) businessType setzen
    if (businessType) {
      const bt = Array.isArray(businessType) ? businessType[0] : String(businessType);
      const allowed = ["Soloselbstständige & Gründer*innen", "Unternehmen", "Vereine & Organisationen"];
      if (allowed.includes(bt)) {
        setSelectedCategory((prev) => ({ ...prev, businessType: bt }));
      }
    }

    // 2) category => projectType setzen
    if (category) {
      const mapped = mapCategoryToProjectType(category);
      if (mapped) {
        setSelectedCategory((prev) => ({ ...prev, projectType: mapped }));
      }
    }

    // 3) package hinzufügen (merken zum Öffnen)
    if (pkg) {
      const rawPkg = Array.isArray(pkg) ? pkg[0] : pkg;
      const wanted = normalizeTitle(rawPkg);

      const svc = resolvedServicesData.find((s) => normalizeTitle(s.title) === wanted) || null;

      if (from && typeof from === "string") {
        setCalcPersist((prev) => ({ ...prev, lastFrom: from }));
      }

      if (svc) {
        const key = svc.id || svc.title;

        setSelectedServices((prev) => {
          const exists = prev.some((s) => s.title === svc.title);
          if (exists) return prev;

          if (svc.isCountable) {
            setServiceCounts((prevCounts) => ({
              ...prevCounts,
              [svc.title]: prevCounts[svc.title] || 1,
            }));
          }

          setToast({
            visible: true,
            message: `„${svc.title}“ zur Kalkulation hinzugefügt ✓`,
          });

          return [...prev, svc];
        });

        pendingOpenKeyRef.current = key;
      }
    }

    // Query entfernen + scroll
    if (pkg || category || businessType) {
      requestAnimationFrame(() => {
        router.replace("/preise", undefined, { shallow: true });

        requestAnimationFrame(() => {
          document.getElementById("calc-head")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      });
    }
  }, [router.isReady, router.query.category, router.query.package, router.query.businessType, router.query.from, resolvedServicesData, setCalcPersist, router]);

  /* =========================
     PRICING
     ========================= */
  const applyDiscount = (price) => {
    const p = Number(price) || 0;
    if (selectedCategory.businessType === "Soloselbstständige & Gründer*innen") {
      return Math.round((p * 0.85 + Number.EPSILON) * 100) / 100;
    }
    return p;
  };

  const priceOnRequest = selectedCategory.businessType === "Vereine & Organisationen" || selectedServices.some((s) => s.title === SPECIAL_SERVICE_TITLE);

  const isOrg = selectedCategory.businessType === "Vereine & Organisationen";
  const isOrgSelected = selectedServices.some((s) => s.title === SPECIAL_SERVICE_TITLE);

  const filteredServices = useMemo(() => {
    if (isOrg) return [ORG_SERVICE];

    if (!Array.isArray(resolvedServicesData) || resolvedServicesData.length === 0) return [];

    return resolvedServicesData.filter((service) => service.category === selectedCategory.projectType);
  }, [isOrg, resolvedServicesData, selectedCategory.projectType]);

  // ✅ Öffnet Panel erst, wenn Service in der aktuell gerenderten Liste existiert
  useEffect(() => {
    const key = pendingOpenKeyRef.current;
    if (!key) return;

    const existsInView = filteredServices?.some((s) => (s.id || s.title) === key);
    if (!existsInView) return;

    requestAnimationFrame(() => {
      setOpenKey(key);
      pendingOpenKeyRef.current = null;
    });
  }, [filteredServices, selectedCategory.projectType, selectedServices]);

  const totalRaw = selectedServices.reduce((sum, service) => {
    const count = service.isCountable ? serviceCounts[service.title] || 1 : 1;
    const baseRounded = roundToTen(Number(service.price) || 0);
    const discounted = applyDiscount(baseRounded);
    const finalTen = roundToTen(discounted);
    return sum + finalTen * count;
  }, 0);

  const totalPrice = totalRaw;

  const MARKUP_PCT = 8;
  const MONTHS = 6;

  const installmentPriceWithMarkup = (total, pct = 0, months = 6) => (total * (1 + pct / 100)) / months;

  const anyInstallmentsAllowed = selectedServices.some((s) => s.allowInstallments !== false);

  const allowedInstallmentsTotal = selectedServices.reduce((sum, s) => {
    if (s.allowInstallments === false) return sum;
    const count = s.isCountable ? serviceCounts[s.title] || 1 : 1;
    const baseRounded = roundToTen(Number(s.price) || 0);
    const discounted = applyDiscount(baseRounded);
    const finalTen = roundToTen(discounted);
    return sum + finalTen * count;
  }, 0);

  const hideInstallments = priceOnRequest || !anyInstallmentsAllowed || allowedInstallmentsTotal <= 0;

  const anyInstallmentsForbidden = selectedServices.some((s) => s.allowInstallments === false);

  const scopeInline = anyInstallmentsForbidden ? "(Hinweis beachten)" : "";
  const scopeHint = anyInstallmentsForbidden ? "Hinweis: Die Rate berechnet sich nur aus den ratenfähigen Leistungen. Nicht ratenfähige Bausteine sind nicht enthalten." : "";

  /* =========================
     Outcome Scroll Hint
     ========================= */
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

  /* =========================
     ACTIONS
     ========================= */
  const handleCategorySelection = (key, option) => {
    setOpenKey(null);
    setSelectedCategory((prev) => ({ ...prev, [key]: option }));
  };

  const toggleServiceDetails = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const handleServiceSelection = (service, key) => {
    setSelectedServices((prev) => {
      const isSelected = prev.some((s) => s.title === service.title);

      if (selectedCategory.businessType === "Vereine & Organisationen") {
        if (!isSelected) setOpenKey(key);
        else setOpenKey(null);
        return isSelected ? [] : [service];
      }

      if (isSelected) {
        const updatedCounts = { ...serviceCounts };
        delete updatedCounts[service.title];
        setServiceCounts(updatedCounts);

        setOpenKey((prevOpen) => (prevOpen === key ? null : prevOpen));
        return prev.filter((s) => s.title !== service.title);
      } else {
        if (service.isCountable) {
          setServiceCounts((prevCounts) => ({ ...prevCounts, [service.title]: 1 }));
        }
        if (service.title === SPECIAL_SERVICE_TITLE) return prev;

        setOpenKey(key);
        return [...prev, service];
      }
    });
  };

  const removeService = (serviceToRemove) => {
    setSelectedServices((prev) => prev.filter((s) => s.title !== serviceToRemove.title));
  };

  const clearAllSelections = () => {
    setSelectedServices([]);
    setServiceCounts({});
    setOpenKey(null);
  };

  return (
    <OuterWrapper aria-labelledby="calc-head" aria-describedby="calc-desc">
      <InnerWrapper>
        <PricingContainer>
          {showOverlay && <ContactOverlayForm selectedServices={selectedServices} serviceCounts={serviceCounts} businessType={selectedCategory.businessType} formData={overlayFormData} setFormData={setOverlayFormData} onClose={closeOverlay} priceOnRequest={priceOnRequest} />}

          <HeadlineContainer>
            <h2 id="calc-head">Preiskalkulator</h2>
            <SROnly id="calc-desc">Wähle dein Business, deinen Projekttyp und anschließend Leistungen. Preise und Raten aktualisieren sich automatisch.</SROnly>
            {isMobile ? (
              <h4>Stell dir hier dein Projekt zusammen und verschaffe dir einen realistischen Überblick über deinen Invest.</h4>
            ) : (
              <h4>
                Stell dir hier dein Projekt zusammen <br />
                und verschaffe dir einen realistischen Überblick über deinen Invest.
              </h4>
            )}
          </HeadlineContainer>

          <CalculatorContainer>
            <CategoriesContainer>
              {resolvedPricingData.map((category, categoryIndex) => {
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
                      <StyledButton type="button" onClick={openOverlay} aria-label="Anfrage für Vereine & Organisationen starten">
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
                        *EUR zzgl. MwSt. Die Preisangaben dienen als unverbindliche Ersteinschätzung. Mit deiner Anfrage buchst du noch nichts. Wir melden uns persönlich mit einem Angebot oder zur weiteren Abstimmung.
                        <br />
                        <br />
                        {!hideInstallments && scopeHint && <span>{scopeHint}</span>}
                      </OverlayInfo>

                      <StyledButton type="button" onClick={openOverlay} aria-label="Anfrage mit aktueller Auswahl starten">
                        Anfrage starten
                      </StyledButton>
                      {calcPersist?.lastFrom && calcPersist.lastFrom !== "/preise" && (
                        <BackLink href={calcPersist.lastFrom}>
                          <BackIcon aria-hidden="true" />
                          Zurück zu »{labelFromPath(calcPersist.lastFrom)}«
                        </BackLink>
                      )}
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

                    const displayPrice = roundToTen(applyDiscount(roundToTen(service.price)));

                    return (
                      <ServiceUL key={serviceKey} className={isOpen ? "open" : ""}>
                        <Service>
                          <ServiceTitleGroup $hovered={hoverKey === serviceKey}>
                            <TitleCheckboxContainer $checked={isSelected} as="label" htmlFor={`svc-${serviceKey}`}>
                              <HiddenServiceCheckbox id={`svc-${serviceKey}`} checked={isSelected} onChange={() => handleServiceSelection(service, key)} aria-label={`${service.title} ${isSelected ? "abwählen" : "auswählen"}`} />
                              <ServiceDot aria-hidden="true" $checked={isSelected} />
                              <ServiceTitle id={`svc-title-${serviceKey}`}>{service.title}</ServiceTitle>
                            </TitleCheckboxContainer>

                            <ToggleButton
                              type="button"
                              aria-expanded={isOpen}
                              aria-controls={`panel-${serviceKey}`}
                              aria-label={`Details zu ${service.title} ${isOpen ? "schließen" : "öffnen"}`}
                              onClick={() => toggleServiceDetails(key)}
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
                                  {service.pricingNote ? (
                                    <>
                                      <span>{service.pricingNote}:</span> <span>{DEC0.format(displayPrice)}</span>,-
                                    </>
                                  ) : (
                                    <>
                                      Preis ab <span>{DEC0.format(displayPrice)}</span>,-
                                      {service.isCountable && <span> {service.unit}</span>}
                                    </>
                                  )}
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

      <Toast visible={toast.visible} message={toast.message} onClose={() => setToast((t) => ({ ...t, visible: false }))} />
    </OuterWrapper>
  );
}
/* =========================
   STYLES
   ========================= */

const OuterWrapper = styled.section`
  width: 100%;
  background-color: ${theme.color.beige};
  padding: var(--spacing-xl) 0 var(--spacing-xxxl) 0;
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

  h2#calc-head {
    scroll-margin-top: 50px;
  }

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
  white-space: pre-line;
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

const BackIcon = styled(PiArrowLeftBold)`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(0.5 * var(--spacing-xs));
  margin-top: var(--spacing-xs);
  width: 310px;
  padding: var(--spacing-xs);
  color: ${theme.color.beige} !important;
  background-color: ${theme.color.dark};
  font-size: var(--font-s);
  font-weight: ${theme.fontWeight.regular};
  letter-spacing: 0.08rem;
  cursor: pointer;
  transition: background-color 0.1s ease;
  border: 1px solid ${theme.color.dark};
  text-transform: uppercase;
  border-radius: calc(0.5 * ${theme.borderRadius});
  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 3.5rem;
  }

  &:hover {
    background-color: ${theme.color.green};
    color: ${theme.color.dark} !important;
    transform: translateY(-1px);
  }
  &:active {
    background-color: ${theme.color.green};
    color: ${theme.color.dark} !important;
  }
`;
