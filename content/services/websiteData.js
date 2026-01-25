// content/services/websiteData.js
import { theme } from "@/styles";
import pricingConfig from "@/content/pricing/pricingData";

// Bilder
import section12_Image02 from "/public/images/Head_Image.jpg";
import webdev_wie from "/public/images/website-wie-wir-arbeiten.png";

import service_webdesign from "/public/images/03_Service/behind-the-scenes-dakiekste-04.jpg";
import service_webdev from "/public/images/03_Service/behind-the-scenes-dakiekste-03.jpg";
import service_konzept from "/public/images/03_Service/behind-the-scenes-dakiekste-konzeption.jpg";
import service_socialmedia from "/public/images/03_Service/behind-the-scenes-dakiekste-01.jpg";

// Proof Slider
import slider_branding_01 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-02.jpg";
import slider_branding_02 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-03.jpg";
import slider_branding_03 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-04.jpg";
import slider_branding_04 from "/public/images/02_Slider/branding-fotografie-erneuerbare-energie-dakiekste-06.jpg";
import Link from "next/link";

//icons
import { PiArrowUpRight } from "react-icons/pi";

const websiteData = {
  seo: {
    title: "Dakiekste | Website",
    description: "Webdesign & Entwicklung – plus Reparatur, Technik und Betreuung.",
  },

  header: {
    topline: "Unserere Weblösungen",
    desktopH1: "Webentwicklung\nund Webdesign",
    mobileH1: "Webentwicklung & Webdesign",

    // ServiceHeader Props
    backgroundColor: theme.color.dark,
    headlineColor: theme.color.green,
    logoColor: theme.color.green,
    backgroundType: "image",
    overlayColor: "#116083",
    backgroundImageSrc: service_webdev,
  },

  // 1) Hero
  //   hero: {
  //     headline: "Websites, die funktionieren und mitwachsen",
  //     text: "Deine Website soll nicht »irgendwie online« sein, sondern Menschen leiten, Vertrauen schaffen und Anfragen auslösen. Wir verbinden Struktur, Design und Technik – und bleiben auch danach Ansprechpartner.",
  //     textMobile: "Deine Website soll nicht „irgendwie online“ sein, sondern Menschen leiten, Vertrauen schaffen und Anfragen auslösen. Wir verbinden Struktur, Design und Technik – und bleiben auch danach Ansprechpartner.",
  //     showLogoCarousel: false,
  //   },

  // 2) Problem
  problem: {
    topline: "Kommt dir das bekannt vor?",
    headline: (
      <>
        Wenn deine Website
        <br />
        mehr Arbeit macht als hilft
      </>
    ),
    listItems: ["Du willst Anfangen – aber die Seite wirkt nicht (mehr) stimmig", "Technik stresst: Updates, Bugs, Ladezeit, irgendwas ist immer", "Inhalte sind da, aber Struktur/Navi fühlt sich chaotisch an", "Du schiebst Änderungen ewig, weil’s zu kompliziert geworden ist"],
    image: section12_Image02,
    alt: "Webentwicklung und Webdesign bei Dakiekste",
    flexflow: "row",
    flexflowMobile: "column-reverse",
  },

  // 3) Lösungen / Bausteine
  solution: {
    autoplay: false,
    headline1: "Unsere Lösung",
    headline2: (
      <>
        Bausteine, die ineinandergreifen.
        <br />
        Du steigst da ein, wo du gerade stehst.
      </>
    ),
    boxData: [
      {
        image: service_webdesign,
        alt: "Webdesign UI/UX – Maischa am Laptop",
        title: "Website Design (UI/UX)",
        text: "Struktur, Layout und Nutzerführung – damit Menschen sich orientieren und leichter Kontakt aufnehmen.",
      },
      {
        image: service_webdev,
        alt: "Webentwicklung – Stellan am Laptop",
        title: "Website Entwicklung",
        text: "Saubere Umsetzung ohne Technikstress. Stabil, schnell und so gebaut, dass sie mitwachsen kann.",
      },
      {
        image: service_socialmedia,
        alt: "Website Technik – Wartung & Fixes",
        title: "Website Reparatur & Technik",
        text: "Updates, Fehlerbehebung, Performance, kleine Bugs – für alles, was gerade klemmt oder nervt.",
      },
      {
        image: service_konzept,
        alt: "Konzeption Workshop",
        title: "Konzeption & Workshop",
        text: "Wenn’s noch unklar ist: Wir ordnen Inhalte, priorisieren Ziele und bauen eine klare Seitenstruktur.",
      },
    ],
  },

  // 4) Wie wir es machen
  how: {
    topline: "So arbeiten wir",
    headline: (
      <>
        Klarer Prozess,
        <br />
        entspannt umgesetzt
      </>
    ),
    listItems: ["Kurz-Check: Wo stehst du, was ist das Ziel?", "Vorschlag: wir geben dir einen klaren nächsten Schritt (und Aufwand)", "Umsetzung: Design/Technik – ohne Reibung, weil alles aus einer Hand kommt", "Feinschliff: testen, optimieren, live stellen", "Optional: Betreuung, damit’s langfristig stabil bleibt"],
    image: webdev_wie,
    alt: "Ablauf Webprojekt – Dakiekste",
    flexflow: "row-reverse",
    flexflowMobile: "column-reverse",
    link: "Kontakt aufnehmen",
    url: "/kontakt?topic=website",
  },

  // 5) Proof
  proof: {
    autoplay: true,
    projects: [
      { alt: "Projektbeispiel – Dakiekste", image: slider_branding_01 },
      { alt: "Projektbeispiel – Dakiekste", image: slider_branding_02 },
      { alt: "Projektbeispiel – Dakiekste", image: slider_branding_03 },
      { alt: "Projektbeispiel – Dakiekste", image: slider_branding_04 },
    ],
  },

  // 6) CTA
  cta: {
    topline: "Start",
    headline: (
      <>
        Sag kurz, was du brauchst
        <br />
        wir melden uns mit einem klaren Vorschlag
      </>
    ),
    text1: "Ob neue Website, Redesign oder Reparatur: Wir sagen dir schnell, was sinnvoll ist – und was nicht.",
    text2: "",
    image: section12_Image02,
    alt: "Kontakt – Dakiekste",
    flexflow: "row",
    flexflowMobile: "column-reverse",
    link: "Kontakt",
    url: "/kontakt?topic=website",
  },

  packages: {
    topline: "Unsere Pakete",
    headline: (
      <>
        Schnelle Orientierung
        <br />
        für deinen Website-Start
      </>
    ),
    text: (
      <p>
        Wähle eins unserer Pakete als ersten Einstieg – Details und weitere Optionen findest du in unserem{" "}
        <Link href="/preise">
          <strong>
            Preiskalkulator <PiArrowUpRight />
          </strong>
        </Link>
      </p>
    ),
    showPrices: true,
    ctaLabel: "Zum Preiskalkulator",
    ctaUrl: "/preise?category=website",

    items: [
      {
        serviceTitle: "Website Paket Starter",
        badge: "Schneller Einstieg",
        packageDescription: "Übersichtlicher Onepager in WordPress. Layout passend zu Logo/Farben, klare Struktur, Pflichtseiten inklusive. Später erweiterbar.",
        bullets: ["Onepager", "WordPress Setup", "Impressum & Datenschutz", "Erweiterbar"],
      },
      {
        serviceTitle: "Website Paket Advanced",
        badge: "Mehr Inhalte",
        packageDescription: "Individuell gestaltete mehrseitige WordPress-Website (z. B. Start, Leistungen, Über uns, Kontakt) inkl. Formular und responsive Design.",
        bullets: ["Mehrseitig", "Individuelles Layout", "Kontaktformular", "Responsive"],
      },
      {
        serviceTitle: "Website Paket\nPro",
        badge: "Strategisch & flexibel",
        packageDescription: "Umfangreiche Website mit UX/UI-Design, Seitenkonzept und erweiterten Funktionen – WordPress oder individuelle Komponenten/Code.",
        bullets: ["UX/UI & Struktur", "Erweiterte Funktionen", "Skalierbar", "SEO-Basis"],
        highlighted: true,
      },
    ],

    extras: [
      {
        serviceTitle: "Web Design (UI/UX)",
        packageDescription: "Struktur, Nutzerführung, visuelles System. Einstieg ab 5 Std.",
      },
      {
        serviceTitle: "Web Entwicklung",
        packageDescription: "Technische Umsetzung, CMS oder individuell. Einstieg ab 8 Std.",
      },
    ],
  },
};

export default websiteData;
