import styled from "styled-components";
import { theme } from "@/styles";
import AugenGrossIcon from "@/Icons/AugenGrossIcon";

export default function EndBox() {
  return (
    <StyledContainer>
      <StyledSVG>
        <AugenGrossIcon />
      </StyledSVG>
      <StyledHeadline>ZEIGT WER IHR SEID</StyledHeadline>
      <StyledText>DAKIEKSTE VERLEIHT EURER MARKE VISUELLEN AUSDRUCK</StyledText>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  width: 100%;
  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColorBeige};
`;

const StyledSVG = styled.div`
  display: flex;
  width: fit-content;
  width: 200px;
`;

const StyledHeadline = styled.h1`
  font-size: ${theme.fontSizes.xxl};
  margin-bottom: 0.2rem;
  margin-top: 1rem;
  text-align: center;
`;

const StyledText = styled.p`
  font-size: ${theme.fontSizes.xxl};
  font-weight: 200;
  text-align: center;
  margin: 0;
`;
