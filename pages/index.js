import Head from "next/head";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import ScrollBox from "@/components/ScrollBox";
import ImageSliderLight from "@/components/ImageSliderLight";
import DoubleTextBox from "@/components/DoubleTextBox";
import ImageTextBox from "@/components/ImageTextBox";
import TextSlider from "@/components/TextSlider";
import StudioBox from "@/components/StudioBox";
import TeamText from "@/components/TeamText";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import ImageElement from "@/components/ImageElement";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import { PiArrowRightLight } from "react-icons/pi";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

import studioImage1 from "/public/images/KLUBSTUDIO_3.jpg";
import studioImage4 from "/public/images/KLUBSTUDIO_6.jpg";
import studioImage5 from "/public/images/KLUBSTUDIO_7.jpg";
import studioImage6 from "/public/images/KLUBSTUDIO_8.jpg";
import studioImage7 from "/public/images/KLUBSTUDIO_9.jpg";
import studioImage9 from "/public/images/KLUBSTUDIO_13.jpg";
import studioImage13 from "/public/images/KLUBSTUDIO_10.jpg";

//02_Slider
import section02_slider01 from "/public/images/02_Slider/branding-fotografie-bildung-integration-verein-dakiekste-01.jpg";
import section02_slider02 from "/public/images/02_Slider/branding-fotografie-bildung-integration-verein-dakiekste-02.jpg";
import section02_slider03 from "/public/images/02_Slider/branding-fotografie-bildung-integration-verein-dakiekste-03.jpg";
import section02_slider04 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-02.jpg";
import section02_slider05 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-03.jpg";
import section02_slider06 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-04.jpg";
import section02_slider07 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-05.jpg";
import section02_slider08 from "/public/images/02_Slider/team-portrait-foto-erneuerbare-energie-dakiekste-01.jpg";

//03_Workflow
import section03_workflow01 from "/public/images/03_Workflow/behind-the-scenes-dakiekste-01.jpg";
import section03_workflow02 from "/public/images/03_Workflow/behind-the-scenes-dakiekste-02.jpg";
import section03_workflow03 from "/public/images/03_Workflow/behind-the-scenes-dakiekste-03.jpg";
import section03_workflow04 from "/public/images/03_Workflow/behind-the-scenes-dakiekste-04.jpg";
import section03_workflow05 from "/public/images/03_Workflow/branding-fotografie-erneuerbare-energie-dakiekste-06.jpg";
import section03_workflow06 from "/public/images/03_Workflow/branding-fotografie-finanzexperten-dakiekste-01.jpg";
import section03_workflow07 from "/public/images/03_Workflow/eventfotografie-reeperbahnfestival-dakiekste-01.jpg";
import section03_workflow08 from "/public/images/03_Workflow/social-media-content-dakiekste-01.jpg";
import section03_workflow09 from "/public/images/03_Workflow/team-portrait-foto-erneuerbare-energie-dakiekste-02.jpg";
import section03_workflow10 from "/public/images/03_Workflow/branding-fotografie-workshop-konzeption-dakiekste-01.jpg";

//04_Slider
import section04_slider01 from "/public/images/04_Slider/business-portrait-fotografie-dakiekste-01.jpg";
import section04_slider02 from "/public/images/04_Slider/business-portrait-fotografie-finanzexperten-dakiekste-01.jpg";
import section04_slider03 from "/public/images/04_Slider/business-portrait-fotografie-finanzexperten-dakiekste-02.jpg";
import section04_slider04 from "/public/images/04_Slider/team-portrait-fotografie-bildung-integration-verein-dakiekste-01.jpg";
import section04_slider05 from "/public/images/04_Slider/team-portrait-fotografie-bildung-integration-verein-dakiekste-02.jpg";

//05_TextBox
import section05_TextBox01 from "/public/images/05_TextBox/business-portrait-fotografie-dakiekste-02.jpg";
import section05_TextBox02 from "/public/images/05_TextBox/business-portrait-fotografie-dakiekste-03.jpg";

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

