// emails/AdminEmail.js
import { Html, Head, Preview, Body, Container, Section, Text, Heading } from "@react-email/components";

export default function AdminEmail({ name, pronouns, company, businessType, acceptedTerms, messageHtml, items, totalPrice, year = new Date().getFullYear(), logoCid, preview = false }) {
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
              <td style={{ fontWeight: 600 }}>Name</td>
              <td>{name || "-"}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Pronomen</td>
              <td>{pronouns || "-"}</td>
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

      {/* Card 2 – Leistungen */}
      {items?.length > 0 && (
        <Container className="card" style={{ minWidth: "100%", marginBottom: SP.l }}>
          <Text className="caps" style={{ margin: 0, fontWeight: 600, fontSize: 20 }}>
            Ausgewählte Leistungen
          </Text>
          <div style={{ marginTop: SP.s, marginBottom: SP.xl }}>
            <ItemsTable />
          </div>
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
        <div className="body">
          <CenteredWrapper>
            <Inner />
          </CenteredWrapper>
        </div>
      </Body>
    </Html>
  );
}

// import { Html, Head, Preview, Body, Container, Section, Text, Heading, Hr, Link } from "@react-email/components";

// export default function AdminEmail({
//   name,
//   email,
//   company,
//   messageHtml,
//   totalPrice,
//   roles,
//   otherRole,
//   budget,
//   acceptedTerms,
//   businessType,
//   sourceLabel = "eingegangen über das Kontaktformular",
//   previewText = "Neue Kontaktanfrage",
//   selectedServices,
//   pronouns,
// }) {
//   const dark = "#252422";
//   const bright = "#F9F8F3";
//   const accent = "#A3FFB7";

//   const cardBorder = "#e5e5e5";
//   const muted = "#666";

//   const hasRoles = Array.isArray(roles) && roles.length > 0;
//   const hasBudget = Array.isArray(budget) && budget.length > 0;

//   return (
//     <Html>
//       <Head>
//         <meta name="color-scheme" content="light dark" />
//         <meta name="supported-color-schemes" content="light dark" />
//         <style>{`
//           @media (prefers-color-scheme: dark) {
//             .dm-frame { background:${bright} !important; }
//             .dm-body  { background:${dark} !important; color:${bright} !important; }
//             .dm-card  { background:${dark} !important; color:${bright} !important; }
//             .dm-muted { color:#D1F2D8 !important; }
//             .dm-hr    { border-color:${accent} !important; }
//             .dm-link  { color:${accent} !important; border-bottom-color:${accent} !important; }
//           }
//           [data-ogsc] .dm-frame { background:${bright} !important; }
//           [data-ogsc] .dm-body  { background:${dark} !important; color:${bright} !important; }
//           [data-ogsc] .dm-card  { background:${dark} !important; color:${bright} !important; }
//           [data-ogsc] .dm-muted { color:#D1F2D8 !important; }
//         `}</style>
//       </Head>

//       <Preview>{previewText}</Preview>

//       <Body style={{ backgroundColor: bright, fontFamily: "Inter, Arial, sans-serif" }} className="dm-frame">
//         <Container
//           style={{
//             margin: "24px auto",
//             padding: 24,
//             background: bright,
//             borderRadius: 12,
//             maxWidth: 680,
//             border: `1px solid ${cardBorder}`,
//             color: dark,
//           }}
//           className="dm-card dm-body"
//         >
//           <Heading as="h2" style={{ margin: 0 }}>
//             Neue Kontaktanfrage
//           </Heading>
//           <Text style={{ color: muted, marginTop: 6 }} className="dm-muted">
//             {sourceLabel}
//           </Text>
//           <Hr style={{ borderColor: cardBorder, margin: "16px 0" }} className="dm-hr" />

//           {/* Absender */}
//           {pronouns && (
//             <Section>
//               <Text className="dm-muted" style={{ margin: 0, color: muted, fontSize: 12 }}>
//                 Pronomen
//               </Text>
//               <Text style={{ margin: 0 }}>{pronouns}</Text>
//             </Section>
//           )}
//           {name && (
//             <Section>
//               <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
//                 Name
//               </Text>
//               <Text style={{ margin: 0, fontWeight: 600 }}>{name}</Text>
//             </Section>
//           )}
//           {company && (
//             <Section>
//               <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
//                 Firma
//               </Text>
//               <Text style={{ margin: 0, fontWeight: 600 }}>{company}</Text>
//             </Section>
//           )}
//           {email && (
//             <Section>
//               <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
//                 E-Mail
//               </Text>
//               <Link
//                 href={`mailto:${email}`}
//                 className="dm-link"
//                 style={{
//                   display: "inline-block",
//                   marginBottom: 2,
//                   padding: "2px 0 4px",
//                   textDecoration: "none",
//                   color: dark,
//                 }}
//               >
//                 {email}
//               </Link>
//             </Section>
//           )}

//           {/* Kontaktformular-spezifisch */}
//           {hasRoles && (
//             <Section>
//               <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
//                 Rolle im Projekt
//               </Text>
//               <Text style={{ margin: 0 }}>{roles.join(", ")}</Text>
//             </Section>
//           )}
//           {otherRole && (
//             <Section>
//               <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
//                 Rolle (Sonstiges)
//               </Text>
//               <Text style={{ margin: 0 }}>{otherRole}</Text>
//             </Section>
//           )}
//           {hasBudget && (
//             <Section>
//               <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
//                 Budget
//               </Text>
//               <Text style={{ margin: 0 }}>{budget.join(", ")}</Text>
//             </Section>
//           )}
//           {typeof acceptedTerms === "boolean" && (
//             <Section>
//               <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
//                 AGB & Datenschutz akzeptiert
//               </Text>
//               <Text style={{ margin: 0 }}>{acceptedTerms ? "Ja" : "Nein"}</Text>
//             </Section>
//           )}

//           {/* Overlay-spezifisch */}
//           {businessType && (
//             <Section>
//               <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
//                 Business-Typ
//               </Text>
//               <Text style={{ margin: 0 }}>{businessType}</Text>
//             </Section>
//           )}

//           {/* Nachricht */}
//           <Section>
//             <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
//               Nachricht
//             </Text>
//             <div style={{ lineHeight: 1.6 }} className="dm-muted" dangerouslySetInnerHTML={{ __html: messageHtml }} />
//           </Section>

//           {/* Leistungen & Summe */}
//           {Array.isArray(selectedServices) && selectedServices.length > 0 && (
//             <Section>
//               <Text style={{ margin: "12px 0 0", color: muted, fontSize: 12 }} className="dm-muted">
//                 Ausgewählte Leistungen
//               </Text>
//               <table role="presentation" width="100%" style={{ borderCollapse: "collapse" }}>
//                 <tbody>
//                   {selectedServices.map((s, i) => (
//                     <tr key={i}>
//                       <td style={{ padding: "4px 0" }}>
//                         {s.title}
//                         {s.count > 1 ? ` (${s.count}x)` : ""}
//                       </td>
//                       <td align="right" style={{ padding: "4px 0", whiteSpace: "nowrap" }}>
//                         {s.count > 1 ? `${s.count} × ${Number(s.unitPrice).toFixed(2)} € = ` : ""}
//                         {(Number(s.price) || 0).toFixed(2)} €
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </Section>
//           )}

//           {totalPrice && (
//             <>
//               <Hr style={{ borderColor: cardBorder, margin: "16px 0" }} className="dm-hr" />
//               <Text style={{ margin: 0, fontWeight: 700 }}>Gesamtsumme: {String(totalPrice)} €</Text>
//             </>
//           )}

//           <Hr style={{ borderColor: cardBorder, margin: "16px 0" }} className="dm-hr" />
//           <Text style={{ color: "#aaa", fontSize: 12 }} className="dm-muted">
//             Automatisch generiert.
//           </Text>
//         </Container>
//       </Body>
//     </Html>
//   );
// }
