import styled from "styled-components";
import { theme } from "@/styles";
import { useState, useEffect, useRef } from "react";
import { PiPushPinLight, PiArrowUpRight } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import ContactOverlayForm from "./ContactOverlayForm";

const SPECIAL_SERVICE_TITLE = "Leistungen für Vereine & Organisationen";
const ORG_SERVICE = {
  title: SPECIAL_SERVICE_TITLE,
  description:
    "Individuelle Angebote für gemeinnützige Organisationen, Vereine, NGOs & Initiativen – fair, bedarfsorientiert und an eurer Mission ausgerichtet.",
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
    if (selectedCategory.businessType === "Soloselbstständig") return price * 0.7;
    return price;
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
  const filteredServices =
    selectedCategory.businessType === "Vereine & Organisationen"
      ? [ORG_SERVICE]
      : servicesData && servicesData.length > 0
        ? servicesData.filter((service) => service.category === selectedCategory.projectType)
        : [];
  const totalPrice = selectedServices.reduce((total, service) => {
    const price = Number(service.price) || 0;
    const count = service.isCountable ? serviceCounts[service.title] || 1 : 1;
    const discountedPrice = applyDiscount(price);
    return total + discountedPrice * count;
  }, 0);

  return (
    <PricingContainer>
      {showOverlay && (
        <ContactOverlayForm
          selectedServices={selectedServices}
          serviceCounts={serviceCounts}
          businessType={selectedCategory.businessType}
          formData={overlayFormData}
          setFormData={setOverlayFormData}
          onClose={() => setShowOverlay(false)}
          priceOnRequest={priceOnRequest}
        />
      )}
      <HeadlineContainer>
        <h2>BUDGETPLANUNG</h2>
        {isMobile ? (
          <h4>
            Jedes Projekt ist individuell – genau wie dein Budget. <br />
            Für eine erste Orientierung nutze unseren Preiskalkulator.
          </h4>
        ) : (
          <h4>
            Jedes Projekt ist individuell – genau wie dein Budget. <br />
            Für eine erste Orientierung nutze unseren Preiskalkulator.
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
                  {category.options.map((option, optionIndex) => (
                    <Option key={optionIndex}>
                      <input
                        type="checkbox"
                        checked={selectedCategory[category.key] === option}
                        onChange={() => handleCategorySelection(category.key, option)}
                      />
                      <OptionName>{option}</OptionName>
                    </Option>
                  ))}
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
                  <OverlayInfo>
                    Mit deiner Anfrage buchst du noch nichts – wir vereinbaren zunächst ein Erstgespräch, um den Umfang deines Projekts genauer zu bestimmen und
                    ein individuelles Angebot zu erstellen.
                  </OverlayInfo>
                  <StyledButton onClick={() => setShowOverlay(true)}>Anfrage starten</StyledButton>
                </>
              ) : (
                <>
                  <h6>Deine Auswahl</h6>
                  <ul>
                    {selectedServices.map((service, index) => (
                      <li key={index}>
                        <SelectedItem>
                          <ItemWrapper>
                            <PiPushPinLight />
                            <span>{service.title}</span>
                            {service.isCountable && (
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
                    ))}
                  </ul>
                  <Price>Preis ab {euroDash(totalPrice, { star: true })}</Price>
                  <p>*EUR zzgl. MwSt.</p>
                  <OverlayInfo>
                    Die Preisangaben sind eine unverbindliche Ersteinschätzung. Mit deiner Anfrage buchst du noch nichts – du erhältst entweder direkt ein
                    individuelles Angebot oder wir vereinbaren ein Erstgespräch, um den Umfang deines Projekts genauer zu bestimmen.
                  </OverlayInfo>
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
                        <TitleCheckboxContainer>
                          <input type="checkbox" checked={isSelected} onChange={() => handleServiceSelection(service)} />
                          <ServiceTitle>{service.title}</ServiceTitle>
                        </TitleCheckboxContainer>

                        <StyledArrowIcon className={isOpen ? "rotate" : ""} onClick={() => toggleOverlay(key)} />
                      </ServiceTitleGroup>

                      {isOpen && (
                        <OverlayDescription>
                          <Description>
                            {service.description}
                            {service.price > 0 && (
                              <ServicePrice>
                                Preis ab <span>{applyDiscount(service.price)}</span>,-
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
  );
}

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: var(--spacing-xxxl) 0;
  background-color: ${theme.color.beige};

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
  margin-bottom: var(--spacing-xl);
  width: 100%;
  padding: 0 var(--spacing-xl);
  h4 {
    text-align: center;
    max-width: 1000px;
  }
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 var(--spacing-xl);
`;

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

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const OptionName = styled.span`
  text-transform: uppercase;
  font-size: var(--font-xs);
  padding-left: var(--spacing-xs);
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
  padding: var(--spacing-m) var(--spacing-l) 0 0;
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
  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 300px;
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 300px;
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
  transform: scale(0.9);
  &:hover {
    font-weight: var(--font-weight-fatBold);
  }
`;

const StyledRemoveIcon = styled(RxCross1)`
  fill: none;
  stroke: currentColor;
  color: inherit;

  &:hover {
    transform: scale(1.1);
    stroke-width: 1.1;
  }
`;

const StyledArrowIcon = styled(PiArrowUpRight)`
  margin-left: var(--spacing-m);
  transform: scale(1.2);
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
  &.rotate {
    transform: scale(1.2) rotate(180deg);
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

const TitleCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-xs);
`;

const ServiceTitle = styled.h2`
  padding: 0;
  font-weight: ${theme.fontWeight.mediumBold};
  margin: 0;
`;

const OverlayDescription = styled.div`
  display: flex;
  flex-direction: column;

  padding: var(--spacing-xs) var(--spacing-l) 0 var(--spacing-l);
`;

const Description = styled.p`
  animation: slide-animation 0.5s ease;
  font-weight: ${theme.fontWeight.light};
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
  width: 300px;
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
  padding-top: var(--spacing-s);
  text-transform: none;
  font-weight: ${theme.fontWeight.regular};
  span {
  }
`;

const OverlayInfo = styled.p`
  font-size: var(--font-xs);
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.color.dark};
  opacity: 0.7;
  margin: calc(0.5 * var(--spacing-xs)) 0 0 0;
  max-width: 300px;
`;
