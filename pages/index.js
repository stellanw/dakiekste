import Layout from "@/components/Layout";
import HeadBox from "@/components/HeadBox";
import Team from "@/components/Team";
import ProjectSlider from "../components/ProjectSlider";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import DoubleTextBox from "@/components/DoubleTextBox";
import StudioBox from "@/components/StudioBox";
import { IoBulbOutline, IoCameraReverseOutline, IoFingerPrintOutline } from "react-icons/io5";
import Pricing from "@/components/Pricing";
import SlideBox from "@/components/SlideBox";
import ScrollBox from "@/components/ScrollBox";
import ProjectSliderLight from "@/components/ProjectSliderLight";
import TeamText from "@/components/TeamText";
import ImageTextBox from "@/components/ImageTextBox";
import ImageElement from "@/components/ImageElement";
import TextSlider from "@/components/TextSlider";

//Image imports
import image1 from "/public/images/Image1.jpg";
import image2 from "/public/images/Image2.jpg";
import image3 from "/public/images/Image3.jpg";
import image4 from "/public/images/Image4.jpg";
import image6 from "/public/images/Image6.jpg";

import projectImage1 from "/public/images/Projekt_01_Averdung.jpg";
import projectImage2 from "/public/images/Business_Portrait.jpg";
import projectImage3 from "/public/images/Projekt_03.jpg";
import projectImage4 from "/public/images/event.jpg";

import btsImage1 from "/public/images/Dakiekste_BTS_01.jpg";
import btsImage2 from "/public/images/Dakiekste_BTS_02.jpg";

import studioImage1 from "/public/images/KLUBSTUDIO_3.jpg";
import studioImage2 from "/public/images/KLUBSTUDIO_4.jpg";
import studioImage3 from "/public/images/KLUBSTUDIO_5.jpg";
import studioImage4 from "/public/images/KLUBSTUDIO_6.jpg";
import studioImage5 from "/public/images/KLUBSTUDIO_7.jpg";
import studioImage6 from "/public/images/KLUBSTUDIO_8.jpg";
import studioImage7 from "/public/images/KLUBSTUDIO_9.jpg";
import studioImage8 from "/public/images/KLUBSTUDIO_12.jpg";
import studioImage9 from "/public/images/KLUBSTUDIO_13.jpg";
import studioImage10 from "/public/images/KLUBSTUDIO_14.jpg";
import studioImage11 from "/public/images/KLUBSTUDIO_17.jpg";
import studioImage12 from "/public/images/KLUBSTUDIO_19.jpg";
import studioImage13 from "/public/images/KLUBSTUDIO_10.jpg";

