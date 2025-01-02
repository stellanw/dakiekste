import styled from "styled-components";
import { theme } from "@/styles";

export default function CenterTextBox() {
  return (
    <StyledTextContainer>
      <StyledTopTextWrapper>
        <h1> Wir bringen frischen Wind in deine Positionierung</h1>
        <p>
          Wir sind ein kreatives Trio, das seit über <span>14 Jahren</span> als eingespieltes{" "}
          <span>Team</span> arbeitet. <span>Respekt und Empathie</span> bilden die Grundlage unserer
          Arbeit. Unser Studio in Berne befindet sich in einer ehemaligen Schule, wo wir unsere
          Projekte realisieren. In engem Austausch mit unseren Kund*innen schaffen wir Bildwelten,
          die <span>Menschen</span> und ihre Geschichten in den
          <pan>Mittelpunkt</pan> stellen. Mit unserer Expertise in Fotografie, Videografie, Design
          und Webentwicklung bieten wir alles aus einer Hand und nutzen unser{" "}
          <span>interdisziplinäres Netzwerk</span>, um eure Bedürfnisse optimal zu erfüllen.
        </p>
      </StyledTopTextWrapper>
    </StyledTextContainer>
  );
}
const StyledTextContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 2rem 2rem 2rem 2rem;
  background-color: ${theme.brightBackgroundColor};
`;

const StyledTopTextWrapper = styled.div`
  min-width: auto;

  h1 {
    font-size: ${theme.fontSizes.xs};
    margin: 0;
    text-transform: uppercase;
  }

  p {
    font-size: ${theme.fontSizes.medium};
    font-weight: 300;
    line-height: 2rem;
    margin: 0;
    padding-top: 1rem;
    padding-bottom: 0;
  }

  span {
    font-weight: 600;
  }
`;
