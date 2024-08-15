import styled from "styled-components";
import { theme } from "@/styles";
import AugenGrossIcon from "@/Icons/AugenGrossIcon";
import AugeIcon from "@/Icons/AugeIcon";

export default function EndBox() {
  return (
    <StyledContainer>
      <StyledSVG>
        <AugenGrossIcon color={theme.highlightColor} />
      </StyledSVG>
      <StyledHeadline>Zeigt wer ihr seid mit dakiekste</StyledHeadline>
      <StyledText>
        fotografie <span>.</span> natürlich <span>.</span> Sichtbar
      </StyledText>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem 4rem 2rem;
  width: 100%;
  background-color: ${theme.darkBackgroundColor};
  color: ${theme.secondaryColorBeige};
`;

const StyledSVG = styled.div`
  display: flex;
  width: fit-content;
  width: 80px;
  height: 120px;
`;

const StyledHeadline = styled.h1`
  font-size: ${theme.fontSizes.small};
  margin-bottom: 0.2rem;
  text-align: center;
  font-weight: 200;
  text-transform: uppercase;
`;

const StyledText = styled.p`
  font-size: ${theme.fontSizes.large};
  font-weight: 500;
  text-align: center;
  margin: 0;
  text-transform: uppercase;
`;
