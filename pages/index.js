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
import CenterTextBox from "@/components/CenterTextBox";
import FAQ from "@/components/FAQ";
import Leistungen from "@/components/Leistungen";
import SplitTextBox from "@/components/SplitTextBox";
import Workflow from "@/components/Workflow";
import SplitTextBoxReverse from "@/components/SplitTextBoxReverse";
import KlubstudioBox from "@/components/KlubstudioBox";

export default function HomePage() {
  return (
    <Layout>
      <HeadTextBox />
      <Leistungen />
      <ProjectSlider projects={projects} />
      <SplitTextBox
        headline="Einheitlicher Auftritt auf allen Kanälen"
        text="Wir bringen die Persönlichkeit deines Unternehmens in Fotos und Videos zum Ausdruck. Mit einem durchdachten Konzept stärken wir das Vertrauen deiner Wunschkund*innen und machen deine Marke klar erkennbar. Unser Ziel ist es, einen passenden Look und einen umfassenden Bild- und Videopool zu schaffen, den du selbstständig für deine Kommunikations-kanäle nutzen kannst."
        imageURL="/images/Projekt_01_Averdung.jpg"
        imageDescription="Description of the image"
      />
      <SplitTextBoxReverse
        headline="Teamgefühl
nahbar machen"
        text="Wir zeigen die menschliche Seite deines Unternehmens und stärken die Verbindung zu Kunden und Talenten. Ob vor Ort oder bei dir, wir finden die beste Lösung für dein Team und sorgen für einen einheitlichen Auftritt um dein Unternehmen als attraktiven Arbeitgeber zu präsentieren."
        imageURLs={["/images/Klubstudio_05.jpg", "/images/Klubstudio_06.jpg"]}
        imageDescriptions={[
          "Description of the first image",
          "Description of the second image",
        ]}
      />
      <SplitTextBox
        headline="Social Media Boost 
für mehr Impact "
        text="Ob Fotos oder Videos für Reels – sie schaffen eine tiefere Verbindung zu deiner Zielgruppe und stärken die Markenbindung. Setze auf originelle, individuelle Inhalte statt auf Standard-Stockfotos und -Videos. Wir versorgen dich mit einem durchdachten Content-Bilderpool für eine bestimmte Zeit, sodass du dich entspannt auf andere wichtige Aufgaben konzentrieren kannst."
        imageURL="/images/Projekt_01_Averdung.jpg"
        imageDescription="Description of the image"
      />
      <Workflow />
      <Team />
      <CenterTextBox />
      <KlubstudioBox />
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
