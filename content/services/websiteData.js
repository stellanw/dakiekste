// content/services/websiteData.js
import { theme } from "@/styles";

// Bilder
import section12_Image02 from "/public/images/Head_Image.jpg";

import service_webdesign from "/public/images/03_Service/behind-the-scenes-dakiekste-04.jpg";
import service_webdev from "/public/images/03_Service/behind-the-scenes-dakiekste-03.jpg";
import service_konzept from "/public/images/03_Service/behind-the-scenes-dakiekste-konzeption.jpg";
import service_socialmedia from "/public/images/03_Service/behind-the-scenes-dakiekste-01.jpg";

const websiteData = {
  seo: {
    title: "Dakiekste | Website",
    description: "Neue Website, Relaunch oder Reparatur: Wir schaffen Struktur, setzen sauber um und nehmen dir Technik- und Entscheidungsstress ab. Einstieg über den Website Technik-Check.",
  },

  header: {
    topline: "Unserere Weblösungen",
    desktopH1: "Webdesign & Webentwicklung\nganzheitlich gedacht",
    mobileH1: "Webdesign & Webentwicklung ganzheitlich gedacht",

    // ServiceHeader Props
    backgroundColor: theme.color.dark,
    headlineColor: theme.color.beige,
    logoColor: theme.color.green,
    backgroundType: "image",
    overlayColor: "#116083",
    backgroundImageSrc: service_webdev,
  },

  // Problem
  problem: {
    topline: "Kommt dir das bekannt vor?",
    headline: (
      <>
        Wenn deine Website
        <br />
        mehr Arbeit macht als hilft
      </>
    ),
    listItems: [
      "Die Website wurde günstig umgesetzt und wird dem Anspruch heute nicht mehr gerecht",
      "Was am Anfang funktioniert hat, stößt inzwischen an klare Grenzen",
      "Viel Zeit im Baukasten verbracht, aber kein stimmiges Ergebnis erreicht",
      "Design und Inhalte wirken uneinheitlich und chaotisch",
      "Besucher*innen finden sich nicht gut zurecht und wissen nicht, was der nächste Schritt ist",
      "Niemand weiß mehr genau, wie die Website technisch aufgebaut ist oder sinnvoll gepflegt wird",
      "Änderungen fühlen sich riskant an, weil die Angst besteht, etwas kaputt zu machen",
      "Du willst mit deiner Website professionell wirken und ernst genommen werden",
    ],

    image: section12_Image02,
    alt: "Webentwicklung und Webdesign bei Dakiekste",
    flexflow: "row",
    flexflowMobile: "column-reverse",
  },

  // Pakete
  packages: {
    topline: "Unsere Website-Pakete",
    headline: (
      <>
        Schnelle Orientierung
        <br />
        für deinen Website-Start
      </>
    ),

    showPrices: true,
    ctaUrl: "/preise?category=website",

    items: [
      {
        serviceTitle: "Website Paket\nStarter",
        badge: "Schnell online",
        packageDescription: "Ein klarer Einstieg ins Web mit festen Vorgaben. Wir setzen deine Website in WordPress mit einem geführten Layout um. Inhalte werden von dir geliefert und sauber eingebunden – ohne Konzeptionsprozess, dafür schnell und übersichtlich.",
        bullets: ["Geführtes Layout", "WordPress Setup", "Inhalte von dir", "Stabil & erweiterbar"],
      },
      {
        serviceTitle: "Website Paket\nAdvanced",
        //badge: "Struktur & Freiheit",
        badge: "Freiheit mit System",
        packageDescription: "Eine strukturierte Website mit klarer Nutzerführung. Design und Aufbau werden konzeptionell von uns definiert. Inhalte (Texte & Bilder) lassen sich über ein übersichtliches CMS selbst pflegen, während Struktur und Gestaltung stabil bleiben.",
        bullets: ["Klares Designsystem", "CMS zur Inhaltspflege", "Struktur & Layout getrennt", "Langfristig übersichtlich"],
      },
      {
        serviceTitle: "Website Paket\nPro",
        badge: "Komplett entlastet",
        packageDescription: "Ein individuell entwickelter Webauftritt als Aushängeschild. Wir übernehmen Konzeption, Inhalte, Struktur und Design und entwickeln ein maßgeschneidertes System. Du pflegst Inhalte, wir kümmern uns um den Rest.",
        bullets: ["Inhaltskonzept & Struktur", "Individuelles Design", "Maßgeschneidertes CMS", "Zukunftsfähig"],
      },
    ],

    extras: [
      {
        serviceTitle: "Website\nTechnik-Check",
        packageDescription: "Deine Website macht Probleme oder fühlt sich technisch unstimmig an? Wir prüfen dein bestehendes Setup strukturiert – Technik, Theme, Plugins, Performance und typische Fehlerquellen.",
        pricingNote: "Fixpreis",
        badge: "Optional als erster Schritt",
      },
      {
        serviceTitle: "Website Reparatur\nUmsetzung",
        pricingNote: "Fixpreis",
        badge: "Quick-Fix",
      },
    ],
  },

  // Lösungen
  solution: {
    autoplay: false,
    headline1: "Unsere Lösungen",
    headline2: (
      <>
        Design, Inhalt und Technik
        <br />
        greifen ganzheitlich ineinander
      </>
    ),
    boxData: [
      {
        image: service_konzept,
        alt: "Konzeption Workshop",
        title: "Inhaltskonzept & Struktur",
        text: "Wir bringen Ordnung in Angebot, Inhalte und Prioritäten – und übersetzen das in eine klare Seitenstruktur. So weiß jede Seite, was sie tun soll: erklären, überzeugen oder Kontakt auslösen.",
      },
      {
        image: service_webdesign,
        alt: "Webdesign UI/UX – Maischa am Laptop",
        title: "Webdesign (UI/UX)",
        text: "Wir gestalten ein konsistentes Designsystem mit Komponenten, Typografie und Abständen, die zusammen funktionieren. Ergebnis: eine Website, die sofort verständlich ist und professionell wirkt – auf Desktop und Mobile.",
      },
      {
        image: service_webdev,
        alt: "Webentwicklung – Stellan am Laptop",
        title: "Webentwicklung",
        text: "Wir bauen deine Website technisch sauber und performant – ohne fragiles Gebastel. Änderungen, Erweiterungen und Pflege bleiben machbar, statt jedes Mal ein Risiko zu werden.",
      },
      {
        image: service_socialmedia,
        alt: "Website Technik – Fixes & Betreuung",
        title: "Technik, Fixes & Betreuung",
        text: "Wir halten dein Setup stabil: Updates, Fehlerbehebung, Performance, kleine Anpassungen. Du bekommst schnelle Hilfe, klare Prioritäten und eine Website, die verlässlich funktioniert.",
      },
    ],
  },

  // Prozess
  how: {
    topline: "So arbeiten wir",
    headline: (
      <>
        Klarer Prozess.
        <br />
        Weniger Stress.
      </>
    ),
    steps: [
      {
        title: "Kurz-Check",
        text: "Wir schauen uns an, wo du stehst, was gerade hakt und was du erreichen willst.",
      },
      {
        title: "Vorschlag",
        text: "Du bekommst von uns eine klare Empfehlung: nächster Schritt, sinnvoller Umfang und realistischer Aufwand.",
      },
      {
        title: "Umsetzung",
        text: "Design, Inhalt und Technik setzen wir strukturiert um – ohne Reibung, ohne Dauerabstimmung.",
      },
      {
        title: "Feinschliff",
        text: "Wir testen, optimieren Details und machen die Website sauber startklar.",
      },
      {
        title: "Optional",
        text: "Auf Wunsch begleiten wir dich weiter und kümmern uns um Updates, Anpassungen und Weiterentwicklung.",
      },
    ],
  },

  // Prozess mit Text
  how: {
    topline: "So arbeiten wir",
    headline: "Klarer Prozess.\nEin Ablauf ohne Reibung.",
    intro: "Du musst dich nicht durch Technik oder endlose Entscheidungen kämpfen. Wir klären zu Beginn gemeinsam, was sinnvoll ist, übernehmen Konzeption und Umsetzung und holen dein Feedback gezielt dort ab, wo es wirklich gebraucht wird. So entsteht eine Website mit Struktur – ohne Dauerabstimmung, ohne Stress.",
    //intro: "Du musst dich nicht durch Technik oder endlose Entscheidungen kämpfen. Wir führen dich strukturiert durch den Prozess, übernehmen Konzeption und Umsetzung und holen dein Feedback gezielt dort ab, wo es wirklich gebraucht wird. So weißt du jederzeit, wo wir stehen – und wann deine Website live geht.",
    ariaLabel: "So arbeiten wir",
    steps: [
      {
        title: "Kurz-Check",
        text: "Wir schauen uns an, wo du stehst, was gerade hakt und was du erreichen willst.",
      },
      {
        title: "Einordnung & Vorschlag",
        text: "Wir sagen dir klar, was sinnvoll ist, wie wir vorgehen würden und in welchem Rahmen sich das Projekt bewegt.",
      },
      {
        title: "Umsetzung",
        text: "Wir setzen Struktur, Design und Technik um. Du wirst an klaren Punkten eingebunden, nicht permanent.",
      },
      {
        title: "Feedback & Livegang",
        text: "Du gibst Rückmeldung, wir arbeiten sie ein und stellen die Website live, sobald alles passt.",
      },
      {
        title: "Website Service",
        text: "Auf Wunsch übernehmen wir nach dem Livegang Updates, Anpassungen, technische Pflege und Weiterentwicklung im Rahmen eines Service-Abos.",
      },
    ],
  },

  // CTA
  cta: {
    topline: "Unverbindliches Erstgespräch",
    headline: (
      <>
        Lass uns sprechen
        <br />
        und Klarheit schaffen
      </>
    ),
    text1: "Egal ob neue Website, Redesign oder Reparatur: Du musst noch nichts entscheiden. Beschreib uns kurz, wo du gerade stehst und was dich an deiner Website stört – wir schauen es uns an und sagen dir ehrlich, was sinnvoll ist und was nicht.",
    text2: "Wenn du unsicher bist, ist auch das völlig okay. Oft reicht ein kurzer Austausch, um wieder Klarheit zu bekommen. Ohne Verkaufsdruck, ohne Verpflichtung.",
    image: section12_Image02,
    alt: "Kontakt – Dakiekste",
    flexflow: "row",
    flexflowMobile: "column-reverse",
    link: "Anfrage starten",
    url: "/kontakt",
  },
};

export default websiteData;
