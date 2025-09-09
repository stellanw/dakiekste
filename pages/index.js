import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import ScrollBox from "@/components/ScrollBox";
import ImageSliderLight from "@/components/ImageSliderLight";
import DoubleTextBox from "@/components/DoubleTextBox";
import ImageTextBox from "@/components/ImageTextBox";
import StudioBox from "@/components/StudioBox";
import TeamText from "@/components/TeamText";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import ImageElement from "@/components/ImageElement";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import VideoTextBox from "@/components/VideoTextBox";

import studioImage1 from "/public/images/KLUBSTUDIO_3.jpg";
import studioImage4 from "/public/images/KLUBSTUDIO_6.jpg";
import studioImage5 from "/public/images/KLUBSTUDIO_7.jpg";
import studioImage6 from "/public/images/KLUBSTUDIO_8.jpg";
import studioImage7 from "/public/images/KLUBSTUDIO_9.jpg";
import studioImage9 from "/public/images/KLUBSTUDIO_13.jpg";
import studioImage13 from "/public/images/KLUBSTUDIO_10.jpg";

//02_Slider
import slider_branding_01 from "/public/images/02_Slider/branding-fotografie-bildung-integration-verein-dakiekste-01.jpg";
import slider_branding_02 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-02.jpg";
import slider_branding_03 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-03.jpg";
import slider_branding_04 from "/public/images/02_Slider/branding-fotografie-bildung-integration-verein-dakiekste-03.jpg";
import slider_branding_05 from "/public/images/02_Slider/teamfotografie-pflege.jpg";
import slider_branding_06 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-06.jpg";
import slider_branding_07 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-04.jpg";
import slider_branding_08 from "/public/images/02_Slider/branding-fotografie-bildung-integration-verein-dakiekste-02.jpg";

//03_Service
import service_socialmedia from "/public/images/03_Service/behind-the-scenes-dakiekste-01.jpg";
import service_design from "/public/images/03_Service/behind-the-scenes-dakiekste-02.jpg";
import service_webdev from "/public/images/03_Service/behind-the-scenes-dakiekste-03.jpg";
import service_webdesign from "/public/images/03_Service/behind-the-scenes-dakiekste-04.jpg";
import service_branding from "/public/images/03_Service/branding-fotografie-erneuerbare-energie-dakiekste-06.jpg";
import service_event from "/public/images/03_Service/eventfotografie-reeperbahnfestival-dakiekste-01.jpg";
import service_businessportrait from "/public/images/03_Service/team-portrait-foto-erneuerbare-energie-dakiekste-02.jpg";
import service_video from "/public/images/03_Service/behind-the-scenes-dakiekste-05.jpg";
import service_produkt from "/public/images/03_Service/produktfotografie-dakiekste-02.jpg";
import service_konzept from "/public/images/03_Service/behind-the-scenes-dakiekste-06.jpg";

//04_Slider
import section04_slider01 from "/public/images/04_Slider/business-portrait-fotografie-dakiekste-01.jpg";
import section04_slider02 from "/public/images/04_Slider/business-portrait-fotografie-finanzexperten-dakiekste-01.jpg";
import section04_slider03 from "/public/images/04_Slider/business-portrait-fotografie-finanzexperten-dakiekste-02.jpg";
import section04_slider04 from "/public/images/04_Slider/team-portrait-fotografie-bildung-integration-verein-dakiekste-01.jpg";
import section04_slider05 from "/public/images/04_Slider/team-portrait-fotografie-bildung-integration-verein-dakiekste-02.jpg";
import section04_slider06 from "/public/images/04_Slider/business-portrait-fotografie-dakiekste-03.jpg";

//05_TextBox
import section05_TextBox01 from "/public/images/05_TextBox/business-portrait-fotografie-dakiekste-02.jpg";

//06_TextBox
import section06_TextBox01 from "/public/images/06_TextBox/branding-fotografie-bildung-integration-verein-dakiekste-04.jpg";

//08_Studio
import section08_Studio01 from "/public/images/08_Studio/klub-studio-bar.jpg";
import section08_Studio02 from "/public/images/08_Studio/klub-studio-equipment.jpg";
import section08_Studio03 from "/public/images/08_Studio/klub-studio-hair-and-makeup.jpg";
import section08_Studio04 from "/public/images/08_Studio/klub-studio-hintergruende.jpg";
import section08_Studio05 from "/public/images/08_Studio/klub-studio-parkplatz.jpg";

//09_Image
import section09_Image01 from "/public/images/09_Image/behind-the-scenes-dakiekste-04.jpg";

//10_Team
import section10_Team01 from "/public/images/10_Team/dakiekste-team-maischa-01.jpg";
import section10_Team02 from "/public/images/10_Team/dakiekste-team-stellan-01.jpg";
import section10_Team03 from "/public/images/10_Team/dakiekste-team-stellan-maischa-01.jpg";

//11_Image
import section11_Image01 from "/public/images/11_Image/klub-studio-fläche-01.jpg";

//11_Image
import section12_Image01 from "/public/images/12_Image/erneuerbare-energie_brandshooting_photo-maischa-souaga.jpg";

//12_ProjectBox
import project_qucare_01 from "/public/images/12_ProjectBox/projekt-teamfotografie-pflege-01.jpg";
import project_qucare_02 from "/public/images/12_ProjectBox/projekt-teamfotografie-pflege-02.jpg";
import project_qucare_03 from "/public/images/12_ProjectBox/projekt-teamfotografie-pflege-03.jpg";
import project_qucare_04 from "/public/images/12_ProjectBox/projekt-teamfotografie-pflege-04.jpg";
import project_qucare_05 from "/public/images/12_ProjectBox/projekt-teamfotografie-pflege-05.jpg";
//12_TextBox
import section12_TextBox01 from "/public/images/12_Textbox/dakiekste-team-stellan-maischa-02.jpg";
import Video from "@/components/Video";
import ProjectBox from "@/components/ProjectBox";

//13_TextBox
import section13_TextBox01 from "/public/images/13_Textbox/behind-the-scenes-dakiekste-05.jpg";

