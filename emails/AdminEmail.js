import { Html, Head, Preview, Body, Container, Section, Text, Heading, Hr, Link } from "@react-email/components";

export default function AdminEmail({
  name,
  email,
  company,
  messageHtml,
  totalPrice,
  roles,
  otherRole,
  budget,
  acceptedTerms,
  businessType,
  sourceLabel = "eingegangen über das Kontaktformular",
  previewText = "Neue Kontaktanfrage",
  selectedServices,
  pronouns,
}) {
  const dark = "#252422";
  const bright = "#F9F8F3";
  const accent = "#A3FFB7";

  const cardBorder = "#e5e5e5";
  const muted = "#666";

  const hasRoles = Array.isArray(roles) && roles.length > 0;
  const hasBudget = Array.isArray(budget) && budget.length > 0;

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
          }
          [data-ogsc] .dm-frame { background:${bright} !important; }
          [data-ogsc] .dm-body  { background:${dark} !important; color:${bright} !important; }
          [data-ogsc] .dm-card  { background:${dark} !important; color:${bright} !important; }
          [data-ogsc] .dm-muted { color:#D1F2D8 !important; }
        `}</style>
      </Head>

      <Preview>{previewText}</Preview>

      <Body style={{ backgroundColor: bright, fontFamily: "Inter, Arial, sans-serif" }} className="dm-frame">
        <Container
          style={{
            margin: "24px auto",
            padding: 24,
            background: bright,
            borderRadius: 12,
            maxWidth: 680,
            border: `1px solid ${cardBorder}`,
            color: dark,
          }}
          className="dm-card dm-body"
        >
          <Heading as="h2" style={{ margin: 0 }}>
            Neue Kontaktanfrage
          </Heading>
          <Text style={{ color: muted, marginTop: 6 }} className="dm-muted">
            {sourceLabel}
          </Text>
          <Hr style={{ borderColor: cardBorder, margin: "16px 0" }} className="dm-hr" />

          {/* Absender */}
          {pronouns && (
            <Section>
              <Text className="dm-muted" style={{ margin: 0, color: muted, fontSize: 12 }}>
                Pronomen
              </Text>
              <Text style={{ margin: 0 }}>{pronouns}</Text>
            </Section>
          )}
          {name && (
            <Section>
              <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
                Name
              </Text>
              <Text style={{ margin: 0, fontWeight: 600 }}>{name}</Text>
            </Section>
          )}
          {company && (
            <Section>
              <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
                Firma
              </Text>
              <Text style={{ margin: 0, fontWeight: 600 }}>{company}</Text>
            </Section>
          )}
          {email && (
            <Section>
              <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
                E-Mail
              </Text>
              <Link
                href={`mailto:${email}`}
                className="dm-link"
                style={{
                  display: "inline-block",
                  marginBottom: 2,
                  padding: "2px 0 4px",
                  textDecoration: "none",
                  color: dark,
                }}
              >
                {email}
              </Link>
            </Section>
          )}

          {/* Kontaktformular-spezifisch */}
          {hasRoles && (
            <Section>
              <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
                Rolle im Projekt
              </Text>
              <Text style={{ margin: 0 }}>{roles.join(", ")}</Text>
            </Section>
          )}
          {otherRole && (
            <Section>
              <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
                Rolle (Sonstiges)
              </Text>
              <Text style={{ margin: 0 }}>{otherRole}</Text>
            </Section>
          )}
          {hasBudget && (
            <Section>
              <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
                Budget
              </Text>
              <Text style={{ margin: 0 }}>{budget.join(", ")}</Text>
            </Section>
          )}
          {typeof acceptedTerms === "boolean" && (
            <Section>
              <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
                AGB & Datenschutz akzeptiert
              </Text>
              <Text style={{ margin: 0 }}>{acceptedTerms ? "Ja" : "Nein"}</Text>
            </Section>
          )}

          {/* Overlay-spezifisch */}
          {businessType && (
            <Section>
              <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
                Business-Typ
              </Text>
              <Text style={{ margin: 0 }}>{businessType}</Text>
            </Section>
          )}

          {/* Nachricht */}
          <Section>
            <Text style={{ margin: 0, color: muted, fontSize: 12 }} className="dm-muted">
              Nachricht
            </Text>
            <div style={{ lineHeight: 1.6 }} className="dm-muted" dangerouslySetInnerHTML={{ __html: messageHtml }} />
          </Section>

          {/* Leistungen & Summe */}
          {Array.isArray(selectedServices) && selectedServices.length > 0 && (
            <Section>
              <Text style={{ margin: "12px 0 0", color: muted, fontSize: 12 }} className="dm-muted">
                Ausgewählte Leistungen
              </Text>
              <table role="presentation" width="100%" style={{ borderCollapse: "collapse" }}>
                <tbody>
                  {selectedServices.map((s, i) => (
                    <tr key={i}>
                      <td style={{ padding: "4px 0" }}>
                        {s.title}
                        {s.count > 1 ? ` (${s.count}x)` : ""}
                      </td>
                      <td align="right" style={{ padding: "4px 0", whiteSpace: "nowrap" }}>
                        {s.count > 1 ? `${s.count} × ${Number(s.unitPrice).toFixed(2)} € = ` : ""}
                        {(Number(s.price) || 0).toFixed(2)} €
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>
          )}

          {totalPrice && (
            <>
              <Hr style={{ borderColor: cardBorder, margin: "16px 0" }} className="dm-hr" />
              <Text style={{ margin: 0, fontWeight: 700 }}>Gesamtsumme: {String(totalPrice)} €</Text>
            </>
          )}

          <Hr style={{ borderColor: cardBorder, margin: "16px 0" }} className="dm-hr" />
          <Text style={{ color: "#aaa", fontSize: 12 }} className="dm-muted">
            Automatisch generiert.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
