import styled from "styled-components";
import { theme } from "@/styles";

export default function HeadTextBox() {
  return (
    <StyledTextContainer>
      <StyledTopTextWrapper>
        <StyledHeadline>VISION</StyledHeadline>
        <StyledTopText>
          Branding-Fotografie visuelle Identität. Moderne
          Unternehmensfotografie, um Ihre Marke authentisch zu präsentieren
        </StyledTopText>
      </StyledTopTextWrapper>
      <StyledBottomContainer>
        <StyledBottomTextWrapper>
          <StyledHeadline>BRANDING FOTOGRAFIE</StyledHeadline>
          <StyledBottomText>
            Hochwertige Fotos für Unternehmen zur Präsentation ihrer Marke.
          </StyledBottomText>
        </StyledBottomTextWrapper>
        <StyledBottomTextWrapper>
          <StyledHeadline>BRANDING FOTOGRAFIE</StyledHeadline>
          <StyledBottomText>
            Hochwertige Fotos für Unternehmen zur Präsentation ihrer Marke.
          </StyledBottomText>
        </StyledBottomTextWrapper>
        <StyledBottomTextWrapper>
          <StyledHeadline>BRANDING FOTOGRAFIE</StyledHeadline>
          <StyledBottomText>
            Hochwertige Fotos für Unternehmen zur Präsentation ihrer Marke.
          </StyledBottomText>
        </StyledBottomTextWrapper>
      </StyledBottomContainer>
    </StyledTextContainer>
  );
}
const StyledTextContainer = styled.div`
  width: 100%;
  margin: 0;
  margin-top: 5.8rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: ${theme.secondaryColorBeige};
`;

const StyledHeadline = styled.h2`
  font-size: ${theme.fontSizes.xs};
  margin: 0;
`;

const StyledTopTextWrapper = styled.div`
  min-width: auto;
  max-width: 600px;
`;

const StyledTopText = styled.p`
  font-size: ${theme.fontSizes.medium};
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 2.5rem;
`;

const StyledBottomTextWrapper = styled.div`
  min-width: auto;
  max-width: 300px;
`;

const StyledBottomText = styled.p`
  font-size: ${theme.fontSizes.xs};
  margin: 0;
  padding-top: 0.5rem;
`;

const StyledBottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;
