import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "@/styles";

export default function ScrollBox({ boxData = [], headline1, headline2, introText, text }) {
  return (
    <StyledSlideBoxContainer>
      <StyledTextBox>
        <h2>{headline1}</h2>
        <h3>{headline2}</h3>
        <p>{introText}</p>
      </StyledTextBox>
      <StyledScrollBoxContainer>
        {boxData.map(({ icon: Icon, label, title, text, image }, index) => (
          <StyledScrollBox key={index}>
            {Icon && (
              <IconWrapper>
                <Icon size={48} />
              </IconWrapper>
            )}
            <span>{label || `0${index + 1}`}</span>
            <h4>{title}</h4>

            {image && (
              <ImageWrapper>
                <StyledImage src={image} alt={title} layout="fill" />
              </ImageWrapper>
            )}

            <p>{text}</p>
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

  /* Firefox */
  & {
    scrollbar-width: thin; /* auto | thin | none */
    scrollbar-color: ${theme.color.beige} ${theme.color.dark}; /* thumb, track */
  }

  /* Webkit */
  &::-webkit-scrollbar {
    width: 6px; /* Breite der Scrollbar */
    height: 6px; /* Höhe der horizontalen Scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: ${theme.color.dark}; /* Track */
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.beige}; /* Thumb */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.green}; /* Hover-Effekt Thumb */
  }
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
  position: relative;
  flex-direction: column;
  align-items: start;
  color: ${theme.color.beige};
  padding: 0 8rem ${theme.spacing.xxl} 0;
  min-width: 600px;

  @media (max-width: 750px) {
    min-width: 350px;
    padding: 0 2.5rem ${theme.spacing.xxl} 0;
    margin-right: 2rem;
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

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing.ml};
  /* aspect-ratio: 1 / 1; */
  aspect-ratio: 3 / 2;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  right: -9rem;
  width: 100%;

  @media (min-width: 750px) {
    right: -12.5rem;
  }

  @media (min-width: 1100px) {
    right: -12.5rem;
  }
  svg {
    width: 100%;
    min-height: 20px;
    max-height: 30px;
    @media (max-width: 750px) {
      min-height: 15px;
      max-height: 20px;
    }
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
  /* border-radius: 30px 0 30px 30px; */
  margin-bottom: ${theme.spacing.m};

  @media (max-width: 750px) {
    /* border-radius: ${theme.borderRadius} 0 ${theme.borderRadius} ${theme.borderRadius}; */
  }
`;
