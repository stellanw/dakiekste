// content/services/brandingData.js
import { theme } from "@/styles";

// Bilder
import section12_Image02 from "/public/images/Head_Image.jpg";

// Service / Baustein Images (bitte ggf. durch passende Design-Bilder ersetzen, falls du schon welche hast)
import service_corporate from "/public/images/03_Service/behind-the-scenes-dakiekste-konzeption.jpg";
import service_logo from "/public/images/03_Service/behind-the-scenes-dakiekste-04.jpg";
import service_redesign from "/public/images/03_Service/behind-the-scenes-dakiekste-03.jpg";
import service_workshop from "/public/images/03_Service/behind-the-scenes-dakiekste-01.jpg";

const brandingData = {
  seo: {
    title: "Dakiekste | Branding & Design",
    description: "Logo, Corporate Design, Redesign und Workshops – als klares Fundament für deinen visuellen Auftritt.",
  },

  header: {
    topline: "Branding & Design",
    desktopH1: "Branding\nund Design",
    mobileH1: "Branding & Design",

    // ServiceHeader Props
    backgroundType: "image",
    backgroundImageSrc: service_corporate,
  },

  // Problem
  problem: {
    topline: "Kommt dir das bekannt vor?",
    headline: (
      <>
        Wenn dein Auftritt
        <br />
        noch kein klares Bild ergibt
      </>
    ),
    listItems: ["Logo, Farben und Typo wirken zusammengewürfelt – nichts greift richtig ineinander", "Du bekommst oft Feedback wie „sieht gut aus“, aber es bleibt wenig Wiedererkennung", "Du brauchst Konsistenz – aber willst nicht jedes Mal bei Null starten", "Du willst wachsen – aber dein Design hält dich gerade eher zurück"],
    image: section12_Image02,
    alt: "Branding & Design bei Dakiekste",
    flexflow: "row",
    flexflowMobile: "column-reverse",
  },

  // Pakete (Items + Extras an pricingData angepasst)
  packages: {
    topline: "Unsere Pakete",
    headline: (
      <>
        Schnelle Orientierung
        <br />
        für dein Branding
      </>
    ),

    showPrices: true,
    ctaUrl: "/preise?category=design",

    // Items: Corporate Design, Redesign, Logo Design
    items: [
      {
        serviceTitle: "Logo\nDesign",
        badge: "Startpunkt",
        packageDescription: "Von ersten Entwürfen bis finaler Version entwickeln wir ein Logo, das in allen Medien funktioniert – inkl. Konzept und kurzem Manual für die korrekte Anwendung.",
        bullets: ["Konzept + Entwürfe", "Finales Logo-Set", "Mini-Manual", "Saubere Dateien"],
      },
      {
        serviceTitle: "Corporate\nDesign",
        badge: "Visuelles System",
        packageDescription: "Logo, Typografie und Farben – wir entwickeln ein Corporate Design, das die zentralen Gestaltungselemente deiner Marke definiert. Du bekommst klare Regeln und Anwendungen im Designmanual als Grundlage für alles Weitere.",
        bullets: ["Logo, Farben & Typo", "Designsystem", "Designmanual", "Konsistent erweiterbar"],
      },
      {
        serviceTitle: "Redesign",
        badge: "Modernisieren",
        packageDescription: "Wir modernisieren Logo, Farbwelt und Typografie und bringen dein Erscheinungsbild auf den Stand, der zu dir (und deinem Markt) passt – ohne deine Wiedererkennung zu verlieren.",
        bullets: ["Update statt Neustart", "Zeitgemäße Optik", "Wiedererkennung behalten", "Neue Impulse"],
        highlighted: true,
      },
    ],

    // Extras: Konzeption & Workshop
    extras: [
      {
        serviceTitle: "Konzeption & Workshop",
        packageDescription: "Wenn du tiefer einsteigen willst: Werte, Zielgruppen, Positionierung und erste Ansätze für Bildsprache & Design – als klare Grundlage für die nächsten Schritte.",
        badge: "Optional als erster Schritt",
      },
    ],
  },

  // Bausteine / Lösung
  solution: {
    autoplay: false,
    headline1: "Unsere Lösung",
    headline2: (
      <>
        Ein System statt Einzelteile.
        <br />
        Klar, konsistent, erweiterbar.
      </>
    ),
    boxData: [
      {
        image: service_workshop,
        alt: "Konzeption & Workshop – Grundlagen schaffen",
        title: "Konzeption & Workshop",
        text: "Wir klären Werte, Zielgruppen, Positionierung – und übersetzen das in eine klare Designrichtung.",
      },
      {
        image: service_logo,
        alt: "Logo Design – Entwürfe & Finalisierung",
        title: "Logo Design",
        text: "Ein Logo, das in allen Medien funktioniert – mit sauberen Dateien und klaren Regeln zur Anwendung.",
      },
      {
        image: service_corporate,
        alt: "Corporate Design – System aus Typo, Farben und Regeln",
        title: "Corporate Design",
        text: "Farben, Typografie, Regeln, Anwendungen – ein visuelles System, das dich langfristig trägt.",
      },
      {
        image: service_redesign,
        alt: "Redesign – Modernisierung des Auftritts",
        title: "Redesign",
        text: "Wir bringen deinen Auftritt auf den aktuellen Stand – moderner Look, klarere Struktur, mehr Wiedererkennung.",
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
      { title: "Kurz-Check", text: "Wo stehst du, was ist das Ziel?" },
      { title: "Vorschlag", text: "Du bekommst einen klaren nächsten Schritt (inkl. Aufwand)." },
      { title: "Umsetzung", text: "Design entsteht iterativ – mit klaren Loops, ohne Chaos." },
      { title: "Feinschliff", text: "Finalisieren, Dateien sauber aufbereiten, Übergabe." },
      { title: "Optional", text: "Anwendungen, Templates oder Erweiterungen – wenn du willst." },
    ],
  },

  // Prozess mit Text
  how: {
    topline: "So arbeiten wir",
    headline: "Klarer Prozess.\nEin System, das mitwächst.",
    intro: "Wir holen dich am Anfang strukturiert ab und übersetzen deine Ziele in ein Design, das trägt. Danach läuft’s fokussiert: Du gibst Input dort, wo er wirklich zählt – und wir übernehmen die Umsetzung, Ausarbeitung und saubere Übergabe. Keine Dauerschleifen. Am Ende hast du ein konsistentes Set, das du direkt einsetzen kannst.",
    ariaLabel: "So arbeiten wir",
    steps: [
      { title: "Kurz-Check", text: "Ziel, Kontext, vorhandenes Material – wir sortieren." },
      { title: "Richtung", text: "Designrichtung festlegen: Formen, Typo, Farben, Ton." },
      { title: "Ausarbeitung", text: "Entwürfe entwickeln, Varianten schärfen, System bauen." },
      { title: "Übergabe", text: "Finale Daten + Regeln/Manual – ready für alle Kanäle." },
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
    text1: "Ob Logo, Corporate Design oder Redesign: Wir sagen dir schnell, was sinnvoll ist – und was nicht.",
    text2: "",
    image: section12_Image02,
    alt: "Kontakt – Branding & Design",
    flexflow: "row",
    flexflowMobile: "column-reverse",
    link: "Kontakt",
    url: "/kontakt",
  },
};

export default brandingData;
