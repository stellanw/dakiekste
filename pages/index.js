import Layout from "@/components/Layout";
import HeadBox from "@/components/HeadBox";
// import projects from "@/data/projects.json";
import Team from "@/components/Team";
import ProjectSlider from "../components/ProjectSlider";
import FAQ from "@/components/FAQ";
import Leistungen from "@/components/Leistungen";
import Workflow from "@/components/SlideBox";
import SplitTextBoxReverse from "@/components/SplitTextBoxReverse";
import SplitTextBoxReverseDoubleImage from "@/components/SplitTextBoxReverseDoubleImage";
import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import DoubleTextBox from "@/components/DoubleTextBox";
import DoubleTextTeam from "@/components/DoubleTextTeam";
import StudioSlider from "@/components/StudioSlider";
import StudioBox from "@/components/StudioBox";
import { IoBulbOutline, IoCameraReverseOutline, IoFingerPrintOutline } from "react-icons/io5";
import Pricing from "@/components/Pricing";
import SlideBox from "@/components/SlideBox";
import ProjectSliderLightDebug from "@/components/ProjectSliderLightDebug";
// import Video from "@/components/Video";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        {" "}
        <title>Dakiekste | Brandingfotografie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Branding und Corporate Fotografie für dein Business" />
        <meta name="author" content="Dein Name" />
      </Head>
      <HeadBox
        headline="Personal Branding fotografie"
        text="Wir machen deine Marke sichtbar und bringen deine Werte und Persönlichkeit visuell auf den
          Punkt – mit modernen Ideen und frischen Ansätzen."
      />
      {/* <Video src="/videos/Klubstudio_video.mp4" /> */}

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

      <ProjectSliderLightDebug
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
        text1="Wir bringen die Persönlichkeit deines Unternehmens in Fotos und Videos zum Ausdruck und sorgen für einen konsistenten Look. Mit einem durchdachten Konzept schaffen wir einen maßgeschneiderten Bild- und Videopool, der deine Marke klar erkennbar macht und dich von austauschbaren Stockfotos abhebt. Damit hast du alle Freiheiten, die Inhalte nahtlos und effektiv für deine Kommunikationskanäle einzusetzen."
        topline2="Nahbares Marketing"
        headline2="Dein Team als Markenbotschafter"
        text2="Mit individuell gestalteten Mitarbeiterfotos und Businessportraits bringen wir deine Employer-Branding-Kampagne auf das nächste Level. Wir machen die Werte und die Persönlichkeit deines Unternehmens greifbar, stärken deine Position im Recruiting und zeigen dein Unternehmen als vertrauenswürdigen, attraktiven Arbeitgeber, der Talente überzeugt."
      />
      <SplitTextBoxReverse
        topline="Digital sichtbar bleiben"
        headline="Visueller Content der deine Zielgruppe erreicht"
        text="Ob Social Media, Webseiten oder E-Commerce: Wir liefern dir visuelle Inhalte, die deine Botschaft klar und einprägsam transportieren. Kreativer, zielgerichteter Content steigert die Interaktion, fördert die Markenbindung und hilft dir, deine Zielgruppe langfristig zu erreichen."
        url="/images/Klubstudio_5.jpg"
        imageDescriptions="Description of image"
      />

      <SlideBox
        headline1="Sorgloser Ablauf"
        headline2="Konzentriere dich auf das Wesentliche während wir uns um den Rest kümmern."
        boxData={[
          {
            title: "ERSTGESPRÄCH & KONZEPTION",
            text: "Mit einer detaillierten Analyse deiner Werte und Ziele entwickeln wir eine Strategie die deine Positionierung klar stärkt.",
          },
          {
            title: "SHOOTING, ABLAUF & ORGANISATION",
            text: "Wir erstellen Briefings & Timetables, organisieren alles fürs Shooting und kümmern uns um Styling, Setdesign und ums Hair & Make-up.",
          },
          {
            title: "HOCHWERTIGES VISUELLES FOOTAGE",
            text: "Die fertigen, professionell bearbeiteten Fotos stehen dir zeitnah zur Verfügung und sind sofort für alle Kanäle einsatzbereit.",
          },
          {
            title: "KREATIVE POST-PRODUKTION",
            text: "In der Nachbearbeitung sorgen wir für den perfekten Feinschliff, um deine Fotos noch ansprechender und hochwertiger zu gestalten.",
          },
          {
            title: "MARKETING-STRATEGIEN",
            text: "Wir unterstützen dich bei der optimalen Nutzung der Inhalte für deine Marketingkanäle – von Social Media bis zur Webseite.",
          },
          {
            title: "MESSBARE ERGEBNISSE",
            text: "Unsere Arbeit zielt darauf ab, sichtbare und messbare Erfolge für deine Marke zu erzielen.",
          },
          {
            title: "LANGFRISTIGE UNTERSTÜTZUNG",
            text: "Auch nach Projektabschluss stehen wir für zukünftige Anpassungen und Erweiterungen zur Verfügung.",
          },
          {
            title: "KUNDENFEEDBACK & OPTIMIERUNG",
            text: "Wir nehmen uns Zeit für dein Feedback, um unsere Leistungen weiter zu optimieren und auf deine Bedürfnisse abzustimmen.",
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
        const
        studio={[
          {
            image: "/images/KLUBSTUDIO_3.jpg",
            alt: "Großzügiger Arbeitsbereich mit kreativer Atmosphäre",
          },
          {
            image: "/images/KLUBSTUDIO_4.jpg",
            alt: "Fotostudio-Setup mit professioneller Beleuchtung",
          },
          {
            image: "/images/KLUBSTUDIO_5.jpg",
            alt: "Sitzbereich mit stilvollen Möbeln und Dekoration",
          },
          {
            image: "/images/KLUBSTUDIO_6.jpg",
            alt: "Detailaufnahme der hochwertigen Studiobeleuchtung",
          },
          {
            image: "/images/KLUBSTUDIO_7.jpg",
            alt: "Equipment und Kamera-Setup für professionelle Shootings",
          },
          {
            image: "/images/KLUBSTUDIO_8.jpg",
            alt: "Hintergründe und Requisiten für kreative Fotoshootings",
          },
          {
            image: "/images/KLUBSTUDIO_9.jpg",
            alt: "Meeting- und Besprechungsbereich im Klub Studio",
          },
          {
            image: "/images/KLUBSTUDIO_10.jpg",
            alt: "Studiofläche mit verschiedenen Aufnahmesets",
          },
          { image: "/images/KLUBSTUDIO_11.jpg", alt: "Arbeitsplatz mit iMac und kreativem Setup" },
          {
            image: "/images/KLUBSTUDIO_12.jpg",
            alt: "Gemütlicher Lounge-Bereich für entspannte Pausen",
          },
          {
            image: "/images/KLUBSTUDIO_13.jpg",
            alt: "Modernes Design und Architektur im Klub Studio",
          },
          {
            image: "/images/KLUBSTUDIO_14.jpg",
            alt: "Aufnahmeset für Produktfotografie mit Lichtsetup",
          },
          {
            image: "/images/KLUBSTUDIO_17.jpg",
            alt: "Besprechungsraum mit Whiteboard für Planungssessions",
          },
          { image: "/images/KLUBSTUDIO_19.jpg", alt: "Nachtaufnahme des Studios mit Beleuchtung" },
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
            answer:
              "Ja, wir arbeiten auch am Wochenende! Wir sind flexibel und passen uns deinen Bedürfnissen an. Gemeinsam finden wir den passenden Zeitpunkt, der für dich am besten funktioniert.",
          },
          {
            caption: "Leistungen",
            question: "Was bietet ihr neben der Fotografie noch an?",
            answer:
              "Ja, wir arbeiten auch am Wochenende! Wir sind flexibel und passen uns deinen Bedürfnissen an. Gemeinsam finden wir den passenden Zeitpunkt, der für dich am besten funktioniert.",
          },
          {
            caption: "Lieferung",
            question: "Wie lange dauert es, bis wir die fertigen Bilder erhalten?",
            answer:
              "Ja, wir arbeiten auch am Wochenende! Wir sind flexibel und passen uns deinen Bedürfnissen an. Gemeinsam finden wir den passenden Zeitpunkt, der für dich am besten funktioniert.",
          },
          {
            caption: "Preise",
            question: "Wie gestalten sich Eure Preise?",
            answer:
              "Ja, wir arbeiten auch am Wochenende! Wir sind flexibel und passen uns deinen Bedürfnissen an. Gemeinsam finden wir den passenden Zeitpunkt, der für dich am besten funktioniert.",
          },
          {
            caption: "Zeiten",
            question: "Arbeitet ihr auch am Wochenende?",
            answer:
              "Ja, wir arbeiten auch am Wochenende! Wir sind flexibel und passen uns deinen Bedürfnissen an. Gemeinsam finden wir den passenden Zeitpunkt, der für dich am besten funktioniert.",
          },
          {
            caption: "Termin",
            question: "Wie weit im Voraus kann ich einen Termin buchen?",
            answer:
              "Ja, wir arbeiten auch am Wochenende! Wir sind flexibel und passen uns deinen Bedürfnissen an. Gemeinsam finden wir den passenden Zeitpunkt, der für dich am besten funktioniert.",
          },
          {
            caption: "Buchung",
            question: "Ich komme nicht aus Hamburg, kann ich euch dennoch buchen?",
            answer:
              "Ja, wir arbeiten auch am Wochenende! Wir sind flexibel und passen uns deinen Bedürfnissen an. Gemeinsam finden wir den passenden Zeitpunkt, der für dich am besten funktioniert.",
          },
        ]}
      />

      <Pricing
        pricingData={[
          {
            category: "Wer bist du?",
            options: ["Soloselbstständig", "Unternehmen"],
          },
          {
            category: "Was brauchst du?",
            options: ["Fotografie", "Video", "Weiteres"],
          },
          {
            category: "Pakete",
            options: ["Basic", "Premium"],
          },
        ]}
        servicesData={[
          {
            title: "Mitarbeiter*innen & CEO Portraits",
            category: "Fotografie",
            descriptions: {
              Basic: "Ein professionelles Basis-Paket für CEO- und Team-Portraits.",
              Premium: "Inklusive Location-Scouting, Retusche und erweiterter Optionen.",
            },
            price: {
              Basic: 120,
              Premium: 250,
            },
          },
          {
            title: "Personal Branding",
            category: "Fotografie",
            descriptions: {
              Basic: "Ein kompaktes Branding-Paket für Selbstständige und kleine Unternehmen.",
              Premium: "Umfassendes Branding inkl. Video-Content und strategischer Beratung.",
            },
            price: {
              Basic: 3000,
              Premium: 5000,
            },
          },
          {
            title: "Event & Happenings",
            category: "Fotografie",
            descriptions: {
              Basic: "Basis-Eventdokumentation ohne Nachbearbeitung.",
              Premium: "Professionelle Eventdokumentation inkl. Nachbearbeitung.",
            },
            price: {
              Basic: 850,
              Premium: 1500,
            },
          },
          {
            title: "Social Media Content",
            category: "Fotografie",
            descriptions: {
              Basic: "Erstelle modernen Content für Instagram und Co.",
              Premium: "Erweiterte Content-Produktion inkl. Analyse und Strategie-Entwicklung.",
            },
            price: {
              Basic: 500,
              Premium: 1200,
            },
          },
          {
            title: "Konzeption",
            category: "Fotografie",
            descriptions: {
              Basic: "Basis-Konzeptentwicklung mit Fokus auf dein Branding.",
              Premium: "Erweiterte Konzeption inkl. Workshops und Zielgruppenanalyse.",
            },
            price: {
              Basic: 900,
              Premium: 2000,
            },
          },
          {
            title: "Video-Content für Social Media",
            category: "Video",
            descriptions: {
              Basic: "Erstellung von Video-Content für Social-Media-Plattformen.",
              Premium: "Inklusive Storyboard-Erstellung und Nachbearbeitung.",
            },
            price: {
              Basic: 800,
              Premium: 1500,
            },
          },
          {
            title: "Event-Videodokumentation",
            category: "Video",
            descriptions: {
              Basic: "Dokumentation von Events ohne Nachbearbeitung.",
              Premium: "Professionelle Event-Videodokumentation inkl. Nachbearbeitung.",
            },
            price: {
              Basic: 1000,
              Premium: 2500,
            },
          },
          {
            title: "Imagefilm",
            category: "Video",
            descriptions: {
              Basic: "Kurzer Imagefilm für dein Unternehmen.",
              Premium: "Erweiterter Imagefilm mit Interviews und detaillierter Nachbearbeitung.",
            },
            price: {
              Basic: 4000,
              Premium: 6000,
            },
          },
          {
            title: "Web-Design",
            category: "Weiteres",
            descriptions: {
              Basic: "Design einer einfachen, aber modernen Website.",
              Premium: "Komplexes Web-Design inkl. UI/UX Beratung und Implementierung.",
            },
            price: {
              Basic: 1500,
              Premium: 5000,
            },
          },
          {
            title: "Marketingberatung",
            category: "Weiteres",
            descriptions: {
              Basic: "Beratung zur Steigerung deiner Sichtbarkeit auf Social Media.",
              Premium: "Detaillierte Beratung inkl. Content-Strategie und Kampagnenplanung.",
            },
            price: {
              Basic: 800,
              Premium: 2000,
            },
          },
        ]}
      />
      <ContactForm />
      <SplitTextBoxReverseDoubleImage
        headline="Zusammen die Zukunft
        gestalten"
        text="Wir möchten etwas zurückgeben. Deshalb unterstützen wir einmal im Jahr ein gemeinnütziges Projekt. Wir wollen mit unserer Arbeit einen wichtigen Beitrag leisten. Ein ausgewähltes Projekt bekommt von uns eine Fotokampagne."
        imageURLs={["/images/Dakiekste_BTS_01.jpg", "/images/Dakiekste_BTS_02.jpg"]}
        imageDescriptions={["Description of the first image", "Description of the second image"]}
        topline="Gemeinsam für mehr"
      />
    </Layout>
  );
}
