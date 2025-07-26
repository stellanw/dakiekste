import styled from "styled-components";
import { theme } from "@/styles";
import { useState, useEffect } from "react";
import { PiArrowUpRight } from "react-icons/pi";
import { PiPushPinLight } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";

export default function Pricing({ pricingData, servicesData }) {
  const [selectedCategory, setSelectedCategory] = useState({
    businessType: "Soloselbstständig", // für spätere Rabattlogik
    projectType: "Fotografie", // bestimmt die angezeigten Services
  });

  // Liste aller aktuell ausgewählten Services (für Warenkorb & Preis)
  const [selectedServices, setSelectedServices] = useState([]);

  // Kontrolliert, ob die Beschreibung bei einem Service angezeigt wird
  const [isOpen, setIsOpen] = useState([]);

  // Flag für Mobile Breakpoint
  const [isMobile, setIsMobile] = useState(false);

  //Sobald servicesData geladen ist, initialisiere isOpen für alle Services
  useEffect(() => {
    if (servicesData && servicesData.length > 0) {
      setIsOpen(new Array(servicesData.length).fill(false));
    } else {
      console.error("servicesData ist leer oder undefined");
    }
  }, [servicesData]);

  //Wechselt Auswahl bei Kategorie-Checkbox (Business/Projekt)
  const handleCategorySelection = (key, option) => {
    setSelectedCategory((prev) => ({
      ...prev,
      [key]: option,
    }));
  };

  //Öffnet/Schließt die Service-Beschreibung und schließt alle anderen
  const toggleOverlay = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState.map((item, i) => (i === index ? item : false));
    });
  };

  //Fügt Service zum Warenkorb hinzu oder entfernt ihn wieder
  const handleServiceSelection = (service) => {
    setSelectedServices((prev) => {
      if (prev.includes(service)) {
        return prev.filter((s) => s !== service); // entfernen
      } else {
        return [...prev, service]; // hinzufügen
      }
    });
  };

  //Filtert Services nach aktuell gewähltem Projekt-Typ
  const filteredServices = servicesData && servicesData.length > 0 ? servicesData.filter((service) => service.category === selectedCategory.projectType) : [];

  //Entfernt Service aus dem Warenkorb
  const removeService = (serviceToRemove) => {
    setSelectedServices((prev) => prev.filter((service) => service !== serviceToRemove));
  };

  //Setzt das Mobile-Flag bei Fenstergröße ≤ 750px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    handleResize(); // Initial aufrufen
    window.addEventListener("resize", handleResize); // Listener hinzufügen

    return () => {
      window.removeEventListener("resize", handleResize); // Aufräumen
    };
  }, []);

  // Gibt rabattierten Preis zurück (wenn soloselbstständig)
  const applyDiscount = (price) => {
    if (selectedCategory.businessType === "Soloselbstständig") {
      return price * 0.7;
    }
    return price;
  };

  //Berechnet Gesamtpreis aller ausgewählten Services (mit Rabatt)
  const totalPrice = selectedServices.reduce((total, service) => {
    const discountedPrice = applyDiscount(service.price);
    return total + discountedPrice;
  }, 0);

  return (
    <PricingContainer>
      <HeadlineContainer>
        <h2>PREISKALKULATOR</h2>
        {isMobile ? <h4>Dein Erfolg einfach kalkuliert.</h4> : <h4>Sichtbarkeit beginnt mit Klarheit – auch beim Budget.</h4>}
      </HeadlineContainer>
      <CalculatorContainer>
        <CategoriesContainer>
          {pricingData.map((category, categoryIndex) => (
            <CategoryContainer key={categoryIndex}>
              <h6>{category.category}</h6>
              <OptionContainer>
                {category.options.map((option, optionIndex) => (
                  <Option key={optionIndex}>
                    <input type="checkbox" checked={selectedCategory[category.key] === option} onChange={() => handleCategorySelection(category.key, option)} />
                    <OptionName>{option}</OptionName>
                  </Option>
                ))}
              </OptionContainer>
            </CategoryContainer>
          ))}
        </CategoriesContainer>
        <ServiceContainer>
          <OutcomeContainer>
            <OutcomeContent>
              <h6>Leistungswarenkorb</h6>
              <ul>
                {selectedServices.map((service, index) => (
                  <li key={index}>
                    <SelectedItem>
                      <ItemWrapper>
                        <PiPushPinLight />
                        <span>{service.title}</span>
                      </ItemWrapper>
                      <RemoveButton onClick={() => removeService(service)}>
                        <StyledRemoveIcon />
                      </RemoveButton>
                    </SelectedItem>
                  </li>
                ))}
              </ul>
              <Price>
                Preis ab <span>{totalPrice}</span> EURO *
              </Price>
              <p>*zzgl. MwSt.</p>
            </OutcomeContent>
          </OutcomeContainer>
          <Services>
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <ServiceUL key={index} className={isOpen[index] ? "open" : ""}>
                  <Service>
                    <ServiceTitleGroup>
                      <TitleCheckboxContainer>
                        <input type="checkbox" checked={selectedServices.includes(service)} onChange={() => handleServiceSelection(service)} />
                        <ServiceTitle>{service.title}</ServiceTitle>
                      </TitleCheckboxContainer>
                      <StyledArrowIcon className={isOpen[index] ? "rotate" : ""} onClick={() => toggleOverlay(index)} />
                    </ServiceTitleGroup>
                    {isOpen[index] && (
                      <OverlayDescription>
                        <Description>
                          {service.description}
                          <Price>
                            Preis ab <span>{applyDiscount(service.price)} </span>EURO *
                          </Price>
                        </Description>
                      </OverlayDescription>
                    )}
                  </Service>
                </ServiceUL>
              ))
            ) : (
              <p>Keine Services verfügbar</p>
            )}
          </Services>
        </ServiceContainer>
      </CalculatorContainer>
    </PricingContainer>
  );
}

export const PricingContainer = styled.div`
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
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 var(--spacing-xl);
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-m);
  padding: var(--spacing-m) 0;
  border-bottom: 1px solid ${theme.color.dark};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0;
    gap: 0;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
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
  padding: var(--spacing-m) var(--spacing-l) var(--spacing-m) 0;
  width: 100%;

  h6 {
    font-weight: ${theme.fontWeight.bold};
    padding-top: var(--spacing-m);
  }

  ul {
    margin-bottom: var(--spacing-m);
    li {
      padding: var(--spacing-s) 0;
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

  span {
    text-transform: uppercase;
    font-size: var(--font-xs);
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
    transform: rotate(180deg);
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
  @media (min-width: ${theme.breakpoints.tablet}) {
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
`;

const OverlayDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  padding-top: var(--spacing-xs);
  animation: slide-animation 0.5s ease;

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

const Price = styled.p`
  font-size: var(--font-m) !important;
  padding-top: var(--spacing-xs);

  span {
    font-weight: ${theme.fontWeight.bold};
  }
`;
