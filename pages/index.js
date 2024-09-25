import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/styles";
import HeadTextBox from "@/components/HeadTextBox";
import EndBox from "@/components/EndBox";
import projects from "@/data/projects.json";
import studio from "@/data/studio.json";
import Team from "@/components/Team";
import ProjectSlider from "../components/ProjectSlider";
import FAQ from "@/components/FAQ";
import Leistungen from "@/components/Leistungen";
import SplitTextBox from "@/components/SplitTextBox";
import Workflow from "@/components/Workflow";
import SplitTextBoxReverse from "@/components/SplitTextBoxReverse";
import SplitTextBoxReverseDoubleImage from "@/components/SplitTextBoxReverseDoubleImage";
import KlubstudioBox from "@/components/KlubstudioBox";
import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import DoubleTextBox from "@/components/DoubleTextBox";
import DoubleTextTeam from "@/components/DoubleTextTeam";
import StudioSlider from "@/components/StudioSlider";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        {" "}
        <title>Dakiekste | Brandingfotografie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Beschreibe deine Seite hier" />
        <meta name="author" content="Dein Name" />
      </Head>
      <HeadTextBox />
      <Leistungen />
      <ProjectSlider projects={projects} />
      <DoubleTextBox
        topline1="all-in-one-look"
        headline1="Einheitlicher Auftritt auf allen Kanälen"
        topline2="Mitarbeiter*innen-portrait"
        text1="Wir bringen die Persönlichkeit deines Unternehmens in Fotos und Videos zum Ausdruck. Mit einem durchdachten Konzept stärken wir das Vertrauen deiner Wunschkund*innen und machen deine Marke klar erkennbar. Unser Ziel ist es, einen passenden Look und einen umfassenden Bild- und Videopool zu schaffen, den du selbstständig für deine Kommunikations-kanäle nutzen kannst."
        headline2="Das Teamgefühl
nahbar machen
"
        text2="Wir zeigen die menschliche Seite deines Unternehmens und stärken die Verbindung zu Kunden und Talenten. Ob vor Ort oder bei dir, wir finden die beste Lösung für dein Team und sorgen für einen einheitlichen Auftritt um dein Unternehmen als attraktiven Arbeitgeber zu präsentieren."
      />
      <SplitTextBoxReverse
        topline="digitale Plattformen"
        headline="Social Media Boost 
für mehr Impact"
        text="Ob Fotos oder Videos für Reels – sie schaffen eine tiefere Verbindung zu deiner Zielgruppe und stärken die Markenbindung. Setze auf originelle, individuelle Inhalte statt auf Standard-Stockfotos und -Videos. Wir versorgen dich mit einem durchdachten Content-Bilderpool für eine bestimmte Zeit, sodass du dich entspannt auf andere wichtige Aufgaben konzentrieren kannst."
        url="/images/Klubstudio_05.jpg"
        imageDescriptions="Description of image"
      />
      <Workflow />
      <DoubleTextTeam
        topline="das team"
        headline="Wir helfen dir zu mehr Sichtbarkeit."
        text1="Wir sind ein kreatives Trio, das seit über 14 Jahren als eingespieltes Team arbeitet. Respekt und Empathie bilden die Grundlage unserer Arbeit. Unser Studio in Bern befindet sich in einer ehemaligen Schule, wo wir unsere Projekte realisieren."
        text2="In engem Austausch mit unseren Kund*innen schaffen wir Bildwelten, die Menschen und ihre Geschichten in den Mittelpunkt stellen. Mit unserer Expertise in Fotografie, Videografie, Design und Webentwicklung bieten wir alles aus einer Hand und nutzen unser interdisziplinäres Netzwerk, um eure Bedürfnisse optimal zu erfüllen."
      />
      <Team />

      <StudioSlider studio={studio} />
      <SplitTextBoxReverseDoubleImage
        headline="Zusammen die Zukunft
        gestalten"
        text="Wir möchten gemeinsam mit dir etwas zurückgeben. Deshalb laden wir dich ein, mitzuentscheiden, wohin 50€ aus deiner Investition fließen sollen. Gemeinsam können wir die Welt ein Stück besser machen. Wähle aus einer sorgfältig ausgewählten Liste von Projekten aus."
        imageURLs={["/images/Klubstudio_05.jpg", "/images/Klubstudio_06.jpg"]}
        imageDescriptions={["Description of the first image", "Description of the second image"]}
      />
      <EndBox />
      <ContactForm />
      <FAQ />
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
