// /preise.js
import { theme } from "@/styles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Head from "next/head";
import head_image from "/public/images/Head_Image.jpg";
import TextAndSteps from "@/components/TextAndSteps";

export default function PreisePage() {
  const header = {
    topline: "Preisübersicht",
    desktopH1: "Berechne deinen Invest\nmit unserem Preiskalkulator",
    mobileH1: "Berechne deinen Invest mit unserem Preiskalkulator",

    // ServiceHeader Props
    backgroundColor: theme.color.dark,
    headlineColor: theme.color.green,
    logoColor: theme.color.green,
    backgroundType: "color",
    overlayColor: "#116083",
    backgroundImageSrc: head_image,
  };

  const explainer = {
    topline: "So funktioniert's",
    headline: (
      <>
        Dein Projekt. Dein Budget.
        <br />
        Dein Rahmen.
      </>
    ),
    intro:
      "Der Preiskalkulator gibt dir eine erste Einschätzung für dein Projekt – abgestimmt auf dein Business und deinen tatsächlichen Bedarf. Da jedes Projekt individuell ist, helfen dir die angezeigten Preise dabei, Aufwand, Umfang und Invest realistisch einzuordnen.\n\nNach deiner Anfrage prüfen wir deine Auswahl und melden uns persönlich bei dir. Je nach Projekt erhältst du ein konkretes Angebot oder wir starten mit einem unverbindlichen Erstgespräch, um deinen Bedarf gemeinsam einzuordnen.\n\nKein Verkaufsautomat, kein Druck – nur ein sinnvoller nächster Schritt.",
    steps: [
      {
        title: "Auswahl treffen",
        text: "Wähle dein Business, den Projekttyp und die gewünschten Leistungen. Über das + Symbol kannst du dir zu jeder Leistung Details und Einzelpreise anzeigen lassen.",
      },
      {
        title: "Orientierung bekommen",
        text: "Der Gesamtpreis und mögliche Raten passen sich automatisch an. So bekommst du einen realistischen Richtwert für dein Projekt.",
      },
      {
        title: "Anfrage starten",
        text: "Deine Auswahl wird ins Anfrageformular übernommen. Du kannst dort zusätzliche Infos zu dir und deinem Projekt ergänzen.",
      },
      {
        title: "Erstgespräch oder Angebot",
        text: "Wir prüfen deine Anfrage und melden uns persönlich bei dir. Je nach Projekt erhältst du direkt ein Angebot oder wir verabreden ein unverbindliches Erstgespräch.",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>DAKIEKSTE | Preiskalkulator</title>
        <meta name="description" content="Plane deinen Invest für Fotografie, Design, Website oder Video. Mit unserem Preiskalkulator bekommst du eine erste Orientierung und kannst direkt eine Anfrage senden." />
        <meta name="robots" content="index,follow" />
      </Head>
      <Header {...header} />
      <TextAndSteps {...explainer} />
      <Pricing />
      <Footer />
    </>
  );
}
