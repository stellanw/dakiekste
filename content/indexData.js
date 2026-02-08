// content/dataIndex.js

// ---------------- Images ----------------

// 01 Header
import section01_header_01 from "/public/images/01_Header/branding-fotografie-erneuerbare-energie-dakiekste-01.jpg";

// 02 Slider
import slider_branding_01 from "/public/images/02_Slider/branding-fotografie-bildung-integration-verein-dakiekste-01.jpg";
import slider_branding_02 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-02.jpg";
import slider_branding_03 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-03.jpg";
import slider_branding_04 from "/public/images/02_Slider/branding-fotografie-bildung-integration-verein-dakiekste-03.jpg";
import slider_branding_05 from "/public/images/02_Slider/teamfotografie-pflege.jpg";
import slider_branding_06 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-06.jpg";
import slider_branding_07 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-04.jpg";
import slider_branding_08 from "/public/images/02_Slider/branding-fotografie-bildung-integration-verein-dakiekste-02.jpg";

// 03 Service (für Leistungen-ScrollBox)
import service_socialmedia from "/public/images/03_Service/behind-the-scenes-dakiekste-01.jpg";
import service_design from "/public/images/03_Service/behind-the-scenes-dakiekste-02.jpg";
import service_webdev from "/public/images/03_Service/behind-the-scenes-dakiekste-03.jpg";
import service_webdesign from "/public/images/03_Service/behind-the-scenes-dakiekste-04.jpg";
import service_branding from "/public/images/03_Service/branding-fotografie-erneuerbare-energie-dakiekste-06.jpg";
import service_event from "/public/images/03_Service/eventfotografie-reeperbahnfestival-dakiekste-02.jpg";
import service_businessportrait from "/public/images/03_Service/team-portrait-foto-erneuerbare-energie-dakiekste-02.jpg";
import service_video from "/public/images/03_Service/behind-the-scenes-dakiekste-05.jpg";
import service_produkt from "/public/images/03_Service/produktfoto-dakiekste-ebike_Detail_1.jpg";
import service_konzept from "/public/images/03_Service/behind-the-scenes-dakiekste-konzeption.jpg";
// import service_erklaervideo from "/public/images/03_Service/behind-the-scenes-dakiekste-07.jpg"; // auskommentiert wie bei dir

// 04 Slider (Portrait Slider)
import section04_slider02 from "/public/images/04_Slider/business-portrait-fotografie-finanzexperten-dakiekste-01.jpg";
import section04_slider03 from "/public/images/04_Slider/business-portrait-fotografie-finanzexperten-dakiekste-02.jpg";
import section04_slider04 from "/public/images/04_Slider/team-portrait-fotografie-bildung-integration-verein-dakiekste-01.jpg";
import section04_slider05 from "/public/images/04_Slider/team-portrait-fotografie-bildung-integration-verein-dakiekste-02.jpg";
import section04_slider06 from "/public/images/04_Slider/business-portrait-fotografie-dakiekste-03.jpg";

// 05 TextBox
import section05_TextBox01 from "/public/images/05_TextBox/business-portrait-fotografie-dakiekste-02.jpg";

// 06 TextBox
import section06_TextBox01 from "/public/images/06_TextBox/branding-fotografie-bildung-integration-verein-dakiekste-04.jpg";

// 08 Studio
import section08_Studio01 from "/public/images/08_Studio/klub-studio-bar.jpg";
import section08_Studio02 from "/public/images/08_Studio/klub-studio-equipment.jpg";
import section08_Studio03 from "/public/images/08_Studio/klub-studio-hair-and-makeup.jpg";
import section08_Studio04 from "/public/images/08_Studio/klub-studio-hintergruende.jpg";
import section08_Studio05 from "/public/images/08_Studio/klub-studio-parkplatz.jpg";
import section08_Studio06 from "/public/images/08_Studio/klub-studio-requisiten.jpg";
import section08_Studio07 from "/public/images/08_Studio/klub-studio-kaffee.jpg";

// 09 ImageElement
import section09_Image01 from "/public/images/09_Image/behind-the-scenes-dakiekste-04.jpg";

// 11 Images
import section11_Image01 from "/public/images/11_Image/klub-studio-fläche-01.jpg";
import section11_Image02 from "/public/images/11_Image/klub-studio-bar-2.jpg";

// 12 Images
import section12_Image01 from "/public/images/12_Image/erneuerbare-energie_brandshooting_photo-maischa-souaga.jpg";
import section12_Image02 from "/public/images/Head_Image.jpg";

// 12 ProjectBox (Bilderpool)
import project_qucare_01 from "/public/images/12_ProjectBox/projekt-teamfotografie-pflege-01.jpg";
import project_qucare_02 from "/public/images/12_ProjectBox/projekt-teamfotografie-pflege-02.jpg";
import project_qucare_03 from "/public/images/12_ProjectBox/projekt-teamfotografie-pflege-03.jpg";
import project_qucare_04 from "/public/images/12_ProjectBox/projekt-teamfotografie-pflege-04.jpg";
import project_qucare_05 from "/public/images/12_ProjectBox/projekt-teamfotografie-pflege-05.jpg";

