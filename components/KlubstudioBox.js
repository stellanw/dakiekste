import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function KlubstudioBox() {
  const tags = [
    "100m2 Fläche",

    "Viel Tageslicht",
    "Große Auswahl an Hintergründen",
    "Guter Kaffee",
    "Steamer",
    "Hair & MakeUp Bereich",
    "Umkleidekabine",
    "Hohe Flexibilität",
    "Wohlfühl Ambiente",
    "Kreativer Raum für Innovation",
    "Flexible Set-Up Optionen",
    // "Exklusive Requisiten und Hintergründe",
    "Schnelle Umsetzung",
    "Zugeschnitten auf Ihre Bedürfnisse",
    "Hochwertige technische Ausrüstung",
    ,
  ];

  return (
    <StyledSplitTextBox>
      <StyledImageContainer>
        <StyledImage
          src="/images/Klubstudio_07.jpg" // Update with your image path
          alt="Description of image"
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
        />
      </StyledImageContainer>
      <StyledTextWrapper>
        <h1>Unser Klub Studio</h1>
        <TagWrapper>
          {tags.map((tag, index) => (
            <StyledSpanBorder key={index}>{tag}</StyledSpanBorder>
          ))}
        </TagWrapper>
      </StyledTextWrapper>
    </StyledSplitTextBox>
  );
}

const StyledSplitTextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  /* justify-content: start; */
  width: 100%;
  background-color: ${theme.brightBackgroundColor};
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  min-width: 370px;
  max-width: 600px;
  padding: 4rem;
  margin: auto;
  height: auto;

  h1 {
    font-size: ${theme.fontSizes.large};
    text-transform: uppercase;
    padding-bottom: 1rem;
  }

  p {
    font-size: ${theme.fontSizes.xs};
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-left: -0.5rem;
`;

const StyledSpanBorder = styled.span`
  font-weight: 800;
  font-size: ${theme.fontSizes.xs};
  /* text-transform: lowercase; */
  display: inline-block;
  padding-left: 0.35rem;
  padding-right: 0.35rem;
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  margin-top: 0.5rem;
  border-radius: 15px;
  border: solid 1px ${theme.primaryColor};
  line-height: 1.5;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledImageContainer = styled.div`
  position: relative;
  flex: 1;
  width: 30%;
  min-width: 370px;
  min-height: 500px;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 100%
    );
    pointer-events: none;
  }
`;
