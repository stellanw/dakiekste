import { theme } from "@/styles";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import head_image from "/public/images/10_Team/dakiekste-team-stellan-maischa-01.jpg";
import TeamText from "@/components/TeamText";
import Team from "@/components/Team";

// Images
import section10_Team01 from "/public/images/10_Team/dakiekste-team-maischa-01.jpg";
import section10_Team02 from "/public/images/10_Team/dakiekste-team-stellan-01.jpg";
import section10_Team03 from "/public/images/10_Team/dakiekste-team-stellan-maischa-01.jpg";

export default function AboutPage() {
  const header = {
    topline: "About us",
    desktopH1: "Das DAKIEKSTE Team\nWir stellen uns vor",
    mobileH1: "Das DAKIEKSTE Team – Wir stellen uns vor",

    // ServiceHeader Props
    backgroundColor: theme.color.dark,
    headlineColor: theme.color.green,
    logoColor: theme.color.green,
    backgroundType: "image",
    overlayColor: "#116083",
    backgroundImageSrc: head_image,
  };
  return (
    <>
      <Head>
        <title>DAKIEKSTE | About</title>
        <meta
          name="description"
          content="Wir arbeiten als kreatives Duo – mit Vertrauen, Empathie und echtem Interesse an den Menschen, mit denen wir zusammenarbeiten. Wir verstehen uns ohne viele Worte und ergänzen uns in unseren Kompetenzen: Fotografie, Film, Design und Webentwicklung greifen bei uns nahtlos ineinander. Daraus entstand Dakiekste – ein Ort, an dem wir Stärken vereinen und Prozesse ohne Brüche entstehen."
        />
        <meta name="robots" content="index,follow" />
      </Head>
      <Header {...header} />
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
            Wir arbeiten als kreatives Duo – mit Vertrauen, Empathie und echtem Interesse an den Menschen, mit denen wir zusammenarbeiten. Wir verstehen uns ohne viele Worte und ergänzen uns in unseren Kompetenzen: Fotografie, Film, Design und Webentwicklung greifen bei uns nahtlos ineinander. Daraus entstand Dakiekste – ein Ort, an dem wir Stärken vereinen
            und Prozesse ohne Brüche entstehen.
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
            alt: "Portrait – Dakiekste – Portrait von Maischa im Studio",
            text: (
              <>
                <p>
                  Ich arbeite visuell und konzeptionell – mit einem Blick für Zusammenhänge, Inhalte und klare Gestaltung. Mein Schwerpunkt liegt in Fotografie, Video und Design, kombiniert mit dem Gestalten von digitalen Interfaces in Verbindung mit digitalem Userelebnis – UI/UX. Als kreative Allrounderin entwickle ich Gestaltungslösungen, die den Kern
                  einer Vision treffen. Ich höre zu, sehe genau hin und finde visuelle Antworten, die Orientierung geben.
                </p>
              </>
            ),
          },
          {
            name: "ÜBER STELLAN",
            image: section10_Team02,
            alt: "Portrait – Dakiekste – Portrait von Stellan im Studio",

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
            alt: "Portrait – Dakiekste – Teamportrait von Dakiekste mit Maischa und Stellan im Studio",
            text: (
              <>
                <p>
                  Wir arbeiten mit Menschen und Unternehmen, die gestalten und bewegen wollen. Digitale Sichtbarkeit verstehen wir als Chance, präsent zu sein, Beziehungen zu stärken und neue Möglichkeiten zu eröffnen. Unsere Perspektiven entstehen aus Erfahrungen, die oft unsichtbar bleiben – und prägen, wie wir zuhören, gestalten und begleiten. Darum
                  fühlen wir uns besonders Vorhaben verbunden, die für Teilhabe, Miteinander und Fairness stehen.
                  <br />
                  <br />
                  Denn: Wer gesehen wird, gestaltet mit.
                </p>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </>
  );
}
