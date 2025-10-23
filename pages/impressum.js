import Header from "@/components/Header";
import { theme } from "@/styles";
import styled from "styled-components";
import { useRouter } from "next/router";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import CookieBanner from "@/components/CookieBanner";
import DakieksteLogo from "@/Icons/DakieksteLogo";
import Link from "next/link";

export default function Impressum() {
  const router = useRouter();

  const user = ["i", "n", "f", "o"].join("");
  const host = ["d", "a", "k", "i", "e", "k", "s", "t", "e", ".", "c", "o", "m"].join("");
  const email = `${user}@${host}`;

  return (
    <>
      <Menu />
      <BackToTopButton />
      <CookieBanner />
      <LogoWrapper href="/">
        <DakieksteLogo color={theme.color.dark} transition="color 0.5s ease" width={200} />
      </LogoWrapper>
      <ImpressumWrapper>
        <StyledImpressumContainer>
          <h2>Impressum</h2>
          <h3>Impressum und Datenschutzerklärung</h3>
          <h6>Angaben gemäß § 5 TMG</h6>
          <p>
            <strong>Dakiekste GbR</strong>
            <br />
            Lienaustraße 32
            <br />
            22159 Hamburg
            <br />
            <a href={`mailto:${email}`} aria-label={`E-Mail: ${email}`}>
              {email}
            </a>
          </p>

          <h6>Vertreten durch</h6>
          <p>Stellan Wetzig & Maischa Souaga</p>

          <h6>Umsatzsteuer-Identifikationsnummer</h6>
          <p>-- folgt --</p>

          {/* <h6>Haftungsausschluss</h6>
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

          <h6>Analyse & Statistik</h6>

          <p>Wir setzen verschiedene Dienste zur statistischen Auswertung und Verbesserung unserer Website ein. Dabei achten wir darauf, dass personenbezogene Daten nur mit deiner Einwilligung verarbeitet werden oder – wenn technisch möglich – vollständig anonymisiert bleiben.</p>

          <h6>Google Analytics 4</h6>

          <p>
            Nach deiner Zustimmung verwenden wir <strong>Google Analytics 4</strong>, einen Webanalysedienst der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland). Google Analytics nutzt Cookies und ähnliche Technologien, um das Nutzerverhalten auf unserer Website zu erfassen und auszuwerten. Die IP-Adresse wird dabei durch die
            aktivierte Funktion <strong>anonymize_ip</strong> vor der Speicherung gekürzt, sodass kein direkter Personenbezug möglich ist.
          </p>

          <p>
            Wenn du der Nutzung für Analyse- und Werbezwecke zustimmst, kann Google die gewonnenen Informationen mit anderen Google-Diensten (z. B. Google Ads) verknüpfen, um personalisierte Werbung oder Conversion-Messungen durchzuführen. Rechtsgrundlage ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Du kannst diese Einwilligung jederzeit über den
            Button „Cookie-Einstellungen“ im Footer widerrufen oder anpassen.
          </p>

          <p>
            Weitere Informationen findest du in der{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Datenschutzerklärung von Google
            </a>{" "}
            und in der{" "}
            <a href="https://support.google.com/analytics/answer/12017362?hl=de" target="_blank" rel="noopener noreferrer">
              Google Analytics 4-Hilfe
            </a>
            .
          </p>

          <h6>Vercel Web Analytics</h6>

          <p>
            Wir nutzen außerdem <strong>Vercel Web Analytics</strong> zur Auswertung von Seitenaufrufen. Der Dienst arbeitet ohne Cookies und verarbeitet ausschließlich anonymisierte Nutzungsdaten (z. B. URL/Referrer, Zeitpunkt, ungefähre Region, Endgerät/Browser, Seitenpfad). Eine Zuordnung zu konkreten Personen findet nicht statt; Besucher werden über
            einen nicht rückrechenbaren Hash des Requests gezählt. Sitzungsdaten werden nicht dauerhaft gespeichert (sie werden spätestens nach 24 Stunden verworfen).
          </p>

          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Reichweitenmessung und stabiler Bereitstellung der Website). Dienstanbieter: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Mit Vercel besteht ein Auftragsverarbeitungsvertrag (AVV/DPA); eine etwaige Drittlandübermittlung erfolgt auf Grundlage der
            Standardvertragsklauseln (SCC) der EU-Kommission. Weitere Informationen findest du in der{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Vercel Privacy Policy
            </a>
            .
          </p>

          <p>
            <em>Hinweis:</em> Da keine Cookies gesetzt werden, ist für diese Analyse keine Einwilligung über das Cookie-Banner erforderlich.
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
          </p> */}

          <h6>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h6>
          <p>Dakiekste GbR</p>

          <h6>Haftungsausschluss</h6>
          <p>
            Wir geben unser Bestes, alle Inhalte dieser Website sorgfältig zu erstellen und aktuell zu halten. Trotzdem können wir keine Gewähr für Richtigkeit, Vollständigkeit oder Aktualität übernehmen. Nach § 7 Abs. 1 TMG sind wir für eigene Inhalte auf diesen Seiten verantwortlich, nicht aber verpflichtet, übermittelte oder gespeicherte fremde
            Informationen aktiv zu überwachen (§§ 8–10 TMG). Solltest du auf fehlerhafte oder rechtswidrige Inhalte stoßen, gib uns bitte kurz Bescheid – wir kümmern uns sofort darum.
          </p>

          <h6>Haftung für Links</h6>
          <p>Unsere Seite enthält Links zu externen Websites. Auf deren Inhalte haben wir keinen Einfluss, daher übernehmen wir keine Haftung dafür. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>

          <br />
          <br />

          <h2>Datenschutzerklärung</h2>

          <h3>Datenschutz auf einen Blick</h3>

          <p>Uns ist wichtig, dass du weißt, was mit deinen Daten passiert, wenn du unsere Website nutzt. Personenbezogene Daten sind alle Informationen, mit denen du direkt oder indirekt identifiziert werden kannst. In dieser Datenschutzerklärung erfährst du, welche Daten wir erfassen, wie wir sie verwenden und welche Rechte du hast.</p>

          <h3>Verantwortliche Stelle</h3>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            <strong>Dakiekste GbR</strong>
            <br />
            Lienaustraße 32
            <br />
            22159 Hamburg
            <br />
            <a href={`mailto:${email}`} aria-label={`E-Mail: ${email}`}>
              {email}
            </a>
          </p>

          <br />
          <br />

          <h3>Datenerfassung auf dieser Website</h3>

          <h6>Formulare und Kontaktaufnahme</h6>
          <p>
            Wenn du uns über ein Formular kontaktierst, werden die Angaben, die du machst (z. B. Name, E-Mail-Adresse, Nachricht), gespeichert, um deine Anfrage zu bearbeiten. Diese Daten geben wir nicht ohne deine Zustimmung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an effektiver Kommunikation).
          </p>

          <h6>Server-Logs</h6>
          <p>
            Beim Aufruf unserer Seiten erhebt unser Hosting-Anbieter automatisch technische Daten (z. B. IP-Adresse, Browsertyp, Uhrzeit, aufgerufene Seite). Diese Daten dienen ausschließlich der Sicherstellung eines reibungslosen Betriebs und der IT-Sicherheit und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
            f DSGVO.
          </p>

          <br />
          <br />

          <h3>Cookies und Einwilligungen</h3>
          <p>Wir verwenden Cookies, um zu verstehen, wie unsere Website genutzt wird, und um unsere Sichtbarkeit zu verbessern (z. B. durch Google Analytics 4). Du entscheidest selbst, ob du zustimmst oder nur notwendige Cookies erlaubst. Deine Auswahl kannst du jederzeit über den Button „Cookie-Einstellungen“ im Footer ändern.</p>

          <h6>Technisch notwendige Cookies</h6>
          <p>Diese Cookies sind erforderlich, damit die Website funktioniert (z. B. um deine Cookie-Einwilligung zu speichern). Sie enthalten keine personenbezogenen Daten.</p>

          <h6>Analyse und Werbung (mit Einwilligung)</h6>
          <p>Mit deiner Zustimmung nutzen wir Google Analytics 4, um zu verstehen, wie Besucher:innen unsere Seite finden und nutzen. Wir erhalten dabei keine Informationen, mit denen du persönlich identifiziert werden kannst. Die IP-Adresse wird anonymisiert, bevor sie gespeichert wird.</p>

          <p>
            Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Datenverarbeitung: Google kann die Daten in die USA übermitteln. Rechtsgrundlage sind die Standardvertragsklauseln (SCC) der EU-Kommission. Weitere Infos findest du in der <a href="https://policies.google.com/privacy">Google-Datenschutzerklärung</a>.
          </p>

          <br />
          <br />

          <h3>Weitere Analysen – cookielos</h3>

          <h6>Vercel Web Analytics</h6>
          <p>
            Wir nutzen zusätzlich Vercel Web Analytics, um Seitenaufrufe auszuwerten – ganz ohne Cookies. Es werden ausschließlich anonymisierte Daten (z. B. URL, Zeitpunkt, ungefähre Region, Gerät/Browser) verarbeitet. Eine Zuordnung zu dir ist nicht möglich. Sitzungsdaten werden spätestens nach 24 Stunden gelöscht. Rechtsgrundlage: Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse an Reichweitenmessung).
          </p>

          <p>
            Dienstanbieter: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Mit Vercel besteht ein Auftragsverarbeitungsvertrag (DPA/SCC). Weitere Infos findest du in der <a href="https://vercel.com/legal/privacy-policy">Vercel Privacy Policy</a>.
          </p>

          <br />
          <br />

          <h3>Deine Rechte</h3>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten. Außerdem kannst du eine erteilte Einwilligung jederzeit widerrufen. Schreib uns dazu einfach an <a href="mailto:[email]">{email}</a>.
          </p>

          <br />
          <br />

          <h3>Änderungen dieser Datenschutzerklärung</h3>
          <p>Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie immer den aktuellen rechtlichen Anforderungen entspricht oder neue Funktionen beschreibt. Die jeweils aktuelle Version findest du immer hier auf unserer Website.</p>
        </StyledImpressumContainer>
      </ImpressumWrapper>
      <Footer />
    </>
  );
}

const LogoWrapper = styled(Link)`
  position: absolute;
  top: calc(0.75 * var(--side-padding));
  left: var(--side-padding);
`;

const ImpressumWrapper = styled.section`
  background-color: ${theme.color.beige};
  padding: var(--spacing-xl) 0;
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
