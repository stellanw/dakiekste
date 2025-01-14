import styled from "styled-components";
import { theme } from "@/styles";
import { useState, useEffect } from "react";
import { PiArrowUpRight } from "react-icons/pi";
import { PiPushPinLight } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";

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
        <h2>PREISKALKULATION</h2>
        <h3>
          Dein Invest für einen visuellen Erfolg, <br />
          der nachhaltig wirkt.
        </h3>
      </HeadlineContainer>
      <CalculatorContainer>
        <CategoriesContainer>
          {pricingData.map((category, categoryIndex) => (
            <CategoryContainer key={categoryIndex}>
              <h6>{category.category}</h6>
              <OptionContainer>
                {category.options.map((option, optionIndex) => (
                  <Option key={optionIndex}>
                    <input
                      type="checkbox"
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
          <OutcomeContainer>
            <OutcomeContent>
              <h6>Leistungswarenkorb</h6>
              <ul>
                {selectedServices.map((service, index) => (
                  <li key={index}>
                    <SelectedItem>
                      <PiPushPinLight />
                      {service.title}
                      <RemoveButton onClick={() => removeService(service)}>
                        <StyledRemoveIcon />
                      </RemoveButton>
                    </SelectedItem>
                  </li>
                ))}
              </ul>
              <h4>Preis ab {totalPrice} EURO*</h4>
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
                        <input
                          type="checkbox"
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
  margin: 0;

  @media (min-width: 750px) {
  }
  @media (min-width: 1100px) {
  }
`;

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 0 ${theme.spacing.xl} 0;
  width: 100%;

  h3 {
    text-align: center;
  }
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${theme.spacing.xl};
`;

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.ml};
  padding: ${theme.spacing.m} 0;
  border-bottom: 1px solid ${theme.color.dark};
  @media (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.s};
    padding: 0;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    padding: 0;
  }

  h6 {
    padding: 0 0 0 ${theme.spacing.xxs};
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  @media (min-width: 750px) {
    flex-direction: row;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    gap: ${theme.spacing.m};
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  cursor: pointer;

  &:hover {
  }

  &.selected {
  }

  @media (min-width: 750px) {
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.s} 0;
  }
`;

const OptionName = styled.span`
  text-transform: uppercase;
  font-size: ${theme.fontSizes.xxs};
  padding: 0 0 0 ${theme.spacing.xs};

  @media (min-width: 750px) {
    padding: 0 0 0 ${theme.spacing.xxs};
  }

  @media (min-width: 1100px) {
    padding: 0;
  }
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  box-sizing: border-box;
  @media (min-width: 750px) {
    flex-direction: row;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

const OutcomeContainer = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
`;

const OutcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: ${theme.spacing.ml};
  box-sizing: border-box;
  @media (min-width: 750px) {
  }

  @media (min-width: 1100px) {
  }

  ul {
    margin-bottom: ${theme.spacing.ml};
    li {
      padding: ${theme.spacing.s} 0;
    }
  }

  p {
    font-size: ${theme.fontSizes.xs};
  }
`;

const SelectedItem = styled.div`
  display: flex;
  gap: ${theme.spacing.s};
  align-items: center;
`;

const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${theme.fontSizes.xxs};
  text-transform: uppercase;
  margin-left: ${theme.spacing.xs};
  transform: scale(0.9);

  &:hover {
    font-weight: ${theme.fontWeight.fatBold};
  }
`;

const StyledRemoveIcon = styled(RxCross1)`
  &:hover {
    transform: scale(1.1); /* Leichte Vergrößerung */
    stroke-width: 1.1; /* Macht das Icon "dicker", wenn unterstützt */
  }
`;

const Services = styled.div`
  flex: 2;
  box-sizing: border-box;
  padding: ${theme.spacing.s} 0;

  @media (min-width: 750px) {
  }

  @media (min-width: 1100px) {
    padding: 0;
  }
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
  padding: ${theme.spacing.m} 0 ${theme.spacing.m} 0;
  border-bottom: 1px solid ${theme.color.dark};

  @media (min-width: 750px) {
    padding: ${theme.spacing.ml} 0 ${theme.spacing.ml} 0;
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.m} 0 ${theme.spacing.m} 0;
  }
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

const ServiceTitle = styled.h5`
  padding: 0;
  font-weight: ${theme.fontWeight.extraBold};
`;

const OverlayDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
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
