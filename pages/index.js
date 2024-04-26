import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/styles";
import HeadTextBox from "@/components/HeadTextBox";
import LeistungBox from "@/components/LeistungBox";
import EndBox from "@/components/EndBox";

import Team from "@/components/Team";
import ProjectSlider from "../components/ProjectSlider";

export default function HomePage() {
  const projects = [
    {
      title: "PROJEKT 01",
      description: "Description of Project 1",
      image1: "/images/Projekt.png",
      image2: "/images/Projekt.png",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image1: "/images/Projekt.png",
      image2: "/images/Projekt.png",
    },
    {
      title: "Project 3",
      description: "Description of Project 2",
      image1: "/images/Projekt.png",
      image2: "/images/Projekt.png",
    },
  ];
  return (
    <Layout>
      <StyledImageHeadContainer>
        <StyledImage
          src="/images/Dakiekste_header_image_.jpg"
          alt="dakiekste header image"
          priority
          width={1400}
          height={500}
        />
      </StyledImageHeadContainer>
      <StyledHeadlineContainer>
        <StyledH1Thin>HEADLINE&nbsp;&nbsp;</StyledH1Thin>
        <StyledH1>ZUR STRATEGIE</StyledH1>
      </StyledHeadlineContainer>
      <HeadTextBox />
      <LeistungBox />
      <StyledImageContainer>
        <StyledImage
          src="/images/Platzhalter.jpg"
          alt="Klubstudio"
          width={1200}
          height={500}
        />
      </StyledImageContainer>
      <Team />
      <ProjectSlider projects={projects} />
      <EndBox />
    </Layout>
  );
}

const StyledSpanThin = styled.span`
  font-weight: 200;
`;
const StyledImageHeadContainer = styled.div`
  display: flex;
  position: relative;
  z-index: -5;
  width: 100%;
  height: 400px;
  /* overflow: hidden; */
  top: -3rem;
`;

const StyledHeadlineContainer = styled.div`
  margin-left: 2rem;
`;

const StyledH1Thin = styled.h1`
  /* display: flex;
  justify-content: start;
  flex-wrap: nowrap; */
  font-size: 2.2rem;
  font-weight: 200;
  margin: 0;
  margin-top: -14rem;
  /* margin-bottom: 3rem; */
  color: white;
`;

const StyledH1 = styled.h1`
  /* display: flex;
  justify-content: start;
  flex-wrap: nowrap; */
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
  /* margin-top: 10rem; */
  margin-bottom: 3rem;
  color: white;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-top: -0.2rem;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
