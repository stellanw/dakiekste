import { Html, Head, Preview, Body, Container, Section, Text, Heading } from "@react-email/components";

export default function AdminEmail({ name, pronouns, email, company, businessType, acceptedTerms, servicesHtml, messageHtml, items, totalPrice, year = new Date().getFullYear(), logoCid, preview = false, previewText: adminPreviewText = "" }) {
  const SP = { xs: 5, s: 20, m: 35, l: 60, xl: 90, xxl: 180, xxxl: 360 };
  const DARK = "#252422";
  const BRIGHT = "#F9F8F3";
  const ACCENT = "#A3FFB7";
  const LAYOUT_WIDTH = 900;

  const Styles = () => (
    <style>{`
      :root { color-scheme: light dark; supported-color-schemes: light dark; }
      body, .body, .card { font-family: Figtree, Helvetica, Arial, sans-serif; }

      /* Font utilities (Desktop default) */
      .fs-12 { font-size:12px !important; }
      .fs-14 { font-size:14px !important; }
      .fs-18 { font-size:18px !important; }
      .fs-20 { font-size:20px !important; }
      .fs-22 { font-size:22px !important; }

      /* Mobile override */
      @media only screen and (max-width:480px) {
        .fs-12 { font-size:11px !important; }
        .fs-14 { font-size:12px !important; }
        .fs-18 { font-size:16px !important; }
        .fs-20 { font-size:17px !important; }
        .fs-22 { font-size:19px !important; }
      }

      /* Light default */
      .frame { background:${BRIGHT}; }
      .body  { color:${DARK}; max-width: ${LAYOUT_WIDTH}px; margin: 0 auto; }

      .card  { background:${ACCENT}; color:${DARK}; border-radius:12px; }
      .caps  { text-transform:uppercase; letter-spacing:.06em; font-weight: 200; margin: 0 !important; }
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

      /* Mobile line-height kompakter */
      @media only screen and (max-width:480px) {
        .fs-22, .fs-20, .fs-18, .fs-14, .fs-12 { line-height:1.5 !important; }
      }
    `}</style>
  );

  const preheader = (adminPreviewText || `Neue Anfrage${sourceLabel ? ` (${sourceLabel})` : ""} – ${name || "unbekannt"} · ${email || "-"}`) + `${company ? ` · ${company}` : ""}${businessType ? ` · ${businessType}` : ""}`;

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
            <td className="qty fs-20" style={{ paddingTop: i ? SP.m : 0, width: 24, verticalAlign: "top" }}>
              {it.qty}
            </td>
            <td className="title fs-20" style={{ paddingTop: i ? SP.m : 0, verticalAlign: "top" }}>
              {it.title}
            </td>
            <td className="price fs-20" style={{ paddingTop: i ? SP.m : 0, textAlign: "right", whiteSpace: "nowrap", verticalAlign: "top" }}>
              {it.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const Inner = () => (
    <>
      <Section className="logo-section" style={{ margin: `${SP.xl}px 0 ${SP.xxl}px 0`, textAlign: "left" }}>
        <img src={logoCid ? `cid:${logoCid}` : "https://vercel.dakiekste.app/emails/logo.png"} width="200" alt="Dakiekste Logo" style={{ display: "block", width: "200px", height: "auto", border: 0, margin: 0 }} />
      </Section>

      <Container className="card" style={{ minWidth: "100%", marginBottom: SP.l }}>
        <Text className="caps fs-20">Anfrage-Details</Text>
        <table role="presentation" width="100%" cellPadding="4" className="fs-18" style={{ marginTop: SP.s }}>
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

      <Container className="card" style={{ minWidth: "100%", marginBottom: SP.l }}>
        <Text className="caps fs-20">Nachricht</Text>
        <div className="fs-20" style={{ marginTop: SP.s, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: messageHtml }} />
      </Container>

      {(items?.length > 0 || servicesHtml) && (
        <Container className="card" style={{ minWidth: "100%", marginBottom: SP.l }}>
          <Text className="caps fs-20">Ausgewählte Leistungen</Text>

          <div className="fs-18" style={{ marginTop: SP.s, marginBottom: SP.l }}>
            {items?.length > 0 ? <ItemsTable /> : <div className="fs-18" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: servicesHtml }} />}
          </div>

          {totalPrice && (
            <table role="presentation" width="100%">
              <tbody>
                <tr>
                  <td className="fs-20" style={{ fontWeight: 700 }}>
                    Gesamt zzgl. MwSt.
                  </td>
                  <td className="fs-20" style={{ textAlign: "right", fontWeight: 800 }}>
                    {totalPrice}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </Container>
      )}

      <Section style={{ marginBottom: SP.xxxl }}>
        <Text className="small fs-12">© {year} | Dakiekste. Admin-Mail.</Text>
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

      <Preview>{adminPreviewText || `Neue Anfrage von ${name || "unbekannt"}`}</Preview>

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
          {preheader}
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