export default function HomePage() {
  return (
    <>
      <header>
        <Header useImageBackground={false} />
      </header>
      <Head>
        {" "}
        <title>Dakiekste | Brandingfotografie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Branding und Corporate Fotografie für dein Business" />
        <meta name="author" content="Dein Name" />
      </Head>

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <Hero
        headline="Deine Marke – unser Gesamtpaket"
        text={
          <>
            Weil deine Vision mehr als schöne Bilder braucht, kombinieren wir <br />
            Fotografie, Video, Design & Website zu einem stimmigen Gesamtauftritt.
            <br />
            Mit vielseitiger Expertise, Erfahrung und Empathie.
          </>
        }
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageSlider
        autoplay={true}
        projects={[
          {
            alt: "",
            image: slider_branding_01,
          },

          {
            alt: "",
            image: slider_branding_02,
          },
          {
            alt: "",
            image: slider_branding_03,
          },
          {
            alt: "",
            image: slider_branding_04,
          },
          {
            alt: "",
            image: slider_branding_05,
          },
          {
            alt: "",
            image: slider_branding_06,
          },
          {
            alt: "",
            image: slider_branding_07,
          },
          {
            alt: "",
            image: slider_branding_08,
          },
        ]}
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <section id="services">
        <ScrollBox
          autoplay={false}
          headline1="Leistungen aus einer Hand"
          headline2={
            <>
              Strategisch durchdacht und visuell auf den Punkt. <br />
              Kein Baukasten oder Stock-Foto, sondern Gesamtlösungen, <br />
              die wirklich zu dir passen.
            </>
          }
          boxData={[
            {
              image: service_konzept,

              title: "Konzeption & Workshop",
              mobileTitle: "Workshop",
              text: "Corporate Identity, Branding und Bildsprache – wir teilen Wissen, beraten und strukturieren deine visuelle Kommunikation für mehr Klarheit und Wirkung.",
            },
            {
              image: service_branding,

              title: "Branding Fotografie",
              mobileTitle: "Branding Fotos",
              text: "Bilder, die zeigen, wofür deine Marke steht. Deine Markenwerte übersetzen wir in eine visuelle Bildsprache die überzeugt. Deine Marke und Vision im Ganzen zu verstehen, ist uns dabei besonders wichtig.",
            },
            {
              image: service_businessportrait,

              title: "Businessportraits",
              mobileTitle: "Business-Portraits",
              text: "Ob CEO, Mitarbeiter*innen oder das ganze Team – wir fotografieren dich authentisch und stärken dabei dein Employer Branding. Im ganzen Shootig-Prozess begleiten wir dich, damit du dich vor der Kamera rundum wohl fühlen kannst.",
            },
            {
              image: service_video,
              title: "Imagefilm & Video-Content",
              mobileTitle: "Video Content",
              text: "Bewegte Bilder erzählen mehr als Worte. Mit unterschiedlichen Formaten wie Imagefilmen, Dokumentationen oder Interviews gibst du deiner Zielgruppe tiefere Einblicke in deine Marke.",
            },
            {
              image: service_webdesign,

              title: "Website Design (UI/UX)",
              mobileTitle: "Website Design",
              text: "Webdesign, das mitdenkt und Websites, die einfach funktionieren – visuell, strukturell und inhaltlich. Design, Nutzerführung und Inhalte greifen bei uns ineinander und werden zu einem stimmigen Gesamtbild, das User überzeugt.",
            },
            {
              image: service_webdev,

              title: "Website Entwicklung",
              mobileTitle: "Web Entwicklung",
              text: "Wir kümmern uns um die Umsetzung deiner Website – ohne Technikstress. Sie läuft, wächst und hält dir den Rücken frei. Ob CMS-System oder komplexere Anforderungen: Gemeinsam finden wir die passende Lösung für dich.",
            },
            {
              image: service_design,

              title: "Branding & Corporate Design",
              mobileTitle: "Corporate Design",
              text: "Mit einem Designsystem aus Logo, Farben und Typografie, entwickeln wir das visuelle Fundament deiner Marke. Klar, durchdacht und wiedererkennbar. So wirst du sichtbarer und bleibst im Kopf.",
            },
            {
              image: service_event,

              title: "Eventfotografie",
              mobileTitle: "Event Fotos",
              text: "Egal ob PR-Event, Produktlaunch, Networking, Keynote oder Teamoffsite – wir halten Atmosphäre und Highlights in starken Bildern fest: dezent im Hintergrund, präsent im richtigen Moment.",
            },
            {
              image: service_produkt,

              title: "Produktfotografie",
              mobileTitle: "Produktfotografie",
              text: "Dein Business hat Produkte? Ob Freisteller, Inszeniert oder am Model. Unsere Wurzeln liegen in der Produktfotografie – und das sieht man.",
            },
            {
              image: service_socialmedia,

              title: "Content Creation & Strategie",
              mobileTitle: "Content Creation",
              text: "Persönlicher Content statt Standard: Wir erstellen Foto- und Videoinhalte mit Qualität und einem hohen Anspruch an Ästhetik. Für Posts, Reels & Stories, die wirken.",
            },
          ]}
        />
      </section>

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageSliderLight
        autoplay={true}
        projects={[
          {
            alt: "Business Portrait Foto im Studio vor Orange",
            image: section04_slider05,
          },
          {
            alt: "Business Portrait Outdoor on Location Hafencity Hamburg",
            image: section04_slider02,
          },
          {
            alt: "Business Portrait im Klub Studio",
            image: section04_slider06,
          },
          {
            alt: "Business Portrait Foto im Studio vor Orange",
            image: section04_slider04,
          },
          {
            alt: "Business Portrait Studio vor braunem Hintergrund",
            image: section04_slider01,
          },
          {
            alt: "Business Portrait Outdoor on Location Hafencity Hamburg",
            image: section04_slider03,
          },
        ]}
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      {/* <DoubleTextBox
        topline1="Ein Look – viele Kanäle"
        headline1={
          <>
            Markenstrategie <br />& Bildsprache
          </>
        }
        text1="Wir entwickeln einen visuellen Auftritt, der auf allen digitalen Kanälen funktioniert. Statt losem Stückwerk bekommst du eine durchdachte Bildsprache, die deine Marke einheitlich und wiedererkennbar macht.
Ob Website, LinkedIn, Instagram oder Jobportale – du erhältst von uns einen flexiblen Bild- und Videopool, der mit deiner Marke mitwächst: langfristig, konsistent und klar positioniert."
        topline2="Content, der wirkt"
        headline2={
          <>
            Starke Bilder. <br />
            Klare Botschaften.
          </>
        }
        text2="Wir erstellen Bilder und Videos, die genau da ankommen, wo sie sollen – bei deiner Zielgruppe. Du bekommst Inhalte, die auffallen, hängen bleiben und Vertrauen schaffen. In ehrlicher Zusammenarbeit entstehen nahbare Bildwelten, in denen du dich gesehen fühlt. Du musst dich nicht um jedes Detail kümmern – wir denken mit und liefern Content, den du direkt einsetzen kannst."
      /> */}

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageTextBox
        topline="Sichtbarkeit & guter Content"
        headline={
          <>
            Mehr Wirkung <br />
            für deine Marke
          </>
        }
        text1="Bilder und Videos sind mehr als schmückendes Beiwerk – sie sind der Schlüssel, um Vertrauen aufzubauen und im Gedächtnis zu bleiben. Wir produzieren Inhalte, die deine Botschaften klar transportieren, Emotionen wecken und deiner Marke Profil geben. Gemeinsam schaffen wir visuelle Lösungen, die funktionieren."
        text2="So entsteht Mehrwert: Dein Auftritt gewinnt an Tiefe, wirkt professionell und macht dich für die Menschen sichtbar, die du erreichen willst."
        image={section12_Image01}
        alt="Description of image"
        flexflow="row-reverse"
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageTextBox
        topline="Businessportraits"
        headline={<>Menschen im Mittelpunkt</>}
        text1="Wir zeigen dich und die Menschen hinter deinem Unternehmen. Mit Portraits und Einblicken in euren Arbeitsalltag machen wir sichtbar, was euch als Team ausmacht. Das schafft Nähe, spricht potenzielle Talente an und stärkt euer Employer Branding. Für alle, die mehr zeigen wollen als Leistung – nämlich Haltung, Miteinander und echtes Engagement."
        text2=""
        image={section05_TextBox01}
        alt="Description of image"
        flexflow="row"
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageTextBox
        topline="Bildsprache entwickeln"
        headline={
          <>
            Ein Look –<br />
            Viel Flexibilität
          </>
        }
        text1="Wir entwickeln mit dir eine Bildsprache, die deine Marke trägt und auf allen Kanälen funktioniert. Jedes Motiv, jede Farbwahl und jedes Detail entsteht mit Blick auf deine Vision und deine Zielgruppe. So bekommst du keinen Flickenteppich, sondern einen durchdachten visuellen Auftritt, der einheitlich, wiedererkennbar und flexibel ist."
        text2="Für die Umsetzung erhältst du von uns einen individuellen Bilderpool, den du auf allen Plattformen einsetzen kannst. "
        link="Mehr zum Bilderpool"
        url="/#pool"
        image={section06_TextBox01}
        alt="Description of image"
        flexflow="row-reverse"
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <VideoTextBox
        topline="Imagefilm"
        headline="Bewegte Bilder – die verbinden"
        text1="Ein Imagefilm macht dein Unternehmen erlebbar. Er zeigt nicht nur Fakten, sondern vermittelt Atmosphäre und Persönlichkeit. So bekommen Kund*innen einen echten Eindruck davon, wie du arbeitest und was dein Unternehmen besonders macht. Durch bewegte Bilder entsteht Nähe – und aus Zuschauer*innen werden Interessierte, die sich mit deiner Marke verbinden."
        text2="Ein Imagefilm transportiert Gefühl, baut Vertrauen auf und lässt dein Unternehmen lebendig wirken."
        videoSrc="/videos/Imagefilm-ossara.mp4"
        flexflow="row"
      />
      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <Video src="/videos/07_Video/Selections_Website_OSSARA_Workflow_V2_1.mp4" />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <section id="workflow">
        <ScrollBox
          showIcon={true}
          headline1="Workflow"
          headline2={
            <>
              Du bringst die Vision, wir kümmern uns um den Weg. <br />
              Mit einem strukturierten Ablauf halten wir dir den Rücken frei.
            </>
          }
          boxData={[
            {
              title: "06 Langfristige Unterstützung",
              text: "Auch nach dem Projekt sind wir für dich da. Ob kleine Anpassungen oder neue Ideen – wir reagieren schnell und entwickeln mit dir weiter. Weil wir deine Marke kennen, können wir gezielt unterstützen und so nachhaltiges Wachstum ermöglichen.",
            },
            {
              title: "01 Erstgespräch & Analyse",
              text: "Im ersten Gespräch lernen wir dich, deine Marke und deine Ziele kennen. Wir hören zu, stellen die richtigen Fragen und analysieren deine Ausgangslage. Darauf aufbauend entwickeln wir ein Konzept, das dein Branding stärkt und deine geschäftlichen Ziele voranbringt.",
            },
            {
              title: "02 Konzeption & Workshops",
              text: "Auf Basis des Erstgesprächs entwickeln wir ein Konzept, das zu deiner Marke, deinen Zielen und deinem Budget passt. Zusätzlich bieten wir Workshops an, um gemeinsam die besten Lösungen zu erarbeiten. Du bleibst dabei immer eingebunden und siehst alle Zwischenstände.",
            },
            {
              title: "03 Organisation",
              text: "Wir kümmern uns um alle Details – von der Projektplanung über die Location bis hin zu Styling und Hair & Make-up. Dank unseres Netzwerks und durchdachter Zeitpläne läuft dein Shooting reibungslos und zuverlässig.",
            },
            {
              title: "04 Umsetzung",
              text: "Fotografie, Design, Web – bei uns greift alles ineinander. Wir arbeiten effizient und ohne doppelte Abstimmungen. Shootings und Drehs laufen strukturiert ab. Design entsteht in Abstimmung mit Strategie und Zielgruppe. Web-Projekte entwickeln wir funktional, durchdacht und einsatzbereit.",
            },
            {
              title: "05 Postproduktion",
              text: "Du wählst deine Favoriten aus unserer Vorauswahl. Danach bereiten wir alles sortiert und markengerecht auf. Du bekommst einen vielseitigen Bild- oder Medienpool auf den du über eine Online-Galerie oder Cloud zugreifen kannst, mit einer Anleitung zur flexiblen Verwendung.",
            },
          ]}
        />
      </section>

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <section id="studio">
        <StudioBox
          topline="UNSER STUDIO"
          headline={
            <>
              Viel Raum <br />
              für deine Ideen
            </>
          }
          text1="Unser Studio bietet den Raum, den kreative Ideen brauchen: lichtdurchflutetes Tageslichtstudio und wandelbare Sets. Mit einer Auswahl an Hintergründen und Requisiten lassen sich unterschiedlichste Konzepte umsetzen. Für eine entspannte Atmosphäre sorgen kostenfreie Parkplätze, Kaffee und Tee – alles, was ein gutes Shooting braucht."
          text2=""
          cards={[
            {
              image: section08_Studio05,
              title: "Freie Parkplätze",
              description: "Im Hamburger Osten befindet sich unser Studio mit vielen kostenlosen Parkplätzen direkt vor dem Gebäude.",
            },
            {
              image: studioImage1,
              title: "Hair & Makeup Bereich",
              description: "Unser Stylingbereich ist mit großem Spiegel, Kleiderstange, Steamer und Ablagefläche ausgestattet – ideal zum Ankommen, Vorbereiten und Wohlfühlen.",
            },
            {
              image: section11_Image01,
              title: "Große Fotostudio-Fläche",
              description: "80 m² flexibel nutzbare Studiofläche mit viel Tageslicht, mobilem Hintergrundsystem und Raum für große und kleine Produktionen.",
            },
            {
              image: section08_Studio01,
              title: "Lounge & Arbeitsbereich",
              description: "Ein wandelbarer Bereich mit großer Bühne, Vorhang, Tisch, Stühlen und Sofa – ideal für Meetings, Pausen oder auch als Kulisse fürs nächste Set.",
            },
            {
              image: section08_Studio02,
              title: "Professionelle Lichttechnik",
              description: "Ob Dauerlicht oder Blitz – unser Studio ist mit hochwertiger Technik ausgestattet. Alles, was du für eine starke Ausleuchtung und präzise Ergebnisse brauchst, ist vor Ort.",
            },
            {
              image: section08_Studio04,
              title: "Flexible Sets & Hintergründe",
              description: "Unterschiedliche Papierhintergründe, Stoffe und mobile Setups ermöglichen dir abwechslungsreiche Looks – vom cleanen Portrait bis zur szenischen Inszenierung.",
            },
            {
              image: studioImage13,
              title: "Vielfältige Requisiten",
              description: "Von Vorhängen über Möbel bis zu kleinen Details – im Studio findest du viele Elemente, um dein Set individuell zu gestalten und neue Looks zu schaffen.",
            },
            {
              image: studioImage9,
              title: "Kaffee, Tee & kalte Getränke",
              description: "Für eine entspannte Arbeitsatmosphäre sorgen kleine Extras wie guter Kaffee aus der Siebträgermaschine und eine Auswahl an Getränken – inklusive im Studio-Angebot.",
            },
          ]}
        />
      </section>

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageElement image={section09_Image01} alt="Bildbeschreibung" />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <section id="team">
        <TeamText
          topline="Über uns"
          headline={
            <>
              Zwei Perspektiven.
              <br />
              Ein gemeinsamer Anspruch.
            </>
          }
          text={
            <>
              Seit über fünfzehn Jahren arbeiten wir als kreatives Duo – mit Vertrauen, Empathie und echtem Interesse an den Menschen, mit denen wir zusammenarbeiten. Für uns ist Zusammenarbeit gelebte Haltung. In unserem Studio nehmen Ideen Gestalt an. Ob Fotografie, Film, Design oder Webentwicklung – wir arbeiten disziplinübergreifend und nutzen dazu auch
              unser Netzwerk an anderen Kreativschaffenden in Hamburg. Gemeinsam mit unseren Auftraggeber*innen entwickeln wir Konzepte, die wirken – ehrlich, zugänglich und mit einem Blick fürs Ganze.
            </>
          }
        />{" "}
        <Team
          teamMembers={[
            {
              name: "ÜBER MAÏSCHA",
              image: section10_Team01,
              text: (
                <>
                  <p>Ich arbeite visuell und konzeptionell, denke in Bildern, Geschichten und Systemen. Ob Kamera oder Interface – mir geht es darum, Inhalte klar zu vermitteln, stimmig zu gestalten und Wirkung zu erzeugen.</p>
                  <p>Meine Schwerpunkte liegen in der Fotografie und Videografie, ergänzt durch Erfahrung in Design, visueller Kommunikation und UI/UX. Ich verstehe mich nicht als Spezialistin für eine Disziplin, sondern als kreative Allrounderin.</p>
                  <p>Ich entwickle Gestaltungslösungen, die funktionieren – für Menschen und Marken, die etwas zu erzählen haben. Dabei denke ich mich tief in Themen hinein, höre zu, sehe genau hin und finde visuelle Antworten, die Haltung zeigen und Orientierung geben.</p>
                </>
              ),
            },
            {
              name: "ÜBER STELLAN",
              image: section10_Team02,

              text: (
                <>
                  <p>
                    Fotografie , Video & Webentwicklung – mit einem Blick fürs Ganze. Mein Fokus liegt auf klaren Prozessen, funktionierenden Systemen und Bildwelten, die funktionieren – technisch wie visuell. Ich verbinde Kreativität mit Struktur und sorge dafür, dass Inhalte sichtbar, verständlich und wirksam werden. Ob Shooting, Imagefilm oder
                    maßgeschneiderte Website: Ich denke Projekte als Einheit und begleite sie von Anfang bis Ende.
                  </p>
                </>
              ),
            },
            {
              name: "ÜBER UNS",
              image: section10_Team03,
              text: (
                <>
                  <p>
                    Wir arbeiten mit Menschen und Unternehmen, die gestalten wollen – für sich, füreinander und für die Welt, die uns umgibt. Uns interessieren Ideen mit Haltung und Visionen, die zu einer bewussteren Zukunft beitragen. Unsere Perspektiven entstehen aus Erfahrungen, die oft unsichtbar bleiben – und prägen, wie wir zuhören, gestalten und
                    begleiten. Deshalb fühlen wir uns besonders Projekten verbunden, die für Teilhabe, Miteinander und Gerechtigkeit stehen. Denn: Wer gesehen wird, gestaltet mit.
                  </p>
                </>
              ),
            },
          ]}
        />
      </section>

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <Video src="/videos/11_Video/Selections_Workflow_Beratung.mp4" />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <section id="pricing">
        <Pricing
          pricingData={[
            {
              key: "businessType",
              category: "Dein Business",
              options: ["Soloselbstständig", "Unternehmen", "Vereine & Organisationen"],
            },
            {
              key: "projectType",
              category: "Dein Projekt",
              options: ["Fotografie", "Video", "Design", "Website", "Pakete"],
            },
          ]}
          servicesData={[
            {
              title: (
                <>
                  Mitarbeiter*innen & <wbr />
                  CEO Portrait
                </>
              ),
              titlePlain: "Businessportraits",
              category: "Fotografie",
              isCountable: true,
              unit: "pro Person",
              description: "Dazu zählen Einzelaufnahmen von Mitarbeiter*innen und Führungskräften (z.B. CEO), Teamfotos in kleinen oder größeren Gruppen. Die Fotos entstehen vor Ort oder im Studio und beinhalten eine Bildauswahl sowie eine Basisretusche mit einheitlichem Look.",
              price: 120,
            },
            {
              title: "Personal Branding Fotografie",
              titlePlain: "Personal Branding Fotografie",
              category: "Fotografie",
              description: "Ein Fotopaket, das dich, dein Team, eure Arbeit und euer Umfeld zeigt – abgestimmt auf deine Marke. Du bekommst einen vielseitigen Bilderpool mit hochwertigen Fotos, die einen stimmigen Gesamteindruck vermitteln. Inklusive Konzept, Planung, Shooting, gemeinsame Bildauswahl und Basisretusche.",
              price: 3000,
            },
            {
              title: "Produktfotografie",
              titlePlain: "Produktfotografie",
              category: "Fotografie",
              isCountable: true,
              unit: "pro Bild",
              description:
                "Zeig deine Produkte so, wie sie gesehen werden sollen – hochwertig, ansprechend und markengerecht. Je nach Bedarf fotografieren wir Freisteller, inszenierte Aufnahmen oder Anwendungen am Modell. Du bekommst Bilder deiner Produkte, die deinen Verkauf stärken und vielseitig einsetzbar sind. Optional unterstützen wir mit einer erfahrenen Stylistin aus unserem Netzwerk, um deine Produkte perfekt in Szene zu setzen.",
              price: 50,
            },
            {
              title: "Eventfotografie",
              titlePlain: "Eventfotografie",
              category: "Fotografie",
              description: "Umfasst die fotografische Dokumentation von Veranstaltungen wie PR-Events, Produktlaunches, Networking Formaten, Vorträgen, Speaker-Events oder Teamveranstaltungen. Die Bilder erhalten einen einheitlichen Look und werden in einer Onlinegalerie bereitgestellt.",
              price: 850,
            },
            {
              title: "Content Creation",
              titlePlain: "Content Creation",
              category: "Fotografie",
              description: "Wir erstellen hochwertigen Foto- und Videocontent für Instagram & Co. – markengerecht, zielgruppennah und schnell einsetzbar. Du bekommst bearbeitete Inhalte mit einheitlichem Look, die direkt bereit sind für deine Social-Media-Kanäle, Website oder Kampagnen.",
              price: 500,
            },
            {
              title: "Konzeption",
              titlePlain: "Konzeption",
              category: "Fotografie",
              description: "Ein Grundkonzept ist in vielen Paketen enthalten. Wenn du tiefer einsteigen willst, kannst du unsere Konzeptionsleistung auch separat buchen. Je nach Bedarf umfasst sie Beratung zu deiner Markenidentität, die Entwicklung einer Bildsprache und die Struktur deiner visuellen Kommunikation.",
              price: 900,
            },
            {
              title: "Postproduction",
              titlePlain: "Postproduction",
              category: "Fotografie",
              description: "Standardkorrekturen sind inklusive. Aufwändige Retuschen können separat gebucht werden.",
              isCountable: true,
              unit: "pro Bild",
              price: 50,
            },
            {
              title: "Video-Content für Social Media",
              titlePlain: "Video-Content für Social Media",
              category: "Video",
              description: "Kurzformate mit Wirkung: Reels, Snippets & Clips, die deine Botschaft transportieren und auf Social Media performen.",
              price: 800,
            },
            {
              title: "Event-Videodokumentation",
              titlePlain: "Event-Videodokumentation",
              category: "Video",
              description: "Wir halten dein Event filmisch fest – dezent im Hintergrund, präsent im richtigen Moment. Lieferung ohne Nachbearbeitung.",
              price: 1000,
            },
            {
              title: "Imagefilm",
              titlePlain: "Imagefilm",
              category: "Video",
              description: "Ein kompakter Film über dein Unternehmen – mit Konzept, Dreh und Schnitt. Ideal für Web, Präsentationen oder Social Media.",
              price: 4000,
            },
            {
              title: "Web Design (UI/UX)",
              titlePlain: "Web Design (UI/UX)",
              category: "Website",
              description: "Webdesign, das funktioniert. Wir gestalten deine Seite mit Fokus auf Struktur, Nutzerführung und einem stimmigen Look.",
              price: 3000,
            },
            {
              title: "Web Entwicklung",
              titlePlain: "Web Entwicklung",
              category: "Website",
              description: "Technische Umsetzung deiner Website – zuverlässig, flexibel und passend zu deinen Anforderungen. Mit CMS oder als individuelle Lösung.",
              price: 1500,
            },
            {
              title: "CI Branding Design",
              titlePlain: "CI Branding Design",
              category: "Design",
              description: "Logo, Typo & Farben – wir gestalten ein durchdachtes Corporate Design, das deine Marke sichtbar macht und Wiedererkennung schafft.",
              price: 4000,
            },
            {
              title: "Logo Design",
              titlePlain: "Logo Design",
              category: "Design",
              description: "Wir entwickeln ein Logo, das zu dir passt – reduziert, wiedererkennbar und mit Substanz. Für einen starken ersten Eindruck.",
              price: 3000,
            },
            {
              title: "Redesign",
              titlePlain: "Redesign",
              category: "Design",
              description: "Deine Marke braucht ein Update? Wir überarbeiten dein bestehendes Design, ohne die Essenz zu verlieren – modern, klar und stimmig.",
              price: 1500,
            },
            {
              title: "Starter Paket",
              titlePlain: "Starter Paket",
              category: "Pakete",
              description: "Ideal für Gründer*innen und Solo-Selbstständige: Ein professionelles Logo als Basis für deine Marke, dazu Businessportraits für Website & Social Media. Du bekommst ein klares visuelles Fundament, um sofort sichtbar loszulegen.",
              price: 2500,
            },
            {
              title: "Branding Paket Light",
              titlePlain: "Branding Paket Light",
              category: "Pakete",
              description: "Das kleine Komplettpaket für den Markenstart: Logo-Design inkl. Farb- und Typokonzept, dazu Personal Branding Fotografie, die dich und dein Business professionell in Szene setzt. Perfekt, wenn du deinem Auftritt gleich einen starken Look geben willst.",
              price: 4500,
            },
            {
              title: "Content Paket Social",
              titlePlain: "Content Paket Social",
              category: "Pakete",
              description: "Regelmäßiger Content für deine Kanäle: Ein Shooting für vielseitige Foto-Inhalte, kombiniert mit kurzen Social-Media-Videos (Reels & Snippets). Damit hast du sofort einsetzbares Material für Instagram, LinkedIn & Co.",
              price: 2000,
            },
            {
              title: "Gründerpaket Komplett",
              titlePlain: "Gründerpaket Komplett",
              category: "Pakete",
              description: "Das Rundum-Paket für einen professionellen Auftritt: Logo & Corporate Design, eine moderne Website (Design + technische Umsetzung) sowie Personal Branding Fotografie. Alles aus einer Hand – damit deine Marke von Anfang an stimmig und sichtbar ist.",
              price: 8500,
            },
            {
              title: "Event Paket",
              titlePlain: "Event Paket",
              category: "Pakete",
              description: "Dein Event aus einer Hand festgehalten: Fotografische Begleitung für Bilder mit einheitlichem Look plus Videodokumentation für bewegte Eindrücke. So bleibt deine Veranstaltung nicht nur für die Teilnehmenden in Erinnerung.",
              price: 1800,
            },
            {
              title: "Website Paket Basic",
              titlePlain: "Website Paket Basic",
              category: "Pakete",
              description: "Für alle, die eine solide Online-Präsenz brauchen: Gestaltung einer klaren Onepager-Website inkl. technischer Umsetzung. Kombiniert mit Businessportraits für den direkten Start deiner professionellen Sichtbarkeit.",
              price: 4000,
            },
            {
              title: "Relaunch Paket",
              titlePlain: "Relaunch Paket",
              category: "Pakete",
              description: "Wenn dein Auftritt ein Update braucht: Redesign deines Logos oder Corporate Designs, frische Businessportraits und eine modernisierte Website. Alles abgestimmt auf deine bestehende Marke.",
              price: 5500,
            },
            {
              title: "Non-Profit Paket",
              titlePlain: "Non-Profit Paket",
              category: "Pakete",
              description: "Speziell für Vereine & Organisationen: Basis-CI (Logo & Farbwelt), Team- oder Projektfotos und eine schlanke Website. Damit deine Mission sichtbar wird – fair, bedarfsorientiert und an euren Zielen ausgerichtet.",
              price: 3000,
            },
            {
              title: "Premium Branding Paket",
              titlePlain: "Premium Branding Paket",
              category: "Pakete",
              description: "Das große Markenpaket: Vollständiges Corporate Design (CI Branding), umfangreiche Personal Branding Fotografie und ein Imagefilm. Ideal für Unternehmen, die ihre Marke groß und nachhaltig sichtbar machen wollen.",
              price: 12_000,
            },
            {
              title: "Logo Design Paket (Gründer)",
              titlePlain: "Logo Design Paket",
              category: "Pakete",
              description: "Professionelles Logo inkl. Variante & Grundanwendung. Ideal als Startpunkt für Gründer*innen.",
              price: 3000,
            },
            {
              title: "Corporate Design Paket (CI)",
              titlePlain: "Corporate Design Paket",
              category: "Pakete",
              description: "Logo, Farb- & Typosystem, Grundrichtlinien (Mini-Styleguide). Stimmiger Markenauftritt ab Tag 1.",
              price: 4000,
            },
            {
              title: "Website Paket Onepager (Basic)",
              titlePlain: "Website Paket Onepager",
              category: "Pakete",
              description: "Onepager: Web Design (UI/UX) + Web Entwicklung. Kompakte Struktur, responsive, DSGVO-ready (Basis).",
              price: 4500,
            },
            {
              title: "Website Paket Business (Design + Entwicklung)",
              titlePlain: "Website Paket Business",
              category: "Pakete",
              description: "Mehrseitige Website: Design (UX/UI) + Entwicklung. Erweiterbar um Blog/Mehrsprachen/SEO-Setup.",
              price: 6000,
            },
          ]}
        />
      </section>

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageElement image={section11_Image01} alt="Klub Studio Studiofläche" />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}
      <section id="pool">
        <ProjectBox
          topline="BILDERPOOL"
          headline={
            <>
              Bildmaterial, das dich
              <br />
              langfristig unterstützt
            </>
          }
          text1="Wir erstellen Porträts, Details, Situationen und Momente, die deine Marke lebendig machen – und bündeln sie zu deinem persönlichen Bilderpool. Statt nur ein paar Fotos bekommst du eine vielseitige Sammlung, die deine Bildsprache trägt und über alle Kanäle hinweg funktioniert."
          text2="Egal ob für Social Media, Website, Präsentationen oder Jobportale – du hast immer passende Bilder zur Hand, die zu deinem Auftritt passen und konsistent wirken. Dein Bilderpool wächst mit deinem Unternehmen mit und gibt dir die Sicherheit, jederzeit hochwertiges Material nutzen zu können – flexibel, wiedererkennbar und langfristig einsetzbar."
          cards={[
            {
              image: project_qucare_01,
              description: "",
            },
            {
              image: project_qucare_02,
              description: "",
            },
            {
              image: project_qucare_03,
              description: "",
            },
            {
              image: project_qucare_04,
              description: "",
            },
            {
              image: project_qucare_05,
              description: "",
            },
          ]}
        />
      </section>

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <section id="faq">
        <FAQ
          faqData={[
            {
              caption: "Allgemein",
              question: "Wie läuft ein Projektstart bei euch ab?",
              answer: "Wir starten immer mit einem unverbindlichen Kennenlerngespräch per Video-Call oder auf Wunsch auch persönlich. Danach folgt ein Angebot und ein Konzept, das wir gemeinsam mit dir entwickeln. In der Umsetzung arbeiten wir eng mit dir zusammen – mit regelmäßigem Feedback, klaren Absprachen und einem flexiblen Ablauf.",
            },
            {
              caption: "Allgemein",
              question: "Mit welchen Kosten muss ich rechnen?",
              answer: "Unser Preiskalkulator bietet dir eine erste Orientierung. Die genauen Kosten hängen vom Umfang und deinen individuellen Anforderungen ab. Wir erstellen dir ein transparentes Angebot, das zu deinem Budget passt.",
            },
            {
              caption: "Allgemein",
              question: "Wie weit im Voraus sollte ich ein Projekt anfragen?",
              answer: "Je früher, desto besser. Gerade bei komplexeren Projekten oder Studio-Produktionen planen wir gerne ein paar Wochen im Voraus. Spontane Anfragen sind aber auch möglich, wenn es der Kalender zulässt.",
            },
            {
              caption: "Allgemein",
              question: "Wie lange dauert ein Projekt bei euch?",
              answer: "Das ist ganz unterschiedlich. Kleine Shootings oder Website-Anpassungen gehen oft schnell. Bei größeren Branding-Prozessen oder Kampagnen kann es mehrere Wochen dauern. Sobald wir alle Projektbausteine und Anforderungen kennen, geben wir dir eine realistische Einschätzung zur Dauer.",
            },
            {
              caption: "Allgemein",
              question: "Was müsst ihr über uns wissen, bevor es losgeht?",
              answer: "Alles, was eure Marke, euer Produkt oder eure Vision ausmacht. Wir stellen euch gezielte Fragen, um euch kennenzulernen und daraus ein starkes Konzept zu entwickeln.",
            },
            {
              caption: "Allgemein",
              question: "Was kann ich zur Vorbereitung beitragen?",
              answer: "Je besser wir eure Inhalte und Ziele kennen, desto gezielter können wir arbeiten. Moodboards, vorhandenes Material oder ein kurzer Fragebogen helfen uns, ein Gefühl für euren Auftritt zu bekommen.",
            },
            {
              caption: "Allgemein",
              question: "Müssen wir ein fertiges Konzept mitbringen?",
              answer: "Konzepte zu entwickeln gehört zu unserem Leistungsumfang. Wenn du bereits Ideen hast, nehmen wir sie natürlich gerne auf – und wenn das Konzept schon steht, unterstützen wir dich auch gerne ausschließlich bei der Umsetzung. Andernfalls erarbeiten wir gemeinsam eine passende Lösung.",
            },
            {
              caption: "Allgemein",
              question: "Was passiert, wenn ich nachträglich etwas ändern möchte?",
              answer:
                "Im Projektverlauf ist mindestens eine Feedbackrunde inklusive, in der wir deine Änderungswünsche gezielt umsetzen. Nach Projektabschluss stehen wir dir weiterhin zur Verfügung – für inhaltliche Anpassungen, neue Bausteine oder technische Weiterentwicklungen. Diese Leistungen kalkulieren wir transparent auf Basis des zusätzlichen Aufwands.",
            },
            {
              caption: "Allgemein",
              question: "Bietet ihr auch langfristige Unterstützung an?",
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
              answer: "Zusätzliche Kosten entstehen nur, wenn vorher nicht absehbare Aufwände dazukommen – z. B. externe Lizenzen, Reisekosten oder Zusatzleistungen. Das sprechen wir vorher transparent mit dir ab.",
            },
            {
              caption: "Allgemein",
              question: "Welche Rechte erhalte ich an den Bildern oder Inhalten?",
              answer: "Die Nutzung ist im Angebot geregelt. Standardmäßig sind alle vereinbarten Kanäle wie Website, Social Media oder interne Kommunikation abgedeckt. Für großflächige Kampagnen oder Printanzeigen sprechen wir die Nutzungsrechte gesondert ab.",
            },

            // FOTOGRAFIE
            {
              caption: "Foto",
              question: "Wie kann ich mich auf ein Shooting vorbereiten?",
              answer: "Du bekommst vorab alle Infos – von Outfit-Tipps bis zur Location. Auf Wunsch bieten wir zusätzlich Styling- oder Hair & Make-up Services über unser Netzwerk an.",
            },
            {
              caption: "Foto",
              question: "Wie lange im Voraus sollte ich einen Termin für ein Shooting buchen?",
              answer: "Je früher, desto besser – besonders bei größeren Produktionen. Für kleinere Portrait-Shootings reicht oft ein Vorlauf von zwei bis drei Wochen.",
            },
            {
              caption: "Foto",
              question: "Was passiert, wenn ich vor dem Shooting krank werde?",
              answer: "Wenn du krank wirst, sag uns bitte so früh wie möglich Bescheid. In solchen Fällen finden wir in der Regel einen Ersatztermin. Bitte hab Verständnis, dass wir bei sehr kurzfristigen Absagen nicht immer spontan reagieren können – besonders bei gebuchten Locations oder externen Dienstleister*innen.",
            },
            {
              caption: "Foto",
              question: "Wo findet das Business Shooting statt?",
              answer: "In unserem Studio in Hamburg, bei euch vor Ort oder an einer passenden Location – wir richten uns nach euren Bedürfnissen. Auch Shootings außerhalb Deutschlands sind nach Absprache möglich.",
            },
            {
              caption: "Foto",
              question: "Benötige ich eine Stylist*in oder Hair & Make-up Artist?",
              answer: "Das ist ganz dir überlassen – aber manchmal machen kleine Details einen großen Unterschied. Wenn du dich rundum wohlfühlen willst oder einen bestimmten Look umsetzen möchtest, vermitteln wir dir gern erfahrene Profis aus unserem Netzwerk.",
            },
            {
              caption: "Foto",
              question: "Wie läuft ein Shooting ab?",
              answer: "Vor dem Shooting bekommst du alle wichtigen Infos – inklusive Zeitplan, Tipps zur Vorbereitung und Styling- oder Outfit-Hinweisen. Während des Shootings sorgen wir für eine entspannte Atmosphäre und leiten dich klar an.",
            },
            {
              caption: "Foto",
              question: "Wie viele Bilder bekomme ich und in welchem Format?",
              answer: "Das hängt vom Projekt ab. In der Regel bekommst du eine sorgfältig getroffene Auswahl zur Sichtung und wählst deine Favoriten. Die finalen Bilder bekommst du bearbeitet und in Web- sowie Print-Qualität über eine Online-Galerie oder Cloud.",
            },
            {
              caption: "Foto",
              question: "Wie lange dauert die Nachbearbeitung?",
              answer: "Nach dem Shooting stellen wir dir innerhalb von 5–7 Werktagen eine erste Vorauswahl zur Verfügung. Sobald du deine Favoriten ausgewählt hast, bearbeiten wir sie final – in der Regel bekommst du deine fertigen Bilder innerhalb von weiteren 5–10 Werktagen. Je nach Projektumfang kann das leicht variieren.",
            },
            {
              caption: "Foto",
              question: "Für wen ist ein Brand-Shooting interessant?",
              answer:
                "Für alle, die zeigen wollen, wofür sie stehen – ob Solo-Selbstständige, Unternehmen oder NGOs. Du willst sichtbar werden mit dem, was dich ausmacht? Reichweite gewinnen, Vertrauen aufbauen, Wirkung entfalten? Dann ist ein Brand-Shooting genau das Richtige. Und keine Sorge: Du musst nicht wissen, wie man sich inszeniert – wir helfen dir, dich echt zu zeigen.",
            },

            // VIDEO
            {
              caption: "Video",
              question: "Welche Art von Videos bietet ihr an?",
              answer: "Ob kurzer Social-Media-Clip, Imagefilm, Interview oder ein Recruiting-Trailer – wir entwickeln Formate, die zu deiner Botschaft und Zielgruppe passen. Gemeinsam finden wir die passende Form, damit dein Thema sichtbar wird – auf den richtigen Kanälen und mit dem richtigen Ton.",
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
              answer: "Abhängig vom Umfang und deinen Inhalten. Eine kleine Seite kann in wenigen Wochen fertig sein – bei größeren Projekten planen wir 6–10 Wochen ein.",
            },
            {
              caption: "Website",
              question: "Was wenn ich nur ein Logo brauche?",
              answer: "Auch Einzelleistungen bieten wir an. Wichtig ist uns nur: Es soll stimmig zum Gesamtbild deiner Marke passen.",
            },
            {
              caption: "Website",
              question: "Könnt ihr Inhalte so aufbereiten, dass sie auf verschiedenen Kanälen funktionieren?",
              answer: "Ja. Schon bei der Planung denken wir mit, wo und wie du die Inhalte einsetzen willst – z. B. auf Instagram, LinkedIn oder deiner Website. Formate, Größen und Bildausschnitte passen wir so an, dass sie überall gut aussehen und wirken.",
            },
            {
              caption: "Website",
              question: "Welche Informationen oder Materialien benötigt ihr, um starten zu können?",
              answer: "Das kommt auf die Leistung an – meist brauchen wir Infos zu deiner Zielgruppe, deinen Zielen, vorhandenes Material (z. B. Logo, Farben, Texte) und einen Einblick in deine bisherigen Kanäle oder Maßnahmen.",
            },
            {
              caption: "Website",
              question: "Bietet ihr Schulungen oder Tutorials an?",
              answer: "Kein Problem – wir zeigen dir, wie’s geht. Ob Website, Bildgrößen oder kleinere Updates: Du musst nicht alles auslagern, wenn du’s auch selbst kannst. Wir unterstützen dich dabei.",
            },
            {
              caption: "Website",
              question: "Welche Leistungen sind in eurem Abo-Modell enthalten?",
              answer: "Das hängt von deinem Bedarf ab – z. B. regelmäßiger Content (Foto/Video), Social Media Templates, kleinere Website-Anpassungen oder Beratung. Wir schnüren dir ein passendes Paket.",
            },

            // DESIGN
            {
              caption: "Design",
              question: "Was gehört alles zu einem Design-Projekt bei euch?",
              answer: "Zum Beispiel: Logoentwicklung, Farbwelt, Typografie, Bildsprache, Icons, Templates für Social Media oder Präsentationen – je nach Bedarf schnüren wir ein passendes Paket.",
            },
            {
              caption: "Design",
              question: "Entwickelt ihr auch komplette Brandings?",
              answer: "Ja – vom Logo über Look & Feel bis zur Bildsprache und Anwendung auf verschiedenen Kanälen. Wir begleiten dich von der ersten Idee bis zum fertigen Auftritt.",
            },
            {
              caption: "Design",
              question: "Was, wenn ich schon ein Logo habe?",
              answer: "Kein Problem! Wir bauen auf dem Bestehenden auf – und entwickeln z. B. ein stimmiges Gesamtkonzept oder ergänzen dein vorhandenes Designsystem.",
            },
            {
              caption: "Design",
              question: "Wie läuft ein Design-Prozess bei euch ab?",
              answer: "Wir starten mit einem Briefing und entwickeln daraus erste Ansätze. In mehreren Feedbackrunden schärfen wir Schritt für Schritt dein Design – bis alles für dich stimmig ist. Am Ende erstellen wir dir einen Guide – damit du und dein Team euer Design sicher anwenden könnt.",
            },
            {
              caption: "Design",
              question: "Wie viel Mitgestaltung ist möglich?",
              answer: "So viel wie du willst – oder brauchst. Du bist in den Prozess eingebunden, gibst Feedback und hast jederzeit Einblick in den Zwischenstand.",
            },
          ]}
        />
      </section>

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageElement image={section12_Image01} alt="Bildbeschreibung" />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageTextBox
        topline="Haltung zeigen. Sichtbar werden."
        headline="Vertrauen entsteht im Miteinander"
        text1="Wir gestalten Räume vor und hinter der Kamera, in denen Menschen sich zeigen können – ohne Klischees, ohne Schablonen, ohne Druck. Mit Respekt, Offenheit und dem Anspruch, einen echten Safe Space zu schaffen. In der Zusammenarbeit setzen wir auf echte Begegnung: ehrlich, aufmerksam und auf Augenhöhe.
So entstehen Bildwelten, die verbinden – visuell stimmig, inhaltlich relevant und getragen von Haltung. Für Menschen und Unternehmen, die mehr zeigen wollen als nur Außenwirkung: Haltung, Miteinander und den Mut, sichtbar zu werden."
        text2=""
        image={section12_TextBox01}
        alt="Description of image"
        flexflow="row"
        mobileFlexflow="column-reverse"
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageTextBox
        topline="Gemeinsam für mehr"
        headline="Zusammen die Zukunft gestalten"
        text1="Einmal im Jahr unterstützen wir ein gemeinnütziges Projekt mit einer Fotokampagne. So rücken wir Themen und Menschen ins Licht, die sonst oft übersehen werden – und leisten einen kleinen Beitrag zu mehr Sichtbarkeit und Teilhabe. Du kennst ein Projekt, das das verdient hat? Dann meld dich gerne bei uns – wir freuen uns auf eure Ideen."
        image={section13_TextBox01}
        alt="Description of image"
        flexflow="row-reverse"
        mobileFlexflow="column-reverse"
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <section id="contact">
        <ContactForm />
      </section>

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <Footer />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <BackToTopButton />
    </>
  );
}
