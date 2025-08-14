import { Html, Head, Preview, Body, Container, Section, Text, Heading, Hr } from "@react-email/components";

export default function CustomerEmail({ name, messageHtml, year, logoCid }) {
  const dark = "#252422";
  const bright = "#F9F8F3";
  const accent = "#A3FFB7";

  const cardBorder = bright; // dezente Linie im Light-Mode

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{`
          @media (prefers-color-scheme: dark) {
            .dm-frame { background:${bright} !important; }
            .dm-body  { background:${dark} !important; color:${bright} !important; }
            .dm-card  { background:${dark} !important; color:${bright} !important; }
            .dm-muted { color:#D1F2D8 !important; }
            .dm-hr    { border-color:${accent} !important; }
            .dm-link  { color:${accent} !important; border-bottom-color:${accent} !important; }
            .dm-cta   { background:${accent} !important; color:${dark} !important; }
            .dm-foot  { background:${accent} !important; color:${dark} !important; }
          }
          [data-ogsc] .dm-frame { background:${bright} !important; }
          [data-ogsc] .dm-body  { background:${dark} !important; color:${bright} !important; }
          [data-ogsc] .dm-card  { background:${dark} !important; color:${bright} !important; }
          [data-ogsc] .dm-muted { color:#D1F2D8 !important; }
        `}</style>
      </Head>

      <Preview>Danke für deine Anfrage{name ? `, ${name}` : ""}!</Preview>

      <Body style={{ backgroundColor: bright, fontFamily: "Inter, Arial, sans-serif" }} className="dm-frame">
        <Container
          style={{
            maxWidth: 600,
            margin: "40px auto",
            backgroundColor: bright,
            borderRadius: 8,
            padding: 40,
            border: `1px solid ${cardBorder}`,
            color: dark,
          }}
          className="dm-card dm-body"
        >
          {/* Logo (CID wenn vorhanden, sonst Fallback-URL) */}
          <Section style={{ textAlign: "center", marginBottom: 20 }}>
            <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
              <tbody>
                <tr>
                  <td align="center" style={{ padding: 0 }}>
                    <img
                      src={logoCid ? `cid:${logoCid}` : "https://vercel.dakiekste.app/emails/logo.png"}
                      width="120"
                      height="auto"
                      alt="Dakiekste Logo"
                      style={{
                        display: "block",
                        width: "120px",
                        height: "auto",
                        maxWidth: "120px",
                        border: 0,
                        outline: "none",
                        textDecoration: "none",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Heading as="h2" style={{ color: accent, margin: "0 0 16px" }}>
            Danke für deine Anfrage{name ? `, ${name}` : ""}!
          </Heading>

          <Text style={{ color: dark, lineHeight: 1.6 }} className="dm-muted">
            Wir haben deine Nachricht erhalten und melden uns schnellstmöglich bei dir.
          </Text>

          <Hr style={{ borderColor: cardBorder, margin: "16px 0" }} className="dm-hr" />

          <Text style={{ color: dark, lineHeight: 1.6, marginBottom: 6 }} className="dm-muted">
            Deine Nachricht:
          </Text>

          {/* Achtung: messageHtml ist serverseitig bereits sanitisiert */}
          <div style={{ lineHeight: 1.6, color: dark }} className="dm-muted" dangerouslySetInnerHTML={{ __html: messageHtml }} />

          <Hr style={{ borderColor: cardBorder, margin: "24px 0" }} className="dm-hr" />

          <Section style={{ textAlign: "center" }}>
            <a
              href="mailto:info@dakiekste.com"
              className="dm-cta"
              style={{
                backgroundColor: accent,
                color: dark,
                textDecoration: "none",
                padding: "12px 24px",
                borderRadius: 6,
                display: "inline-block",
                fontWeight: 700,
              }}
            >
              Schreib uns eine Mail
            </a>
          </Section>

          <Text style={{ color: dark, lineHeight: 1.6, marginTop: 24 }}>
            Herzliche Grüße,
            <br />
            Dein Dakiekste Team
          </Text>
        </Container>

        <Container
          className="dm-foot"
          style={{
            maxWidth: 600,
            margin: "8px auto",
            textAlign: "center",
            fontSize: 12,
            color: accent,
            backgroundColor: dark,
            borderRadius: 6,
            padding: "8px 12px",
          }}
        >
          © {year} Dakiekste. Alle Rechte vorbehalten.
        </Container>
      </Body>
    </Html>
  );
}

// import { Html, Head, Preview, Body, Container, Section, Text, Heading, Hr, Link } from "@react-email/components";

// export default function CustomerEmail({ name, messageHtml, year, logoCid }) {
//   const dark = "#252422";
//   const bright = "#F9F8F3";
//   const accent = "#A3FFB7";

//   const frameBg = bright;
//   const cardBorder = bright;
//   const muted = "#D1F2D8";

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
//             .dm-cta   { background:${accent} !important; color:${dark} !important; }
//             .dm-foot  { background:${accent} !important; color:${dark} !important; }
//           }
//           [data-ogsc] .dm-frame { background:${bright} !important; }
//           [data-ogsc] .dm-body  { background:${dark} !important; color:${bright} !important; }
//           [data-ogsc] .dm-card  { background:${dark} !important; color:${bright} !important; }
//           [data-ogsc] .dm-muted { color:#D1F2D8 !important; }
//         `}</style>
//       </Head>

//       <Preview>Danke für deine Anfrage, {name}!</Preview>

//       <Body style={{ backgroundColor: frameBg, fontFamily: "Inter, Arial, sans-serif" }} className="dm-frame">
//         <Container
//           style={{
//             maxWidth: 600,
//             margin: "40px auto",
//             backgroundColor: bright,
//             borderRadius: 8,
//             padding: 40,
//             border: `1px solid ${cardBorder}`,
//             color: dark,
//           }}
//           className="dm-card dm-body"
//         >
//           <Section style={{ textAlign: "center", marginBottom: 20 }}>
//             <table
//               role="presentation"
//               width="100"
//               align="center"
//               style={{
//                 margin: "0 auto",
//                 borderCollapse: "collapse",
//                 msoTableLspace: "0pt",
//                 msoTableRspace: "0pt",
//               }}
//             >
//               <tbody>
//                 <tr>
//                   <td width="120" align="start" style={{ padding: 0, margin: 0 }}>
//                     <img
//                       src={logoCid ? `cid:${logoCid}` : "https://vercel.dakiekste.app/emails/logo.png"}
//                       alt="Dakiekste Logo"
//                       width="120"
//                       style={{
//                         display: "block",
//                         width: "120px",
//                         height: "auto",
//                         maxWidth: "120px",
//                         border: 0,
//                         outline: "none",
//                         textDecoration: "none",
//                         msInterpolationMode: "bicubic",
//                       }}
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </Section>

//           <Heading as="h2" style={{ color: accent, margin: "0 0 16px" }}>
//             Danke für deine Anfrage{name ? `, ${name}` : ""}!
//           </Heading>

//           <Text style={{ color: dark, lineHeight: 1.6 }} className="dm-muted">
//             Wir haben deine Nachricht erhalten und melden uns schnellstmöglich bei dir.
//           </Text>

//           <Hr style={{ borderColor: cardBorder, margin: "16px 0" }} className="dm-hr" />

//           <Text style={{ color: dark, lineHeight: 1.6, marginBottom: 6 }} className="dm-muted">
//             Deine Nachricht:
//           </Text>
//           <div className="dm-muted" style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: messageHtml }} />

//           <Hr style={{ borderColor: cardBorder, margin: "24px 0" }} className="dm-hr" />
//           <Section style={{ textAlign: "center" }}>
//             <a
//               href="mailto:info@dakiekste.com"
//               className="dm-cta"
//               style={{
//                 backgroundColor: accent,
//                 color: dark,
//                 textDecoration: "none",
//                 padding: "12px 24px",
//                 borderRadius: 6,
//                 display: "inline-block",
//                 fontWeight: 700,
//               }}
//             >
//               Schreib uns eine Mail
//             </a>
//           </Section>

//           <Text style={{ color: dark, lineHeight: 1.6, marginTop: 24 }}>
//             Herzliche Grüße,
//             <br />
//             Dein Dakiekste Team
//           </Text>
//         </Container>

//         <Container
//           className="dm-foot"
//           style={{
//             maxWidth: 600,
//             margin: "8px auto",
//             textAlign: "center",
//             fontSize: 12,
//             color: accent,
//             backgroundColor: dark,
//             borderRadius: 6,
//             padding: "8px 12px",
//           }}
//         >
//           © {year} Dakiekste. Alle Rechte vorbehalten.
//         </Container>
//       </Body>
//     </Html>
//   );
// }
