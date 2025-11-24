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
          <br />
          <h5>Allgemeine Hinweise und Pflichtinformationen</h5>
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

          <p>Uns ist wichtig, dass du weißt, was mit deinen Daten passiert, wenn du unsere Website nutzt. Personenbezogene Daten sind alle Informationen, mit denen du direkt oder indirekt identifiziert werden kannst. In dieser Datenschutzerklärung erfährst du, welche Daten wir erfassen, wie wir sie verwenden und welche Rechte du hast.</p>

          <h6>Verantwortliche Stelle</h6>
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

          <h3>Datenerfassung</h3>

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
          <h6>E-Mail-Kommunikation für ANKNIPSEN-Events (Brevo)</h6>
          <p>Für die Verwaltung der Anmeldungen zu unserer Eventreihe „ANKNIPSEN“ und den Versand eventbezogener E-Mails (z.&nbsp;B. Anmeldebestätigungen, organisatorische Informationen oder Erinnerungen vor dem Event) nutzen wir den Dienst Brevo (ehemals Sendinblue). Anbieter ist die Brevo GmbH, Köpenicker Straße 126, 10179 Berlin, Deutschland.</p>
          <p>
            Wenn du dich über unser Formular unter <a href="https://www.dakiekste.com/anknipsen">www.dakiekste.com/anknipsen</a> anmeldest, werden folgende Daten bei uns und bei Brevo gespeichert:
          </p>
          <ul>
            <li>deine E-Mail-Adresse</li>
            <li>dein Name (sofern angegeben)</li>
            <li>Informationen zum jeweiligen ANKNIPSEN-Termin (z.&nbsp;B. Datum des Events)</li>
            <li>der Zeitpunkt deiner Anmeldung</li>
          </ul>
          <p>Diese Daten nutzen wir ausschließlich, um dich im Zusammenhang mit ANKNIPSEN zu kontaktieren – also z.&nbsp;B. zur Bestätigung deiner Anmeldung, für organisatorische Hinweise oder eine kurze Erinnerung vor dem Event.</p>
          <p>Rechtsgrundlage ist in der Regel deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Soweit die Kommunikation unmittelbar zur Planung und Durchführung des jeweiligen Events erforderlich ist, kann außerdem Art. 6 Abs. 1 lit. b DSGVO (Vertrag bzw. vorvertragliche Maßnahmen) einschlägig sein.</p>
          <p>Brevo verarbeitet die Daten in unserem Auftrag auf Grundlage eines Auftragsverarbeitungsvertrages gemäß Art. 28 DSGVO. Nach Angaben des Anbieters erfolgt die Datenverarbeitung auf Servern innerhalb der EU.</p>

          <h6>Abmeldung von ANKNIPSEN-E-Mails</h6>
          <p>Du kannst deine Einwilligung in den Erhalt von ANKNIPSEN-E-Mails jederzeit mit Wirkung für die Zukunft widerrufen. Dafür stehen dir insbesondere folgende Möglichkeiten zur Verfügung:</p>
          <ul>
            <li>
              über unsere Abmeldeseite: <a href="https://www.dakiekste.com/unsubscribe">www.dakiekste.com/unsubscribe</a>
            </li>
            <li>über den Abmeldelink in unseren E-Mails (soweit vorhanden)</li>
            <li>
              oder per E-Mail an uns unter{" "}
              <a href={`mailto:${email}`} aria-label={`E-Mail: ${email}`}>
                {email}
              </a>
            </li>
          </ul>
          <p>Wenn du dich abmeldest, erhältst du keine weiteren ANKNIPSEN-E-Mails mehr. Soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen, löschen wir deine Daten für diesen Zweck bzw. sperren sie für den Versand.</p>
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
          <h3>Google Fonts (lokal)</h3>
          <p>
            Wir verwenden auf unserer Website die Schriftart „Figtree“. Die Einbindung erfolgt ausschließlich lokal von unserem eigenen Server. Es wird dabei keine Verbindung zu Servern von Google hergestellt und es werden keine personenbezogenen Daten an Google übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
            einheitlichen und ansprechenden Darstellung unserer Website).
          </p>
          <br />
          <br />
          <h3>Deine Rechte</h3>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten. Außerdem kannst du eine erteilte Einwilligung jederzeit widerrufen. Schreib uns dazu einfach an{" "}
            <a href={`mailto:${email}`} aria-label={`E-Mail: ${email}`}>
              {email}
            </a>
            .
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
