// emails/AdminEmail.js
import { Html, Head, Preview, Body, Container, Section, Text, Heading } from "@react-email/components";

export default function AdminEmail({ name, pronouns, email, company, businessType, acceptedTerms, servicesHtml, messageHtml, items, totalPrice, year = new Date().getFullYear(), logoCid, preview = false }) {
  const SP = { xs: 5, s: 20, m: 35, l: 60, xl: 90, xxl: 180, xxxl: 360 };
  const DARK = "#252422";
  const BRIGHT = "#F9F8F3";
  const ACCENT = "#A3FFB7";
  const LAYOUT_WIDTH = 900;

  const Styles = () => (
    <style>{`
      :root { color-scheme: light dark; supported-color-schemes: light dark; }
      body, .body, .card { font-family: Figtree, Helvetica, Arial, sans-serif; }

      .frame { background:${BRIGHT}; }
      .body  { color:${DARK}; max-width:${LAYOUT_WIDTH}px; margin:0 auto; }
      .card  { background:${ACCENT}; color:${DARK}; border-radius:12px; }

      .caps  { text-transform:uppercase; letter-spacing:.06em; }
      .small { font-size:12px; opacity:.75; }

      @media (prefers-color-scheme: dark) {
        .frame { background:${DARK} !important; }
        .body  { color:${BRIGHT} !important; }
        .card  { background:${ACCENT} !important; color:${DARK} !important; }
      }

      [data-ogsc] .frame { background:${DARK} !important; }
      [data-ogsc] .body  { color:${BRIGHT} !important; }
      [data-ogsc] .card  { background:${ACCENT} !important; color:${DARK} !important; }

      .card { padding:90px 60px; }
      @media only screen and (max-width:480px) {
        .card { padding:30px 20px !important; }
      }

      .logo-section { margin:90px 0 180px 0; text-align:left; }
      @media only screen and (max-width:480px) {
        .logo-section { margin:40px 0 100px 0 !important; }
      }

      /* Desktop default für Titelspalte in der Leistungen-Tabelle */
.itemrow .title { padding-left: 60px; } /* entspricht deinem SP.l */

/* Mobile override */
@media only screen and (max-width:480px) {
  .itemrow .title { padding-left: 20px !important; }
}
    `}</style>
  );

  const CenteredWrapper = ({ children }) => (
    <table role="presentation" width={LAYOUT_WIDTH} cellPadding="0" cellSpacing="0" style={{ width: "100%", maxWidth: LAYOUT_WIDTH, margin: "auto" }}>
      <tbody>
        <tr>
          <td style={{ padding: "0 20px" }}>{children}</td>
        </tr>
      </tbody>
    </table>
  );

  const ItemsTable = () => (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
      <tbody>
        {items?.map((it, i) => (
          <tr key={i} className="itemrow">
            <td className="qty" style={{ paddingTop: i ? SP.m : 0, width: 24, fontSize: 20, verticalAlign: "top" }}>
              {it.qty}
            </td>

            <td className="title" style={{ paddingTop: i ? SP.m : 0, fontSize: 20, verticalAlign: "top" }}>
              {it.title}
            </td>

            <td className="price" style={{ paddingTop: i ? SP.m : 0, textAlign: "right", whiteSpace: "nowrap", fontSize: 20, verticalAlign: "top" }}>
              {it.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const Inner = () => (
    <>
      {/* Logo */}
      <Section className="logo-section" style={{ margin: `${SP.xl}px 0 ${SP.xxl}px 0`, textAlign: "left" }}>
        <img src={logoCid ? `cid:${logoCid}` : "https://vercel.dakiekste.app/emails/logo.png"} width="200" alt="Dakiekste Logo" style={{ display: "block", width: "200px", height: "auto", border: 0, margin: 0 }} />
      </Section>
      {/* Card 0 – Admin Infos */}
      <Container className="card" style={{ minWidth: "100%", marginBottom: SP.l }}>
        <Text className="caps" style={{ margin: 0, fontWeight: 600, fontSize: 20 }}>
          Anfrage-Details
        </Text>
        <table role="presentation" width="100%" cellPadding="4" style={{ marginTop: SP.s, fontSize: 18 }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600 }}>Pronomen</td>
              <td>{pronouns || "-"}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Name</td>
              <td>{name || "-"}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Firma</td>
              <td>{company || "-"}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Business-Typ</td>
              <td>{businessType || "-"}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>AGB akzeptiert</td>
              <td>{acceptedTerms ? "Ja" : "Nein"}</td>
            </tr>
          </tbody>
        </table>
      </Container>
      {/* Card 1 – Nachricht */}
      <Container className="card" style={{ minWidth: "100%", marginBottom: SP.l }}>
        <Text className="caps" style={{ margin: 0, fontWeight: 600, fontSize: 20 }}>
          Nachricht
        </Text>
        <div style={{ marginTop: SP.s, fontSize: 18, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: messageHtml }} />
      </Container>
      {/* Card 2 – Leistungen */}{" "}
      {(items?.length > 0 || servicesHtml) && (
        <Container className="card" style={{ minWidth: "100%", marginBottom: SP.l }}>
          <Text className="caps" style={{ margin: 0, fontWeight: 600, fontSize: 20 }}>
            Ausgewählte Leistungen
          </Text>
          <div style={{ marginTop: SP.s, marginBottom: SP.xl }}>{items?.length > 0 ? <ItemsTable /> : <div style={{ fontSize: 18, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: servicesHtml }} />}</div>
          {totalPrice && (
            <table role="presentation" width="100%">
              <tbody>
                <tr>
                  <td style={{ fontWeight: 700, fontSize: 20 }}>Gesamt zzgl. MwSt.</td>
                  <td style={{ textAlign: "right", fontWeight: 800, fontSize: 20 }}>{totalPrice}</td>
                </tr>
              </tbody>
            </table>
          )}
        </Container>
      )}
      {/* Footer */}
      <Section style={{ marginBottom: SP.xxxl }}>
        <Text className="small" style={{ fontSize: 12 }}>
          © {year} | Dakiekste. Admin-Mail.
        </Text>
      </Section>
    </>
  );

  if (preview) {
    return (
      <div className="frame">
        <Styles />
        <div className="body">
          <CenteredWrapper>
            <Inner />
          </CenteredWrapper>
        </div>
      </div>
    );
  }

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Styles />
      </Head>
      <Preview>Neue Anfrage von {name || "unbekannt"}</Preview>
      <Body className="frame">
        <div
          aria-hidden="true"
          style={{
            fontSize: "1px",
            lineHeight: "1px",
            color: "transparent",
            opacity: 0,
            msoHide: "all",
            maxHeight: 0,
            maxWidth: 0,
            overflow: "hidden",
          }}
        >
          {`Moin${name ? ` ${name}` : ""}, danke für deine Anfrage – wir melden uns in Kürze.`}

          {Array(200).fill("\u200B\u00A0").join("")}
        </div>
        <div className="body">
          <CenteredWrapper>
            <Inner />
          </CenteredWrapper>
        </div>
      </Body>
    </Html>
  );
}
