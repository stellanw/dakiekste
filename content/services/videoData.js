// content/services/videoData.js
import { theme } from "@/styles";

// Bilder
import section12_Image02 from "/public/images/Head_Image.jpg";

// Service / Baustein Images (bitte gern später durch echte Video-Motive ersetzen)
import service_socialvideo from "/public/images/03_Service/behind-the-scenes-dakiekste-01.jpg";
import service_imagefilm from "/public/images/03_Service/behind-the-scenes-dakiekste-03.jpg";
import service_contentabo from "/public/images/03_Service/behind-the-scenes-dakiekste-04.jpg";
import service_schnitt from "/public/images/03_Service/behind-the-scenes-dakiekste-konzeption.jpg";

const videoData = {
  seo: {
    title: "Dakiekste | Video",
    description: "Social Media Videos, Imagefilm und Content-Abo – Konzept, Dreh und Schnitt aus einer Hand.",
  },

  header: {
    topline: "Unsere Videoangebote",
    desktopH1: "Video-Content für Marken\nWebsite und Social Media",
    mobileH1: "Video für Marken",

    // ServiceHeader Props
    backgroundColor: theme.color.dark,
    headlineColor: theme.color.beige,
    logoColor: theme.color.green,
    backgroundType: "image",
    overlayColor: "#116083",
    backgroundImageSrc: service_socialvideo,
  },

  // Problem
  problem: {
    topline: "Kommt dir das bekannt vor?",
    headline: "Videos werden gebraucht\naber wie umsetzen?",
    listItems: [
      "Ich brauche Video-Content für Social Media, weiß aber nicht, was ich filmen soll",
      "Video-Produktion und Schnitt kosten zu viel Zeit und blockieren den Arbeitsalltag",
      "Ich habe Videomaterial, aber kein fertiges Ergebnis, das ich nutzen kann",
      "Meine Videos wirken nicht professionell oder passen nicht zur Marke",
      "Ich möchte regelmäßig Video-Content – ohne jedes Mal neu planen zu müssen",
    ],

    image: section12_Image02,
    alt: "Videoproduktion bei Dakiekste",
    flexflow: "row",
    flexflowMobile: "column-reverse",
  },

  // Pakete
  packages: {
    topline: "Unsere Pakete",
    headline: (
      <>
        Schnelle Orientierung
        <br />
        für deinen Video-Start
      </>
    ),

    showPrices: true,
    ctaUrl: "/preise?category=video",

    // Items: Social Media Video, Imagefilm, Foto & Video Content Abo
    items: [
      {
        serviceTitle: "Video-Content\nfür Social Media",
        badge: "Kurz & wirksam",
        packageDescription: "Kurze, markenkonforme Videos für Instagram, LinkedIn & Co. Von Planung über Dreh bis Schnitt und Formatanpassung – alles inklusive.",
        bullets: ["Konzept & Planung", "Dreh vor Ort oder im Studio", "Schnitt & Formatvarianten", "Individueller Markenlook"],
      },
      {
        serviceTitle: "Imagefilm",
        badge: "Für Website & Pitch",
        packageDescription: "Ein Video, das deine Marke und Leistung greifbar macht – inkl. Dreh, Schnitt sowie Bild- und Tonbearbeitung. Du bekommst Formate für Website, Präsentationen & Social Media.",
        bullets: ["Konzept & Planung", "Dreh + Schnitt", "Ton & Look", "Formate für Web & Social"],
      },
      {
        serviceTitle: "Foto & Video\nContent Abo",
        badge: "Regelmäßig Content",
        packageDescription: "Jeden Monat ein ganzer Tag Content-Produktion: Fotos + kurze Videos (Reels/Snippets) – du bestimmst den Fokus. So wächst dein Content-Pool planbar.",
        bullets: ["1 Content-Tag / Monat", "Fotos + Reels/Snippets", "Fokus flexibel wählbar", "Ideal für Social & Recruiting"],
        highlighted: true,
      },
    ],

    // Extras: Videoschnitt
    extras: [
      {
        serviceTitle: "Videoschnitt\n& Postproduktion",
        packageDescription: "Du hast Material und brauchst den letzten Schritt: Schnitt, Rhythmus, Ton, Untertitel und Export in die passenden Formate – damit es wirklich raus kann.",
        badge: "Optional",
      },
    ],
  },

  // Bausteine
  solution: {
    autoplay: false,
    headline1: "Unsere Lösungen",
    headline2: (
      <>
        Videos die planbar werden.
        <br />
        Klarer Ablauf, konsistenter Look.
      </>
    ),
    boxData: [
      {
        image: service_socialvideo,
        alt: "Social Media Video – kurze Formate",
        title: "Social Video",
        text: "Reels & Snippets, die zu deiner Marke passen – inklusive Planung, Dreh, Schnitt und Format-Export.",
      },
      {
        image: service_imagefilm,
        alt: "Imagefilm – Story & Umsetzung",
        title: "Imagefilm",
        text: "Ein Film, der dein Angebot verständlich macht – mit sauberem Ton, Look, Musik und Grafiken.",
      },
      {
        image: service_contentabo,
        alt: "Content Abo – regelmäßig Produktion",
        title: "Content Abo",
        text: "Regelmäßige Produktion statt einmaliges Projekt – damit du konstant Material für alle Kanäle hast.",
      },
      {
        image: service_schnitt,
        alt: "Videoschnitt – Postproduktion & Export",
        title: "Schnitt & Postproduktion",
        text: "Wenn Material schon da ist: wir bringen Struktur rein und liefern fertige Formate, die du direkt nutzen kannst.",
      },
    ],
  },

  // Prozess
  process: {
    topline: "So arbeiten wir",
    headline: (
      <>
        Klarer Prozess,
        <br />
        entspannt umgesetzt
      </>
    ),
    steps: [
      { title: "Kurz-Check", text: "Was ist das Ziel, welche Kanäle, welche Formate?" },
      { title: "Vorschlag", text: "Du bekommst einen klaren Plan: Inhalte, Aufwand, Ablauf." },
      { title: "Dreh", text: "Wir drehen fokussiert – mit ruhigem Set, sauberem Ton und Look." },
      { title: "Schnitt", text: "Wir schneiden, optimieren Ton/Bild und liefern Formatvarianten." },
      { title: "Optional", text: "Snippets, Untertitel, zusätzliche Exporte oder laufende Betreuung." },
    ],
  },

  // Prozess mit Text
  how: {
    topline: "So arbeiten wir",
    headline: "Klarer Prozess.\nVideo ohne Dauerstress.",
    intro: "Du sollst Video nutzen können, ohne dass es dich dauerhaft bindet. Wir klären am Anfang gemeinsam Ziel, Format und Stil – dann übernehmen wir Dreh und Schnitt so, dass du nur dort Feedback gibst, wo es wirklich wichtig ist. Am Ende bekommst du fertige Formate, die direkt funktionieren – zack raus damit.",
    ariaLabel: "So arbeiten wir",
    steps: [
      {
        title: "Kurz-Check",
        text: "Ziel, Plattformen und Stilrichtung – wir sortieren gemeinsam.",
      },
      {
        title: "Planung",
        text: "Wir schlagen Themen, Formate, Shotlist und Ablauf vor.",
      },
      {
        title: "Produktion",
        text: "Der Dreh läuft effizient, ruhig und markenkonform.",
      },
      {
        title: "Feedback",
        text: "Du siehst den ersten Stand und gibst gezielt Feedback für Anpassungen.",
      },
      {
        title: "Final",
        text: "Schnitt, Ton und Exporte – fertig für Website & Social Media.",
      },
    ],
  },

  // CTA
  cta: {
    topline: "Start",
    headline: (
      <>
        Sag kurz, was du brauchst
        <br />
        wir melden uns mit einem klaren Vorschlag
      </>
    ),
    text1: "Ob Social Clips, Imagefilm oder ein Abo: Wir sagen dir schnell, was sinnvoll ist – und was nicht.",
    text2: "",
    image: section12_Image02,
    alt: "Kontakt – Video",
    flexflow: "row",
    flexflowMobile: "column-reverse",
    link: "Kontakt",
    url: "/kontakt",
  },
};

export default videoData;
