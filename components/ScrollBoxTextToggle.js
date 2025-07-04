import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "@/styles";
import { SlArrowDown } from "react-icons/sl";

export default function ScrollBoxTextToggle({ boxData = [], headline1, headline2, text }) {
  const [expandedIndex, setExpandedIndex] = useState(null); // Nur ein einzelner Index für den offenen Text

  const handleToggleText = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle nur den geklickten Index
  };

  return (
    <StyledSlideBoxContainer>
      <StyledTextBox>
        <h2>{headline1}</h2>
        <h3>{headline2}</h3>
        <p>{text}</p>
      </StyledTextBox>
      <StyledScrollBoxContainer>
        {boxData.map(({ label, title, text, image }, index) => (
          <StyledScrollBox key={index}>
            <span>{label || `0${index + 1}`}</span>
            <h4>{title}</h4>
            {image && (
              <ImageWrapper>
                <StyledImage src={image} alt={title} layout="fill" />
              </ImageWrapper>
            )}
            <p>
              {/* {text} */}
              {text.length <= 260 ? text : expandedIndex === index ? text : `${text.slice(0, 240)}...`}
            </p>
            {text.length > 260 && (
              <StyledIconContainer onClick={() => handleToggleText(index)}>
                <StyledArrow expanded={expandedIndex === index} />
              </StyledIconContainer>
            )}
          </StyledScrollBox>
        ))}
      </StyledScrollBoxContainer>
    </StyledSlideBoxContainer>
  );
}

const StyledSlideBoxContainer = styled.div`
  background-color: ${theme.color.dark};
  padding: ${theme.spacing.mobile.height.m} 0;
  overflow: hidden;

  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.m} 0;
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.xxl} 0;
  }
`;

const StyledScrollBoxContainer = styled.div`
  display: flex;
  position: relative;
  overflow: scroll;
  background-color: ${theme.color.dark};
  min-width: 250px;
  /* border: 1px solid red; */
  margin-left: ${theme.spacing.mobile.side};
  padding: ${theme.spacing.mobile.height.l} 0 0 0;
  @media (min-width: 750px) {
    margin-left: ${theme.spacing.tablet.side};
    padding: ${theme.spacing.tablet.height.l} 0 0 0;
  }
  @media (min-width: 1100px) {
    margin-left: ${theme.spacing.desktop.side};
    padding: ${theme.spacing.desktop.height.l} 0 0 0;
  }
  &::-webkit-scrollbar {
    height: 1px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.color.beige}; /* Hintergrund der Track */
    border-radius: 0; /* Kein Border-Radius für den Track */
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.beige};
    border-radius: 0;
    outline: 2px solid ${theme.color.beige};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.green};
  }
  /* & {
    scrollbar-width: thin; /// Optionen: auto, thin, none
    scrollbar-color: ${theme.color.green} ${theme.color.beige}; /// thumb color, track color
  } */
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  color: ${theme.color.beige};
  max-width: 100%;
  padding: 0 ${theme.spacing.mobile.side};
  @media (min-width: 750px) {
    padding: 0 ${theme.spacing.tablet.side};
    max-width: 70%;
  }

  @media (min-width: 1100px) {
    padding: 0 ${theme.spacing.desktop.side};
    max-width: 70%;
  }

  h3 {
    text-transform: none;
    font-weight: ${theme.fontWeight.lightBold};
    line-height: ${theme.lineHeight.l};
    @media (min-width: 750px) {
      font-weight: ${theme.fontWeight.lightBold};
      line-height: ${theme.lineHeight.xxxl};
    }

    @media (min-width: 1100px) {
      font-weight: ${theme.fontWeight.lightBold};
      line-height: ${theme.lineHeight.xxxl};
    }
  }
`;

const StyledScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: ${theme.color.beige};
  padding: 0 7rem 0 0; //Abstand zwischen Boxes
  min-width: 600px;

  @media (max-width: 750px) {
    min-width: 300px;
    padding: 0 ${theme.spacing.l} 0 0;
  }
  span {
    text-transform: uppercase;
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeight.s};
    font-weight: ${theme.fontWeight.light};
    @media (min-width: 750px) {
      line-height: ${theme.lineHeight.l};
      font-size: ${theme.fontSizes.m};
      font-size: ${theme.fontSizes.xs};
    }

    @media (min-width: 1100px) {
      line-height: ${theme.lineHeight.l};
      font-size: ${theme.fontSizes.s};
    }
  }
`;

const StyledIconContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: start;
  align-items: center;
  width: 100%;
`;

const StyledArrow = styled(SlArrowDown)`
  margin: 0.9rem 0;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.expanded ? "scaleY(-1)" : "scaleY(1)")};
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing.ml};
  /* aspect-ratio: 1 / 1; */
  aspect-ratio: 3 / 2;
  width: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
  /* border-radius: 30px 0 30px 30px; */
  margin-bottom: ${theme.spacing.m};

  @media (max-width: 750px) {
    border-radius: ${theme.borderRadius} 0 ${theme.borderRadius} ${theme.borderRadius};
  }
`;