// 12 Textbox (Values)
import section12_TextBox01 from "/public/images/12_Textbox/dakiekste-team-stellan-maischa-02.jpg";

// 13 Textbox (Engagement)
import section13_TextBox01 from "/public/images/13_Textbox/behind-the-scenes-dakiekste-05.jpg";

// --------------------------------------------------
// PAGE DATA (Index)
// --------------------------------------------------

const indexData = {
  seo: {
    title: "Dakiekste | Brandingfotografie",
    description: "Branding und Corporate Fotografie für dein Business",
    author: "Dein Name",
  },

  // optional, falls du später mal Header-Props zentral steuern willst
  header: {
    useImageBackground: false,
    // backgroundImage: section01_header_01, // aktuell in deiner alten index.js nicht benutzt
  },

  hero: {
    headline: "Deine Marke – unser Gesamtpaket",
    text: `Weil deine Vision mehr als schöne Bilder braucht, kombinieren wir
Fotografie, Video, Design & Website zu einem stimmigen Gesamtauftritt –
mit vielseitiger Expertise, Erfahrung und Empathie.`,
    textMobile: "Weil deine Vision mehr als schöne Bilder braucht, kombinieren wir Fotografie, Video, Design & Website zu einem stimmigen Gesamtauftritt – mit vielseitiger Expertise, Erfahrung und Empathie.",
  },

  slider: {
    autoplay: true,
    projects: [
      {
        alt: "Brandingfoto – Verein für Integration und Bildung – Beratungssituation mit zwei Personen",
        image: slider_branding_01,
      },
      {
        alt: "Brandingfoto – Verein für Integration und Bildung – Gesprächssituation",
        image: slider_branding_02,
      },
      {
        alt: "Brandingfoto – Erneuerbare Energien – Zwei Mitarbeiter vor Windrad draußen",
        image: slider_branding_03,
      },
      {
        alt: "Brandingfoto – Erneuerbare Energien – Freies Foto einer Mitarbeiterin in Arbeitsumgebung",
        image: slider_branding_04,
      },
      {
        alt: "Brandingfoto – Verein für Integration und Bildung – Beratungssituation mit zwei Personen",
        image: slider_branding_05,
      },
      {
        alt: "Brandingfotografie – Gesundheit Bereich Pflege Sanitaetshaus – Teamfoto",
        image: slider_branding_06,
      },
      {
        alt: "Brandingfoto – Erneuerbare Energien – Außenanlage Weitblick in der Natur mit zwei Mitarbeitern",
        image: slider_branding_07,
      },
      {
        alt: "Brandingfoto – Erneuerbare Energien – Meeting Situation an Glaswand mit Notizen",
        image: slider_branding_08,
      },
    ],
  },

  // 1. ImageTextBox: Content Produktion
  content: {
    topline: "Content Produktion",
    headline: "Deine Marke in\nden Fokus rücken",
    text1:
      "Bilder und Videos sind heute die Grundlage, um mit Kund*innen in Kontakt zu treten – vor allem auf Social Media. Wir erstellen Content, der zu deiner Marke passt und sich vielseitig einsetzen lässt: von kurzen Clips und Reels über Fotostrecken bis hin zu Material für Website oder Kampagnen. So entsteht echter Mehrwert: Dein Auftritt gewinnt an Tiefe, wirkt professionell und wird für die Menschen erkennbar, die du erreichen willst.",
    text2: "",
    image: section12_Image02,
    alt: "Brandingfoto – Erneuerbare Energien – drei Mitarbeitende in Gesprächssituation draußen",
    flexflow: "row",
    flexflowMobile: "column-reverse",
  },

  // 2. ImageTextBox: Menschen im Mittelpunkt
  people: {
    topline: "Branding & Businessfotografie",
    headline: "Menschen im Mittelpunkt",
    text1:
      "Menschen prägen Marken. Deshalb rücken wir sie in den Mittelpunkt – mit Portraits und Einblicken, die Nähe schaffen und deinem Unternehmen ein Gesicht geben. Branding- und Businessfotografie verbinden zwei Ebenen: Sie machen zum einen sichtbar, wofür dein Unternehmen steht und zum anderen zeigen sie die Menschen, die es prägen. Neben Portraits entstehen Eindrücke von Arbeitsweisen, Teamkultur und der Atmosphäre im Alltag. Das macht dein Unternehmen nahbar, spricht potenzielle Mitarbeitende an und zeigt, wie Zusammenarbeit, Haltung und Werte gelebt werden.",
    text2: "",
    image: section05_TextBox01,
    alt: "Portrait – Business – Businessportrait",
    flexflow: "row-reverse",
    flexflowMobile: "column-reverse",
    hide: "tablet",
    link: "Mehr zu Fotografie",
    url: "/fotografie",
  },

  // Portrait Slider (OnlyMobile / OnlyTabletUp)
  portraitSlider: {
    autoplay: true,
    projects: [
      {
        alt: "Business Portrait Foto im Studio vor Orange",
        image: section04_slider05,
      },
      {
        alt: "Business Portrait Outdoor on Location Hafencity Hamburg",
        image: section04_slider03,
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
        alt: "Business Portrait Outdoor on Location Hafencity Hamburg",
        image: section04_slider02,
      },
    ],
  },

  // Values
  values: {
    topline: "Unsere Werte",
    headline: "Vertrauen entsteht im Miteinander",
    text1:
      "Wir gestalten Räume vor und hinter der Kamera, in denen Menschen sich zeigen können wie sie sind. Aus unseren eigenen queer-, trans- und BiPoC-Erfahrungen wissen wir, wie verletzlich Sichtbarkeit sein kann und wie viel möglich wird, wenn Räume frei von Druck, Erwartungen und Zuschreibungen sind. Genau deshalb ist ein Safer Space für uns kein Zusatz, sondern Grundlage unserer Arbeit. Mit Respekt, Offenheit und Aufmerksamkeit begegnen wir den Menschen, mit denen wir arbeiten – ehrlich und auf Augenhöhe. So entstehen Bildwelten, die verbinden und Raum lassen für Persönlichkeit.",
    text2: "",
    image: section12_TextBox01,
    alt: "Behind the scenes - Dakiekste - Maischa und Stellan im Gesrpäch",
    flexflow: "row",
    flexflowMobile: "column",
    link: "Mehr über uns",
    url: "/about",
  },

  // Leistungen ScrollBox (id="leistungen")
  servicesScroll: {
    autoplay: false,
    headline1: "Leistungen aus einer Hand",
    headline2: "Gemeinsam schaffen wir visuelle Lösungen, die funktionieren.\nKein Baukasten oder Stock-Foto, sondern Gesamtkonzepte,\ndie wirklich zu dir passen.",
    boxData: [
      {
        image: service_branding,
        alt: "Brandingfoto – Erneuerbare Energien – drei Mitarbeitende in Gesprächssituation outdoor vor Windrädern",
        title: "Branding Fotografie",
        text: "Das Besondere an Branding Fotografie ist der ganzheitliche Blick auf deine Marke. Wir zeigen dich und dein Team in Aktion, porträtieren Menschen, fangen Details ein und vermitteln die Stimmung, die hinter deinem Unternehmen steckt. So entsteht ein visueller Rundumblick. Gemeinsam entwickeln wir eine Bildsprache, die zu deinen Werten passt.",
        more: "Mehr zu Fotografie",
        moreHref: "/fotografie",
      },
      {
        image: service_businessportrait,
        alt: "Businessportrait – Erneuerbare Energien – Mitarbeiterin natuerlich vor weißen Hintergrund Tageslicht Look",
        title: "Businessportraits",
        text: "Business-Portraits zeigen die Menschen hinter deinem Unternehmen – ob CEO, Mitarbeitende oder das gesamte Team. Wir schaffen Bilder, die Persönlichkeit transportieren und dein Employer Branding stärken. Dabei begleiten wir dich durch den gesamten Prozess, vom Briefing bis zum Shooting, damit du dich vor der Kamera rundum wohlfühlst. So entstehen Portraits, die deinem Unternehmen ein klares und nahbares Gesicht geben.",
        more: "Mehr zu Fotografie",
        moreHref: "/fotografie",
      },
      {
        image: service_video,
        alt: "Behind the Scenes – Dakiekste – Stellan mit Kamera beim Filmen im Studio",
        title: "Imagefilm & Video-Content",
        text: "Mit unterschiedlichen Formaten wie Imagefilmen, Reportagen, Interviews oder Event-Dokumentationen gibst du deiner Zielgruppe tiefere Einblicke. Videos entstehen in enger Zusammenarbeit – von der ersten Idee bis zum finalen Schnitt. Gemeinsam entwickeln wir ein Konzept und planen den Ablauf. Am Drehtag sorgen wir für eine entspannte Atmosphäre, in der authentische Aufnahmen entstehen können. Im Schnitt fügen wir Bilder, Ton und Musik so zusammen, dass ein stimmiges Gesamtbild entsteht.",
        more: "Mehr zu Video",
        moreHref: "/video",
      },
      {
        image: service_webdesign,
        alt: "Behind the Scenes – Dakiekste – Maischa am Laptop webdesign ui ux design",
        title: "Website Design (UI/UX)",
        text: "Webdesign ist das Fundament jeder Website – es entscheidet darüber, wie verständlich Inhalte sind, wie sich Nutzer*innen orientieren und ob sie gerne bleiben. Eine gute Gestaltung macht Informationen leicht zugänglich. Deshalb denken wir Design nicht nur visuell, sondern auch strukturell und inhaltlich: Navigation, Layout, Typografie und Bildsprache greifen ineinander und machen deine Website zu einem Ort, an dem Menschen sich zurechtfinden.",
        more: "Mehr zu Website",
        moreHref: "/website",
      },
      {
        image: service_webdev,
        alt: "Behind the Scenes – Dakiekste – Stellan am Laptop coding coden",
        title: "Website Entwicklung",
        text: "Wir kümmern uns um die Umsetzung deiner Website – ohne Technikstress. Sie läuft, wächst und hält dir den Rücken frei. Ob CMS-System oder komplexere Anforderungen: Gemeinsam finden wir die passende Lösung für dich. Auf Wunsch richten wir die Seite so ein, dass du Inhalte selbst pflegen kannst – oder wir übernehmen die Betreuung im Abo-Modell, je nachdem, was am besten zu dir passt.",
        more: "Mehr zu Website",
        moreHref: "/website",
      },
      {
        image: service_design,
        alt: "Behind the Scenes – Dakiekste – Maischa beim kreativen Prozess",
        title: "Branding & Corporate Design",
        text: "Ein Corporate Design mit einem System aus Logo, Farben, Typografie und Gestaltungsrichtlinien schafft Klarheit und Wiedererkennung. Wir entwickeln ein Design, das konsistent wirkt und flexibel einsetzbar ist – von Logo bis zu Präsentationsvorlagen. Damit du es langfristig anwenden kannst, erhältst du ein Designmanual, in dem alle Elemente erklärt und die wichtigsten Regeln für den Einsatz festgehalten sind.",
        more: "Mehr zu Branding",
        moreHref: "/branding",
      },
      {
        image: service_event,
        alt: "Eventfotografie – Reeperbahn Festival – Rede zum Opening",
        title: "Eventfotografie",
        text: "Ob PR-Event, Produktlaunch, Networking, Keynote oder Teamoffsite – wir fangen die besonderen Momente ein, die in Erinnerung bleiben. Dabei bewegen wir uns dezent im Hintergrund und sind doch im richtigen Augenblick präsent, um Stimmung, Emotionen und Details festzuhalten. So entsteht eine umfangreiche Bilddokumentation deines Events.",
        more: "Mehr zu Fotografie",
        moreHref: "/fotografie",
      },
      {
        image: service_produkt,
        alt: "Produktfotografie – Ebike – Detailaufnahme eines Ebikes",
        title: "Produktfotografie",
        text: "Deine Produkte verdienen Bilder, die überzeugen. Wir setzen sie so in Szene, dass Qualität, Funktion und Design sichtbar werden. Durch unsere Erfahrung in der Produktfotografie könnt ihr euch darauf verlassen, dass eure Produkte optimal inszeniert werden – für Shops, Kataloge und Kampagnen gleichermaßen.",
        more: "Mehr zu Fotografie",
        moreHref: "/fotografie",
      },
      {
        image: service_socialmedia,
        alt: "Behind the scenes – Dakiekste – Vorbereitung der Kamera für Videoaufnahmen zur Content Produktion",
        title: "Content Produktion",
        text: "Wir produzieren die passenden Foto- und Videoinhalte. Ob Posts, Reels oder Stories: Mit einem klaren Plan entstehen Inhalte, die sichtbar machen, wofür du stehst und die inhaltlich wie visuell überzeugen. So wächst deine Reichweite, deine Kommunikation bleibt konsistent und du sparst Zeit in der Umsetzung mit einem passenden Bilderpool.",
        more: "Mehr zu Video",
        moreHref: "/video",
      },
      {
        image: service_konzept,
        title: "Konzeption & Workshop",
        alt: "Behind the Scenes – Dakiekste – Maischa im Kreativprozess",
        mobileTitle: "Workshop",
        text: "Ob Corporate Identity, Branding oder Bildsprache – wir unterstützen dich dabei, deine visuelle Kommunikation zu ordnen und klarer zu gestalten. In Workshops teilen wir unser Wissen, beraten dich zu Strategie, Gestaltung und entwickeln gemeinsam Ideen.",
      },
    ],
  },

  // VideoTextBox (Imagefilm)
  videoTextBox: {
    topline: "Imagefilm",
    headline: "Bewegte Bilder\ndie verbinden",
    text1:
      "Ein Imagefilm macht dein Unternehmen erlebbar. Er zeigt nicht nur Fakten, sondern vermittelt Atmosphäre und Persönlichkeit. So bekommen Kund*innen einen echten Eindruck davon, wie du arbeitest und was dein Unternehmen besonders macht. Durch bewegte Bilder entsteht Nähe – und aus Zuschauer*innen werden Interessierte, die sich mit deiner Marke verbinden. Videoaufnahmen lassen sich an einem Shooting-Tag gut zwischen Fotoaufnahmen integrieren – so lassen sich dieselben Momente lebendig einfangen.",
    videoSrc: "/videos/Imagefilm-ossara.mov",
    posterSrc: "/videos/imagefilm-poster.png",
    flexflow: "row",
  },

  // ImageTextBox: Bildsprache entwickeln
  identity: {
    topline: "Bildsprache entwickeln",
    headline: "Deine visuelle\nIdentität",
    text1:
      "Eine starke Marke lebt von einer klaren Bildsprache. Gemeinsam mit dir entwickeln wir Motive, Farben und Details, die genau zu deiner Vision und Zielgruppe passen. So entsteht ein visueller Auftritt, der stimmig ist und Wiedererkennung schafft – egal, ob auf Website, Social Media oder in Printmaterialien. Bei einem Brandshooting erhältst du einen vielseitigen Bilderpool, mit dem du flexibel und konsistent kommunizieren kannst.",
    text2: "",
    image: section06_TextBox01,
    alt: "Brandingfotografie – Verein für Integration und Bildung – Person schreibt auf Flipchart",
    flexflow: "row-reverse",
  },

  // Video (07)
  videoA: {
    src: "/videos/07_Video/Selections_Website_OSSARA_Workflow_V2_1.mp4",
  },

  // Workflow ScrollBox
  workflow: {
    headline1: "Unser Workflow",
    headline2: "Du bringst die Vision, wir kümmern uns um den Weg.\nMit einem strukturierten Ablauf halten wir dir den Rücken frei.",
    headline2mobile: "Du bringst die Vision, wir kümmern uns um den Weg. Mit einem strukturierten Ablauf halten wir dir den Rücken frei.",
    boxData: [
      {
        title: "01 Erstgespräch & Analyse",
        text: "Im ersten Gespräch lernen wir dich und deine Ziele kennen. Wir hören zu, stellen die richtigen Fragen und analysieren deine Ausgangslage. Darauf aufbauend entwickeln wir ein Konzept, das deine Kommunikation stärkt und dich in deiner Sichtbarkeit weiterbringt. So entsteht eine Grundlage, auf der sich Inhalte und eine Strategie sinnvoll aufbauen lassen.",
        showIcon: true,
      },
      {
        title: "02 Konzeption & Workshop",
        text: "Auf Basis des Erstgesprächs entwickeln wir ein Konzept, das zu deinen Zielen und deinem Budget passt. Zusätzlich bieten wir Workshops an, um gemeinsam die besten Lösungen zu erarbeiten. Du bleibst dabei immer eingebunden und siehst alle Zwischenstände. So stellen wir sicher, dass das Ergebnis nicht nur gut aussieht, sondern dir im Geschäftsalltag wirklich weiterhilft.",
        showIcon: true,
      },
      {
        title: "03 Organisation",
        text: "Wir übernehmen die Projektplanung und kümmern uns um Details wie Location, Styling oder technische Infrastruktur. Auch die Abstimmung mit externen Partner*innen liegt bei uns. Mit klaren Zeitplänen und guter Kommunikation sorgen wir für einen reibungslosen Ablauf, damit du dich aud dein Business und voll auf das Wesentliche konzentrieren kannst.",
        showIcon: true,
      },
      {
        title: "04 Umsetzung",
        text: "Als eingespieltes Team greifen Fotografie, Design und Web bei uns ineinander – ohne Reibungsverluste und doppelte Abstimmungen. Shootings und Drehs laufen nach einem klaren Plan, sodass Raum für Kreativität bleibt. Design- und Webprojekte setzen wir parallel und in enger Abstimmung mit der zuvor entwickelten Strategie um. So entsteht ein flüssiger Prozess, bei dem alle Elemente ineinandergreifen.",
        showIcon: true,
      },
      {
        title: "05 Feedbackschleife",
        text: "Deine Rückmeldung ist ein zentraler Teil des Prozesses. In klar definierten Feedbackschleifen prüfen wir gemeinsam Zwischenergebnisse und nehmen Anpassungen vor. Bei Fotografieprojekten erhältst du eine Vorauswahl, aus der du deine Favoriten bestimmst, die wir anschließend final bearbeiten. Bei Web- und Designprojekten geben wir dir Zwischenstände wie Layouts, Prototypen oder Entwürfe zur Ansicht. So kannst du Feedback geben, bevor es in die nächste Phase geht, und bist aktiv am Entstehungsprozess beteiligt.",
        showIcon: true,
      },
      {
        title: "06 Fertigstellung & Übergabe",
        text: "Ob Bilder, Videos, Design oder Website – du erhältst das finale Ergebnis in strukturierter Form. Deine finale Bildauswahl stellen wir dir für einen bestimmten Zeitraum in einer Online-Galerie bereit: übersichtlich sortiert, jederzeit abrufbar und auf Wunsch auch dauerhaft, als wachsender Bildpool. Bei Designprojekten bekommst du ein Designmanual, das dir zeigt, wie du Farben, Schriften oder Vorlagen einsetzen kannst. Bei Websites erhältst du eine kurze Dokumentation sowie die nötigen Zugänge, damit du Inhalte eigenständig pflegen und anpassen kannst.",
        showIcon: true,
      },
      {
        title: "07 Langfristige Unterstützung",
        text: "Auch nach dem Projekt begleiten wir dich weiter. Ob kleine Anpassungen, neue Inhalte oder die Weiterentwicklung deiner Marke – wir stehen dir als verlässlicher Partner zur Seite. Weil wir deine Marke bereits kennen, können wir effizient reagieren und gezielt unterstützen – projektweise oder mit einem laufenden Abo, das dich kontinuierlich unterstützt.",
        showIcon: true,
      },
    ],
  },

  // ImageElement zwischen Workflow und Studio
  imageStellan: {
    image: section09_Image01,
    alt: "Behind the scenes – Dakiekste – Stellan in Arbeitssituation am Set im Studio",
  },

  // Studio
  studio: {
    topline: "UNSER STUDIO",
    headline: (
      <>
        Viel Raum <br />
        für deine Ideen
      </>
    ),
    text1: "Unser Studio bietet den Raum, den kreative Ideen brauchen: Tageslichtstudio und wandelbare Sets. Mit einer Auswahl an Hintergründen und Requisiten lassen sich unterschiedlichste Konzepte umsetzen. Für eine entspannte Atmosphäre sorgen kostenfreie Parkplätze, Kaffee und Tee – alles, was ein gutes Shooting braucht.",
    text2: "",
    cards: [
      {
        image: section08_Studio05,
        alt: "Foto der Parkplaetze vor dem Klub Studio",
        title: "Freie Parkplätze",
        description: "Im Hamburger Osten befindet sich unser Studio mit kostenlosen Parkplätzen direkt vor dem Gebäude.",
      },
      {
        image: section08_Studio03,
        alt: "Foto des Hair & Makeup Bereiches im Klub Studio",
        title: "Hair & Makeup Bereich",
        description: "Unser Stylingbereich ist mit großem Spiegel, Kleiderstange, Steamer und Ablagefläche ausgestattet – ideal zum Ankommen, Vorbereiten und Wohlfühlen.",
      },
      {
        image: section11_Image01,
        alt: "Foto der Fotostudio Fläche im Klub Studio",
        title: "Große Fotostudio-Fläche",
        description: "80 m² flexibel nutzbare Studiofläche mit Tageslicht und viel Raum für große und kleine Produktionen.",
      },
      {
        image: section08_Studio01,
        alt: "Foto des Lounge & Arbeitsbereichs im Klub Studio",
        title: "Lounge & Arbeitsbereich",
        description: "Ein wandelbarer Bereich – ideal für Meetings, Pausen oder auch als Kulisse fürs nächste Set.",
      },
      {
        image: section08_Studio02,
        alt: "Foto der Lichttechnik im Klub Studio",
        title: "Professionelle Lichttechnik",
        description: "Unser Studio ist mit hochwertiger Technik ausgestattet. Fast alles, was ein gutes Shooting braucht, ist vor Ort.",
      },
      {
        image: section08_Studio04,
        alt: "Foto der Papierhintergründe im Klub Studio",
        title: "Flexible Sets & Hintergründe",
        description: "Unterschiedliche Papierhintergründe, Stoffe und mobile Setups ermöglichen abwechslungsreiche Looks – vom cleanen Portrait bis zur szenischen Inszenierung.",
      },
      {
        image: section08_Studio06,
        alt: "Foto der Stühle im Klub Studio",
        title: "Vielfältige Requisiten",
        description: "Von Vorhängen über Möbel bis zu kleinen Details – im Studio haben wir viele Elemente, um dein Set individuell zu gestalten.",
      },
      {
        image: section08_Studio07,
        alt: "Foto der Kaffeemaschine im Klub Studio",
        title: "Kaffee, Tee & kalte Getränke",
        description: "Für eine entspannte Arbeitsatmosphäre sorgen kleine Extras wie guter Kaffee aus der Siebträgermaschine und eine Auswahl an Getränken.",
      },
    ],
  },

  // Video (11)
  videoB: {
    src: "/videos/11_Video/Selections_Workflow_Beratung.mp4",
  },

  // ImageElement vor Bilderpool (bei dir: section11_Image02 hide mobile)
  imageStudio: {
    image: section11_Image02,
    alt: "Still Foto des Lounge- und Arbeitsbereichs im  Klub Studio",
    hide: "mobile",
  },

  // Engagement
  engagement: {
    topline: "Engagement",
    headline: "Zusammen die Zukunft gestalten",
    text1: "Einmal im Jahr unterstützen wir ein gemeinnütziges Projekt mit einer Fotokampagne. So rücken wir Themen und Menschen ins Licht, die sonst oft übersehen werden – und leisten einen kleinen Beitrag zu mehr Teilhabe. Du kennst ein passendes Projekt? Dann meld dich gerne bei uns – wir freuen uns auf eure Ideen.",
    text2: "",
    image: section13_TextBox01,
    alt: "Behind the scenes - Dakiekste - Stellan am Laptop sitzend",
    flexflow: "row-reverse",
    flexflowMobile: "column-reverse",
  },

  // Bilderpool ProjectBox
  pool: {
    topline: "BILDERPOOL",
    headline: (
      <>
        Bildmaterial, das dich
        <br />
        langfristig unterstützt
      </>
    ),
    text1:
      "Wir fotografieren Portraits, Details, Situationen und echte Momente – und bündeln sie zu deinem persönlichen Bilderpool, der kein loses Stückwerk ist. Statt einzelner Aufnahmen erhältst du eine vielseitige Sammlung, die deine Bildsprache trägt und über alle Kanäle hinweg funktioniert. Ob Social Media, Website, Präsentationen oder Jobportale – du hast immer passendes Material zur Hand. Dein Bilderpool wächst mit deinem Unternehmen – so stehen dir jederzeit hochwertige Inhalte zur Verfügung, die du flexibel einsetzen kannst.",
    text2: "",
    cards: [
      { image: project_qucare_01, alt: "Portrait - Gesundheit und Pflege Sanitaetshaus - Mitarbeiter*innen Einzelportrait" },
      { image: project_qucare_02, alt: "Branding - Gesundheit und Pflege Sanitaetshaus - Detailaufnahme sterile Hanschuhe anziehen" },
      { image: project_qucare_03, alt: "Portrait - Gesundheit und Pflege Sanitaetshaus - Mitarbeiter*innen Einzelportrait" },
      { image: project_qucare_04, alt: "Branding - Gesundheit und Pflege Sanitaetshaus - Detailaufnahme Kompresse mit Pinzette aufnehmen" },
      { image: project_qucare_05, alt: "Portrait - Gesundheit und Pflege Sanitaetshaus - Teamportrait von zwei Personen" },
    ],
  },

  // FAQ
  faq: {
    faqData: [
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
        answer: "Im Projektverlauf ist mindestens eine Feedbackrunde inklusive, in der wir deine Änderungswünsche gezielt umsetzen. Nach Projektabschluss stehen wir dir weiterhin zur Verfügung – für inhaltliche Anpassungen, neue Bausteine oder technische Weiterentwicklungen. Diese Leistungen kalkulieren wir transparent auf Basis des zusätzlichen Aufwands.",
      },
      {
        caption: "Allgemein",
        question: "Bietet ihr auch langfristige Unterstützung an?",
        answer: "Ja. Viele Kund*innen entscheiden sich für eine fortlaufende Zusammenarbeit – zum Beispiel im Rahmen von Website-Wartung, Contentpflege oder strategischer Weiterentwicklung. Je nach Bedarf schnüren wir dafür ein passendes Betreuungspaket mit transparenten Konditionen. So bleibst du flexibel und gut begleitet – auch nach Projektabschluss.",
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
        caption: "Fotografie",
        question: "Welche Rechte erhalte ich an den Bildern oder Inhalten?",
        answer: "Die Nutzung ist im Angebot geregelt. Standardmäßig sind alle vereinbarten Kanäle wie Website, Social Media oder interne Kommunikation abgedeckt. Für großflächige Kampagnen oder Printanzeigen sprechen wir die Nutzungsrechte gesondert ab.",
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
        question: "Welche zusätzlichen Kosten können anfallen?",
        answer: "Die laufenden monatlichen Kosten für Hosting und Domain laufen immer über dich. Das sind jedoch meist Beträge im einstelligen Bereich. Zusätzliche Kosten können dazukommen, wenn z. B. benötigte externe Lizenzen nötig sind oder sich weitere Zusatzleistungen im Projekt ergeben. Das sprechen wir vorher immer transparent mit dir ab.",
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
        question: "Was ist der Unterschied zwischen einem Onepager und einer Landingpage?",
        answer:
          "Eine Landingpage ist eine einzelne Seite, die sich auf ein klares Ziel konzentriert – zum Beispiel eine Aktion, ein Produkt oder die Kontaktaufnahme. Sie ist meist kurz und sehr fokussiert. Ein Onepager ist ebenfalls eine Website ohne Unterseiten, aber umfassender: Alle wichtigen Inhalte wie Leistungen, Über uns, Kontakt etc. sind auf einer Seite strukturiert angeordnet. So entsteht ein kompletter Auftritt, auch ohne zusätzliche Unterseiten.",
      },
      {
        caption: "Website",
        question: "Was ist WordPress?",
        answer:
          "WordPress ist eines der am weitesten verbreiteten Content-Management-Systeme (CMS), also ein System, mit dem sich Websites erstellen und verwalten lassen. Damit können Inhalte wie Texte und Bilder einfach gepflegt werden, ohne technisches Vorwissen. Zusätzlich lässt sich WordPress durch eine große Auswahl an Erweiterungen (Plugins) fast beliebig ausbauen – zum Beispiel mit einem Onlineshop, mehrsprachigen Inhalten oder speziellen Formularen. Während man bei klassischen Baukastensystemen irgendwann an Grenzen stößt, wächst WordPress flexibel mit den Anforderungen deines Unternehmens mit.",
      },
      {
        caption: "Website",
        question: "Bietet ihr auch komplexere Websites an, die individuell programmiert sind?",
        answer:
          "Ja. Neben WordPress entwickeln wir auch Websites, die wir mit modernen Webtechnologien programmieren – zum Beispiel mit React und Next.js (Frameworks auf Basis von JavaScript). Diese Tools erlauben es uns individuelle Funktionen und besonders flexible Lösungen zu entwickeln. Für solche Projekte erstellen wir dir gerne ein Angebot, das genau zu deine Anforderungen passt.",
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
        caption: "Branding",
        question: "Was gehört alles zu einem Design-Projekt bei euch?",
        answer: "Zum Beispiel: Logoentwicklung, Farbwelt, Typografie, Bildsprache, Icons, Templates für Social Media oder Präsentationen – je nach Bedarf schnüren wir ein passendes Paket.",
      },
      {
        caption: "Branding",
        question: "Entwickelt ihr auch komplette Brandings?",
        answer:
          "Ja – vom Logo über Farben, Schriften und Bildsprache bis hin zur Anwendung auf allen Kanälen. Wir berücksichtigen dabei deine Markenwerte und Zielgruppe, damit dein Auftritt stimmig ist. Mit einem Styleguide zeigen wir dir, wie dein Branding digital und analog konsistent umgesetzt werden kann. So begleiten wir dich von der ersten Idee bis zum fertigen Markenauftritt.",
      },
      {
        caption: "Branding",
        question: "Was, wenn ich schon ein Logo habe?",
        answer: "Kein Problem! Wir bauen auf dem Bestehenden auf – und entwickeln z. B. ein stimmiges Gesamtkonzept oder ergänzen dein vorhandenes Designsystem.",
      },
      {
        caption: "Branding",
        question: "Wie läuft ein Logo-Design-Prozess bei euch ab?",
        answer:
          "Wir starten mit einem Gespräch, in dem wir deine Ziele, Wünsche und dein Business kennenlernen. Das Briefing ist dabei besonders wichtig: Je genauer du schon weißt, was du möchtest und welche Werte dein Logo transportieren soll, desto klarer können wir passende Ideen entwickeln. Eine gute Vorbereitung hilft, den Prozess effizient zu gestalten. Auf Basis des Briefings entwickeln wir erste Logo-Ideen. Diese schauen wir uns gemeinsam mit dir an und wählen die vielversprechendsten Ansätze aus. In Feedbackrunden verfeinern wir Schritt für Schritt dein Design, bis es für dich stimmig ist. Die Anzahl der Runden kann sich auf den Preis auswirken, deshalb arbeiten wir eng mit dir zusammen, damit Anpassungen effizient umgesetzt werden. Am Ende erhältst du dein finales Logo zusammen mit einem Styleguide, der Farben, Schriften und Anwendungshinweise enthält – so kannst du und dein Team das Design sicher einsetzen.",
      },
      {
        caption: "Branding",
        question: "Wie viel Mitgestaltung ist möglich?",
        answer: "So viel wie du willst – oder brauchst. Du bist in den Prozess eingebunden, gibst Feedback und hast jederzeit Einblick in den Zwischenstand.",
      },
      {
        caption: "Branding",
        question: "Wie lange dauert es, ein Logo zu entwickeln?",
        answer: "Das hängt ein bisschen davon ab, wie klar deine Vorstellungen schon sind und wie viele Feedbackrunden wir einplanen. Im Durchschnitt dauert es vom Briefing bis zum fertigen Logo ein paar Wochen. So haben wir genug Zeit, Ideen zu entwickeln, gemeinsam zu verfeinern und das Design wirklich stimmig zu machen.",
      },
      {
        caption: "Branding",
        question: "Wie lange dauert es, ein Branding zu entwickeln?",
        answer:
          "Wir starten mit einem Briefing, entwickeln darauf ein erstes Konzept und verfeinern es gemeinsam Schritt für Schritt in Feedbackrunden. Je nachdem, wie umfangreich das Branding ist und wie klar deine Vorstellungen schon sind, dauert der Prozess bei uns in der Regel etwa 4 bis 8 Wochen. So haben wir genug Zeit, ein stimmiges und rundum passendes Branding zu gestalten.",
      },
    ],
  },

  // ImageElement nach FAQ (bei dir war das: section12_Image01 direkt vor Footer)
  imageBeforeFooter: {
    image: section12_Image01,
    alt: "Brandingfotografie - Erneuerbare Energien - Portrait zweier Mitarbeitenden on Location outdoor vor Energieanlage",
  },
};

export default indexData;
