import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { theme } from "@/styles";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Impressum() {
  const router = useRouter();

  const handleBack = () => {
    if (typeof document !== "undefined" && document.referrer) {
      const refUrl = new URL(document.referrer);
      if (refUrl.origin === window.location.origin) {
        // Zurück auf die exakte Seite inkl. Hash
        router.push(refUrl.pathname + refUrl.search + refUrl.hash);
        return;
      }
    }
    // Fallback: Startseite
    router.push("/");
  };

  return (
    <>
      <NavBar />
      <Header useImageBackground={false} />
      <StyledImpressumContainer>
        <button
          onClick={handleBack}
          style={{
            marginTop: "2rem",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          ← Zurück
        </button>
        <h1>Impressum und Datenschutzerklärung</h1>
        <h2>Impressum</h2>
        <h3>Angaben gemäß § 5 TMG</h3>
        <p>
          <strong>[Name der GbR]</strong>
        </p>
        <p>[Adresse]</p>
        <p>[Postleitzahl und Ort]</p>
        <p>[Telefonnummer]</p>
        <p>[E-Mail-Adresse]</p>

        <h3>Vertreten durch</h3>
        <p>[Name der vertretungsberechtigten Personen]</p>

        <h3>Umsatzsteuer-Identifikationsnummer</h3>
        <p>[falls vorhanden]</p>

        <h3>Haftungsausschluss</h3>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
          keine Gewähr übernehmen. Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
        <p>[Name und Adresse der verantwortlichen Person, falls abweichend von oben]</p>

        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Daher können wir für diese fremden Inhalte
          auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>

        <h2>Datenschutzerklärung</h2>

        <h3>1. Datenschutz auf einen Blick</h3>
        <p>
          <strong>Allgemeine Hinweise</strong>
        </p>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
          Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Eine detaillierte Erklärung zum Thema Datenschutz finden
          Sie in unserer nachfolgenden Datenschutzerklärung.
        </p>

        <p>
          <strong>Datenerfassung auf unserer Website</strong>
        </p>
        <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Impressum“ dieser Website
          entnehmen.
        </p>

        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong>
        </p>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular
          eingeben.
        </p>
        <p>
          Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
          Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
        </p>

        <p>
          <strong>Wofür nutzen wir Ihre Daten?</strong>
        </p>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>

        <p>
          <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
        </p>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie
          haben außerdem das Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung gegeben
          haben, können Sie diese jederzeit widerrufen. Zudem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen.
        </p>

        <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>

        <h3>2. Allgemeine Hinweise und Pflichtinformationen</h3>

        <p>
          <strong>Datenschutz</strong>
        </p>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>

        <p>
          <strong>Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</strong>
        </p>
        <p>Beim Besuch unserer Website werden folgende Daten automatisch vom Browser Ihres Endgeräts an unseren Server übermittelt:</p>
        <ul>
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
        </ul>
        <p>Diese Daten werden aus technischen Gründen benötigt, um Ihnen unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten.</p>

        <p>
          <strong>Cookies</strong>
        </p>
        <p>
          Unsere Website verwendet keine Cookies, außer solche, die für den Betrieb technisch notwendig sind. Diese speichern keine personenbezogenen Daten.
        </p>

        <p>
          <strong>Kontaktformular</strong>
        </p>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Kontaktformular inklusive der von Ihnen dort angegebenen
          Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.
        </p>

        <p>
          <strong>Widerruf, Änderungen, Berichtigungen und Aktualisierungen</strong>
        </p>
        <p>
          Sie haben das Recht, auf Antrag unentgeltlich Auskunft darüber zu erhalten, welche personenbezogenen Daten über Sie gespeichert sind. Sie haben
          außerdem das Recht auf Berichtigung falscher Daten, Sperrung und Löschung Ihrer personenbezogenen Daten, sofern dem keine gesetzliche
          Aufbewahrungspflicht entgegensteht.
        </p>

        <p>Bei weiteren Fragen zum Thema Datenschutz wenden Sie sich bitte an uns.</p>
      </StyledImpressumContainer>
    </>
  );
}

const StyledImpressumContainer = styled.div`
  margin: auto;
  padding: var(--spacing-xxl) var(--side-padding);
  background-color: ${theme.color.beige};

  h1,
  h2,
  h3,
  p {
    text-align: start;

    margin: var(--spacing-m) 0;
  }

  button {
    margin-top: var(--spacing-xs);
    width: 300px;
    padding: var(--spacing-xs);
    color: ${theme.color.dark};
    background-color: ${theme.color.beige};
    font-size: var(--font-s);
    font-weight: ${theme.fontWeight.regular};
    letter-spacing: 0.08rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: 1px solid ${theme.color.dark} !important;
    text-transform: uppercase;

    &:hover {
      background-color: ${theme.color.green};
    }
  }
`;
