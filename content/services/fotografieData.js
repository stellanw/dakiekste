// content/services/fotografieData.js
import { theme } from "@/styles";

// Bilder
import section12_Image02 from "/public/images/Head_Image.jpg";

// Service-Bilder Fotografie
import service_branding from "/public/images/12_Image/erneuerbare-energie_brandshooting_photo-maischa-souaga.jpg";
import service_businessportrait from "/public/images/04_Slider/business-portrait-fotografie-finanzexperten-dakiekste-02.jpg";
import service_team from "/public/images/03_Service/team-portrait-foto-erneuerbare-energie-dakiekste-02.jpg";
import service_event from "/public/images/03_Service/eventfotografie-reeperbahnfestival-dakiekste-02.jpg";
import service_produkt from "/public/images/03_Service/produktfoto-dakiekste-ebike_Detail_1.jpg";
import service_konzept from "/public/images/03_Service/behind-the-scenes-dakiekste-konzeption.jpg";

const fotografieData = {
  seo: {
    title: "Dakiekste | Fotografie",
    description: "Business-, Branding- und Eventfotografie – klar, konsistent und vielseitig einsetzbar.",
  },

  /* ================= HEADER ================= */

  header: {
    topline: "Personal Branding Fotografie",
    desktopH1: "Business- & Branding Fotografie\ndie dich zeigt wie du bist",
    mobileH1: "Business- & Branding Fotografie",

    backgroundType: "video",
    backgroundVideoPoster: "/videos/video-poster.png",
    backgroundVideoSrcMp4: "/videos/11_Video/Selections_Workflow_Beratung.mp4",
    backgroundVideoSrcWebm: "/videos/Selections_Imagefilm.webm",

    // backgroundType: "image",
    // backgroundImageSrc: service_branding,

    backgroundColor: theme.color.dark,
    headlineColor: theme.color.beige,
    logoColor: theme.color.green,
  },

  /* ================= PROBLEM ================= */

  problem: {
    topline: "Kommt dir das bekannt vor?",
    headline: <>Bilder sind da, aber nichts passt zusammen</>,
    listItems: ["Unterschiedliche Bildstile über Website & Social Media", "Portraits wirken austauschbar oder nicht mehr zeitgemäß", "Events werden dokumentiert – aber nicht erzählt", "Es fehlt eine klare Bildidee für Marke oder Team", "Es fehlt eine klare Bildidee für Marke oder Team"],
    image: section12_Image02,
    alt: "Fotografie bei Dakiekste",
    flexflow: "row",
    flexflowMobile: "column-reverse",
  },

  /* ================= PAKETE ================= */

  packages: {
    topline: "Unsere Pakete",
    headline: (
      <>
        Klare Einstiege
        <br />
        für professionelle Fotografie
      </>
    ),
    showPrices: true,
    ctaUrl: "/preise?category=fotografie",

    items: [
      {
        serviceTitle: "Gründer*innen Starter",
        badge: "Einstieg",
        packageDescription: "Ein klarer Start für Gründer*innen, die professionelle Bilder brauchen – ohne Overkill. Ideal für Website, LinkedIn oder erste Marketingmaßnahmen.",
        bullets: ["Kompaktes Fotoshooting", "Portraits & Details", "Klarer Look", "Schnell einsatzbereit"],
      },
      {
        serviceTitle: "Gründer*innen Pro",
        badge: "Mehr Sichtbarkeit",
        packageDescription: "Für Gründer*innen, die von Anfang an mit einem konsistenten visuellen Auftritt arbeiten wollen. Mehr Motive, mehr Tiefe, mehr Einsatzmöglichkeiten.",
        bullets: ["Erweiterter Bildumfang", "Mehr Motive & Perspektiven", "Für Website & Marketing", "Strategischer Bilderpool"],
      },
      {
        serviceTitle: "Branding Fotografie",
        badge: "Bilderpool",
        packageDescription: "Ein ganzer Shooting-Tag für einen umfangreichen, markenspezifischen Bilderpool. Portraits, Details und Arbeitssituationen – inkl. Konzept, Planung, Retusche und Behind-the-Scenes-Content.",
        bullets: ["Ganzer Shooting-Tag", "30 finale Bilder", "Markenorientiertes Konzept", "BTS-Content inklusive"],
        highlighted: true,
      },
    ],

    extras: [
      {
        serviceTitle: "Business Portrait",
        packageDescription: "Hochwertige Portraits für Einzelpersonen – z. B. für Website, LinkedIn, Presse oder Social Media. Ideal auch unabhängig von Paketen.",
      },
      {
        serviceTitle: "Mitarbeiter*innen Portraits",
        packageDescription: "Einzelaufnahmen von Mitarbeiter*innen und Teamfotos. Skalierbar pro Person, vor Ort oder im Studio. Ideal für wachsende Teams.",
      },
    ],
  },

  /* ================= BAUSTEINE ================= */

  solution: {
    autoplay: false,
    headline1: "Unsere Leistungen",
    headline2: (
      <>
        Fotografie, die zusammenpasst
        <br />
        und vielseitig einsetzbar ist
      </>
    ),
    boxData: [
      {
        image: service_businessportrait,
        alt: "Business Portrait Fotografie – Dakiekste",
        title: "Business Portraits",
        text: "Professionelle Portraits für Website, LinkedIn und Kommunikation – ruhig, klar und auf Augenhöhe.",
      },
      {
        image: service_team,
        alt: "Teamfotografie – Dakiekste",
        title: "Team & Mitarbeitende",
        text: "Einheitliche Team- und Mitarbeiterportraits für einen konsistenten Außenauftritt.",
      },
      {
        image: service_branding,
        alt: "Branding Fotografie – Dakiekste",
        title: "Branding & Image",
        text: "Bildwelten, die Haltung, Werte und Atmosphäre transportieren – für starke Markenauftritte.",
      },
      {
        image: service_event,
        alt: "Eventfotografie – Dakiekste",
        title: "Eventfotografie",
        text: "Unaufdringliche Begleitung von Events, Workshops und Veranstaltungen.",
      },
      {
        image: service_produkt,
        alt: "Produktfotografie Detail – Dakiekste",
        title: "Produktfotografie",
        text: "Detail- und Produktaufnahmen für Web, Kampagnen oder Social Media.",
      },
      {
        image: service_konzept,
        alt: "Konzeption & Planung Fotografie – Dakiekste",
        title: "Konzeption & Planung",
        text: "Gemeinsame Vorbereitung von Stil, Motiven und Einsatz – damit das Shooting klar und entspannt läuft.",
      },
    ],
  },

  /* ================= PROZESS ================= */

  how: {
    topline: "So arbeiten wir",
    headline: (
      <>
        Klarer Ablauf,
        <br />
        entspannte Umsetzung
      </>
    ),
    steps: [
      {
        title: "Kurz-Check",
        text: "Was brauchst du, wofür und in welchem Rahmen?",
      },
      {
        title: "Konzept",
        text: "Wir definieren Bildstil, Motive und Einsatzbereiche.",
      },
      {
        title: "Shooting",
        text: "Ruhig, strukturiert und mit klarer Führung.",
      },
      {
        title: "Auswahl",
        text: "Du bekommst eine kuratierte Auswahl zur finalen Abstimmung.",
      },
      {
        title: "Feinschliff",
        text: "Bearbeitung, Export und Übergabe – einsatzbereit.",
      },
    ],
  },

  /* ================= CTA ================= */

  cta: {
    topline: "Starte jetzt",
    headline: (
      <>
        Erzähl von deiner Vision
        <br />& wir machen sie sichtbar
      </>
    ),
    text1: "Ob Portraits, Event oder Branding: Wir sagen dir ehrlich, was sinnvoll ist – und wie der nächste Schritt aussieht.",
    image: section12_Image02,
    alt: "Kontakt – Dakiekste",
    flexflow: "row",
    flexflowMobile: "column-reverse",
    link: "Kontakt aufnehmen",
    url: "/kontakt",
  },
};

export default fotografieData;
