import styled, { css } from "styled-components";
import { theme } from "@/styles";
import { useState, useEffect, useRef } from "react";
import { PiPushPinLight, PiPlus, PiMinus, PiTrashLight, PiArrowDownThin } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import ContactOverlayForm from "./ContactOverlayForm";

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
  firstName: "",
  lastName: "",
  pronouns: "",
  customPronouns: "",
  company: "",
  email: "",
  message: "",
};

const DEC0 = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const euroDash = (value, { star = false } = {}) => {
  const rounded = Math.round(Number(value) || 0);
  return `${DEC0.format(rounded)},- ` + (star ? "*" : "");
};

export default function Pricing({ pricingData, servicesData }) {
  // States
  const [selectedCategory, setSelectedCategory] = useState({
    businessType: "Soloselbstständig",
    projectType: "Fotografie",
  });
  const [serviceCounts, setServiceCounts] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [openKey, setOpenKey] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [overlayFormData, setOverlayFormData] = useState(initialOverlayFormData);

  // Refs
  const stashRef = useRef({ services: [], counts: {} });
  const selRef = useRef([]);
  const countsRef = useRef({});

  // Effects
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

  // Handler
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

  const applyDiscount = (price) => {
    const p = Number(price) || 0;
    if (selectedCategory.businessType === "Soloselbstständig") {
      return Math.round((p * 0.7 + Number.EPSILON) * 100) / 100;
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

  // Derived Values
  const priceOnRequest = selectedCategory.businessType === "Vereine & Organisationen" || selectedServices.some((s) => s.title === SPECIAL_SERVICE_TITLE);
  const isOrg = selectedCategory.businessType === "Vereine & Organisationen";
  const isOrgSelected = selectedServices.some((s) => s.title === SPECIAL_SERVICE_TITLE);
  const filteredServices = selectedCategory.businessType === "Vereine & Organisationen" ? [ORG_SERVICE] : servicesData && servicesData.length > 0 ? servicesData.filter((service) => service.category === selectedCategory.projectType) : [];
  const totalPriceCents = selectedServices.reduce((sum, service) => {
    const price = Number(service.price) || 0;
    const count = service.isCountable ? serviceCounts[service.title] || 1 : 1;
    const discounted = applyDiscount(price);
    return sum + Math.round(discounted * 100) * count;
  }, 0);
  const totalPrice = totalPriceCents / 100;

  const clearAllSelections = () => {
    setSelectedServices([]);
    setServiceCounts({});
    setOpenKey(null);
  };

  const formatCeil = (value) => {
    const num = Math.ceil(Number(value) || 0); // immer aufrunden
    return DEC0.format(num); // ohne Nachkommastellen, deutsche Schreibweise
  };

  // ScrollHint für OutcomeContent
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

  // Monatlischer Preis + Zinsen
  const MARKUP_PCT = 8; // Prozent Zinssatz
  const installmentPriceWithMarkup = (total, pct = 0, months = 6) => (total * (1 + pct / 100)) / months;

  return (
    <OuterWrapper>
      <InnerWrapper>
        <PricingContainer>
          {showOverlay && <ContactOverlayForm selectedServices={selectedServices} serviceCounts={serviceCounts} businessType={selectedCategory.businessType} formData={overlayFormData} setFormData={setOverlayFormData} onClose={() => setShowOverlay(false)} priceOnRequest={priceOnRequest} />}
          <HeadlineContainer>
            <h2>Preiskalkulator</h2>
            {isMobile ? (
              <h4>
                Jedes Projekt ist individuell – genau wie dein Budget. <br />
                Für eine erste Orientierung nutze unseren Preiskalkulator, um deinen Invest zu planen.
              </h4>
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

                return (
                  <CategoryContainer key={categoryIndex} $hide={hideThisCategory}>
                    <h6>{category.category}</h6>
                    <OptionContainer>
                      {category.options.map((option, i) => {
                        const checked = selectedCategory[category.key] === option;
                        return (
                          <Option key={i} $checked={checked}>
                            <HiddenCheckbox checked={checked} onChange={() => handleCategorySelection(category.key, option)} />
                            <Dot $checked={checked} />
                            <OptionName>{option}</OptionName>
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
                        <ul>
                          <li>
                            <SelectedItem>
                              <ItemWrapper>
                                <PiPushPinLight />
                                <span>Leistungen für Vereine & Organisationen</span>
                              </ItemWrapper>
                              <RemoveButton onClick={() => setSelectedServices([])}>
                                <StyledRemoveIcon />
                              </RemoveButton>
                            </SelectedItem>
                          </li>
                        </ul>
                      )}
                      <OverlayInfo>Mit deiner Anfrage buchst du noch nichts – wir vereinbaren zunächst ein Erstgespräch, um den Umfang deines Projekts genauer zu bestimmen und ein individuelles Angebot zu erstellen.</OverlayInfo>
                      <StyledButton onClick={() => setShowOverlay(true)}>Anfrage starten</StyledButton>
                    </>
                  ) : (
                    <>
                      <h6>Deine Auswahl</h6>
                      <OutcomeListWrap>
                        <OutcomeList ref={outcomeListRef}>
                          {selectedServices.map((service, index) => {
                            const isCountable = service.isCountable;
                            return (
                              <li key={index}>
                                <SelectedItem>
                                  <ItemWrapper>
                                    <PiPushPinLight />
                                    <span>{service.title}</span>
                                    {isCountable && (
                                      <Counter>
                                        <button onClick={() => handleCountChange(service.title, -1)}>-</button>
                                        <span>{serviceCounts[service.title]}</span>
                                        <button onClick={() => handleCountChange(service.title, 1)}>+</button>
                                      </Counter>
                                    )}
                                  </ItemWrapper>
                                  <RemoveButton onClick={() => removeService(service)}>
                                    <StyledRemoveIcon />
                                  </RemoveButton>
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
                        <ClearAllButton type="button" onClick={clearAllSelections} aria-label="Auswahl leeren">
                          <PiTrashLight />
                          <span>Gesamte Auswahl leeren</span>
                        </ClearAllButton>
                      )}
                      <Price>Preis ab {euroDash(totalPrice, { star: true })}</Price>
                      <InstallmentPrice>Oder in 6 Raten: {euroDash(installmentPriceWithMarkup(totalPrice, MARKUP_PCT))}</InstallmentPrice>
                      <OverlayInfo>*EUR zzgl. MwSt. Die Preisangaben sind eine unverbindliche Ersteinschätzung. Mit deiner Anfrage buchst du noch nichts – du erhältst entweder direkt ein individuelles Angebot oder wir vereinbaren ein Erstgespräch, um den Umfang deines Projekts genauer zu bestimmen.</OverlayInfo>
                      <StyledButton onClick={() => setShowOverlay(true)}>Anfrage starten</StyledButton>
                    </>
                  )}
                </OutcomeContent>
              </OutcomeContainer>
              <Services>
                {Array.isArray(filteredServices) && filteredServices.length > 0 ? (
                  filteredServices.map((service) => {
                    const key = service.id || service.title;
                    const isOpen = openKey === key;
                    const isSelected = selectedServices.some((s) => s.title === service.title);

                    return (
                      <ServiceUL key={key} className={isOpen ? "open" : ""}>
                        <Service>
                          <ServiceTitleGroup>
                            <TitleCheckboxContainer $checked={isSelected}>
                              <HiddenServiceCheckbox checked={isSelected} onChange={() => handleServiceSelection(service)} />
                              <ServiceDot $checked={isSelected} />
                              <ServiceTitle>{service.title}</ServiceTitle>
                            </TitleCheckboxContainer>

                            <ToggleIcon onClick={() => toggleOverlay(key)}>{isOpen ? <PiMinus /> : <PiPlus />}</ToggleIcon>
                          </ServiceTitleGroup>

                          {isOpen && (
                            <OverlayDescription>
                              <Description>
                                {service.description}
                                {service.price > 0 && (
                                  <ServicePrice>
                                    Preis ab <span>{formatCeil(applyDiscount(service.price))}</span>,-
                                    {service.isCountable && <span> {service.unit}</span>}
                                  </ServicePrice>
                                )}
                              </Description>
                            </OverlayDescription>
                          )}
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

/* NEU */
const OuterWrapper = styled.section`
  width: 100%;
  background-color: ${theme.color.beige}; /* volle Breite */
  padding: var(--spacing-xxxl) 0; /* vertikales Spacing wie vorher */
`;

/* NEU */
const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--max-content); /* deine zentrale Breite */
  margin: 0 auto; /* x-achsige Zentrierung */
  padding: 0 var(--side-padding); /* einheitlicher Seitenabstand */
`;

/* ANGEPASST: horizontales Padding raus (liegt jetzt im InnerWrapper) */
const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  /* HINWEIS: kein background + kein vertikales Padding mehr hier */
  /* background liegt im OuterWrapper, vertikales Padding ebenfalls */

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

/* ANGEPASST: horizontales Padding raus (steht im InnerWrapper) */
const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  width: 100%;

  h4 {
    text-align: center;
    max-width: 1000px;
  }
`;

/* ANGEPASST: horizontales Padding raus */
const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// const PricingContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   padding: var(--spacing-xxxl) 0;
//   background-color: ${theme.color.beige};

//   input {
//     background-color: ${theme.color.beige};
//     border: solid 3px ${theme.color.dark};
//     min-width: 30px;
//     min-height: 30px;

//     &:checked {
//       background-color: ${theme.color.green};
//     }
//     &:active {
//       background-color: none !important;
//     }

//     &:focus {
//       background-color: none !important;
//     }
//   }
// `;

// const HeadlineContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: var(--spacing-xl);
//   width: 100%;
//   padding: 0 var(--spacing-xl);
//   h4 {
//     text-align: center;
//     max-width: 1000px;
//   }
// `;

// const CalculatorContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   padding: 0 var(--spacing-xl);
// `;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  padding: var(--spacing-m) 0;

  border-bottom: 1px solid ${theme.color.dark};

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: 0;
    padding: 0;
  }
`;

const CategoryContainer = styled.div`
  display: ${({ $hide }) => ($hide ? "none" : "flex")};
  flex-direction: column;
  width: 100%;
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  /* Hover-Einheit: Kreis + Text gemeinsam */
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

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`;

const Dot = styled.span`
  width: 15px;
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
  color: ${({ $checked }) => ($checked ? theme.color.dark : theme.color.dark)};
  transition: color 0.2s ease;
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
  padding-top: var(--spacing-m);
  width: 100%;

  h6 {
    font-weight: ${theme.fontWeight.bold};
  }

  ul {
    margin-bottom: var(--spacing-m);
    li {
      padding: var(--spacing-xs) 0;
    }
  }
  p {
    font-size: var(--font-xs);
  }
`;

const SelectedItem = styled.div`
  display: flex;
  gap: var(--spacing-s);
  align-items: center;
  justify-content: space-between;
  width: auto;
  padding-right: var(--spacing-xs);
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
  font-size: var(--font-xs);
  text-transform: uppercase;
  margin-left: var(--spacing-xs);
`;

const StyledRemoveIcon = styled(RxCross1)`
  fill: none;
  stroke: currentColor;
  color: inherit;

  &:hover {
    transform: scale(1.05);
    stroke-width: 1px;
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

const ServiceTitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleCheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  cursor: pointer;
  user-select: none;
  margin: 0;
  ${({ $checked }) =>
    !$checked &&
    css`
      &:hover ${ServiceDot} {
        border-color: ${theme.color.green};
      }
      &:hover ${ServiceTitle} {
        color: ${theme.color.green};
      }
    `}
`;

const HiddenServiceCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
  margin: 0;
`;

const ServiceDot = styled.span`
  min-width: 15px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid ${theme.color.dark};
  background: ${({ $checked }) => ($checked ? theme.color.green : "transparent")};
`;

const ServiceTitle = styled.h2`
  padding: 0;
  font-weight: ${theme.fontWeight.mediumBold};
  margin: 0;
  color: ${theme.color.dark};
  padding-top: 2px;
  font-size: var(--font-m);

  @media (max-width: ${theme.breakpoints.mobile}) {
  }
`;

const OverlayDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-xs) var(--spacing-l) 0 var(--spacing-m);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: var(--spacing-xs) var(--spacing-l) 0 calc(0.9 * var(--spacing-l));
  }

  p {
    padding: 0;
  }
`;

const Description = styled.p`
  animation: slide-animation 0.5s ease;
  font-weight: ${theme.fontWeight.light};

  font-size: var(--font-m);

  @media (min-width: ${theme.breakpoints.tablet}) {
  }

  @keyframes slide-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: fit-content;
      opacity: 1;
    }
  }
`;

const Price = styled.h6`
  /* margin-bottom: calc(0.5 * var(--spacing-xs)); */
  margin: 0;
`;

const InstallmentPrice = styled.p`
  text-transform: uppercase;
  margin-top: calc(0.25 * var(--spacing-xs));
  margin-bottom: calc(0.5 * var(--spacing-xs));
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(0.5 * var(--spacing-xs));

  background-color: transparent;
  transition: background-color 0.2s ease;

  span {
    font-size: var(--font-s);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-s);
    padding: 0;
    height: 16px;
    width: 16px;
    border-radius: 5px;
    line-height: 0.2;
    border: 1px solid ${theme.color.dark};
    cursor: pointer;
    background-color: transparent;
    &:hover {
      background-color: ${theme.color.green};
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

  &:hover {
    background-color: ${theme.color.green};
  }
`;

const ServicePrice = styled.p`
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

const ToggleIcon = styled.div`
  margin-left: var(--spacing-m);
  font-size: var(--spacing-s);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${theme.color.dark};
  transition: color 0.3s ease;

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

const ClearAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin: calc(0.5 * var(--spacing-xs)) 0 var(--spacing-s);
  padding: 0;
  background: none;
  border: none;
  color: ${theme.color.dark};
  cursor: pointer;
  font-size: var(--font-xs);
  text-transform: uppercase;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  &:hover {
    svg {
      transform: scale(1.05);
      stroke-width: 6px;
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

  /* dezenter Fade-Overlay am unteren Rand */
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
