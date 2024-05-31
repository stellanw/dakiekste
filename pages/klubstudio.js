import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/styles";
// import ImageSlider from "@/components/ImageSlider";

export default function Klubstudio() {
  const images = [
    "/images/Klubstudio_1.png",
    "/images/Klubstudio_2.png",
    "/images/Klubstudio_3.png",
  ];

  return (
    <Layout>
      <StyledImageHeadContainer>
        <StyledHeadImage
          src="/images/Klubstudio.png"
          alt="dakiekste header image"
          priority
          width={1400}
          height={1400}
        />
      </StyledImageHeadContainer>
      <StyledHeadlineContainer>
        <StyledH1Thin>KLUBSTUDIO&nbsp;&nbsp;</StyledH1Thin>
        <StyledH1>UNSER FOTOSTUDIO</StyledH1>
      </StyledHeadlineContainer>
      <StyledTextContainer>
        <StyledH2>RAUM FÜR EURE VISION</StyledH2>
        <p>
          In unserem professionell ausgestatteten und großzügigem Fotostudio
          können Mitarbeiterportraits oder auch eure Produkte fotografiert
          werden. Mit 100m2 Fläche, viel Tageslicht und professionellem
          Equipment bietet unser Studio alles um eure gewünschten Bilder
          anzufertigen.
        </p>
      </StyledTextContainer>
      {/* <ImageSlider images={images} headline="IMPRESSIONEN" /> */}
    </Layout>
  );
}

const StyledImageHeadContainer = styled.div`
  display: flex;
  position: relative;
  z-index: -5;
  width: 100%;
  height: 400px;
  /* overflow: hidden; */
  top: -3rem;
  @media (min-width: 750px) {
    height: 600px;
  }
  @media (min-width: 1100px) {
    height: 800px;
  }
`;

const StyledHeadImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const StyledHeadlineContainer = styled.div`
  margin-left: 2rem;
`;

const StyledH1Thin = styled.h1`
  font-size: 2.2rem;
  font-weight: 200;
  margin: 0;
  margin-top: -14rem;
  /* color: ${theme.textColor}; */
  color: white;
`;

const StyledH1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 3rem;
  /* color: ${theme.textColor}; */
  color: white;
`;

const StyledTextContainer = styled.div`
  font-size: ${theme.fontSizes.small};
  margin: 9rem 2rem 4rem 2rem;
  max-width: 600px;
`;

const StyledH2 = styled.h2`
  font-size: ${theme.fontSizes.xs};
  margin-bottom: 0.5rem;
`;