import screenshot1 from "/public/images/averdung_website_screenshot.png";
import screenshot2 from "/public/images/neuland_website_screenshot.png";
import screenshot3 from "/public/images/otto_website_screenshot.png";
import StudioSlider from "@/components/StudioSlider";

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
        text={
          <>
            Wir machen deine Marke sichtbar und bringen deine Werte <br />
            und Persönlichkeit visuell auf den Punkt -<br /> mit modernen Ideen und frischen Ansätzen.
          </>
        }
      />
      <ProjectSlider
        projects={[
          {
            title: "IMAGE KAMPAGNEN",
            description: "Description of Project 1",
            image: projectImage1,
          },
          {
            title: "BUSINESS PORTRAITS",
            description: "Description of Project 2",
            image: projectImage2,
          },
          {
            title: "FOTO REPORTAGEN",
            description: "Description of Project 3",
            image: projectImage3,
          },
          {
            title: "EVENTS",
            description: "Description of Project 3",
            image: projectImage4,
          },
        ]}
      />
      <section id="services">
        <ScrollBox
          autoplay={false}
          headline1="Leistungen"
          headline2={
            <>
              Alles, was du für deinen Erfolg brauchst –<br />
              aus einer Hand.
            </>
          }
          boxData={[
            {
              image: studioImage1,
              label: "Foto",
              title: "Branding FOTOGRAFIE",
              text: "Setze auf nahbare Fotos, um Vertrauen aufzubauen und deine Marke klar zu präsentieren.",
            },
            {
              image: studioImage2,
              label: "Foto",
              title: "Mitarbeiter*innen & Buisness portraits",
              text: "Zeige dich und dein Team – auch entscheidend, um die richtigen Talente anzuziehen.",
            },
            {
              image: studioImage3,
              label: "Foto & Video",
              title: "Social Media Content",
              text: "Individueller Foto-Content vermittelt mehr Persönlichkeit als anonyme Stockfotos.",
            },
            {
              image: studioImage4,
              label: "Foto",
              title: "Eventfotografie",
              text: "Halte wichtige Momente fest – von Konferenzen bis Firmenevents.",
            },
            {
              image: studioImage5,
              label: "Foto & Video",
              title: "Employer Branding",
              text: "Stärke deine Arbeitgebermarke mit Bildern, die zeigen, was dich ausmacht.",
            },
            {
              image: studioImage6,
              label: "Web Development",
              title: "Website",
              text: "Stärke deine Arbeitgebermarke mit Bildern, die zeigen, was dich ausmacht.",
            },
            {
              image: studioImage7,
              label: "Design",
              title: "Logo Design",
              text: "Stärke deine Arbeitgebermarke mit Bildern, die zeigen, was dich ausmacht.",
            },
            {
              image: studioImage8,
              label: "Design",
              title: "Visual Corporate Identity",
              text: "Stärke deine Arbeitgebermarke mit Bildern, die zeigen, was dich ausmacht.",
            },
          ]}
        />
      </section>
      <ProjectSliderLight
        projects={[
          {
            title: "IMAGE KAMPAGNEN",
            description: "Description of Project 1",
            image: image1,
          },
          {
            title: "BUSINESS PORTRAITS",
            description: "Description of Project 2",
            image: image2,
          },
          {
            title: "FOTO REPORTAGEN",
            description: "Description of Project 3",
            image: image3,
          },
          {
            title: "EVENTS",
            description: "Description of Project 3",
            image: image4,
          },
          {
            title: "EVENTS",
            description: "Description of Project 3",
            image: image6,
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
      <ImageTextBox
        topline="Digital sichtbar bleiben"
        headline="Visueller Content der deine Zielgruppe erreicht"
        text1="Ob Social Media, Webseiten oder E-Commerce: Wir liefern dir visuelle Inhalte, die deine Botschaft klar und einprägsam transportieren. Kreativer, zielgerichteter Content steigert die Interaktion, fördert die Markenbindung und hilft dir, deine Zielgruppe langfristig zu erreichen."
        text2=""
        image={image4}
        alt="Description of image"
      />

      <section id="workflow">
        <ScrollBox
          autoplay={false}
          headline1="Sorgloser Ablauf"
          headline2={
            <>
              Konzentriere dich auf das Wesentliche <br />
              während wir uns um den Rest kümmern.
            </>
          }
          boxData={[
            {
              image: studioImage1,
              label: "",
              title: "ERSTGESPRÄCH & KONZEPTION",
              text: "Mit einer detaillierten Analyse deiner Werte und Ziele entwickeln wir eine Strategie die deine Positionierung klar stärkt.",
            },
            {
              image: studioImage2,
              label: "",
              title: "SHOOTING, ABLAUF & ORGANISATION",
              text: "Wir erstellen Briefings & Timetables, organisieren alles fürs Shooting und kümmern uns um Styling, Setdesign und ums Hair & Make-up.",
            },
            {
              image: studioImage3,
              label: "",
              title: "HOCHWERTIGES VISUELLES FOOTAGE",
              text: "Die fertigen, professionell bearbeiteten Fotos stehen dir zeitnah zur Verfügung und sind sofort für alle Kanäle einsatzbereit.",
            },
            {
              image: studioImage4,
              label: "",
              title: "KREATIVE POST-PRODUKTION",
              text: "In der Nachbearbeitung sorgen wir für den perfekten Feinschliff, um deine Fotos noch ansprechender und hochwertiger zu gestalten.",
            },
            {
              image: studioImage5,
              label: "",
              title: "MARKETING-STRATEGIEN",
              text: "Wir unterstützen dich bei der optimalen Nutzung der Inhalte für deine Marketingkanäle – von Social Media bis zur Webseite.",
            },
            {
              image: studioImage6,
              label: "",
              title: "MESSBARE ERGEBNISSE",
              text: "Unsere Arbeit zielt darauf ab, sichtbare und messbare Erfolge für deine Marke zu erzielen.",
            },
            {
              image: studioImage7,
              label: "",
              title: "LANGFRISTIGE UNTERSTÜTZUNG",
              text: "Auch nach Projektabschluss stehen wir für zukünftige Anpassungen und Erweiterungen zur Verfügung.",
            },
            {
              image: studioImage8,
              label: "",
              title: "KUNDENFEEDBACK & OPTIMIERUNG",
              text: "Wir nehmen uns Zeit für dein Feedback, um unsere Leistungen weiter zu optimieren und auf deine Bedürfnisse abzustimmen.",
            },
          ]}
        />
      </section>
      <TextSlider
        autoplay={true}
        reviews={[
          {
            client: "Maximilian T. - Marketing Director",
            text: "»Mit Dakiekste haben wir nicht nur hochwertige Businessfotos erhalten, sondern auch ein kreatives Team, das uns bei jedem Schritt unterstützt hat. Die Zusammenarbeit war effizient und das Ergebnis übertrifft unsere Erwartungen!«",
            link: "Click here",
            url: "https://developer.mozilla.org/de/docs/Web/CSS/object-fit",
            screenshot: screenshot1,
          },
          {
            client: "Miriam L. - HR Manager",
            text: "»Die Mitarbeiterfotos von Dakiekste haben unseren Recruiting-Prozess enorm verbessert. Die authentischen, professionellen Bilder haben uns geholfen, die richtigen Talente anzusprechen und unsere Arbeitgebermarke zu stärken.«",
            link: "Click here",
            url: "https://developer.mozilla.org/de/docs/Web/CSS/object-fit",
            screenshot: screenshot2,
          },
          {
            client: "Jana F - CEO",
            text: "»Dank Dakiekste konnten wir unsere Markenidentität visuell perfekt inszenieren. Das Team hat sich wirklich Zeit genommen, uns und unsere Vision zu verstehen – und das sieht man in jedem Bild!«",
            link: "Click here",
            url: "https://developer.mozilla.org/de/docs/Web/CSS/object-fit",
            screenshot: screenshot3,
          },
        ]}
      />

      <section id="team">
        <TeamText
          topline="das team"
          headline="Wir helfen dir zu mehr Sichtbarkeit."
          text="Wir sind ein kreatives Trio, das seit über 14 Jahren als eingespieltes Team arbeitet. Respekt und Empathie bilden die Grundlage unserer Arbeit. Unser Studio in Bern befindet sich in einer ehemaligen Schule, wo wir unsere Projekte realisieren. In engem Austausch mit unseren Kund*innen schaffen wir Bildwelten, die Menschen und ihre Geschichten in den Mittelpunkt stellen. Mit unserer Expertise in Fotografie, Videografie, Design und Webentwicklung bieten wir alles aus einer Hand und nutzen unser interdisziplinäres Netzwerk, um eure Bedürfnisse optimal zu erfüllen."
        />
        <Team
          justify="left"
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
        <Team
          className="extra-padding"
          justify="right"
          teamMembers={[
            {
              name: "Fabian",
              text: "CGI • Motion Control • Animation",
              image: "Fabian.jpg",
              email: "mailto:info@dakiekste.com",
            },
            {
              name: "Rio",
              text: "Produktdesign • Kochen • 3D Druck",
              image: "rene.jpg",
              email: "mailto:info@dakiekste.com",
            },
            {
              name: "Marina",
              text: "Office • Rechnungen • Buchhaltung",
              image: "Marina.jpg",
              email: "mailto:info@dakiekste.com",
            },
          ]}
        />
      </section>
      <ProjectSliderLight
        projects={[
          {
            title: "Projekt 1",
            description: "Description of Project 1",
            image: btsImage1,
          },
          {
            title: "Projekt2",
            description: "Description of Project 2",
            image: btsImage2,
          },
          {
            title: "Projekt3",
            description: "Description of Project 3",
            image: projectImage1,
          },
          {
            title: "Projekt4",
            description: "Description of Project 3",
            image: projectImage2,
          },
        ]}
      />
      <section id="studio">
        <StudioBox
          topline="KLUB STUDIO"
          headline="WILLKOMMEN IN 
UNSEREM KLUB STUDIO"
          text1="Unser Fotostudio bietet eine große Auswahl an Hintergründen, Stühlen, Requisiten und hochwertigem Equipment. Mit unserem Tageslichtstudio und direkten Location-Sets in der Nähe sowie kostenfreien Parkplätzen könnt ihr eure Visionen perfekt umsetzen. Die Studio-Nutzung ist im Preis inbegriffen."
          text2="Es könnte hier auch noch etwas mehr noch zum Studio stehen, das hier ist ein Beispiel wie es aussehen würde wenn hier noch etwas mehr Text stehen würde."
          slides={[
            {
              image: studioImage1,
              title: "Hair & Makeup Bereich",
              description: "Unser Beatybereich bietet einen Spiegel, einen Stylingtisch, eine Kleiderstange ich bin eine Beschreibung ",
            },
            {
              image: studioImage3,
              title: "Fotostudio-Fläche",
              description: "mit 80m2 Studiofläche beschreibe ich hier was das bringt",
            },
            {
              image: studioImage4,
              title: "Sitzbereich",
              description: "Auf einem Holzpodest gemütlichkeit work am Arbeitsplatz beschreibung",
            },
          ]}
        />
      </section>
      <ImageElement image={studioImage4} alt="Bildbeschreibung" />
      <section id="pricing">
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
      </section>
      <ImageElement image={image4} alt="Bildbeschreibung" />
      <TextSlider
        autoplay={true}
        reviews={[
          {
            client: "Maximilian T. - Marketing Director",
            text: "»Mit Dakiekste haben wir nicht nur hochwertige Businessfotos erhalten, sondern auch ein kreatives Team, das uns bei jedem Schritt unterstützt hat. Die Zusammenarbeit war effizient und das Ergebnis übertrifft unsere Erwartungen!«",
            link: "Click here",
            url: "https://developer.mozilla.org/de/docs/Web/CSS/object-fit",
            screenshot: screenshot1,
          },
          {
            client: "Miriam L. - HR Manager",
            text: "»Die Mitarbeiterfotos von Dakiekste haben unseren Recruiting-Prozess enorm verbessert. Die authentischen, professionellen Bilder haben uns geholfen, die richtigen Talente anzusprechen und unsere Arbeitgebermarke zu stärken.«",
            link: "Click here",
            url: "https://developer.mozilla.org/de/docs/Web/CSS/object-fit",
            screenshot: screenshot2,
          },
          {
            client: "Jana F - CEO",
            text: "»Dank Dakiekste konnten wir unsere Markenidentität visuell perfekt inszenieren. Das Team hat sich wirklich Zeit genommen, uns und unsere Vision zu verstehen – und das sieht man in jedem Bild!«",
            link: "Click here",
            url: "https://developer.mozilla.org/de/docs/Web/CSS/object-fit",
            screenshot: screenshot3,
          },
        ]}
      />
      <section id="contact">
        <ContactForm />
      </section>
      <section id="faq">
        <FAQ
          faqData={[
            {
              caption: "Vorgespräch",
              question: "Welche Vorbereitung ist für ein Shooting erforderlich?",
              answer:
                "Für ein gelungenes Shooting ist es hilfreich, wenn du dir vorab Gedanken über die Location, den Stil und das gewünschte Ergebnis machst. Wir beraten dich gerne, um sicherzustellen, dass alles deinen Vorstellungen entspricht.",
            },
            {
              caption: "Leistungen",
              question: "Was bietet ihr neben der Fotografie noch an?",
              answer:
                "Neben der Fotografie bieten wir auch Videografie, Webdesign und visuelle Konzeptentwicklung an. So kannst du sicher sein, dass dein gesamtes visuelles Marketing aus einer Hand kommt.",
            },
            {
              caption: "Lieferung",
              question: "Wie lange dauert es, bis wir die fertigen Bilder erhalten?",
              answer:
                "In der Regel erhältst du die fertigen Bilder innerhalb von 7-10 Werktagen nach dem Shooting. Bei größeren Projekten kann es auch etwas länger dauern – wir halten dich aber immer auf dem Laufenden.",
            },
            {
              caption: "Preise",
              question: "Wie gestalten sich Eure Preise?",
              answer:
                "Unsere Preise hängen von der Art und dem Umfang des Projekts ab. Wir bieten maßgeschneiderte Angebote, die auf deine spezifischen Bedürfnisse abgestimmt sind. Kontaktiere uns einfach für ein unverbindliches Angebot.",
            },
            {
              caption: "Zeiten",
              question: "Arbeitet ihr auch am Wochenende?",
              answer:
                "Ja, wir arbeiten auch am Wochenende, um flexibel auf deine Bedürfnisse einzugehen. Wir finden gemeinsam den besten Zeitpunkt für dein Shooting.",
            },
            {
              caption: "Termin",
              question: "Wie weit im Voraus kann ich einen Termin buchen?",
              answer:
                "Es ist immer besser, so früh wie möglich zu buchen, besonders wenn du ein Shooting zu einem bestimmten Datum oder in einer speziellen Saison möchtest. Wir empfehlen, mindestens 2-3 Wochen im Voraus zu planen.",
            },
            {
              caption: "Buchung",
              question: "Ich komme nicht aus Hamburg, kann ich euch dennoch buchen?",
              answer:
                "Absolut! Wir bieten auch Shootings außerhalb von Hamburg an und sind bereit, zu dir zu reisen. Die Reise- und Übernachtungskosten werden separat berechnet, abhängig von deinem Standort.",
            },
            {
              caption: "Kundenbetreuung",
              question: "Wie läuft die Kommunikation vor und nach dem Shooting?",
              answer:
                "Wir legen großen Wert auf eine enge und transparente Kommunikation. Vor dem Shooting besprechen wir alle Details, um sicherzustellen, dass du mit dem Ergebnis zufrieden bist. Nach dem Shooting kannst du dich auf eine schnelle Rückmeldung und eine individuelle Nachbearbeitung deiner Bilder freuen.",
            },
            {
              caption: "Shooting-Dauer",
              question: "Wie lange dauert ein Shooting?",
              answer:
                "Die Dauer eines Shootings hängt vom Umfang und der Art des Shootings ab. Ein standardmäßiges Business-Shooting dauert in der Regel 1-2 Stunden. Für größere Projekte, wie Eventfotografie oder Unternehmensaufnahmen, kann es auch länger dauern. Wir passen uns deinen Bedürfnissen an.",
            },
            {
              caption: "Verwendungsrechte",
              question: "Wie sieht es mit den Nutzungsrechten der Bilder aus?",
              answer:
                "Du erhältst die uneingeschränkten Rechte zur Nutzung der Bilder für den vereinbarten Zweck, sei es für Marketing, Website, Social Media oder Printmaterialien. Wenn du die Bilder auch für andere Zwecke verwenden möchtest, können wir gerne die Lizenzbedingungen besprechen.",
            },
            {
              caption: "Retusche",
              question: "Wie viel Nachbearbeitung der Bilder erfolgt?",
              answer:
                "Wir führen eine sorgfältige Nachbearbeitung der Bilder durch, um die bestmögliche Qualität zu gewährleisten. Dabei achten wir darauf, den natürlichen Look zu bewahren, aber auf Wunsch können wir auch spezifische Retusche-Anfragen berücksichtigen.",
            },
            {
              caption: "Anpassung der Fotos",
              question: "Kann ich die Fotos nachträglich noch anpassen lassen?",
              answer:
                "Ja, nach dem Shooting kannst du Anpassungen vornehmen lassen. Dazu zählen Farbkorrekturen, Retusche und das Hinzufügen von Grafiken oder Texten. Diese Änderungen werden in Absprache mit dir vorgenommen, um sicherzustellen, dass du mit dem Endergebnis zufrieden bist.",
            },
            {
              caption: "Zusätzliche Services",
              question: "Bietet ihr auch Videoaufnahmen an?",
              answer:
                "Ja, wir bieten auch professionelle Videoaufnahmen an. Von Image-Videos bis hin zu Event-Dokumentationen – wir helfen dir, dein visuelles Marketing mit bewegten Bildern zu ergänzen.",
            },
            {
              caption: "Verfügbarkeit",
              question: "Wie schnell seid ihr verfügbar?",
              answer:
                "Wir versuchen, so schnell wie möglich auf deine Anfrage zu reagieren. Die Verfügbarkeit hängt von unserer aktuellen Buchungslage ab, aber in den meisten Fällen können wir ein Shooting innerhalb von 2-3 Wochen planen.",
            },
          ]}
        />
      </section>
      <ImageTextBox
        topline="Gemeinsam für mehr"
        headline="Zusammen die Zukunft gestalten"
        text1="Wir möchten gemeinsam mit dir etwas zurückgeben – und Gründer:innen in ihrer Anfangsphase unterstützen. Deshalb haben wir ein besonderes Zeitkontingent geschaffen, um Start-ups und Solo-Selbstständige gezielt zu begleiten. Mit wenig Budget möchten wir euch den Start erleichtern und euch auf eurem Weg stärken."
        text2="Wenn du gerade am Anfang stehst, erzähle uns per Mail kurz, wer du bist und warum du unsere Förderung brauchst. Gemeinsam können wir die Welt ein Stück besser machen – 
wir freuen uns auf deine Nachricht."
        image={btsImage1}
        alt="Description of image"
      />
    </Layout>
  );
}
