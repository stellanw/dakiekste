// import styled from "styled-components";
// import { theme } from "@/styles";

// export default function ScrollBox({ boxData = [], headline1, headline2, autoplay }) {
//   return (
//     <StyledSlideBoxContainer>
//       <StyledTextBox>
//         <h2>{headline1}</h2>
//         <h3>{headline2}</h3>
//       </StyledTextBox>
//       <StyledScrollBoxContainer>
//         {boxData.map(({ label, title, text }, index) => (
//           <StyledScrollBox key={index}>
//             <span>{label || `0${index + 1}`}</span>
//             <h4>{title}</h4>
//             <p>{text}</p>
//           </StyledScrollBox>
//         ))}
//       </StyledScrollBoxContainer>
//     </StyledSlideBoxContainer>
//   );
// }

// const StyledSlideBoxContainer = styled.div`
//   background-color: ${theme.color.dark};
//   padding: ${theme.spacing.xxxl} 0;
//   overflow: hidden;

//   @media (min-width: 750px) {
//     padding: ${theme.spacing.xxxxl} 0;
//   }
//   @media (min-width: 1100px) {
//     padding: ${theme.spacing.xxxxl} 0;
//   }
// `;

// const StyledScrollBoxContainer = styled.div`
//   display: flex;
//   position: relative;
//   overflow: scroll;
//   padding: ${theme.spacing.xxl} 0;
//   margin-left: ${theme.spacing.mobile.side};

//   @media (min-width: 750px) {
//     margin-left: ${theme.spacing.tablet.side};
//   }
//   @media (min-width: 1100px) {
//     margin-left: ${theme.spacing.desktop.side};
//   }
//   &::-webkit-scrollbar {
//     width: 0;
//     height: 1px;
//   }

//   &::-webkit-scrollbar-track {
//     background: ${theme.color.beige}; /* Hintergrund der Track */
//     border-radius: 0; /* Kein Border-Radius für den Track */
//   }

//   &::-webkit-scrollbar-thumb {
//     background: ${theme.color.beige};
//     border-radius: 0;
//     outline: 2px solid ${theme.color.beige};
//     width: 50px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background: ${theme.color.green};
//   }
//   & {
//     scrollbar-width: thin; /* Optionen: auto, thin, none */
//     scrollbar-color: ${theme.color.green} ${theme.color.beige}; /* thumb color, track color */
//   }
// `;

// const StyledTextBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   color: ${theme.color.beige};
//   margin: auto;

//   h3 {
//     text-transform: capitalize;
//     line-height: ${theme.lineHeight.xxxl};
//     padding: ${theme.spacing.xs} ${theme.spacing.mobile.side};
//     margin: 0 0 ${theme.spacing.m} 0;
//     font-weight: ${theme.fontWeight.bold};
//     @media (min-width: 750px) {
//       padding: ${theme.spacing.xs} 0;
//     }

//     @media (min-width: 1100px) {
//       margin: 0 0 ${theme.spacing.xl} 0;
//     }
//   }
// `;

// const StyledScrollBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: space-evenly;
//   color: ${theme.color.beige};
//   padding: 0 ${theme.spacing.desktop.side} 0 0;
//   min-width: 400px;

//   @media (max-width: 750px) {
//     min-width: 300px;
//     padding: 0 ${theme.spacing.l} 0 0;
//   }
//   span {
//     text-transform: uppercase;
//     font-size: ${theme.fontSizes.xs};
//     line-height: ${theme.lineHeight.m};
//     font-weight: ${theme.fontWeight.regular};
//     @media (min-width: 750px) {
//       line-height: ${theme.lineHeight.l};
//       font-size: ${theme.fontSizes.m};
//       font-size: ${theme.fontSizes.xs};
//     }

//     @media (min-width: 1100px) {
//       line-height: ${theme.lineHeight.xxl};
//       font-size: ${theme.fontSizes.s};
//     }
//   }
// `;
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "@/styles";
import { SlArrowDown } from "react-icons/sl";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDownWideLine } from "react-icons/ri";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import AugenIcon from "@/Icons/AugenIcon";

