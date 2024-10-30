import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/styles";
import HeadBox from "@/components/HeadBox";
import EndBox from "@/components/EndBox";
// import projects from "@/data/projects.json";
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
import StudioBox from "@/components/StudioBox";
import { IoBulbOutline, IoCameraReverseOutline, IoFingerPrintOutline } from "react-icons/io5";

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
      <HeadBox
        headline="Personal Branding fotografie"
        text="Wir machen deine Marke sichtbar und bringen deine Werte und Persönlichkeit visuell auf den
          Punkt – mit modernen Ideen und frischen Ansätzen."
      />
      <Leistungen
        leistungen={[
          {
            title: "Branding FOTOGRAFIE",
            text: "Setze auf nahbare Fotos, um Vertrauen aufzubauen und deine Marke klar zu präsentieren.",
          },
          {
            title: "Mitarbeiter*innen & Buisness portraits",
            text: "Zeige dich und dein Team – auch entscheidend, um die richtigen Talente anzuziehen.",
          },
          {
            title: "Social Media Content",
            text: "Individueller Foto-Content vermittelt mehr Persönlichkeit als anonyme Stockfotos.",
          },
        ]}
      />
      <ProjectSlider
        projects={[
          {
            title: "IMAGE KAMPAGNEN",
            description: "Description of Project 1",
            image: "/images/Projekt_01_Averdung.jpg",
          },
          {
            title: "BUSINESS PORTRAITS",
            description: "Description of Project 2",
            image: "/images/Business_Portrait.jpg",
          },
          {
            title: "FOTO REPORTAGEN",
            description: "Description of Project 3",
            image: "/images/Projekt_03.jpg",
          },
          {
            title: "EVENTS",
            description: "Description of Project 3",
            image: "/images/event.jpg",
          },
        ]}
      />
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
      <Workflow
        boxData={[
          {
            Icon: IoBulbOutline,
            title: "ERSTGESPRÄCH & KONZEPTION",
            text: "Mit einer detaillierten Analyse deiner Werte und Ziele entwickeln wir eine Strategie die deine Positionierung klar stärkt.",
          },
          {
            Icon: IoCameraReverseOutline,
            title: "SHOOTING, ABLAUF & ORGANISATION",
            text: "Wir erstellen Briefings & Timetables, organisieren alles fürs Shooting und kümmern uns um Styling, Setdesign und ums Hair & Make-up.",
          },
          {
            Icon: IoFingerPrintOutline,
            title: "HOCHWERTIGES VISUELLES FOOTAGE",
            text: "Die fertigen, professionell bearbeiteten Fotos stehen dir zeitnah zur Verfügung und sind sofort für alle Kanäle einsatzbereit.",
          },
        ]}
      />
      <DoubleTextTeam
        topline="das team"
        headline="Wir helfen dir zu mehr Sichtbarkeit."
        text1="Wir sind ein kreatives Trio, das seit über 14 Jahren als eingespieltes Team arbeitet. Respekt und Empathie bilden die Grundlage unserer Arbeit. Unser Studio in Bern befindet sich in einer ehemaligen Schule, wo wir unsere Projekte realisieren."
        text2="In engem Austausch mit unseren Kund*innen schaffen wir Bildwelten, die Menschen und ihre Geschichten in den Mittelpunkt stellen. Mit unserer Expertise in Fotografie, Videografie, Design und Webentwicklung bieten wir alles aus einer Hand und nutzen unser interdisziplinäres Netzwerk, um eure Bedürfnisse optimal zu erfüllen."
      />
      <Team
        teamMembers={[
          {
            name: "Stellan",
            text: "Fotografie • Video • Web Development",
            image: "Stellan_Portrait.jpg",
            email: "mailto:stellan@dakiekste.com",
          },
          {
            name: "Clara",
            text: "Portraitfotografie • Social Media • Content Production",
            image: "Clara_Portrait_2.jpg",
            email: "mailto:clara@dakiekste.com",
          },
          {
            name: "Maischa",
            text: "Fotografie • Video • Design »Branding«",
            image: "Maischa_Portrait.jpg",
            email: "mailto:maischa@dakiekste.com",
          },
        ]}
      />
      <StudioSlider
        studio={[
          {
            image: "/images/Klubstudio_01.jpg",
          },
          {
            image: "/images/Klubstudio_02.jpg",
          },
          {
            image: "/images/Klubstudio_03.jpg",
          },
          {
            image: "/images/Klubstudio_04.jpg",
          },
          {
            image: "/images/Klubstudio_05.jpg",
          },
        ]}
      />
      <StudioBox
        topline="KLUB STUDIO"
        headline="WILLKOMMEN IN 
UNSEREM KLUB STUDIO"
        text="Unser Fotostudio bietet eine große Auswahl an Hintergründen, Stühlen, Requisiten und hochwertigem Equipment. Mit unserem Tageslichtstudio und direkten Location-Sets in der Nähe sowie kostenfreien Parkplätzen könnt ihr eure Visionen perfekt umsetzen. Die Studio-Nutzung ist im Preis inbegriffen."
        benefit1="Kostenfreie Parkplätze"
        benefit2="Kaffee, Tee & Softgetränke"
        benefit3="Daylight-Studio"
      />
      <FAQ
        faqData={[
          {
            caption: "Vorgespräch",
            question: "Welche Vorbereitung ist für ein Shooting erforderlich?",
            answer: "Unsere Corporate Branding Fotografie ...",
          },
          {
            caption: "Dienstleistungen",
            question: "Was bietet ihr neben der Fotografie noch an?",
            answer: "Mit individuellen Business-Porträts ...",
          },
          {
            caption: "Lieferung",
            question: "Wie lange dauert es, bis wir die fertigen Bilder erhalten?",
            answer: "Zeigt die Menschen hinter eurer Marke ...",
          },
          {
            caption: "Preise",
            question: "Wie gestalten sich Eure Preise?",
            answer: "Unsere Event-Fotografie ...",
          },
          {
            caption: "Zeiten",
            question: "Arbeitet ihr auch am Wochenende?",
            answer: "Unser Team produziert ...",
          },
          {
            caption: "Termin",
            question: "Wie weit im Voraus kann ich einen Termin buchen?",
            answer: "Unser Team produziert ...",
          },
          {
            caption: "Buchung",
            question: "Ich komme nicht aus Hamburg, kann ich euch dennoch buchen?",
            answer: "Unser Team produziert ...",
          },
        ]}
      />
      <ContactForm />
      <SplitTextBoxReverseDoubleImage
        headline="Zusammen die Zukunft
        gestalten"
        text="Wir möchten gemeinsam mit dir etwas zurückgeben. Deshalb laden wir dich ein, mitzuentscheiden, wohin 50€ aus deiner Investition fließen sollen. Gemeinsam können wir die Welt ein Stück besser machen. Wähle aus einer sorgfältig ausgewählten Liste von Projekten aus."
        imageURLs={["/images/Klubstudio_05.jpg", "/images/Klubstudio_06.jpg"]}
        imageDescriptions={["Description of the first image", "Description of the second image"]}
        topline="Gemeinsam für mehr"
      />
    </Layout>
  );
}
