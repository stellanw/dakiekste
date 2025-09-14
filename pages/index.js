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
// import service_event from "/public/images/03_Service/eventfotografie-reeperbahnfestival-dakiekste-01.jpg";
import service_event from "/public/images/03_Service/eventfotografie-reeperbahnfestival-dakiekste-02.jpg";
import service_businessportrait from "/public/images/03_Service/team-portrait-foto-erneuerbare-energie-dakiekste-02.jpg";
import service_video from "/public/images/03_Service/behind-the-scenes-dakiekste-05.jpg";
// import service_produkt from "/public/images/03_Service/produktfotografie-dakiekste-02.jpg";
// import service_produkt from "/public/images/03_Service/produktfoto-dakiekste-ebike_Detail_1.jpg";
import service_produkt from "/public/images/03_Service/produktfoto-dakiekste-ebike_Detail_2.jpg";
// import service_produkt from "/public/images/03_Service/produktfoto-dakiekste-ebike_1.jpg";
import service_konzept from "/public/images/03_Service/behind-the-scenes-dakiekste-06.jpg";
import service_erklaervideo from "/public/images/03_Service/behind-the-scenes-dakiekste-07.jpg";

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
        topline="Content Produktion"
        headline={
          <>
            Mehr Sichtbarkeit <br />
            für deine Marke
          </>
        }
        text1="Bilder und Videos sind heute die Grundlage, um mit Kund*innen in Kontakt zu treten – vor allem auf Social Media. Wir erstellen Content, der zu deiner Marke passt und sich vielseitig einsetzen lässt: von kurzen Clips und Reels über Fotostrecken bis hin zu Material für Website oder Kampagnen. So entsteht echter Mehrwert: Dein Auftritt gewinnt an Tiefe, wirkt professionell und macht dich für die Menschen sichtbar, die du erreichen willst."
        text2=""
        image={section12_Image01}
        alt="Description of image"
        flexflow="row-reverse"
        flexflowMobile="column-reverse"
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageTextBox
        topline="Branding & Businessfotografie"
        headline={<>Menschen im Mittelpunkt</>}
        text1="Menschen prägen Marken. Deshalb rücken wir sie in den Mittelpunkt – mit Portraits und Einblicken, die Nähe schaffen und deinem Unternehmen ein Gesicht geben. Branding- und Businessfotografie verbinden zwei Ebenen: Sie machen zum einen sichtbar, wofür dein Unternehmen steht und zum anderen zeigen sie die Menschen, die es prägen. Neben Portraits entstehen Eindrücke von Arbeitsweisen, Teamkultur und der Atmosphäre im Alltag. Das macht dein Unternehmen nahbar, spricht potenzielle Mitarbeitende an und zeigt, wie Zusammenarbeit, Haltung und Werte gelebt werden."
        text2=""
        image={section05_TextBox01}
        alt="Description of image"
        flexflow="row"
        flexflowMobile="column-reverse"
      />

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

      <section id="services">
        <ScrollBox
          autoplay={false}
          headline1="Leistungen aus einer Hand"
          headline2={
            <>
              Gemeinsam schaffen wir visuelle Lösungen, die funktionieren.
              <br />
              Kein Baukasten oder Stock-Foto, sondern Gesamtkonzepte, <br />
              die wirklich zu dir passen.
            </>
          }
          boxData={[
            {
              image: service_branding,

              title: "Branding Fotografie",
              text: "Das Besondere an Branding Fotografie ist der ganzheitliche Blick auf deine Marke. Wir zeigen dich und dein Team in Aktion, porträtieren Menschen, fangen Details ein und vermitteln die Stimmung, die hinter deinem Unternehmen steckt. So entsteht ein visueller Rundumblick. Gemeinsam entwickeln wir eine Bildsprache, die zu deinen Werten passt.",
            },
            {
              image: service_businessportrait,
              title: "Businessportraits",
              text: "Business-Portraits zeigen die Menschen hinter deinem Unternehmen – ob CEO, Mitarbeitende oder das gesamte Team. Wir schaffen Bilder, die Persönlichkeit transportieren und dein Employer Branding stärken. Dabei begleiten wir dich durch den gesamten Prozess, vom Briefing bis zum Shooting, damit du dich vor der Kamera rundum wohlfühlst. So entstehen Portraits, die deinem Unternehmen ein klares und nahbares Gesicht geben.",
            },
            {
              image: service_video,
              title: "Imagefilm & Video-Content",
              text: "Mit unterschiedlichen Formaten wie Imagefilmen, Dokumentationen oder Interviews gibst du deiner Zielgruppe tiefere Einblicke. Videos entstehen in enger Zusammenarbeit – von der ersten Idee bis zum finalen Schnitt. Gemeinsam entwickeln wir ein Konzept und planen den Ablauf. Am Drehtag sorgen wir für eine entspannte Atmosphäre, in der authentische Aufnahmen entstehen können.",
            },
            {
              image: service_webdesign,
              title: "Website Design (UI/UX)",
              text: "Webdesign ist das Fundament jeder Website – es entscheidet darüber, wie verständlich Inhalte sind, wie sich Nutzer*innen orientieren und ob sie gerne bleiben. Eine gute Gestaltung macht Informationen leicht zugänglich. Deshalb denken wir Design nicht nur visuell, sondern auch strukturell und inhaltlich: Navigation, Layout, Typografie und Bildsprache greifen ineinander und machen deine Website zu einem Ort, an dem Menschen sich zurechtfinden.",
            },
            {
              image: service_webdev,
              title: "Website Entwicklung",
              text: "Wir kümmern uns um die Umsetzung deiner Website – ohne Technikstress. Sie läuft, wächst und hält dir den Rücken frei. Ob CMS-System oder komplexere Anforderungen: Gemeinsam finden wir die passende Lösung für dich. Auf Wunsch richten wir die Seite so ein, dass du Inhalte selbst pflegen kannst – oder wir übernehmen die Betreuung im Abo-Modell, je nachdem, was am besten zu dir passt.",
            },
            {
              image: service_design,
              title: "Branding & Corporate Design",
              text: "Ein Corporate Design mit einem System aus Logo, Farben, Typografie und Gestaltungsrichtlinien schafft Klarheit und Wiedererkennung. Wir entwickeln ein Design, das konsistent wirkt und flexibel einsetzbar ist – von Logo bis zu Präsentationsvorlagen. Damit du es langfristig anwenden kannst, erhältst du ein Designmanual, in dem alle Elemente erklärt und die wichtigsten Regeln für den Einsatz festgehalten sind.",
            },
            {
              image: service_event,
              title: "Eventfotografie",
              text: "Ob PR-Event, Produktlaunch, Networking, Keynote oder Teamoffsite – wir fangen die besonderen Momente ein, die in Erinnerung bleiben. Dabei bewegen wir uns dezent im Hintergrund und sind doch im richtigen Augenblick präsent, um Stimmung, Emotionen und Details festzuhalten. So entsteht eine umfangreiche Bilddokumentation deines Events.",
            },
            {
              image: service_produkt,
              title: "Produktfotografie",
              text: "Deine Produkte verdienen Bilder, die überzeugen. Wir setzen sie so in Szene, dass Qualität, Funktion und Design sichtbar werden. Durch unsere Erfahrung in der Produktfotografie könnt ihr euch darauf verlassen, dass eure Produkte optimal inszeniert werden – für Shops, Kataloge und Kampagnen gleichermaßen.",
            },
            {
              image: service_socialmedia,
              title: "Content Produktion",
              text: "Wir produzieren die passenden Foto- und Videoinhalte. Ob Posts, Reels oder Stories: Mit einem klaren Plan entstehen Inhalte, die sichtbar machen, wofür du stehst und die inhaltlich wie visuell überzeugen. So wächst deine Reichweite, deine Kommunikation bleibt konsistent und du sparst Zeit in der Umsetzung mit einem passenden Bilderpool.",
            },
            {
              image: service_erklaervideo,
              title: "Erklärvideo",
              text: "Ein Erklärvideo bringt komplexe Inhalte auf den Punkt – anschaulich, verständlich und einprägsam. Mit animierten Illustrationen werden Abläufe, Produkte oder Dienstleistungen so erklärt, dass sie leicht zu erfassen sind. Gemeinsam mit erfahrenen Partner*innen aus unserem Netzwerk entwickeln wir Storyboard, Look und Animation, damit dein Thema klar und wirkungsvoll vermittelt wird.",
            },
            {
              image: service_konzept,
              title: "Konzeption & Workshop",
              mobileTitle: "Workshop",
              text: "Ob Corporate Identity, Branding oder Bildsprache – wir unterstützen dich dabei, deine visuelle Kommunikation zu ordnen und klarer zu gestalten. In Workshops teilen wir unser Wissen, beraten dich zu Strategie, Gestaltung und entwickeln gemeinsam Ideen.",
            },
          ]}
        />
      </section>

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <VideoTextBox
        topline="Imagefilm"
        headline={
          <>
            Bewegte Bilder
            <br />
            die verbinden
          </>
        }
        text1="Ein Imagefilm macht dein Unternehmen erlebbar. Er zeigt nicht nur Fakten, sondern vermittelt Atmosphäre und Persönlichkeit. So bekommen Kund*innen einen echten Eindruck davon, wie du arbeitest und was dein Unternehmen besonders macht. Durch bewegte Bilder entsteht Nähe – und aus Zuschauer*innen werden Interessierte, die sich mit deiner Marke verbinden."
        videoSrc="/videos/Imagefilm-ossara.mov"
        posterSrc="/videos/imagefilm-poster.png"
        flexflow="row"
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageTextBox
        topline="Bildsprache entwickeln"
        headline={<>Deine visuelle Identität</>}
        text1="Eine starke Marke lebt von einer klaren Bildsprache. Gemeinsam mit dir entwickeln wir Motive, Farben und Details, die genau zu deiner Vision und Zielgruppe passen. So entsteht ein visueller Auftritt, der stimmig ist und Wiedererkennung schafft – egal, ob auf Website, Social Media oder in Printmaterialien. Bei einem Brandshooting erhältst du einen vielseitigen Bilderpool, mit dem du flexibel und konsistent kommunizieren kannst."
        text2=""
        link="Mehr zum Bilderpool"
        url="/#pool"
        image={section06_TextBox01}
        alt="Description of image"
        flexflow="row-reverse"
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <Video src="/videos/07_Video/Selections_Website_OSSARA_Workflow_V2_1.mp4" />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <section id="workflow">
        <ScrollBox
          showIcon={true}
          headline1="Unser Workflow"
          headline2={
            <>
              Du bringst die Vision, wir kümmern uns um den Weg. <br />
              Mit einem strukturierten Ablauf halten wir dir den Rücken frei.
            </>
          }
          boxData={[
            {
              title: "01 Erstgespräch & Analyse",
              text: "Im ersten Gespräch lernen wir dich und deine Ziele kennen. Wir hören zu, stellen die richtigen Fragen und analysieren deine Ausgangslage. Darauf aufbauend entwickeln wir ein Konzept, das deine Kommunikation stärkt und dich in deiner Sichtbarkeit weiterbringt. So entsteht eine Grundlage, auf der sich Inhalte und eine Strategie sinnvoll aufbauen lassen.",
            },
            {
              title: "02 Konzeption & Workshop",
              text: "Auf Basis des Erstgesprächs entwickeln wir ein Konzept, das zu deinen Zielen und deinem Budget passt. Zusätzlich bieten wir Workshops an, um gemeinsam die besten Lösungen zu erarbeiten. Du bleibst dabei immer eingebunden und siehst alle Zwischenstände. So stellen wir sicher, dass das Ergebnis nicht nur gut aussieht, sondern dir im Geschäftsalltag wirklich weiterhilft.",
            },
            {
              title: "03 Organisation",
              text: "Wir kümmern uns um alle Details – von der Projektplanung über die Location bis zur Buchung von Styling und Hair & Make-up. Auf Wunsch organisieren wir auch Snacks und Getränke am Shooting-Tag. Durch unser Netzwerk und strukturierte Zeitpläne läuft alles reibungslos ab. Wir übernehmen die Koordination mit allen Beteiligten, damit du dich entspannt zurücklehnen und voll auf das Wesentliche konzentrieren kannst.",
            },
            {
              title: "04 Umsetzung",
              text: "Als eingespieltes Team greifen Fotografie, Design und Web bei uns ineinander – ohne Reibungsverluste und doppelte Abstimmungen. Shootings und Drehs laufen nach einem klaren Plan, sodass Raum für Kreativität bleibt. Design- und Webprojekte setzen wir parallel und in enger Abstimmung mit der zuvor entwickelten Strategie um. So entsteht ein flüssiger Prozess, bei dem alle Elemente ineinandergreifen.",
            },
            {
              title: "05 Postproduktion",
              text: "Nach jedem Shooting erhältst du von uns eine sorgfältig getroffene Vorauswahl. Daraus wählst du deine Favoriten, die wir anschließend bearbeiten. Deine finale Auswahl bekommst du in einer Online-Galerie – übersichtlich sortiert und jederzeit erneut downloadbar, damit du flexibel darauf zugreifen kannst. Die Galerie steht dir für einen bestimmten Zeitraum zur Verfügung oder auf Wunsch auch dauerhaft als wachsender Bildpool.",
            },
            {
              title: "06 Langfristige Unterstützung",
              text: "Auch nach dem Projekt begleiten wir dich weiter. Ob kleine Anpassungen, neue Inhalte oder die Weiterentwicklung deiner Marke – wir stehen dir als verlässlicher Partner zur Seite. Weil wir deine Marke bereits kennen, können wir effizient reagieren und gezielt unterstützen – projektweise oder im Rahmen einer laufenden Betreuung.",
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
          text1="Unser Studio bietet den Raum, den kreative Ideen brauchen: Tageslichtstudio und wandelbare Sets. Mit einer Auswahl an Hintergründen und Requisiten lassen sich unterschiedlichste Konzepte umsetzen. Für eine entspannte Atmosphäre sorgen kostenfreie Parkplätze, Kaffee und Tee – alles, was ein gutes Shooting braucht."
          text2=""
          cards={[
            {
              image: section08_Studio05,
              title: "Freie Parkplätze",
              description: "Im Hamburger Osten befindet sich unser Studio mit kostenlosen Parkplätzen direkt vor dem Gebäude.",
            },
            {
              image: studioImage1,
              title: "Hair & Makeup Bereich",
              description: "Unser Stylingbereich ist mit großem Spiegel, Kleiderstange, Steamer und Ablagefläche ausgestattet – ideal zum Ankommen, Vorbereiten und Wohlfühlen.",
            },
            {
              image: section11_Image01,
              title: "Große Fotostudio-Fläche",
              description: "80 m² flexibel nutzbare Studiofläche mit Tageslicht und viel Raum für große und kleine Produktionen.",
            },
            {
              image: section08_Studio01,
              title: "Lounge & Arbeitsbereich",
              description: "Ein wandelbarer Bereich – ideal für Meetings, Pausen oder auch als Kulisse fürs nächste Set.",
            },
            {
              image: section08_Studio02,
              title: "Professionelle Lichttechnik",
              description: "Unser Studio ist mit hochwertiger Technik ausgestattet. Fast alles, was ein gutes Shooting braucht, ist vor Ort.",
            },
            {
              image: section08_Studio04,
              title: "Flexible Sets & Hintergründe",
              description: "Unterschiedliche Papierhintergründe, Stoffe und mobile Setups ermöglichen abwechslungsreiche Looks – vom cleanen Portrait bis zur szenischen Inszenierung.",
            },
            {
              image: studioImage13,
              title: "Vielfältige Requisiten",
              description: "Von Vorhängen über Möbel bis zu kleinen Details – im Studio haben wir viele Elemente, um dein Set individuell zu gestalten.",
            },
            {
              image: studioImage9,
              title: "Kaffee, Tee & kalte Getränke",
              description: "Für eine entspannte Arbeitsatmosphäre sorgen kleine Extras wie guter Kaffee aus der Siebträgermaschine und eine Auswahl an Getränken.",
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
              Wir arbeiten als kreatives Duo – mit Vertrauen, Empathie und echtem Interesse an den Menschen, mit denen wir zusammenarbeiten. Wir verstehen uns ohne viele Worte und ergänzen uns in unseren Kompetenzen: Fotografie, Film, Design und Webentwicklung greifen bei uns nahtlos ineinander. Daraus entstand Dakiekste – ein Ort, an dem wir Stärken
              vereinen und Prozesse ohne Brüche entstehen.
              <br />
              <br />
              2010 starteten wir gemeinsam in die Produkt- und Modefotografie Ausbildung. Aus der Zusammenarbeit entstand eine Freundschaft – und ein eingespieltes Team. Über die Jahre haben wir unsere Kompetenzen erweitert und sowohl als Selbstständige als auch in Unternehmen und Agenturen gearbeitet. Diese doppelte Erfahrung hilft uns, Marken nicht nur
              kreativ zu gestalten, sondern auch Prozesse und Herausforderungen zu verstehen.{" "}
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
                  <p>
                    Ich arbeite visuell und konzeptionell – mit einem Blick für Zusammenhänge, Inhalte und klare Gestaltung. Mein Schwerpunkt liegt in Fotografie und Video, verbunden mit Erfahrung in visueller Kommunikation und digitalen Interfaces. Als kreative Allrounderin entwickle ich Gestaltungslösungen, die den Kern einer Vision treffen. Ich höre zu,
                    sehe genau hin und finde visuelle Antworten, die Orientierung geben.
                  </p>
                </>
              ),
            },
            {
              name: "ÜBER STELLAN",
              image: section10_Team02,

              text: (
                <>
                  <p>
                    Fotografie, Video & Webentwicklung – bei mir greifen Kreativität und Struktur ineinander. Mein Blick fürs Ganze sorgt dafür, dass Projekte nicht nur ästhetisch überzeugen, sondern auch technisch und inhaltlich funktionieren. Ich lege Wert auf klare Prozesse und funktionierende Systeme, damit Ideen reibungslos Realität werden. Ich verbinde
                    visuelle Gestaltung mit technischer Umsetzung und denke jedes Projekt als Einheit.
                  </p>
                </>
              ),
            },
            {
              name: "Unsere Mission",
              image: section10_Team03,
              text: (
                <>
                  <p>
                    Wir arbeiten mit Menschen und Unternehmen, die gestalten und bewegen wollen. Sichtbarkeit verstehen wir dabei nicht nur als Mittel zum Zweck, sondern als Chance, präsent zu sein, Beziehungen zu stärken und neue Möglichkeiten zu eröffnen. Unsere Perspektiven entstehen aus Erfahrungen, die oft unsichtbar bleiben – und prägen, wie wir
                    zuhören, gestalten und begleiten. Darum fühlen wir uns besonders Vorhaben verbunden, die für Teilhabe, Miteinander und Fairness stehen.
                    <br />
                    <br />
                    Denn: Wer gesehen wird, gestaltet mit.
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
              title: "Business Portrait",
              category: "Fotografie",
              isCountable: false,
              unit: "",
              description: "Aufwendige Portraits für Einzelpersonen (z. B. CEO, Soloselbstständige). Die Shootingzeit beträgt 2 Stunden vor Ort oder im Studio inkl. Outfitwechsel und 5 bearbeitete Bilder. Hair & Make-up optional zubuchbar.",
              price: 650,
            },
            {
              title: "Mitarbeiter*innen Portraits",
              category: "Fotografie",
              isCountable: true,
              unit: "pro Person",
              description: "Einzelaufnahmen von Mitarbeiter*innen, CEOs und Teamfotos. Die Shootingzeit beträgt 15min pro Person vor Ort oder im Studio inkl. Outfitwechsel, eine gemeinsame Bildauswahl und ein bearbeitetes Foto pro Person. Hair & Make-up optional zubuchbar. Info: Es fällt zusätzlich eine Grundgebühr pro Shooting-Tag von 300,- an.",
              price: 130,
            },
            {
              title: "Branding Fotografie",
              category: "Fotografie",
              isCountable: false,
              unit: "",
              description: "Ein Bilderpool aus Portraits, Details und Arbeitssituationen, der dich und dein Team, deine Arbeit und Umfeld zeigt – abgestimmt auf deine Marke. Inklusive Konzept, Planung, Shooting und Bildretusche. Du bekommst eine große Bildauswahl, aus der du 30 finale Bilder auswählen kannst.",
              price: 2100,
            },
            {
              title: "Produktfotografie",
              category: "Fotografie",
              isCountable: true,
              unit: "pro Produkt",
              description: "Je nach Bedarf fotografieren wir Freisteller oder inszenierte Aufnahmen. Die Fotos entstehen vor Ort oder im Studio. Du erhälst eine Bildauswahl, aus der du deine finale Bilder auswählen kannst. Ein professionelles Styling ist optional zubuchbar. Der Preis gilt ab 10 Produkten.",
              price: 45,
            },
            {
              title: "Eventfotografie",
              category: "Fotografie",
              isCountable: false,
              unit: "pro Tag",
              description:
                "Umfasst die fotografische Dokumentation von Veranstaltungen wie PR-Events, Produktlaunches, Networking-Formaten, Vorträgen, Speaker-Events oder Teamveranstaltungen. Die von uns getroffene Bildauswahl wird in einem einheitlichen Look bearbeitet und werden in einer Onlinegalerie bereitgestellt. Optional kann zusätzlich ein Video-Paket gebucht werden sowie weitere Fotografi*innen, um das Event aus mehreren Perspektiven und noch mehr Momente festzuhalten.",
              price: 1800,
            },
            {
              title: "Bildretusche",
              category: "Fotografie",
              isCountable: true,
              unit: "pro Bild",
              description: "Dies ist eine Zusatzoption für aufwändigere Retuschen oder besondere Bildanpassungen. Grundlegende Bildretuschen sind bei allen Leistungen immer enthalten",
              price: 40,
            },
            {
              title: "Video-Content für Social Media",
              category: "Video",
              isCountable: true,
              unit: "pro Clip",
              description: "Wir erstellen kurze, markenkonforme Videos, die für Instagram und Co. optimiert sind. Dreh, Schnitt und Formatanpassung sind inklusive. Fertige Clips liefern wir direkt einsatzbereit. Preis gilt ab 4 Clips.",
              price: 350,
            },
            {
              title: "Event-Videodokumentation",
              category: "Video",
              isCountable: false,
              unit: "",
              description: "Du erhältst einen fertig geschnittenen Eventfilm (ca. 1–3 Minuten) sowie auf Wunsch kurze Clips oder Snippets für Social Media. Interviews, O-Töne, ergänzende Formate sowie weitere Videograf*innen für mehr Perspetkiven und Videomaterial, können optional gebucht werden.",
              price: 2000,
            },
            {
              title: "Imagefilm",
              category: "Video",
              isCountable: false,
              unit: "",
              description: "Dabei kümmern wir uns um Dreh, Schnitt sowie Bild- und Tonbearbeitung. Dein Branding, passende Musik und Grafiken werden integriert. Das finale Video erhältst du in allen relevanten Formaten für Website, Präsentationen und Social Media. Auf Wunsch ergänzen wir kurze Snippets für deine Social-Media-Kanäle.",
              price: 3500,
            },
            {
              title: "Web Design (UI/UX)",
              category: "Website",
              isCountable: true,
              unit: "pro Stunde",
              description: "Webdesign, das funktioniert. Wir gestalten deine Website mit Fokus auf Struktur, Nutzerführung und einem stimmigen Gesamtbild - die Basis für die Webentwicklung. Ein Webdesign-Projekt beginnt bei 5 Stunden.",
              price: 130,
            },
            {
              title: "Web Entwicklung",
              category: "Website",
              isCountable: true,
              unit: "pro Stunde",
              description: "Wir setzen deine Website technisch um – zuverlässig, flexibel und passend zu deinen Anforderungen. Ob mit CMS oder als individuelle Lösung: von der einfachen Landingpage bis zum komplexen Webprojekt ist alles möglich. Eine Website Entwicklung beginnt bei 8 Stunden.",
              price: 130,
            },
            {
              title: "Website Paket Starter (Entwicklung)",
              category: "Website",
              isCountable: false,
              unit: "",
              description:
                "Onepager oder bis zu 3 Seiten mit WordPress – umgesetzt auf Basis eines Templates, das wir an dein Logo und deine Farben anpassen. Die Seite ist responsiv und enthält ein Kontaktformular sowie die Einbindung von Impressum & Datenschutz. Inhalte wie Texte bringst du mit, und wir kümmern uns darum, dass alles sauber eingebunden wird. Der Vorteil: Kein Baukasten, sondern eine flexible Lösung mit WordPress, die jederzeit erweitert und weiterentwickelt werden kann.",
              price: 1300,
            },
            {
              title: "Website Paket Plus (Design + Entwicklung)",
              category: "Website",
              isCountable: false,
              unit: "",
              description:
                "Eine Website, die über das Standard-Template hinausgeht: Wir entwickeln ein individuelles UX/UI-Design, das perfekt auf deine Marke zugeschnitten ist, und setzen es technisch in WordPress um. Ideal für 4–6 Seiten, z. B. Startseite, Leistungen, Über uns und Kontakt. Enthalten sind responsives Design, ein durchdachtes Seitenkonzept, Impressum & Datenschutz, ein Kontaktformular sowie eine SEO-freundliche Grundstruktur. Damit erhältst du einen maßgeschneiderten Webauftritt, der deine Marke einzigartig präsentiert.",
              price: 3500,
            },
            {
              title: "Website Service Technik",
              category: "Website",
              isCountable: true,
              unit: "pro Monat",
              description: "Hosting, Sicherheitsupdates, Backups und technische Betreuung deiner Website. Ideal, wenn du dich nicht selbst um die Technik kümmern möchtest.",
              price: 49,
            },
            {
              title: "Website Service Content",
              category: "Website",
              isCountable: true,
              unit: "pro Monat",
              description: "Technische Betreuung plus ein monatliches Kontingent von 3 Arbeitsstunden für Inhaltsanpassungen oder kleinere Erweiterungen.",
              price: 149,
            },
            {
              title: "Website Service All-in",
              category: "Website",
              isCountable: true,
              unit: "pro Monat",
              description: "Komplettpaket aus Technik, Content-Pflege und Erweiterungen. Enthält 6 Arbeitsstunden pro Monat und priorisierten Support.",
              price: 299,
            },
            {
              title: "CI Branding Design",
              category: "Design",
              isCountable: false,
              unit: "",
              description: "Logo, Typografie und Farben – wir entwickeln ein Corporate Design, das die zentralen Gestaltungselemente deiner Marke definiert und ein einheitliches Erscheinungsbild schafft. Alle Regeln und Anwendungen halten wir in einem Designmanual fest, das dir als klare Grundlage für alle weiteren Kommunikationsmittel dient.",
              price: 3000,
            },
            {
              title: "Logo Design",
              category: "Design",
              isCountable: false,
              unit: "",
              description: "Von den ersten Entwürfen bis zur finalen Version entwickeln wir ein Logo, das sich in allen Medien einsetzen lässt. In engem Austausch erstellen wir ein Konzept und ein kleines Manual für die korrekte Anwendung.",
              price: 1500,
            },
            {
              title: "Redesign",
              category: "Design",
              isCountable: false,
              unit: "",
              description: "Beim Redesign modernisieren wir dein Logo, Farbwelt und Typografie und bringen das Erscheinungsbild deiner Marke auf den neuesten Stand. Das Ergebnis: ein moder, klares und zeitgemäßes Design mit Wiedererkennungswert das neue Impulse setzt.",
              price: 3500,
            },
            {
              title: "Rebranding",
              category: "Design",
              isCountable: false,
              unit: "",
              description:
                "Deine Marke braucht ein umfassendes Update? Beim Rebranding entwickeln wir eine Marke in der Tiefe weiter – visuell und inhaltlich. Wir analysieren Logo, Farben, Typografie und Bildsprache, prüfen die strategische Ausrichtung und definieren zentrale Elemente neu. So entsteht ein konsistentes Designsystem, das zur aktuellen Positionierung passt und langfristig trägt.",
              price: 7500,
            },
            {
              title: "Strategie & Workshop",
              category: "Design",
              isCountable: false,
              unit: "",
              description:
                "In ca. 2 - 3 Stunden legen wir das Fundament für deine Marke. Gemeinsam analysieren wir Positionierung, Werte und Zielgruppen, prüfen die aktuelle Ausrichtung und entwickeln erste Ansätze für Bildsprache, Kommunikation und Design. Am Ende erhältst du eine strukturierte Zusammenfassung mit klaren Empfehlungen, die dir Orientierung geben und als Grundlage für Fotografie, Video und Webprojekte dienen. Ein Basis-Workshop ist in vielen Leistungen enthalten – wer tiefer einsteigen will oder bei einer Gründung den ersten Grundstein legen möchte, kann diesen umfassenden Workshop separat buchen.",
              price: 950,
            },
            {
              title: "Branding Paket Starter",
              category: "Pakete",
              isCountable: false,
              unit: "",
              description:
                "Das Komplettpaket für alle, die ganz am Anfang stehen und ein solides Fundament für ihre Marke schaffen wollen. Enthalten sind ein Logo-Design inkl. Farb- und Typokonzept sowie ein Personal Branding Fotoshooting von 2 Stunden, das vor Ort oder im Studio stattfinden kann. Du erhältst 5 bearbeitete Bilder. In enger Abstimmung entwickeln wir vorab ein Konzept. So erhältst du die wichtigsten Basics für einen stimmigen ersten Auftritt. Hair & Make-up sowie Styling ist optional zubuchbar.",
              price: 2800,
            },
            {
              title: "Branding Paket Komplett",
              category: "Pakete",
              isCountable: false,
              unit: "",
              description:
                "Das Rundum-Paket für alle, die ihre Marke von Beginn an professionell aufstellen wollen. Enthalten sind ein umfassendes Corporate Design mit Logo, Farbwelt, Typografie und Designmanual, eine moderne Website (individuelles Design und technische Umsetzung in WordPress) sowie ein Personal Branding Shooting mit ca. 30 bearbeiteten Bildern. Von der visuellen Identität über den digitalen Auftritt bis zu hochwertigen Fotos deckt dieses Paket alle zentralen Elemente ab, die du für einen stimmigen Markenauftritt brauchst. Alles greift ineinander – so entsteht vom ersten Konzept bis zur Online-Präsenz ein Gesamtbild, das deine Marke sichtbar macht und langfristig trägt.",
              price: 7500,
            },
            {
              title: "Content Paket",
              category: "Pakete",
              isCountable: false,
              unit: "pro Tag",
              description: "Ein Content-Paket mit 15 bearbeiteten Fotos und 5 kurzen Clips – für Social Media. Die Inhalte sind direkt einsatzbereit für deine Kanäle, Website oder Kampagnen. Inklusive Konzept, Planung, Shooting und Postproduktion.",
              price: 1500,
            },
            {
              title: "Social Media Content Abo Paket",
              category: "Pakete",
              isCountable: true,
              unit: "pro Monat",
              description: "Regelmäßiger Content für deine Kanäle: Wir kommen einmal im Monat zu euch ins Unternehmen und produzieren Fotos und kurze Videos (Reels & Snippets). So entsteht ein stetig wachsender Pool an Inhalten, die ihr direkt auf Instagram, LinkedIn & Co. einsetzen könnt. Das Abo-Modell sorgt dafür, dass ihr immer frisches Material habt.",
              price: 1200,
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
          text1="Wir fotografieren Portraits, Details, Situationen und echte Momente – und bündeln sie zu deinem persönlichen Bilderpool, der kein loses Stückwerk ist. Statt einzelner Aufnahmen erhältst du eine vielseitige Sammlung, die deine Bildsprache trägt und über alle Kanäle hinweg funktioniert. Ob Social Media, Website, Präsentationen oder Jobportale – du hast immer passendes Material zur Hand. Dein Bilderpool wächst mit deinem Unternehmen – so stehen dir jederzeit hochwertige Inhalte zur Verfügung, die du flexibel einsetzen kannst."
          text2=""
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
              answer: "Wir starten immer mit einem unverbindlichen Kennenlerngespräch telefonisch, per Video-Call oder auf Wunsch auch persönlich. Danach folgt ein Angebot und ein Konzept, das wir gemeinsam mit dir entwickeln. In der Umsetzung arbeiten wir eng mit dir zusammen – mit regelmäßigem Feedback, klaren Absprachen und einem flexiblen Ablauf.",
            },
            {
              caption: "Allgemein",
              question: "Mit welchen Kosten muss ich rechnen?",
              answer: "Unser Preiskalkulator bietet dir eine erste Orientierung. Die genauen Kosten hängen vom Umfang und deinen individuellen Anforderungen ab. Wir erstellen dir ein transparentes Angebot, das zu deinem Budget passt.",
            },
            {
              caption: "Allgemein",
              question: "Bietet ihr Ratenzahlung an?",
              answer: "Klar, Ratenzahlung ist möglich. Gerade in der Gründungsphase oder Soloselbstständigkeit wollen wir dich unterstützen – sprich uns einfach an, und wir stimmen die Zahlungsweise gemeinsam ab.",
            },
            {
              caption: "Allgemein",
              question: "Wie weit im Voraus sollte ich ein Projekt anfragen?",
              answer: "Je früher, desto besser. Gerade bei komplexeren Projekten oder Studio-Produktionen planen wir gerne ein paar Wochen im Voraus. Spontane Anfragen sind aber auch möglich, wenn es der Kalender zulässt.",
            },
            {
              caption: "Allgemein",
              question: "Wie lange dauert ein Projekt bei euch?",
              answer: "Das ist ganz unterschiedlich. Kürzere Shootings oder Website-Anpassungen gehen oft schnell. Bei größeren Branding-Prozessen oder Kampagnen kann es mehrere Wochen dauern. Sobald wir alle Projektbausteine und Anforderungen kennen, geben wir dir eine realistische Einschätzung zur Dauer.",
            },
            {
              caption: "Allgemein",
              question: "Was müsst ihr über uns wissen, bevor es losgeht?",
              answer: "Alles, was deine Marke, Produkt oder Vision ausmacht. Wir stellen dir gezielte Fragen, um dich kennenzulernen und daraus ein starkes Konzept zu entwickeln.",
            },
            {
              caption: "Allgemein",
              question: "Was kann ich zur Vorbereitung beitragen?",
              answer: "Je besser wir deine Inhalte und Ziele kennen, desto gezielter können wir arbeiten. Moodboards, vorhandenes Material oder ein kurzer Fragebogen helfen uns, ein Gefühl für deine Marke zu bekommen.",
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
              question: "Welche zusätzlichen Kosten können anfallen?",
              answer: "Zusätzliche Kosten entstehen nur, wenn vorher nicht absehbare Aufwände dazukommen – z. B. externe Lizenzen, Location, Genehmigungen, Reisekosten oder Zusatzleistungen. Das sprechen wir vorher transparent mit dir ab.",
            },
            {
              caption: "Allgemein",
              question: "Könnt ihr Inhalte so aufbereiten, dass sie auf verschiedenen Kanälen funktionieren?",
              answer: "Ja. Schon bei der Planung denken wir mit, wo und wie du die Inhalte einsetzen willst – z. B. auf Instagram, LinkedIn oder deiner Website. Formate, Größen und Bildausschnitte passen wir so an, dass sie überall gut aussehen und wirken.",
            },
            {
              caption: "Allgemein",
              question: "Welche Informationen oder Materialien benötigt ihr, um starten zu können?",
              answer: "Das kommt auf die Leistung an – meist brauchen wir Infos zu deiner Zielgruppe, deinen Zielen, vorhandenes Material (z. B. Logo, Farben, Texte) und einen Einblick in deine bisherigen Kanäle oder Maßnahmen.",
            },

            {
              caption: "Fotografie",
              question: "Wie kann ich mich auf ein Shooting vorbereiten?",
              answer: "Du bekommst vorab alle Infos – von Outfit-Tipps bis zur Location. Auf Wunsch bieten wir zusätzlich Styling- oder Hair & Make-up Services über unser Netzwerk an.",
            },
            {
              caption: "Fotografie",
              question: "Wie lange im Voraus sollte ich einen Termin für ein Shooting buchen?",
              answer: "Je früher, desto besser – besonders bei größeren Produktionen. Für kleinere Portrait-Shootings reicht oft ein Vorlauf von zwei bis drei Wochen.",
            },
            {
              caption: "Fotografie",
              question: "Was passiert, wenn ich vor dem Shooting krank werde?",
              answer: "Wenn du krank wirst, sag uns bitte so früh wie möglich Bescheid. In solchen Fällen finden wir in der Regel einen Ersatztermin. Bitte hab Verständnis, dass wir bei sehr kurzfristigen Absagen nicht immer spontan reagieren können – besonders bei gebuchten Locations oder externen Dienstleister*innen.",
            },
            {
              caption: "Fotografie",
              question: "Wo findet das Business Shooting statt?",
              answer: "In unserem Studio in Hamburg, bei euch vor Ort oder an einer passenden Location – wir richten uns nach deinen Bedürfnissen. Auch Shootings außerhalb Deutschlands sind nach Absprache möglich.",
            },
            {
              caption: "Fotografie",
              question: "Benötige ich eine Stylist*in oder Hair & Make-up Artist?",
              answer: "Das ist ganz dir überlassen – aber manchmal machen kleine Details einen großen Unterschied. Wenn du dich rundum wohlfühlen willst oder einen bestimmten Look umsetzen möchtest, vermitteln wir dir gern erfahrene Artists aus unserem Netzwerk.",
            },
            {
              caption: "Fotografie",
              question: "Wie läuft ein Shooting ab?",
              answer: "Vor dem Shooting bekommst du alle wichtigen Infos – inklusive Zeitplan, Tipps zur Vorbereitung und Styling- oder Outfit-Hinweisen. Während des Shootings sorgen wir für eine entspannte Atmosphäre und leiten dich klar an.",
            },
            {
              caption: "Fotografie",
              question: "Wie viele Bilder bekomme ich und in welchem Format?",
              answer: "Das hängt vom Projekt ab. In der Regel bekommst du eine sorgfältig getroffene Auswahl zur Sichtung und wählst deine Favoriten. Die finalen Bilder bekommst du bearbeitet und in Web- sowie Print-Qualität über eine Online-Galerie oder Cloud.",
            },
            {
              caption: "Fotografie",
              question: "Wie lange dauert die Nachbearbeitung?",
              answer: "Nach dem Shooting stellen wir dir innerhalb von 5–7 Werktagen eine erste Vorauswahl zur Verfügung. Sobald du deine Favoriten ausgewählt hast, bearbeiten wir sie final – in der Regel bekommst du deine fertigen Bilder innerhalb von weiteren 5–10 Werktagen. Je nach Projektumfang kann das leicht variieren.",
            },

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

            {
              caption: "Website",
              question: "Was passiert, wenn ich nur eine Landingpage brauche?",
              answer: "Kein Problem – auch kleinere Webprojekte setzen wir um. Wir beraten dich, wie du das Beste aus deiner Seite herausholst.",
            },
            {
              caption: "Website",
              question: "Wie schnell kann eine Website erstellt werden?",
              answer: "Abhängig vom Umfang und deinen Inhalten. Eine kleine Seite kann in wenigen Wochen fertig sein – bei größeren Projekten planen wir 8–10 Wochen ein.",
            },
            {
              caption: "Website",
              question: "Was ist der Unterschied zwischen Webentwicklung und Webdesign?",
              answer: "Bei der Entwicklung setzen wir die Website technisch um. Das Webdesign hingegen sorgt dafür, dass deine Seite visuell und inhaltlich zu deiner Marke passt – einzigartig, durchdacht und mit klarer Nutzerführung. Beides zusammen macht deine Website stark.",
            },
            {
              caption: "Website",
              question: "Kann ich nur die technische Entwicklung der Website buchen?",
              answer: "Ja – wir können deine Website auch mit einem bestehenden Template umsetzen und anpassen. Bitte beachte aber: Wirklich zu deiner Marke passend wird deine Seite durch ein individuelles Webdesign. Das macht den Unterschied zwischen »funktioniert« und »fühlt sich wie deine Marke an«.",
            },
            {
              caption: "Website",
              question: "Welche Informationen oder Materialien benötigt ihr, um mit einer Website starten zu können?",
              answer: "Damit wir starten können, brauchen wir von dir ein paar Grundlagen: Infos zu deinem Unternehmen, deiner Zielgruppe und deinem Angebot – sowie Materialien wie Texte, Bilder oder dein Logo, falls vorhanden. Wenn dir noch etwas fehlt, entwickeln wir die Bausteine gemeinsam.",
            },
            {
              caption: "Website",
              question: "Bietet ihr Schulungen oder Tutorials an?",
              answer: "Kein Problem – wir zeigen dir, wie’s geht. Ob Website, Bildgrößen oder kleinere Updates: Du musst nicht alles auslagern, wenn du’s auch selbst kannst. Wir unterstützen dich dabei.",
            },

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
              answer: "Kein Problem! Wir bauen auf dem Bestehenden auf – und entwickeln z. B. ein stimmiges Gesamtkonzept oder ergänzen dein vorhandenes Designsystem.",
            },
            {
              caption: "Design",
              question: "Wie läuft ein Design-Prozess bei euch ab?",
              answer: "Wir starten mit einem Konzept und entwickeln daraus erste Ansätze. In mehreren Feedbackrunden schärfen wir Schritt für Schritt dein Design – bis alles für dich stimmig ist. Am Ende erstellen wir dir einen Guide – damit du und dein Team euer Design sicher anwenden könnt.",
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
        topline="Unsere Werte"
        headline="Vertrauen entsteht im Miteinander"
        text1="Wir gestalten Räume vor und hinter der Kamera, in denen Menschen sich zeigen können – ohne Klischees, ohne Schablonen, ohne Druck. Mit Respekt, Offenheit und dem Anspruch, einen echten Saferspace zu schaffen. In der Zusammenarbeit setzen wir auf echte Begegnung: Ehrlich, aufmerksam und auf Augenhöhe. So entstehen Bildwelten, die verbinden."
        text2=""
        image={section12_TextBox01}
        alt="Description of image"
        flexflow="row"
        flexflowMobile="column-reverse"
      />

      {/* --------TRENNUNG--------------------------------------------------------------------------- */}

      <ImageTextBox
        topline="Engagement"
        headline="Zusammen die Zukunft gestalten"
        text1="Einmal im Jahr unterstützen wir ein gemeinnütziges Projekt mit einer Fotokampagne. So rücken wir Themen und Menschen ins Licht, die sonst oft übersehen werden – und leisten einen kleinen Beitrag zu mehr Teilhabe. Du kennst ein passendes Projekt? Dann meld dich gerne bei uns – wir freuen uns auf eure Ideen."
        image={section13_TextBox01}
        alt="Description of image"
        flexflow="row-reverse"
        flexflowMobile="column-reverse"
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
