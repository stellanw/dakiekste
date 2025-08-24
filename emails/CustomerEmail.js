// emails/CustomerEmail.js
import { Html, Head, Preview, Body, Container, Section, Text, Heading } from "@react-email/components";

export default function CustomerEmail({ name, messageHtml, items, totalPrice, year, logoCid, preview = false }) {
  // Spacing
  const SP = { xs: 5, s: 20, m: 35, l: 60, xl: 90, xxl: 180, xxxl: 360 };

  // Brand
  const DARK = "#252422";
  const BRIGHT = "#F9F8F3";
  const ACCENT = "#A3FFB7";

  const LAYOUT_WIDTH = 900;

  const hasServices = Array.isArray(items) && items.length > 0; // ⬅️ Gate

  const ArrowIcon = ({ size = 14 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 4, verticalAlign: "middle" }}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );

  // ---------- Styles ----------
  const Styles = () => (
    <style>{`
      :root { color-scheme: light dark; supported-color-schemes: light dark; }
      body, .body, .card { font-family: Figtree, Helvetica, Arial, sans-serif; }

      /* Light default */
      .frame { background:${BRIGHT}; }
      .body  { color:${DARK}; max-width: 900px;
  margin: 0 auto; }

      .card  { background:${ACCENT}; color:${DARK}; border-radius:12px; }
      .caps  { text-transform:uppercase; letter-spacing:.06em; }
      .small { font-size:12px; opacity:.75; }

      /* Dark override */
      @media (prefers-color-scheme: dark) {
        .frame { background:${DARK} !important; }
        .body  { color:${BRIGHT} !important; }
        .card  { background:${ACCENT} !important; color:${DARK} !important; }
      }

      /* Outlook/Office Dark Mode */
      [data-ogsc] .frame { background:${DARK} !important; }
      [data-ogsc] .body  { color:${BRIGHT} !important; }
      [data-ogsc] .card  { background:${ACCENT} !important; color:${DARK} !important; }

/* Desktop default */
.itemrow .title { padding-left: 60px; } /* = SP.l */

/* Mobile override */
@media only screen and (max-width:480px) {
  .itemrow .title { padding-left: 20px !important; }
}

/* Desktop default */
.card { padding: 90px 60px; border-radius:12px; } /* z.B. SP.xl und SP.l */

/* Mobile override */
@media only screen and (max-width:480px) {
  .card { padding: 30px 20px !important; }
}

/* Desktop default */
.logo-section { margin: 90px 0 180px 0; } /* SP.xl / SP.xxl */

/* Mobile override */
@media only screen and (max-width:480px) {
  .logo-section { margin: 40px 0 100px 0 !important; }
}
    `}</style>
  );

  // ---------- 900px Wrapper (für Mail-Clients verlässlich) ----------
  const CenteredWrapper = ({ children }) => (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" className="itemtable" style={{ width: "100%", borderCollapse: "separate", maxWidth: LAYOUT_WIDTH, margin: "auto" }}>
      <tbody>
        <tr>
          <td style={{ padding: "0 20px" }}>{children}</td>
        </tr>
      </tbody>
    </table>
  );

  // ---------- Tabelle für Leistungszeilen ----------
  const ItemsTable = () => (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" className="itemtable" style={{ width: "100%", borderCollapse: "separate" }}>
      <tbody>
        {items.map((it, i) => (
          <tr key={i} className="itemrow">
            <td className="qty" style={{ paddingTop: i ? SP.m : 0, width: 24, verticalAlign: "top", fontSize: 20 }}>
              {it.qty}
            </td>

            <td className="title" style={{ paddingTop: i ? SP.m : 0, verticalAlign: "top", fontSize: 20 }}>
              {it.title}
            </td>

            <td className="price" style={{ paddingTop: i ? SP.m : 0, textAlign: "right", verticalAlign: "top", whiteSpace: "nowrap", fontSize: 20 }}>
              {it.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  // ---------- Gemeinsamer Inhalt ----------
  const Inner = () => (
    <>
      {/* Logo */}
      <Section className="logo-section" style={{ margin: `${SP.xl}px 0 ${SP.xxl}px 0`, textAlign: "left" }}>
        <img src={logoCid ? `cid:${logoCid}` : "https://vercel.dakiekste.app/emails/logo.png"} width="200" alt="Dakiekste Logo" style={{ display: "block", width: "200px", height: "auto", border: 0, margin: 0 }} />
      </Section>

      {/* Name + Intro */}
      <Section style={{ marginBottom: SP.xl }}>
        <Heading as="h2" style={{ margin: 0, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".04em", fontSize: 20 }}>
          Moin {name},
        </Heading>
        <Text style={{ margin: `${SP.xs}px 0 0 0`, lineHeight: 1.6, fontSize: 20 }}>Danke für deine Nachricht. Wir haben deine Anfrage erhalten und melden uns schnellstmöglich bei dir.</Text>
      </Section>

      {/* Card 1 – Deine Nachricht */}
      <Container className="card" style={{ minWidth: "100%", marginBottom: SP.l }}>
        <Text className="caps" style={{ margin: 0, opacity: 0.85, fontWeight: 600, fontSize: 20 }}>
          Deine Nachricht
        </Text>
        <div style={{ marginTop: SP.s, lineHeight: 1.6, fontSize: 20 }} dangerouslySetInnerHTML={{ __html: messageHtml }} />
      </Container>

      {/* Card 2 – Ausgewählte Leistungen */}
      {hasServices && (
        <Container className="card" style={{ minWidth: "100%", marginBottom: SP.l }}>
          <Text className="caps" style={{ margin: 0, opacity: 0.85, fontWeight: 600, fontSize: 20 }}>
            Ausgewählte Leistungen
          </Text>

          <div style={{ marginTop: SP.s, marginBottom: SP.xl }}>
            <ItemsTable />
          </div>

          {typeof totalPrice !== "undefined" && totalPrice !== null && (
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

      {/* Grüße + Social + Copyright */}
      <Section style={{ marginBottom: SP.xxxl }}>
        <Text style={{ margin: 0, lineHeight: 1.6, fontSize: 20 }}>Herzliche Grüße</Text>
        <Text style={{ margin: `0 0 ${SP.xl}px 0`, lineHeight: 1.6, fontSize: 20 }}>Dein DAKIEKSTE Team</Text>

        {/* Social-Links im Footer */}
        <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ textAlign: "left" }}>
          <tbody>
            <tr>
              <td style={{ paddingRight: "16px" }}>
                <a href="https://www.instagram.com/dakiekste_/" style={{ fontSize: 14, textDecoration: "none", color: "inherit" }}>
                  Instagram <ArrowIcon />
                </a>
              </td>
              <td style={{ paddingRight: "16px" }}>
                <a href="https://www.instagram.com/dakiekste_/" style={{ fontSize: 14, textDecoration: "none", color: "inherit" }}>
                  LinkedIn <ArrowIcon />
                </a>
              </td>
              <td>
                <a href="https://maps.app.goo.gl/iZ7HtKwumP9fSiov9" style={{ fontSize: 14, textDecoration: "none", color: "inherit" }}>
                  Standort <ArrowIcon />
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <Text className="small" style={{ marginTop: SP.s, fontSize: 12 }}>
          © {year} | Dakiekste. Alle Rechte vorbehalten.
        </Text>
      </Section>
    </>
  );

  // ---------- Preview ----------
  if (preview) {
    return (
      <div className="frame">
        <Styles />
        <div className="body" style={{ fontFamily: "Figtree, Helvetica, Arial, sans-serif" }}>
          <CenteredWrapper>
            <Inner />
          </CenteredWrapper>
        </div>
      </div>
    );
  }

  // ---------- Versand ----------
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Styles />
      </Head>

      <Preview>Danke für deine Anfrage{name ? `, ${name}` : ""}!</Preview>

      <Body className="frame" style={{ margin: 0, padding: 0, fontFamily: "Figtree, Helvetica, Arial, sans-serif" }}>
        <div className="body">
          <CenteredWrapper>
            <Inner />
          </CenteredWrapper>
        </div>
      </Body>
    </Html>
  );
}
