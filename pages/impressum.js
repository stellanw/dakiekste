import Header from "@/components/Header";
import { theme } from "@/styles";
import styled from "styled-components";
import { useRouter } from "next/router";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";

export default function Impressum() {
  const router = useRouter();

  const email = "info" + "@" + "dakiekste" + ".com";

  return (
    <>
      <Header useImageBackground={false} />
      <BackToTopButton />
      <ImpressumWrapper>
        <StyledImpressumContainer>
          <h2>Impressum</h2>
          <h3>Impressum und Datenschutzerklärung</h3>
          <h6>Angaben gemäß § 5 TMG</h6>
          <p>
            <strong>Dakiekste GbR</strong>
          </p>
          <p>Lienaustraße 32</p>
          <p>22159 Hamburg</p>
          <p>{email}</p>

          <h6>Vertreten durch</h6>
          <p>Stellan Wetzig & Maischa Souaga</p>

          <h6>Umsatzsteuer-Identifikationsnummer</h6>
          <p>-- beantragt --</p>

          <h6>Haftungsausschluss</h6>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h6>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h6>
          <p>Dakiekste GbR</p>

          <h6>Haftung für Links</h6>
          <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Daher können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

          <h2>Datenschutzerklärung</h2>
          <h3>Datenschutz auf einen Blick</h3>

          <h6>Allgemeine Hinweise</h6>

          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Eine detaillierte Erklärung zum Thema Datenschutz finden Sie in unserer nachfolgenden Datenschutzerklärung.
          </p>

          <h6>Datenerfassung auf unserer Website</h6>

          <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Impressum“ dieser Website entnehmen.</p>

          <h6>Wie erfassen wir Ihre Daten?</h6>

          <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
          <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>

          <h6>Wofür nutzen wir Ihre Daten?</h6>

          <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

          <h6>Welche Rechte haben Sie bezüglich Ihrer Daten?</h6>

          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem das Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung gegeben haben, können Sie diese jederzeit widerrufen.
            Zudem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </p>

          <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>

          <h3>Allgemeine Hinweise und Pflichtinformationen</h3>

          <h6>Datenschutz</h6>

          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

          <h6>Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h6>

          <p>Beim Besuch unserer Website werden folgende Daten automatisch vom Browser Ihres Endgeräts an unseren Server übermittelt:</p>
          <ul>
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
          </ul>
          <p>Diese Daten werden aus technischen Gründen benötigt, um Ihnen unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten.</p>

          <h6>Cookies</h6>

          <p>Unsere Website verwendet keine Cookies, außer solche, die für den Betrieb technisch notwendig sind. Diese speichern keine personenbezogenen Daten.</p>

          <h6>Kontaktformular</h6>

          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Kontaktformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

          <h6>Widerruf, Änderungen, Berichtigungen und Aktualisierungen</h6>

          <p>Sie haben das Recht, auf Antrag unentgeltlich Auskunft darüber zu erhalten, welche personenbezogenen Daten über Sie gespeichert sind. Sie haben außerdem das Recht auf Berichtigung falscher Daten, Sperrung und Löschung Ihrer personenbezogenen Daten, sofern dem keine gesetzliche Aufbewahrungspflicht entgegensteht.</p>

          <p>Bei weiteren Fragen zum Thema Datenschutz wenden Sie sich bitte an uns.</p>

          <h6>Hosting</h6>
          <p>
            Unsere Website wird bei Vercel gehostet. Wenn Sie unsere Website besuchen, erfasst Vercel Inc. verschiedene Logfiles inklusive Ihrer IP-Adressen. Der Einsatz erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da wir ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website haben. Mit dem Anbieter wurde ein Vertrag
            zur Auftragsverarbeitung (AVV) geschlossen.
          </p>

          <h6>Google Fonts (lokal)</h6>
          <p>
            Wir verwenden die Schriftart „Figtree“. Die Einbindung erfolgt ausschließlich lokal von unserem Server. Eine Verbindung zu Servern von Google findet dabei nicht statt; es werden insoweit keine personenbezogenen Daten an Google übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einheitlichen Darstellung).
          </p>

          <h6>Datenübermittlung in Drittländer</h6>
          <p>
            Unser Hosting-Anbieter Vercel Inc. hat seinen Sitz in den USA. Die Datenverarbeitung kann daher auch in einem Drittland erfolgen. Mit Vercel besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO. Die Übermittlung erfolgt auf Grundlage der Standardvertragsklauseln (SCC) der EU-Kommission, die ein angemessenes Datenschutzniveau
            gewährleisten sollen.
          </p>

          <h6>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h6>
          <p>
            Im Falle datenschutzrechtlicher Verstöße steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
            Rechtsbehelfe.
          </p>

          <h6>Speicherdauer</h6>
          <p>
            Sofern innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben personenbezogene Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine
            anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen).
          </p>
        </StyledImpressumContainer>
      </ImpressumWrapper>
      <Footer />
    </>
  );
}

const ImpressumWrapper = styled.section`
  background-color: ${theme.color.beige};
`;

const StyledImpressumContainer = styled.div`
  padding: var(--spacing-xxl) var(--side-padding);
  background-color: ${theme.color.beige};
  max-width: calc(1.2 * var(--max-text));

  p {
    text-align: start;

    margin-bottom: var(--spacing-m);
  }

  h6 {
    margin-bottom: var(--spacing-xs);
    line-height: 1.2;
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

  ul {
    margin-bottom: var(--spacing-m);
  }
`;