//13_TextBox
import section13_TextBox01 from "/public/images/13_Textbox/behind-the-scenes-dakiekste-05.jpg";

//12_TextBox
import section12_TextBox01 from "/public/images/12_Textbox/dakiekste-team-stellan-maischa-02.jpg";
import Video from "@/components/Video";

export default function HomePage() {
  return (
    <>
      <header>
        <NavBar />
        <Header useImageBackground={false} />
      </header>
      <Head>
        {" "}
        <title>Dakiekste | Brandingfotografie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Branding und Corporate Fotografie für dein Business" />
        <meta name="author" content="Dein Name" />
      </Head>
      <Hero
        headline="Fotografie. Branding. Content Creation."
        text={
          <>
            Weil deine Marke mehr als schöne Bilder braucht – bieten wir ein Gesamtkonzept aus Fotografie, Design, Web und Content Creation. Mit vielseitiger
            Expertise, Erfahrung und Empathie begleiten wir dich, damit deine Botschaft nachhaltig wirkt.
          </>
        }
      />
      <ImageSlider
        autoplay={false}
        projects={[
          {
            alt: "",
            image: section02_slider01,
          },

          {
            alt: "",
            image: section02_slider04,
          },
          {
            alt: "",
            image: section02_slider03,
          },
          {
            alt: "",
            image: section02_slider07,
          },
          {
            alt: "",
            image: section02_slider08,
          },
          {
            alt: "",
            image: section02_slider05,
          },
          {
            alt: "",
            image: section02_slider06,
          },
          {
            alt: "",
            image: section02_slider02,
          },
        ]}
      />
      <section id="services">
        <ScrollBox
          autoplay={false}
          headline1="Leistungen aus einer Hand"
          headline2={<>Strategisch durchdacht und visuell auf den Punkt. Kein Baukasten oder Stock-Foto, sondern Gesamtlösungen, die wirklich zu dir passen.</>}
          boxData={[
            {
              image: section03_workflow05,
              label: "Foto",
              title: "Branding Fotografie",
              mobileTitle: "Branding Fotos",
              text: "Bilder, die zeigen, wofür deine Marke steht. Deine Markenwerte übersetzen wir in eine visuelle Bildsprache die überzeugt. Deine Marke und Vision im Ganzen zu verstehen, ist uns dabei besonders wichtig.",
            },
            {
              image: section03_workflow09,
              label: "Foto",
              title: "Businessportraits",
              mobileTitle: "Business-Portraits",
              text: "Ob CEO, Mitarbeiter*innen oder das ganze Team – wir fotografieren dich authentisch und stärken dabei dein Employer Branding. Im ganzen Shootig-Prozess begleiten wir dich, damit du dich vor der Kamera rundum wohl fühlen kannst.",
            },
            {
              image: section03_workflow01,
              label: "Video",
              title: "Imagefilm & Video-Content",
              mobileTitle: "Video Content",
              text: "Bewegte Bilder erzählen mehr als Worte. Mit unterschiedlichen Formaten wie Imagefilmen, Dokumentationen oder Interviews gibst du deiner Zielgruppe tiefere Einblicke in deine Marke.",
            },
            {
              image: section03_workflow04,
              label: "Web",
              title: "Website Design (UI/UX)",
              mobileTitle: "Website Design",
              text: "Webdesign, das mitdenkt und Websites, die einfach funktionieren – visuell, strukturell und inhaltlich. Design, Nutzerführung und Inhalte greifen bei uns ineinander und werden zu einem stimmigen Gesamtbild, das User überzeugt.",
            },
            {
              image: section03_workflow03,
              label: "Web",
              title: "Website Entwicklung",
              mobileTitle: "Web Entwicklung",
              text: "Wir kümmern uns um die Umsetzung deiner Website – ohne Technikstress. Sie läuft, wächst und hält dir den Rücken frei. Ob CMS-System oder komplexere Anforderungen: Gemeinsam finden wir die passende Lösung für dich.",
            },
            {
              image: section03_workflow02,
              label: "Design",
              title: "Branding & Corporate Design",
              mobileTitle: "Corporate Design",
              text: "Mit einem Designsystem aus Logo, Farben und Typografie, entwickeln wir das visuelle Fundament deiner Marke. Klar, durchdacht und wiedererkennbar. So wirst du sichtbarer und bleibst im Kopf.",
            },
            {
              image: section03_workflow07,
              label: "Fotografie",
              title: "Eventfotografie",
              mobileTitle: "Event Fotos",
              text: "Egal ob PR-Event, Produktlaunch, Networking, Keynote oder Teamoffsite – wir halten Atmosphäre und Highlights in starken Bildern fest: dezent im Hintergrund, präsent im richtigen Moment.",
            },
            {
              image: section03_workflow06,
              label: "Foto",
              title: "Produktfotografie",
              mobileTitle: "Produktfotografie",
              text: "Dein Business hat Produkte? Ob Freisteller, Inszeniert oder am Model. Unsere Wurzeln liegen in der Produktfotografie – und das sieht man.",
            },
            {
              image: section03_workflow08,
              label: "Foto & Video",
              title: "Content Creation & Strategie",
              mobileTitle: "Content Creation",
              text: "Persönlicher Content statt Standard: Wir erstellen Foto- und Videoinhalte mit Qualität und einem hohen Anspruch an Ästhetik. Für Posts, Reels & Stories, die wirken.",
            },
            {
              image: section03_workflow10,
              label: "Strategie",
              title: "Konzeption & Workshop",
              mobileTitle: "Workshop",
              text: "Corporate Identity, Branding und Bildsprache – wir teilen Wissen, beraten und strukturieren deine visuelle Kommunikation für mehr Klarheit und Wirkung.",
            },
          ]}
        />
      </section>
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
      <DoubleTextBox
        topline1="Ein Look – viele Kanäle"
        headline1="Markenstrategie & Bildsprache"
        text1="Wir entwickeln einen visuellen Auftritt, der auf allen digitalen Kanälen funktioniert. Statt losem Stückwerk bekommst du eine durchdachte Bildsprache, die deine Marke einheitlich und wiedererkennbar macht.
Ob Website, LinkedIn, Instagram oder Jobportale – du erhältst von uns einen flexiblen Bild- und Videopool, der mit deiner Marke mitwächst: langfristig, konsistent und klar positioniert."
        topline2="Content, der wirkt"
        headline2="Starke Bilder. Klare Botschaften."
        text2="Wir erstellen Bilder und Videos, die genau da ankommen, wo sie sollen – bei deiner Zielgruppe. Du bekommst Inhalte, die auffallen, hängen bleiben und Vertrauen schaffen. In ehrlicher Zusammenarbeit entstehen nahbare Bildwelten, in denen du dich gesehen fühlt. Du musst dich nicht um jedes Detail kümmern – wir denken mit und liefern Content, den du direkt einsetzen kannst."
      />

      <ImageTextBox
        topline="Menschen im Mittelpunkt"
        headline="Businessportraits mit Haltung"
        text1="Wir zeigen dich und die Menschen hinter deinem Unternehmen. Mit Portraits und Einblicken in euren Arbeitsalltag machen wir sichtbar, was euch als Team ausmacht. Das schafft Nähe, spricht potenzielle Talente an und stärkt euer Employer Branding. Für alle, die mehr zeigen wollen als Leistung – nämlich Haltung, Miteinander und echtes Engagement."
        text2=""
        image={section05_TextBox01}
        alt="Description of image"
        flexflow="row"
      />
      <ImageTextBox
        topline="Starker Look. Klares Konzept."
        headline="Bildsprache die funktioniert"
        text1="Wir gestalten Bildwelten, die nicht nur gut aussehen – sondern deine Marke tragen. Jedes Motiv, jede Farbwahl, jedes Detail entsteht mit Blick auf deine Vision und deine Zielgruppe. Du musst nicht wissen, wie man Bildsprache entwickelt – du musst nur bereit sein, sie mitzugestalten. Wir denken mit, stellen die richtigen Fragen und führen dich durch den Prozess. Gemeinsam schaffen wir visuelle Lösungen, die funktionieren."
        text2=""
        image={section06_TextBox01}
        alt="Description of image"
        flexflow="row-reverse"
      />
      <Video src="/videos/07_Video/Selections_Website_OSSARA_Workflow_V2_1.mp4" />
      <section id="workflow">
        <ScrollBox
          showIcon={true}
          headline1="Workflow"
          headline2={<>Du bringst die Vision, wir kümmern uns um den Weg. Mit einem strukturierten Ablauf halten wir dir den Rücken frei.</>}
          boxData={[
            {
              label: "Schritt 1",
              title: "Erstgespräch & Analyse",
              mobileTitle: "Deine Vision verstehen",
              text: "Im ersten Gespräch lernen wir dich, deine Marke und deine Ziele kennen. Wir hören zu, stellen die richtigen Fragen und analysieren deine Ausgangslage. Darauf aufbauend entwickeln wir ein Konzept, das dein Branding stärkt und deine geschäftlichen Ziele voranbringt.",
            },
            {
              label: "Schritt 2",
              title: "Konzeption & Workshops",
              mobileTitle: "Strategie entwickeln",
              text: "Auf Basis des Erstgesprächs entwickeln wir ein Konzept, das zu deiner Marke, deinen Zielen und deinem Budget passt. Zusätzlich bieten wir Workshops an, um gemeinsam die besten Lösungen zu erarbeiten. Du bleibst dabei immer eingebunden und siehst alle Zwischenstände.",
            },
            {
              label: "Schritt 3",
              title: "Organisation",
              mobileTitle: "Das Fundament",
              text: "Wir kümmern uns um alle Details – von der Projektplanung über die Location bis hin zu Styling und Hair & Make-up. Dank unseres Netzwerks und durchdachter Zeitpläne läuft dein Shooting reibungslos und zuverlässig.",
            },
            {
              label: "Schritt 4",
              title: "Umsetzung",
              mobileTitle: "Content erschaffen",
              text: "Fotografie, Design, Web – bei uns greift alles ineinander. Wir arbeiten effizient und ohne doppelte Abstimmungen. Shootings und Drehs laufen strukturiert ab. Design entsteht in Abstimmung mit Strategie und Zielgruppe. Web-Projekte entwickeln wir funktional, durchdacht und einsatzbereit.",
            },
            {
              label: "Schritt 5",
              title: "Postproduktion",
              mobileTitle: "Dein content-pool",
              text: "Du wählst deine Favoriten aus unserer Vorauswahl. Danach bereiten wir alles sortiert und markengerecht auf. Du bekommst einen vielseitigen Bild- oder Medienpool auf den du über eine Online-Galerie oder Cloud zugreifen kannst, mit einer Anleitung zur flexiblen Verwendung.",
            },
            {
              label: "Schritt 6",
              title: "Langfristige Unterstützung",
              mobileTitle: "Gemeinsam wachsen",
              text: "Auch nach dem Projekt sind wir für dich da. Ob kleine Anpassungen oder neue Ideen – wir reagieren schnell und entwickeln mit dir weiter. Weil wir deine Marke kennen, können wir gezielt unterstützen und so nachhaltiges Wachstum ermöglichen.",
            },
          ]}
        />
      </section>
      <section id="studio">
        <StudioBox
          autoplay="false"
          topline="UNSER STUDIO"
          headline="Viel Raum für deine Ideen"
          text1="Unser Studio bietet den Raum, den kreative Ideen brauchen: lichtdurchflutetes Tageslichtstudio und wandelbare Sets. Mit einer Auswahl an Hintergründen und Requisiten lassen sich unterschiedlichste Konzepte umsetzen. Für eine entspannte Atmosphäre sorgen kostenfreie Parkplätze, Kaffee und Tee – alles, was ein gutes Shooting braucht."
          text2=""
          slides={[
            {
              image: section08_Studio05,
              title: "Freie Parkplätze",
              description: "Im Hamburger Osten befindet sich unser Studio mit vielen kostenlosen Parkplätzen direkt vor dem Gebäude.",
            },
            {
              image: studioImage1,
              title: "Hair & Makeup Bereich",
              description:
                "Unser Stylingbereich ist mit großem Spiegel, Kleiderstange, Steamer und Ablagefläche ausgestattet – ideal zum Ankommen, Vorbereiten und Wohlfühlen.",
            },
            {
              image: section11_Image01,
              title: "Große Fotostudio-Fläche",
              description: "80 m² flexibel nutzbare Studiofläche mit viel Tageslicht, mobilem Hintergrundsystem und Raum für große und kleine Produktionen.",
            },
            {
              image: section08_Studio01,
              title: "Lounge & Arbeitsbereich",
              description:
                "Ein wandelbarer Bereich mit großer Bühne, Vorhang, Tisch, Stühlen und Sofa – ideal für Meetings, Pausen oder auch als Kulisse fürs nächste Set.",
            },
            {
              image: section08_Studio02,
              title: "Professionelle Lichttechnik",
              description:
                "Ob Dauerlicht oder Blitz – unser Studio ist mit hochwertiger Technik ausgestattet. Alles, was du für eine starke Ausleuchtung und präzise Ergebnisse brauchst, ist vor Ort.",
            },
            {
              image: section08_Studio04,
              title: "Flexible Sets & Hintergründe",
              description:
                "Unterschiedliche Papierhintergründe, Stoffe und mobile Setups ermöglichen dir abwechslungsreiche Looks – vom cleanen Portrait bis zur szenischen Inszenierung.",
            },
            {
              image: studioImage13,
              title: "Vielfältige Requisiten",
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
      <ImageElement image={section09_Image01} alt="Bildbeschreibung" />
      <section id="team">
        <TeamText
          topline="Zwei Perspektiven. Eine Haltung."
          headline={
            <>
              Zwei Perspektiven.
              <br />
              Ein gemeinsamer Anspruch.
            </>
          }
          text={
            <>
              Seit über fünfzehn Jahren arbeiten wir als kreatives Duo – mit Vertrauen, Empathie und echtem Interesse an den Menschen, mit denen wir
              zusammenarbeiten. Für uns ist Zusammenarbeit gelebte Haltung. In unserem Studio nehmen Ideen Gestalt an. Ob Fotografie, Film, Design oder
              Webentwicklung – wir arbeiten disziplinübergreifend und nutzen dazu auch unser Netzwerk an anderen Kreativschaffenden in Hamburg. Gemeinsam mit
              unseren Auftraggeber*innen entwickeln wir Konzepte, die wirken – ehrlich, zugänglich und mit einem Blick fürs Ganze.
            </>
          }
        />{" "}
        <Team
          teamMembers={[
            {
              name: "STELLAN",
              image: section10_Team02,

              text: (
                <>
                  <p>
                    Fotografie , Video & Webentwicklung – mit einem Blick fürs Ganze. Mein Fokus liegt auf klaren Prozessen, funktionierenden Systemen und
                    Bildwelten, die funktionieren – technisch wie visuell. Ich verbinde Kreativität mit Struktur und sorge dafür, dass Inhalte sichtbar,
                    verständlich und wirksam werden. Ob Shooting, Imagefilm oder maßgeschneiderte Website: Ich denke Projekte als Einheit und begleite sie von
                    Anfang bis Ende.
                  </p>
                </>
              ),
            },
            {
              name: "MAÏSCHA",
              image: section10_Team01,
              text: (
                <>
                  <p>
                    Ich arbeite visuell und konzeptionell, denke in Bildern, Geschichten und Systemen. Ob Kamera oder Interface – mir geht es darum, Inhalte
                    klar zu vermitteln, stimmig zu gestalten und Wirkung zu erzeugen.
                  </p>
                  <p>
                    Meine Schwerpunkte liegen in der Fotografie und Videografie, ergänzt durch Erfahrung in Design, visueller Kommunikation und UI/UX. Ich
                    verstehe mich nicht als Spezialistin für eine Disziplin, sondern als kreative Allrounderin.
                  </p>
                  <p>
                    Ich entwickle Gestaltungslösungen, die funktionieren – für Menschen und Marken, die etwas zu erzählen haben. Dabei denke ich mich tief in
                    Themen hinein, höre zu, sehe genau hin und finde visuelle Antworten, die Haltung zeigen und Orientierung geben.
                  </p>
                </>
              ),
            },
            {
              name: "UNSERE PHILOSOPHIE",
              image: section10_Team03,
              text: (
                <>
                  <p>
                    Wir arbeiten mit Menschen und Unternehmen, die gestalten wollen – für sich, füreinander und für die Welt, die uns umgibt. Uns interessieren
                    Ideen mit Haltung und Visionen, die zu einer bewussteren Zukunft beitragen. Unsere Perspektiven entstehen aus Erfahrungen, die oft
                    unsichtbar bleiben – und prägen, wie wir zuhören, gestalten und begleiten. Deshalb fühlen wir uns besonders Projekten verbunden, die für
                    Teilhabe, Miteinander und Gerechtigkeit stehen. Denn: Wer gesehen wird, gestaltet mit.
                  </p>
                </>
              ),
            },
          ]}
        />
        <ImageElement image={section11_Image01} alt="Klub Studio Studiofläche" />
        <section id="contact">
          <ContactForm />
        </section>
      </section>
      <ImageTextBox
        topline="Haltung zeigen. Sichtbar werden."
        headline="Vertrauen entsteht im Miteinander"
        text1="Wir gestalten Räume vor und hinter der Kamera, in denen Menschen sich zeigen können – ohne Klischees, ohne Schablonen, ohne Druck. Mit Respekt, Offenheit und dem Anspruch, einen echten Safe Space zu schaffen. In der Zusammenarbeit setzen wir auf echte Begegnung: ehrlich, aufmerksam und auf Augenhöhe.
So entstehen Bildwelten, die verbinden – visuell stimmig, inhaltlich relevant und getragen von Haltung. Für Menschen und Unternehmen, die mehr zeigen wollen als nur Außenwirkung: Haltung, Miteinander und den Mut, sichtbar zu werden."
        text2=""
        image={section12_TextBox01}
        alt="Description of image"
        flexflow="row-reverse"
      />
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
              options: ["Fotografie", "Video", "Design", "Website"],
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
              description:
                "Dazu zählen Einzelaufnahmen von Mitarbeiter*innen und Führungskräften (z.B. CEO), Teamfotos in kleinen oder größeren Gruppen. Die Fotos entstehen vor Ort oder im Studio und beinhalten eine Bildauswahl sowie eine Basisretusche mit einheitlichem Look.",
              price: 120,
            },
            {
              title: "Personal Branding Fotografie",
              titlePlain: "Personal Branding Fotografie",
              category: "Fotografie",
              description:
                "Ein Fotopaket, das dich, dein Team, eure Arbeit und euer Umfeld zeigt – abgestimmt auf deine Marke. Du bekommst einen vielseitigen Bilderpool mit hochwertigen Fotos, die einen stimmigen Gesamteindruck vermitteln. Inklusive Konzept, Planung, Shooting, gemeinsame Bildauswahl und Basisretusche.",
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
              description:
                "Umfasst die fotografische Dokumentation von Veranstaltungen wie PR-Events, Produktlaunches, Networking Formaten, Vorträgen, Speaker-Events oder Teamveranstaltungen. Die Bilder erhalten einen einheitlichen Look und werden in einer Onlinegalerie bereitgestellt.",
              price: 850,
            },
            {
              title: "Content Creation",
              titlePlain: "Content Creation",
              category: "Fotografie",
              description:
                "Wir erstellen hochwertigen Foto- und Videocontent für Instagram & Co. – markengerecht, zielgruppennah und schnell einsetzbar. Du bekommst bearbeitete Inhalte mit einheitlichem Look, die direkt bereit sind für deine Social-Media-Kanäle, Website oder Kampagnen.",
              price: 500,
            },
            {
              title: "Konzeption",
              titlePlain: "Konzeption",
              category: "Fotografie",
              description:
                "Ein Grundkonzept ist in vielen Paketen enthalten. Wenn du tiefer einsteigen willst, kannst du unsere Konzeptionsleistung auch separat buchen. Je nach Bedarf umfasst sie Beratung zu deiner Markenidentität, die Entwicklung einer Bildsprache und die Struktur deiner visuellen Kommunikation.",
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
              description:
                "Technische Umsetzung deiner Website – zuverlässig, flexibel und passend zu deinen Anforderungen. Mit CMS oder als individuelle Lösung.",
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
          ]}
        />
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
                "Konzepte zu entwickeln gehört zu unserem Leistungsumfang. Wenn du bereits Ideen hast, nehmen wir sie natürlich gerne auf – und wenn das Konzept schon steht, unterstützen wir dich auch gerne ausschließlich bei der Umsetzung. Andernfalls erarbeiten wir gemeinsam eine passende Lösung.",
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
                "Für alle, die zeigen wollen, wofür sie stehen – ob Solo-Selbstständige, Unternehmen oder NGOs. Du willst sichtbar werden mit dem, was dich ausmacht? Reichweite gewinnen, Vertrauen aufbauen, Wirkung entfalten? Dann ist ein Brand-Shooting genau das Richtige. Und keine Sorge: Du musst nicht wissen, wie man sich inszeniert – wir helfen dir, dich echt zu zeigen.",
            },

            // VIDEO
            {
              caption: "Video",
              question: "Welche Art von Videos bietet ihr an?",
              answer:
                "Ob kurzer Social-Media-Clip, Imagefilm, Interview oder ein Recruiting-Trailer – wir entwickeln Formate, die zu deiner Botschaft und Zielgruppe passen. Gemeinsam finden wir die passende Form, damit dein Thema sichtbar wird – auf den richtigen Kanälen und mit dem richtigen Ton.",
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
                "Wir starten mit einem Briefing und entwickeln daraus erste Ansätze. In mehreren Feedbackrunden schärfen wir Schritt für Schritt dein Design – bis alles für dich stimmig ist. Am Ende erstellen wir dir einen Guide – damit du und dein Team euer Design sicher anwenden könnt.",
            },
            {
              caption: "Design",
              question: "Wie viel Mitgestaltung ist möglich?",
              answer:
                "So viel wie du willst – oder brauchst. Du bist in den Prozess eingebunden, gibst Feedback und hast jederzeit Einblick in den Zwischenstand.",
            },
          ]}
        />
      </section>
      <ImageTextBox
        topline="Gemeinsam für mehr"
        headline="Zusammen die Zukunft gestalten"
        text1="Einmal im Jahr unterstützen wir ein gemeinnütziges Projekt mit einer Fotokampagne. So rücken wir Themen und Menschen ins Licht, die sonst oft übersehen werden – und leisten einen kleinen Beitrag zu mehr Sichtbarkeit und Teilhabe. Du kennst ein Projekt, das das verdient hat? Dann meld dich gerne bei uns – wir freuen uns auf eure Ideen."
        image={section13_TextBox01}
        alt="Description of image"
        flexflow="row-reverse"
      />

      <Footer />
      <BackToTopButton />
    </>
  );
}
