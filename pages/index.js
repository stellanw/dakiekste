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
        headline="Fotografie. Branding. Content Creation."
        text={
          <>
            Wir machen deine Vision sichtbar und verwandeln sie in Bildwelten die deine Botschaft tragen. Mit Kreativität, Erfahrung und Empathie übernehmen wir
            die visuelle Umsetzung, damit du dich voll auf deine Arbeit konzentrieren kannst. Weniger Aufwand für dich - mehr Wirkung für deine Marke.
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
          headline1="Leistungen ohne Schnickschnack"
          headline2={
            <>Was dich weiterbringt: Branding mit Substanz, Bilder mit Haltung, Design mit System – und Websites, die nicht im Baukasten steckenbleiben.</>
          }
          text={
            <>
              Wir kombinieren Fotografie, Design, Web und Content zu einem visuellen Gesamtauftritt, der wirklich zu dir passt. Keine Stockbilder, keine
              fertigen Templates – sondern individuelle Lösungen, die mitdenken, mitfühlen und mitwachsen. <br /> <br />
              Ob du gerade gründest, deine Marke neu aufstellen willst oder einfach Klarheit in deine Kommunikation bringen möchtest – wir begleiten dich mit
              einem offenen Ohr, kreativen Ideen und einem durchdachten Prozess.
            </>
          }
          boxData={[
            {
              image: studioImage1,
              label: "Foto",
              title: "Branding Fotografie",
              text: "Bilder, die zeigen, wofür du stehst. Wir übersetzen deine Markenwerte in eine visuelle Bildsprache – für Website, Medien und Präsentationen.",
            },
            {
              image: studioImage2,
              label: "Foto",
              title: "Business- & Teamfotografie",
              text: "Menschen machen den Unterschied – mit Teamfotos, die Vertrauen schaffen und eure Werte nach außen tragen. So wird eure Kultur sichtbar – für Bewerber*innen, Kund*innen und alle, die ihr erreichen möchtet.",
            },
            {
              image: studioImage3,
              label: "Foto & Video",
              title: "Social Media Content & Strategie",
              text: "Relevanter Content statt Stockbilder: Wir erstellen individuelle Foto- und Videoinhalte, die zu deinem Stil und deiner Zielgruppe passen. Für Posts, Reels & Stories, die wirken.",
            },
            {
              image: studioImage4,
              label: "Video",
              title: "Imagefilm & Video-Content",
              text: "Bewegte Bilder erzählen mehr als Worte. Wir entwickeln Formate, die deine Inhalte transportieren – für Web, Social Media und alles dazwischen.",
            },
            {
              image: studioImage5,
              label: "Web",
              title: "Website Design (UI/UX)",
              text: "Webdesign, das mitdenkt. Wir gestalten Websites, die einfach funktionieren – visuell, strukturell und inhaltlich. Design, Nutzerführung und Inhalte greifen bei uns ineinander und werden zu einem Gesamtbild, das zu dir passt und deine Zielgruppe erreicht.",
            },
            {
              image: studioImage6,
              label: "Web",
              title: "Website Entwicklung",
              text: "Stabil. Flexibel. Ohne Technikstress. Wir kümmern uns um die technische Umsetzung deiner Website – so, dass sie läuft, wächst und dir den Rücken freihält. Ob zur Selbstverwaltung per CMS oder für komplexere Anforderungen: Wir finden gemeinsam die Lösung, die wirklich zu dir passt.",
            },
            {
              image: studioImage7,
              label: "Design",
              title: "Branding & Corporate Design",
              text: "Dein visuelles Fundament ist der erste Eindruck deiner Marke. Wir entwickeln ein Designsystem aus Logo, Farben und Typografie, das zu dir passt – und dafür sorgt, dass du sichtbar, wiedererkennbar und präsent bleibst.",
            },
            {
              image: studioImage8,
              label: "Fotografie",
              title: "Eventfotografie",
              text: "Präsenz zeigen, Momente festhalten. Ob Team-Event, Networking, Produktlaunch oder Business Meetup – wir halten Atmosphäre und Highlights in ausdrucksstarken Bildern fest. Dezent im Hintergrund, aber immer im richtigen Moment zur Stelle.",
            },
            {
              image: studioImage8,
              label: "Strategie",
              title: "Workshops & Beratung",
              text: "Wissen teilen. Klarheit schaffen. Gemeinsam wachsen. Ob Bildsprache, Contentstrategie, Markenauftritt oder Persönlichkeitsentwicklung – wir teilen unser Wissen, coachen auf Augenhöhe und entwickeln gemeinsam Ideen, die Substanz haben. In 1:1-Sessions oder Team-Workshops bringen wir Struktur in deine Kommunikation und und zeigen dir, wie du dein Potenzial sichtbar machst.",
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
        topline1="Ein Look – viele Kanäle"
        headline1="Markenstrategie trifft Bildsprache"
        text1="Wir entwickeln einen visuellen Auftritt, der auf allen digitalen Kanälen funktioniert. Statt losem Stückwerk bekommst du eine durchdachte Bildsprache, die deine Marke einheitlich und wiedererkennbar macht.
Ob Website, LinkedIn, Instagram oder Jobportale – du erhältst von uns einen flexiblen Bild- und Videopool, der mit deiner Marke mitwächst: langfristig, konsistent und klar positioniert."
        topline2="Content, der wirkt"
        headline2="Starke Bilder. Klare Botschaften."
        text2="Wir liefern dir Content, der genau da ankommt, wo er soll – bei deiner Zielgruppe. Ob Reels, Feedposts oder Videos für deine Website: Du bekommst Inhalte, die auffallen, hängen bleiben und Vertrauen schaffen. Du musst dich nicht um jedes Detail kümmern – wir denken mit und liefern Content, den du direkt einsetzen kannst."
      />
      <ImageTextBox
        topline="Menschen im Mittelpunkt"
        headline="Businessportraits mit Haltung"
        text1="Wir zeigen dich und die Menschen hinter deinem Unternehmen. Mit Portraits und Einblicken in euren Arbeitsalltag machen wir sichtbar, was euch als Team ausmacht. Das schafft Nähe, spricht potenzielle Talente an und stärkt euer Employer Branding. Für alle, die mehr zeigen wollen als Leistung – nämlich Haltung, Miteinander und echtes Engagement"
        text2=""
        image={image4}
        alt="Description of image"
        flexflow="row"
      />
      <ImageTextBox
        topline="Starker Look. Klares Konzept."
        headline="Bildsprache die funktioniert"
        text1="Wir gestalten Bildwelten, die nicht nur gut aussehen – sondern deine Marke tragen. Jedes Motiv, jede Farbwahl, jedes Detail entsteht mit Blick auf deine Vision und deine Zielgruppe. Du musst nicht wissen, wie man Bildsprache entwickelt – du musst nur bereit sein, sie mitzugestalten. Wir denken mit, stellen die richtigen Fragen und führen dich durch den Prozess. Gemeinsam schaffen wir visuelle Lösungen, die funktionieren."
        text2=""
        image={image4}
        alt="Description of image"
        flexflow="row-reverse"
      />
      <ImageTextBox
        topline="Haltung zeigen. Sichtbar werden."
        headline="Vertrauen entsteht im Miteinander"
        text1="Wir gestalten Räume vor und hinter der Kamera, in denen Menschen sich zeigen können – ohne Klischees, ohne Schablonen, ohne Druck. Mit Respekt, Offenheit und dem Anspruch, einen echten Safe Space zu schaffen. In der Zusammenarbeit setzen wir auf echte Begegnung: ehrlich, aufmerksam und auf Augenhöhe.
So entstehen Bildwelten, die verbinden – visuell stimmig, inhaltlich relevant und getragen von Haltung. Für Menschen und Unternehmen, die mehr zeigen wollen als nur Außenwirkung: Haltung, Miteinander und den Mut, sichtbar zu werden."
        text2=""
        image={image4}
        alt="Description of image"
        flexflow="row"
      />
      <section id="workflow">
        <ScrollBox
          autoplay={false}
          headline1="Alles im Flow"
          headline2={
            <>
              Du bringst die Vision, wir kümmern uns um den Weg. <br />
              Mit einem strukturierten Ablauf halten wir dir den Kopf frei – so läuft dein Projekt wie von allein.
            </>
          }
          boxData={[
            {
              label: "01 Erstgespräch & Analyse",
              title: "Dein Business verstehen",
              text: "Im ersten Gespräch nehmen wir uns Zeit, dich und deine Vision gründlich kennenzulernen. Wir hören aufmerksam zu, stellen präzise Fragen und analysieren die Ausgangslage. Auf dieser Grundlage entwickeln wir im nächsten Schritt ein individuelles Konzept, das deine Marke und dein Branding stärkt und gleichzeitig deine geschäftlichen Ziele effektiv vorantreibt.",
            },
            {
              label: "02 Konzeption & Workshops",
              title: "Von der Idee zur Strategie",
              text: "Nach dem ersten Gespräch entwickeln wir ein Konzept, das zu deiner Marke, deinen Zielen und deinem Budget passt. Ob Foto, Video, Design oder Webentwicklung – wir machen deine Vision greifbar. Bei umfangreicheren Projekten kann ein Workshop sinnvoll sein, um tiefer einzusteigen und gemeinsam die beste Lösung zu entwickeln. Du bleibst im Prozess involviert: Wir zeigen dir regelmäßig Zwischenstände und passen das Konzept flexibel an.",
            },
            {
              label: "03 Organisation",
              title: "Fundament für Erfolg",
              text: "Wir übernehmen die komplette Organisation – vom Briefing bis zur finalen Umsetzung. Mit unserem Netzwerk aus erfahrenen Dienstleister*innen, Locationscouts, Stylist*innen und Make-up-Artist*innen stellen wir sicher, dass alles perfekt aufeinander abgestimmt ist. Dazu gehören auch detaillierte Zeitpläne, Produktionsguides und alles, was für einen reibungslosen Ablauf notwendig ist.",
            },
            {
              label: "04 Umsetzung",
              title: "Realisierung deiner Vision",
              text: "Da wir Fotografie, Design, Webentwicklung und mehr im eigenen Team abdecken, greifen bei uns alle Schritte nahtlos ineinander. Das spart doppelte Abstimmungen und macht den Übergang von Konzept zu Umsetzung effizient und flüssig. Beim Shooting oder Dreh läuft alles strukturiert ab – in einem Rahmen, der dir Sicherheit gibt. Design entsteht in enger Abstimmung, abgestimmt auf Strategie, Medium und Zielgruppe. Und im Web entwickeln wir nicht nur Layouts, sondern Systeme – funktional, durchdacht und einsatzbereit. Du bist in jeder Phase dabei: Wir setzen um, testen, verfeinern – und machen es gemeinsam rund.",
            },
            {
              label: "05 Nachbearbeitung",
              title: "Dein Content. Direkt einsetzbar.",
              text: "Du bekommst von uns eine Vorauswahl und wählst daraus deine Favoriten. Anschließend bereiten wir dein Material sortiert und abgestimmt auf Marke, Look und Einsatzzweck auf. Du erhältst einen hochwertigen, vielseitig nutzbaren Bild- oder Medienpool – für Website, Social Media, Marketing und mehr. Die Dateien stellen wir dir über eine Online-Galerie oder einen privaten Cloud-Zugang zur Verfügung. Je nach Projekt bekommst du zusätzlich ein Handbuch oder Hinweise zur Verwendung – für eine flexible und eigenständige Weiterverwendung.",
            },
            {
              label: "06 Langfristige Unterstützung",
              title: "Wachstum im Fokus",
              text: "Auch nach Projektabschluss begleiten wir dich weiter. Ob schnelle Anpassung oder neue Idee – wir reagieren schnell, denken mit und entwickeln gemeinsam weiter. Weil wir dein Markenprofil kennen, können wir gezielt unterstützen und deine Marke Schritt für Schritt wachsen lassen.",
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
          },
          {
            client: "MiERGEBNISSEriam L. - HR Manager",
            text: "»Die Mitarbeiterfotos von Dakiekste haben unseren Recruiting-Prozess enorm verbessert. Die authentischen, professionellen Bilder haben uns geholfen, die richtigen Talente anzusprechen und unsere Arbeitgebermarke zu stärken.«",
            link: "Click here",
            url: "https://developer.mozilla.org/de/docs/Web/CSS/object-fit",
          },
          {
            client: "Jana F - CEO",
            text: "»Dank Dakiekste konnten wir unsere Markenidentität visuell perfekt inszenieren. Das Team hat sich wirklich Zeit genommen, uns und unsere Vision zu verstehen – und das sieht man in jedem Bild!«",
            link: "Click here",
            url: "https://developer.mozilla.org/de/docs/Web/CSS/object-fit",
          },
        ]}
      />

      <section id="team">
        <TeamText
          topline="Zwei Perspektiven. Eine Haltung."
          headline={
            <>
              Gemeinsam entwickeln <br />
              was sichtbar werden soll
            </>
          }
          text={
            <>
              Wir arbeiten mit Menschen und Unternehmen, die gestalten wollen – für sich, füreinander und für die Welt, die uns umgibt. Uns interessieren Ideen
              mit Haltung und Visionen, die zu einer bewussteren Zukunft beitragen. Unsere Perspektiven entstehen aus Erfahrungen, die oft unsichtbar bleiben –
              und prägen, wie wir zuhören, gestalten und begleiten. Deshalb fühlen wir uns besonders Projekten verbunden, die für Teilhabe, Miteinander und
              Gerechtigkeit stehen. Denn: Wer gesehen wird, gestaltet mit.
              <br />
              <br />
              Seit über vierzehn Jahren arbeiten wir als kreatives Duo – mit Vertrauen, Empathie und echtem Interesse an den Menschen, mit denen wir
              zusammenarbeiten. Für uns ist echte Zusammenarbeit gelebte Haltung. In unserem Studio nehmen Ideen Gestalt an. Ob Fotografie, Film, Design oder
              Webentwicklung – wir arbeiten disziplinübergreifend, visuell und ganzheitlich. Gemeinsam mit unseren Auftraggeber*innen entwickeln wir Konzepte,
              die wirken – ehrlich, zugänglich und mit Blick fürs Wesentliche.
            </>
          }
        />
        <Team
          teamMembers={[
            {
              name: "Stellan Wetzig",
              text: "Fotografie • Video • Web Development",
              image: "Stellan_Portrait.jpg",
              email: "mailto:stellan@dakiekste.com",
            },
            {
              name: "MaÏscha Souaga",
              text: "Fotografie • Video • Design »Branding«",
              image: "Maischa_Portrait.jpg",
              email: "mailto:maischa@dakiekste.com",
            },
            {
              name: "Fabian Hellgardt",
              text: "CGI • Motion Control • Animation",
              image: "Fabian.jpg",
              email: "mailto:info@dakiekste.com",
            },
            {
              name: "René Kuntzag",
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
            {
              name: "Stellan Wetzig",
              text: "Fotografie • Video • Web Development",
              image: "Stellan_Portrait.jpg",
              email: "mailto:stellan@dakiekste.com",
            },
            {
              name: "MaÏscha Souaga",
              text: "Fotografie • Video • Design »Branding«",
              image: "Maischa_Portrait.jpg",
              email: "mailto:maischa@dakiekste.com",
            },
            {
              name: "Stellan Wetzig",
              text: "Fotografie • Video • Web Development",
              image: "Stellan_Portrait.jpg",
              email: "mailto:stellan@dakiekste.com",
            },
            {
              name: "MaÏscha Souaga",
              text: "Fotografie • Video • Design »Branding«",
              image: "Maischa_Portrait.jpg",
              email: "mailto:maischa@dakiekste.com",
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
          autoplay="false"
          topline="KLUB STUDIO"
          headline="Viel Raum für deine Ideen"
          text1="Unser Studio bietet den Raum, den kreative Ideen brauchen: lichtdurchflutetes Tageslichtstudio und wandelbare Sets. Mit einer Auswahl an Hintergründen und Requisiten lassen sich unterschiedlichste Konzepte umsetzen."
          text2="Für eine entspannte Atmosphäre sorgen kostenfreie Parkplätze, Kaffee und Tee – alles, was ein gutes Shooting braucht."
          slides={[
            {
              image: studioImage1,
              title: "Hair & Makeup Bereich",
              description:
                "Unser Stylingbereich ist mit großem Spiegel, Kleiderstange, Steamer und Ablagefläche ausgestattet – ideal zum Ankommen, Vorbereiten und Wohlfühlen.",
            },
            {
              image: studioImage5,
              title: "Fotostudio-Fläche",
              description: "80 m² flexibel nutzbare Studiofläche mit viel Tageslicht, mobilem Hintergrundsystem und Raum für große und kleine Produktionen.",
            },
            {
              image: studioImage4,
              title: "Lounge & Arbeitsbereich",
              description:
                "Ein wandelbarer Bereich mit großer Bühne, Vorhang, Tisch, Stühlen und Sofa – ideal für Meetings, Pausen oder auch als Kulisse fürs nächste Set.",
            },
            {
              image: studioImage6,
              title: "Professionelle Lichttechnik",
              description:
                "Ob Dauerlicht oder Blitz – unser Studio ist mit hochwertiger Technik ausgestattet. Alles, was du für eine starke Ausleuchtung und präzise Ergebnisse brauchst, ist vor Ort.",
            },
            {
              image: studioImage7,
              title: "Flexible Hintergründe & Setups",
              description:
                "Unterschiedliche Papierhintergründe, Stoffe und mobile Setups ermöglichen dir abwechslungsreiche Looks – vom cleanen Portrait bis zur szenischen Inszenierung.",
            },
            {
              image: studioImage13,
              title: "Vielfältige Requisiten & Texturen",
              description:
                "Von Vorhängen über Möbel bis zu kleinen Details – im Studio findest du viele Elemente, um dein Set individuell zu gestalten und neue Looks zu schaffen.",
            },
            {
              image: studioImage9,
              title: "Kaffee, Tee & kalte Getränke",
              description:
                "Für eine entspannte Arbeitsatmosphäre sorgen kleine Extras wie guter Kaffee aus der Siebträgermaschine und eine Auswahl an Getränken – inklusive im Studio-Angebot.",
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
              caption: "Allgemein",
              question: "Wie läuft ein Projektstart bei euch ab?",
              answer:
                "Wir starten immer mit einem unverbindlichen Kennenlerngespräch per Video-Call oder auf Wunsch auch persönlich. Danach folgt ein Angebot und ein Konzept, das wir gemeinsam mit dir entwickeln. In der Umsetzung arbeiten wir eng mit dir zusammen – mit regelmäßigem Feedback, klaren Absprachen und einem flexiblen Ablauf.",
            },
            {
              caption: "Allgemein",
              question: "Mit welchen Kosten muss ich rechnen?",
              answer:
                "Unser Preiskalkulator bietet dir eine erste Orientierung. Die genauen Kosten hängen vom Umfang und deinen individuellen Anforderungen ab. Wir erstellen dir ein transparentes Angebot, das zu deinem Budget passt.",
            },
            {
              caption: "Allgemein",
              question: "Wie weit im Voraus sollte ich ein Projekt anfragen?",
              answer:
                "Je früher, desto besser. Gerade bei komplexeren Projekten oder Studio-Produktionen planen wir gerne ein paar Wochen im Voraus. Spontane Anfragen sind aber auch möglich, wenn es der Kalender zulässt.",
            },
            {
              caption: "Allgemein",
              question: "Wie lange dauert ein Projekt bei euch?",
              answer:
                "Das ist ganz unterschiedlich. Kleine Shootings oder Website-Anpassungen gehen oft schnell. Bei größeren Branding-Prozessen oder Kampagnen kann es mehrere Wochen dauern. Sobald wir alle Projektbausteine und Anforderungen kennen, geben wir dir eine realistische Einschätzung zur Dauer.",
            },
            {
              caption: "Allgemein",
              question: "Was müsst ihr über uns wissen, bevor es losgeht?",
              answer:
                "Alles, was eure Marke, euer Produkt oder eure Vision ausmacht. Wir stellen euch gezielte Fragen, um euch kennenzulernen und daraus ein starkes Konzept zu entwickeln.",
            },
            {
              caption: "Allgemein",
              question: "Was kann ich zur Vorbereitung beitragen?",
              answer:
                "Je besser wir eure Inhalte und Ziele kennen, desto gezielter können wir arbeiten. Moodboards, vorhandenes Material oder ein kurzer Fragebogen helfen uns, ein Gefühl für euren Auftritt zu bekommen.",
            },
            {
              caption: "Allgemein",
              question: "Müssen wir ein fertiges Konzept mitbringen?",
              answer:
                "Nein. Konzepte zu entwickeln ist Teil unserer Arbeit. Wenn du schon Ideen hast, nehmen wir sie gerne auf – ansonsten erarbeiten wir gemeinsam, was passt.",
            },
            {
              caption: "Allgemein",
              question: "Was passiert, wenn ich nachträglich etwas ändern möchte?",
              answer:
                "Im Projektverlauf ist mindestens eine Feedbackrunde inklusive, in der wir deine Änderungswünsche gezielt umsetzen. Nach Projektabschluss stehen wir dir weiterhin zur Verfügung – für inhaltliche Anpassungen, neue Bausteine oder technische Weiterentwicklungen. Diese Leistungen kalkulieren wir transparent auf Basis des zusätzlichen Aufwands.",
            },
            {
              caption: "Allgemein",
              question: "Bietet ihr auch langfristige Betreuung an?",
              answer:
                "Ja. Viele Kund*innen entscheiden sich für eine fortlaufende Zusammenarbeit – zum Beispiel im Rahmen von Website-Wartung, Contentpflege oder strategischer Weiterentwicklung. Je nach Bedarf schnüren wir dafür ein passendes Betreuungspaket mit transparenten Konditionen. So bleibst du flexibel und gut begleitet – auch nach Projektabschluss.",
            },
            {
              caption: "Allgemein",
              question: "Kann ich einzelne Leistungen auch separat buchen?",
              answer: "Klar. Du kannst auch nur ein Shooting, eine Website oder Branding bei uns buchen. Unsere Leistungen lassen sich flexibel kombinieren.",
            },
            {
              caption: "Allgemein",
              question: "Welche zusätzlichen Kosten können anfallen?",
              answer:
                "Zusätzliche Kosten entstehen nur, wenn vorher nicht absehbare Aufwände dazukommen – z. B. externe Lizenzen, Reisekosten oder Zusatzleistungen. Das sprechen wir vorher transparent mit dir ab.",
            },
            {
              caption: "Allgemein",
              question: "Welche Rechte erhalte ich an den Bildern oder Inhalten?",
              answer:
                "Die Nutzung ist im Angebot geregelt. Standardmäßig sind alle vereinbarten Kanäle wie Website, Social Media oder interne Kommunikation abgedeckt. Für großflächige Kampagnen oder Printanzeigen sprechen wir die Nutzungsrechte gesondert ab.",
            },

            // FOTOGRAFIE
            {
              caption: "Fotografie",
              question: "Wie kann ich mich auf ein Shooting vorbereiten?",
              answer:
                "Du bekommst vorab alle Infos – von Outfit-Tipps bis zur Location. Auf Wunsch bieten wir zusätzlich Styling- oder Hair & Make-up Services über unser Netzwerk an.",
            },
            {
              caption: "Fotografie",
              question: "Wie lange im Voraus sollte ich einen Termin für ein Shooting buchen?",
              answer:
                "Je früher, desto besser – besonders bei größeren Produktionen. Für kleinere Portrait-Shootings reicht oft ein Vorlauf von zwei bis drei Wochen.",
            },
            {
              caption: "Fotografie",
              question: "Was passiert, wenn ich vor dem Shooting krank werde?",
              answer:
                "Wenn du krank wirst, sag uns bitte so früh wie möglich Bescheid. In solchen Fällen finden wir in der Regel einen Ersatztermin. Bitte hab Verständnis, dass wir bei sehr kurzfristigen Absagen nicht immer spontan reagieren können – besonders bei gebuchten Locations oder externen Dienstleister*innen.",
            },
            {
              caption: "Fotografie",
              question: "Wo findet das Business Shooting statt?",
              answer:
                "In unserem Studio in Hamburg, bei euch vor Ort oder an einer passenden Location – wir richten uns nach euren Bedürfnissen. Auch Shootings außerhalb Deutschlands sind nach Absprache möglich.",
            },
            {
              caption: "Fotografie",
              question: "Benötige ich eine Stylist*in oder Hair & Make-up Artist?",
              answer:
                "Das ist ganz dir überlassen – aber manchmal machen kleine Details einen großen Unterschied. Wenn du dich rundum wohlfühlen willst oder einen bestimmten Look umsetzen möchtest, vermitteln wir dir gern erfahrene Profis aus unserem Netzwerk.",
            },
            {
              caption: "Fotografie",
              question: "Wie läuft ein Shooting ab?",
              answer:
                "Vor dem Shooting bekommst du alle wichtigen Infos – inklusive Zeitplan, Tipps zur Vorbereitung und Styling- oder Outfit-Hinweisen. Während des Shootings sorgen wir für eine entspannte Atmosphäre und leiten dich klar an.",
            },
            {
              caption: "Fotografie",
              question: "Wie viele Bilder bekomme ich und in welchem Format?",
              answer:
                "Das hängt vom Projekt ab. In der Regel bekommst du eine sorgfältig getroffene Auswahl zur Sichtung und wählst deine Favoriten. Die finalen Bilder bekommst du bearbeitet und in Web- sowie Print-Qualität über eine Online-Galerie oder Cloud.",
            },
            {
              caption: "Fotografie",
              question: "Wie lange dauert die Nachbearbeitung?",
              answer:
                "Nach dem Shooting stellen wir dir innerhalb von 5–7 Werktagen eine erste Vorauswahl zur Verfügung. Sobald du deine Favoriten ausgewählt hast, bearbeiten wir sie final – in der Regel bekommst du deine fertigen Bilder innerhalb von weiteren 5–10 Werktagen. Je nach Projektumfang kann das leicht variieren.",
            },
            {
              caption: "Fotografie",
              question: "Für wen ist ein Brand-Shooting interessant?",
              answer:
                "Für alle, die zeigen wollen, wofür sie stehen – ob Solo-Selbstständige, NGOs, Teams oder Unternehmen. Du willst sichtbar werden mit dem, was dich ausmacht? Reichweite gewinnen, Vertrauen aufbauen, Wirkung entfalten? Dann ist ein Brand-Shooting genau das Richtige. Und keine Sorge: Du musst nicht wissen, wie man sich inszeniert – wir helfen dir, dich echt zu zeigen.",
            },

            // VIDEO
            {
              caption: "Video",
              question: "Welche Art von Videos bietet ihr an?",
              answer:
                "Ob kurzer Social-Media-Clip, emotionaler Imagefilm oder ein klarer Recruiting-Trailer – wir entwickeln Formate, die zu deiner Botschaft und Zielgruppe passen. Gemeinsam finden wir die passende Form, damit dein Thema sichtbar wird – auf den richtigen Kanälen und mit dem richtigen Ton.",
            },
            {
              caption: "Video",
              question: "Wie lange im Voraus sollte ich einen Videodreh planen?",
              answer: "Für Videodrehs empfehlen wir mindestens drei bis vier Wochen Vorlauf, damit wir Location, Technik und Inhalte gut vorbereiten können.",
            },

            // WEBSITE
            {
              caption: "Website",
              question: "Was passiert, wenn ich nur eine Landingpage brauche?",
              answer: "Kein Problem – auch kleinere Webprojekte setzen wir um. Wir beraten dich, wie du das Beste aus deiner Seite herausholst.",
            },
            {
              caption: "Website",
              question: "Wie schnell kann eine Website erstellt werden?",
              answer:
                "Abhängig vom Umfang und deinen Inhalten. Eine kleine Seite kann in wenigen Wochen fertig sein – bei größeren Projekten planen wir 6–10 Wochen ein.",
            },
            {
              caption: "Website",
              question: "Was wenn ich nur ein Logo brauche?",
              answer: "Auch Einzelleistungen bieten wir an. Wichtig ist uns nur: Es soll stimmig zum Gesamtbild deiner Marke passen.",
            },
            {
              caption: "Website",
              question: "Könnt ihr Inhalte so aufbereiten, dass sie auf verschiedenen Kanälen funktionieren?",
              answer:
                "Ja. Schon bei der Planung denken wir mit, wo und wie du die Inhalte einsetzen willst – z. B. auf Instagram, LinkedIn oder deiner Website. Formate, Größen und Bildausschnitte passen wir so an, dass sie überall gut aussehen und wirken.",
            },
            {
              caption: "Website",
              question: "Welche Informationen oder Materialien benötigt ihr, um starten zu können?",
              answer:
                "Das kommt auf die Leistung an – meist brauchen wir Infos zu deiner Zielgruppe, deinen Zielen, vorhandenes Material (z. B. Logo, Farben, Texte) und einen Einblick in deine bisherigen Kanäle oder Maßnahmen.",
            },
            {
              caption: "Website",
              question: "Bietet ihr Schulungen oder Tutorials an?",
              answer:
                "Kein Problem – wir zeigen dir, wie’s geht. Ob Website, Bildgrößen oder kleinere Updates: Du musst nicht alles auslagern, wenn du’s auch selbst kannst. Wir unterstützen dich dabei.",
            },
            {
              caption: "Website",
              question: "Welche Leistungen sind in eurem Abo-Modell enthalten?",
              answer:
                "Das hängt von deinem Bedarf ab – z. B. regelmäßiger Content (Foto/Video), Social Media Templates, kleinere Website-Anpassungen oder Beratung. Wir schnüren dir ein passendes Paket.",
            },

            // DESIGN
            {
              caption: "Design",
              question: "Was gehört alles zu einem Design-Projekt bei euch?",
              answer:
                "Zum Beispiel: Logoentwicklung, Farbwelt, Typografie, Bildsprache, Icons, Templates für Social Media oder Präsentationen – je nach Bedarf schnüren wir ein passendes Paket.",
            },
            {
              caption: "Design",
              question: "Entwickelt ihr auch komplette Brandings?",
              answer:
                "Ja – vom Logo über Look & Feel bis zur Bildsprache und Anwendung auf verschiedenen Kanälen. Wir begleiten dich von der ersten Idee bis zum fertigen Auftritt.",
            },
            {
              caption: "Design",
              question: "Was, wenn ich schon ein Logo habe?",
              answer:
                "Kein Problem! Wir bauen auf dem Bestehenden auf – und entwickeln z. B. ein stimmiges Gesamtkonzept oder ergänzen dein vorhandenes Designsystem.",
            },
            {
              caption: "Design",
              question: "Wie läuft ein Design-Prozess bei euch ab?",
              answer:
                "Wir starten mit einem Briefing und entwickeln daraus erste Ansätze. In mehreren Feedbackrunden schärfen wir Schritt für Schritt dein Design – bis alles für dich stimmig ist.",
            },
            {
              caption: "Design",
              question: "Wie viel Mitgestaltung ist möglich?",
              answer:
                "So viel wie du willst – oder brauchst. Du bist in den Prozess eingebunden, gibst Feedback und hast jederzeit Einblick in den Zwischenstand.",
            },
            {
              caption: "Design",
              question: "In welchen Formaten erhalte ich die finalen Dateien?",
              answer:
                "Je nach Projekt z. B. als PNG, PDF, SVG, EPS oder InDesign-Datei – immer passend für Web und Print. Du bekommst außerdem eine Übersicht zur richtigen Anwendung.",
            },
            {
              caption: "Design",
              question: "Gibt’s ein Styleguide oder ein Manual?",
              answer:
                "Wenn gewünscht, erstellen wir dir ein Markenhandbuch – damit du (oder dein Team) dein Design sicher anwenden kannst: auf Social Media, Website oder in Printmedien.",
            },
          ]}
        />
      </section>
      <ImageTextBox
        topline="Gemeinsam für mehr"
        headline="Zusammen die Zukunft gestalten"
        text1="Einmal im Jahr unterstützen wir ein gemeinnütziges Projekt mit einer Fotokampagne. So rücken wir Themen und Menschen ins Licht, die sonst oft übersehen werden – und leisten einen kleinen Beitrag zu mehr Sichtbarkeit und Teilhabe."
        text2="Du kennst ein Projekt, das das verdient hat? Dann meld dich gerne bei uns – wir freuen uns auf eure Ideen."
        image={btsImage1}
        alt="Description of image"
      />
    </Layout>
  );
}
