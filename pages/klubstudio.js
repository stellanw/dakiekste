import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/styles";
import ImageSlider from "@/components/ImageSlider";
import { useEffect, useState } from "react";

export default function Klubstudio() {
  const images = [
    "/images/Klubstudio_01.jpg",
    "/images/Klubstudio_02.jpg",
    "/images/Klubstudio_03.jpg",
    "/images/Klubstudio_04.jpg",
    "/images/Klubstudio_05.jpg",
    "/images/Klubstudio_06.jpg",
    "/images/Klubstudio_07.jpg",
    "/images/Klubstudio_08.jpg",
    "/images/Klubstudio_09.jpg",
    "/images/Klubstudio_10.jpg",
    "/images/Klubstudio_11.jpg",
    "/images/Klubstudio_12.jpg",
    "/images/Klubstudio_13.jpg",
    "/images/Klubstudio_14.jpg",
    "/images/Klubstudio_15.jpg",
    "/images/Klubstudio_16.jpg",
    "/images/Klubstudio_17.jpg",
    "/images/Klubstudio_18.jpg",
    "/images/Klubstudio_19.jpg",
    "/images/Klubstudio_20.jpg",
    "/images/Klubstudio_21.jpg",
    "/images/Klubstudio_22.jpg",
    "/images/Klubstudio_23.jpg",
    "/images/Klubstudio_24.jpg",
    "/images/Klubstudio_25.jpg",
    "/images/Klubstudio_26.jpg",
    "/images/Klubstudio_27.jpg",
    "/images/Klubstudio_28.jpg",
    "/images/Klubstudio_29.jpg",
    "/images/Klubstudio_30.jpg",
    "/images/Klubstudio_31.jpg",
    "/images/Klubstudio_32.jpg",
    "/images/Klubstudio_33.jpg",
    "/images/Klubstudio_34.jpg",
    "/images/Klubstudio_35.jpg",
    "/images/Klubstudio_36.jpg",
    "/images/Klubstudio_37.jpg",
    "/images/Klubstudio_38.jpg",
    "/images/Klubstudio_39.jpg",
    "/images/Klubstudio_40.jpg",
    "/images/Klubstudio_41.jpg",
    "/images/Klubstudio_42.jpg",
    "/images/Klubstudio_43.jpg",
    "/images/Klubstudio_44.jpg",
    "/images/Klubstudio_45.jpg",
    "/images/Klubstudio_46.jpg",
    "/images/Klubstudio_47.jpg",
    "/images/Klubstudio_48.jpg",
    "/images/Klubstudio_49.jpg",
    "/images/Klubstudio_50.jpg",
    "/images/Klubstudio_51.jpg",
    "/images/Klubstudio_52.jpg",
    "/images/Klubstudio_53.jpg",
    "/images/Klubstudio_54.jpg",
  ];

  const getRandomSize = () => Math.floor(Math.random() * 2) + 1; // 1 oder 2
  const getRandomPosition = () => Math.floor(Math.random() * 4) + 1; // 1 bis 4

  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    const items = images.map((src, index) => ({
      id: index,
      src,
      size: getRandomSize(),
      position: getRandomPosition(),
    }));
    setGridItems(items);
  }, []);

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
        <StyledH1Thin>KLUB STUDIO&nbsp;&nbsp;</StyledH1Thin>
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
      <ImageSlider images={images} />
      <GridContainer>
        {gridItems.map((item) => (
          <GridItem
            key={item.id}
            size={item.size}
            position={item.position}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        ))}
      </GridContainer>
    </Layout>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 Spalten */
  grid-auto-rows: 100px; /* Höhe der Zeilen */
  gap: 10px;
  margin: 20px;
  margin-top: 4rem;
`;

const GridItem = styled.div`
  background-size: cover;
  background-position: center;
  ${({ size }) =>
    size === 1 &&
    `
    grid-column: span 1;
    grid-row: span 1;
  `}
  ${({ size }) =>
    size === 2 &&
    `
    grid-column: span 2;
    grid-row: span 2;
  `}
  ${({ size }) =>
    size === 3 &&
    `
    grid-column: span 3;
    grid-row: span 3;
  `}
  ${({ position }) =>
    position &&
    `
    grid-column-start: ${position};
  `}
`;

const StyledImageHeadContainer = styled.div`
  display: flex;
  position: relative;
  z-index: -5;
  width: 100%;
  height: 400px;
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
  margin-left: 4rem;
`;

const StyledH1Thin = styled.h1`
  font-size: 2.2rem;
  font-weight: 200;
  margin: 0;
  margin-top: -14rem;
  color: white;
`;

const StyledH1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 3rem;
  color: white;
`;

const StyledTextContainer = styled.div`
  font-size: ${theme.fontSizes.small};
  margin: 9rem 2rem 4rem 4rem;
  max-width: 600px;
`;

const StyledH2 = styled.h2`
  font-size: ${theme.fontSizes.xs};
  margin-bottom: 0.5rem;
`;