export default function ScrollBox({ boxData = [], headline1, headline2, autoplay }) {
  const [expandedIndex, setExpandedIndex] = useState(null); // Nur ein einzelner Index für den offenen Text

  const handleToggleText = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle nur den geklickten Index
  };

  return (
    <StyledSlideBoxContainer>
      <StyledTextBox>
        <h2>{headline1}</h2>
        <h3>{headline2}</h3>
      </StyledTextBox>
      <StyledScrollBoxContainer>
        {boxData.map(({ label, title, text, image }, index) => (
          <StyledScrollBox key={index}>
            <ImageWrapper>
              <StyledImage src={image} alt={title} layout="fill" />
            </ImageWrapper>
            <span>{label || `0${index + 1}`}</span>
            <h4>{title}</h4>
            <p>
              {expandedIndex === index ? text : `${text.slice(0, 50)}...`} {/* Nur den Text für den aktiven Index erweitern */}
            </p>
            <StyledIconContainer onClick={() => handleToggleText(index)}>
              <StyledArrow expanded={expandedIndex === index} />
              <Eyes>
                <StyledIconWrapper expanded={expandedIndex === index}>
                  <AugenIcon color={theme.color.green} width={50} height={50} />
                </StyledIconWrapper>
                <StyledIconWrapper expanded={expandedIndex === index}>
                  <AugenIcon color={theme.color.green} width={50} height={50} />
                </StyledIconWrapper>
              </Eyes>
            </StyledIconContainer>
          </StyledScrollBox>
        ))}
      </StyledScrollBoxContainer>
    </StyledSlideBoxContainer>
  );
}
const StyledSlideBoxContainer = styled.div`
  background-color: ${theme.color.dark};
  padding: ${theme.spacing.xxxl} 0;
  overflow: hidden;

  @media (min-width: 750px) {
    padding: ${theme.spacing.xxxxl} 0;
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxxxl} 0;
  }
`;

const StyledScrollBoxContainer = styled.div`
  display: flex;
  position: relative;
  overflow: scroll;
  padding: ${theme.spacing.xxl} 0;
  margin-left: ${theme.spacing.mobile.side};

  min-width: 250px;
  @media (min-width: 750px) {
    margin-left: ${theme.spacing.tablet.side};
  }
  @media (min-width: 1100px) {
    margin-left: ${theme.spacing.desktop.side};
  }
  &::-webkit-scrollbar {
    width: 0;
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
  align-items: center;
  text-align: center;
  color: ${theme.color.beige};
  margin: auto;

  h3 {
    text-transform: capitalize;
    line-height: ${theme.lineHeight.xxxl};
    padding: ${theme.spacing.xs} ${theme.spacing.mobile.side};
    margin: 0 0 ${theme.spacing.m} 0;
    font-weight: ${theme.fontWeight.bold};
    @media (min-width: 750px) {
      padding: ${theme.spacing.xs} 0;
    }

    @media (min-width: 1100px) {
      margin: 0 0 ${theme.spacing.xl} 0;
    }
  }
`;

const StyledScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: ${theme.color.beige};
  padding: 0 ${theme.spacing.desktop.side} 0 0;
  min-width: 400px;

  @media (max-width: 750px) {
    min-width: 300px;
    padding: 0 ${theme.spacing.l} 0 0;
  }
  span {
    text-transform: uppercase;
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeight.m};
    font-weight: ${theme.fontWeight.regular};
    @media (min-width: 750px) {
      line-height: ${theme.lineHeight.l};
      font-size: ${theme.fontSizes.m};
      font-size: ${theme.fontSizes.xs};
    }

    @media (min-width: 1100px) {
      line-height: ${theme.lineHeight.xxl};
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

const Eyes = styled.div`
  display: flex;
  margin-left: 1rem;
`;

const StyledIconWrapper = styled.div`
  z-index: 15;
  margin: 0 -0.94rem;
  transition: transform 0.5s ease;
  transform: ${(props) => ` ${props.expanded ? "rotate(-130deg)" : "rotate(-220deg)"}`};
`;

const StyledArrow = styled(SlArrowDown)`
  margin-right: 0.5rem;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.expanded ? "scaleY(-1)" : "scaleY(1)")};
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing.ml};
  aspect-ratio: 1 / 1;
  width: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  /* border-radius: ${theme.borderRadius}; */
  border-radius: 30px 0 30px 30px;
  margin-bottom: ${theme.spacing.m};

  @media (max-width: 750px) {
    border-radius: ${theme.borderRadius} 0 ${theme.borderRadius} ${theme.borderRadius};
  }
`;
