import styled from "styled-components";
import { theme } from "@/styles";
import { useState, useEffect } from "react";
import { PiArrowUpRight } from "react-icons/pi";
import { FaBagShopping } from "react-icons/fa6";

export default function Pricing({ pricingData, servicesData }) {
  const [selectedCategory, setSelectedCategory] = useState({
    "Wer bist du?": "Soloselbstständig",
    "Was brauchst du?": "Fotografie",
    Pakete: "Basic",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [isOpen, setIsOpen] = useState([]);

  useEffect(() => {
    if (servicesData && servicesData.length > 0) {
      setIsOpen(new Array(servicesData.length).fill(false));
    } else {
      console.error("servicesData ist leer oder undefined");
    }
  }, [servicesData]);

  const handleCategorySelection = (category, option) => {
    setSelectedCategory((prev) => ({
      ...prev,
      [category]: option,
    }));
  };

  const toggleOverlay = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState.map((item, i) => (i === index ? item : false));
    });
  };

  const handleServiceSelection = (service) => {
    setSelectedServices((prev) => {
      if (prev.includes(service)) {
        return prev.filter((s) => s !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  // Absicherung: servicesData überprüfen, bevor es gefiltert wird
  const filteredServices =
    servicesData && servicesData.length > 0
      ? servicesData.filter(
          (service) =>
            service.category === selectedCategory["Was brauchst du?"] ||
            service.category === "Weiteres"
        )
      : [];

  const applyDiscount = (price) => {
    if (selectedCategory["Wer bist du?"] === "Soloselbstständig") {
      return price * 0.7; // 30% Rabatt
    }
    return price; // Kein Rabatt
  };

  const totalPrice = selectedServices.reduce((total, service) => {
    const price = service.price[selectedCategory["Pakete"]];
    const discountedPrice = applyDiscount(price); // Discounted price berechnen
    return total + discountedPrice;
  }, 0);

  const removeService = (serviceToRemove) => {
    setSelectedServices((prev) => prev.filter((service) => service !== serviceToRemove));
  };

  return (
    <PricingContainer>
      <HeadlineContainer>
        <h5>PREISKALKULATION</h5>
        <h1>
          Dein Invest für einen visuellen Erfolg, <br />
          der nachhaltig wirkt.
        </h1>
      </HeadlineContainer>
      <CalculatorContainer>
        <CategoriesContainer>
          {pricingData.map((category, categoryIndex) => (
            <CategoryContainer key={categoryIndex}>
              <h6>{category.category}</h6>
              <OptionContainer>
                {category.options.map((option, optionIndex) => (
                  <Option key={optionIndex}>
                    <Checkbox
                      checked={selectedCategory[category.category] === option}
                      onChange={() => handleCategorySelection(category.category, option)}
                    />
                    <OptionName>{option}</OptionName>
                  </Option>
                ))}
              </OptionContainer>
            </CategoryContainer>
          ))}
        </CategoriesContainer>
        <ServiceContainer>
          <Outcome>
            <h6>Leistungswarenkorb</h6>
            <ul>
              {selectedServices.map((service, index) => (
                <li key={index}>
                  <SelectedItem>
                    <FaBagShopping />
                    {service.title}
                    <RemoveButton onClick={() => removeService(service)}>x</RemoveButton>
                  </SelectedItem>
                </li>
              ))}
            </ul>
            <h4>Preis ab {totalPrice} EURO*</h4>
            <p>*zzgl. MwSt.</p>
          </Outcome>
          <Services>
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <ServiceUL key={index} className={isOpen[index] ? "open" : ""}>
                  <Service>
                    <ServiceTitleGroup>
                      <TitleCheckboxContainer>
                        <CheckboxService
                          checked={selectedServices.includes(service)}
                          onChange={() => handleServiceSelection(service)}
                        />
                        <ServiceTitle>{service.title}</ServiceTitle>
                      </TitleCheckboxContainer>

                      <StyledArrowIcon
                        className={isOpen[index] ? "rotate" : ""}
                        onClick={() => toggleOverlay(index)}
                      />
                    </ServiceTitleGroup>
                    {isOpen[index] && (
                      <OverlayDescription>
                        <Description>
                          {service.descriptions[selectedCategory["Pakete"]]}
                          <Price>
                            Preis ab{" "}
                            <span>
                              {applyDiscount(service.price[selectedCategory["Pakete"]])} EURO
                            </span>
                            *
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

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${theme.spacing.xxxxl} 0 ${theme.spacing.xxxxl} 0;
  background-color: ${theme.color.beige};
`;

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 0 ${theme.spacing.xl} 0;

  h5 {
  }

  h1 {
    text-align: center;
  }
`;

// Hauptcontainer für den gesamten Rechner
const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${theme.spacing.xl};
`;

// Container für die Kategorien
const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: solid 1px;
  padding-bottom: ${theme.spacing.s};
`;

// Einzelner Kategoriecontainer
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// Container für Optionen innerhalb einer Kategorie
const OptionContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.m};
`;

// Einzelne Option
const Option = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.s} ${theme.spacing.s} ${theme.spacing.s} 0;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
  }

  &.selected {
  }
`;

// Checkbox innerhalb der Option
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 1rem;
  height: 1rem;
  accent-color: ${theme.color.lightGreen};
  border-radius: 50%;
  border: solid 2px ${theme.color.dark};
  cursor: pointer;

  &:checked {
    background-color: ${theme.color.green};
  }
`;

// Name der Option
const OptionName = styled.span`
  text-transform: uppercase;
  font-size: ${theme.fontSizes.xs};
  padding: 0 0 0 ${theme.spacing.s};
`;

// ServiceContainer mit 1/3 und 2/3 Aufteilung
const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; /* 1/3 und 2/3 Aufteilung */
  width: 100%;
`;

// Outcome-Bereich (1/3 der Breite)
const Outcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: ${theme.spacing.ml};

  h6 {
  }

  ul {
    margin-bottom: ${theme.spacing.ml};
    li {
      padding: ${theme.spacing.s} 0;
    }
  }

  h4 {
  }
  p {
  }
`;

const SelectedItem = styled.div`
  display: flex;
  gap: ${theme.spacing.s};
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${theme.fontSizes.xxs};
  text-transform: uppercase;
  margin-left: ${theme.spacing.xs};

  &:hover {
    font-weight: ${theme.fontWeight.fatBold};
  }
`;

// Services-Bereich (2/3 der Breite)
const Services = styled.div`
  display: grid;
`;

const StyledArrowIcon = styled(PiArrowUpRight)`
  margin-left: 1rem;
  transform: scale(1.2);
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  &.rotate {
    transform: rotate(180deg);
  }
`;

const ServiceUL = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Service = styled.li`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.ml} 0 ${theme.spacing.ml} 0;
  width: 100%;
  border-bottom: 1px solid ${theme.color.dark};
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
  gap: ${theme.spacing.s};
`;

const CheckboxService = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 1rem;
  height: 1rem;
  accent-color: ${theme.color.lightGreen};
  border-radius: 50%;
  border: solid 2px ${theme.color.dark};
  cursor: pointer;

  &:checked {
    background-color: ${theme.color.green};
  }
`;

const ServiceTitle = styled.h2`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.extraBold};
`;

const OverlayDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.light};
  padding: ${theme.spacing.m} 0 0 0;
  animation-name: slide-animation;
  animation-duration: 0.5s;
  transition: opacity 0.3s ease;

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
  padding-top: ${theme.spacing.m};
  span {
    font-weight: ${theme.fontWeight.extraBold};
  }
`;
