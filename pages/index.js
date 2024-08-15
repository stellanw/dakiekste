import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/styles";
import HeadTextBox from "@/components/HeadTextBox";
import LeistungBox from "@/components/LeistungBox";
import EndBox from "@/components/EndBox";
import projects from "@/data/projects.json";
import Team from "@/components/Team";
import ProjectSlider from "../components/ProjectSlider";
import WorkflowSlider from "@/components/WorkflowSlider";
import Header from "@/components/Header";
import CenterTextBox from "@/components/CenterTextBox";
import FAQ from "@/components/FAQ";
import Leistungen from "@/components/Leistungen";
import SplitTextBox from "@/components/SplitTextBox";
import Workflow from "@/components/Workflow";

export default function HomePage() {
  return (
    <Layout>
      <HeadTextBox />

      {/* <StyledImageContainer>
        <StyledImage
          src="/images/Team.png"
          alt="Teamfoto"
          width={1200}
          height={500}
        />
      </StyledImageContainer> */}
      <Leistungen />
      <ProjectSlider projects={projects} />
      <SplitTextBox />
      <Workflow />
      <Team />
      <CenterTextBox />
      <FAQ />
      <EndBox />
    </Layout>
  );
}

const StyledSpanThin = styled.span`
  font-weight: 200;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
