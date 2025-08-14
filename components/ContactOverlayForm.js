import styled from "styled-components";
import { useState } from "react";
import { theme } from "@/styles";

export default function ContactOverlayForm({
  selectedServices = [],
  serviceCounts = {},
  businessType,
  formData, // optional: kontrollierter State vom Parent
  setFormData, // optional: Setter vom Parent
  onClose,
}) {
  // Fallback auf internen State (unkontrolliert), wenn kein Parent-State übergeben wurde
  const [localForm, setLocalForm] = useState({
    firstName: "",
    lastName: "",
    pronouns: "",
    customPronouns: "",
    company: "",
    email: "",
    message: "",
  });

  const isControlled = !!formData && !!setFormData;
  const data = isControlled ? formData : localForm;
  const setData = isControlled ? setFormData : setLocalForm;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // React-Node/JSX sicher in Plain-Text umwandeln (falls ein Titel JSX ist)
  const toPlainText = (node) => {
    if (node == null) return "";
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(toPlainText).join(" ");
    if (typeof node === "object" && "props" in node) return toPlainText(node.props?.children);
    return "";
  };

  const rabatt = businessType === "Soloselbstständig" ? 0.7 : 1;

  const structured = (selectedServices || []).map((service) => {
    const rawTitle = service.titlePlain ?? service.title; // evtl. JSX
    const displayTitle = typeof rawTitle === "string" ? rawTitle : toPlainText(rawTitle);

    const keyForCounts = service.title;
    const count = service.isCountable ? (serviceCounts?.[keyForCounts] ?? 1) : 1;

    const unitPrice = Number(service.price) || 0;
    const price = unitPrice * count * rabatt;

    return { title: displayTitle, count, unitPrice, price };
  });

  const total = structured.reduce((sum, x) => sum + x.price, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedSummaryHTML = structured.map((s) => `<li>${s.title}${s.count > 1 ? ` (${s.count}x)` : ""} – ${s.price.toFixed(2)} €</li>`).join("");

    const combinedMessage = `
      <p>${(data.message || "").replace(/\n/g, "<br>")}</p>
      <p><strong>Ausgewählte Leistungen:</strong></p>
      <ul>${selectedSummaryHTML}</ul>
      <p><strong>Gesamtsumme:</strong> ${total.toFixed(2)} €</p>
      <p><strong>Business-Typ:</strong> ${businessType || "-"}</p>
    `;

    const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ").trim();
    const pronouns = data.pronouns === "andere" ? (data.customPronouns || "").trim() : data.pronouns;

    const payload = {
      name: fullName || undefined,
      company: data.company || undefined,
      email: data.email,
      message: combinedMessage,
      source: "overlay",
      businessType: businessType || undefined,
      totalPrice: total.toFixed(2),
      selectedServices: structured, // nur primitive Werte
      servicesHtml: `<ul>${selectedSummaryHTML}</ul>`,
      pronouns: pronouns || undefined,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || json.error || "Fehler beim Senden");

      alert("Vielen Dank für deine Nachricht!");
      onClose?.();
    } catch (err) {
      console.error("Fehler beim Senden:", err);
      alert("Ups! Da ist was schiefgelaufen.");
    }
  };

  // Preisformartierung
  const DEC0 = new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const euroDash = (value, { star = false } = {}) => {
    const rounded = Math.round(Number(value) || 0);
    return `${DEC0.format(rounded)} ,-` + (star ? "*" : "");
  };

  return (
    <OverlayWrapper>
      <CloseButton onClick={onClose}>×</CloseButton>

      <OverlayTwoCol>
        {/* Linke Spalte: read-only Auswahl */}
        <SummaryCol>
          <SummaryBox>
            <h5>Deine Auswahl</h5>
            {structured.length === 0 ? (
              <Empty>Du hast noch keine Leistungen ausgewählt.</Empty>
            ) : (
              <>
                <List>
                  {structured.map((x, i) => (
                    <li key={i}>
                      <Row>
                        <span>
                          {x.title}
                          {x.count > 1 ? ` (${x.count}x)` : ""}
                        </span>
                        <strong>{euroDash(x.price)}</strong>
                      </Row>
                    </li>
                  ))}
                </List>
                <TotalRow>
                  <span>Gesamtsumme</span>

                  <strong>{euroDash(total, { star: true })}</strong>
                </TotalRow>
                <p>*EUR zzgl. MwSt.</p>
              </>
            )}
            <ChangeButton type="button" onClick={onClose}>
              Auswahl ändern
            </ChangeButton>
          </SummaryBox>
        </SummaryCol>

        {/* Rechte Spalte: Formular */}
        <FormCol>
          <OverlayFormContainer onSubmit={handleSubmit}>
            <h5>Angebotsanfrage</h5>

            <OverlayLabel htmlFor="pronouns">Pronomen</OverlayLabel>
            <OverlaySelect id="pronouns" name="pronouns" value={data.pronouns} onChange={handleChange}>
              <option value="" disabled>
                Bitte wählen
              </option>
              <option value="sie/ihr">sie/ihr</option>
              <option value="er/ihm">er/ihm</option>
              <option value="they/them">they/them</option>
              <option value="keine Angabe">keine Angabe</option>
              <option value="andere">andere…</option>
            </OverlaySelect>

            {data.pronouns === "andere" && (
              <>
                <OverlayLabel htmlFor="customPronouns">Eigene Pronomen</OverlayLabel>
                <OverlayInput
                  id="customPronouns"
                  name="customPronouns"
                  value={data.customPronouns}
                  onChange={handleChange}
                  placeholder="z. B. dey/deren"
                  required
                />
              </>
            )}

            <OverlayLabel htmlFor="firstName">Vorname</OverlayLabel>
            <OverlayInput id="firstName" name="firstName" value={data.firstName} onChange={handleChange} required />

            <OverlayLabel htmlFor="lastName">Nachname</OverlayLabel>
            <OverlayInput id="lastName" name="lastName" value={data.lastName} onChange={handleChange} />

            <OverlayLabel htmlFor="company">Firma</OverlayLabel>
            <OverlayInput id="company" name="company" value={data.company} onChange={handleChange} />

            <OverlayLabel htmlFor="email">Email</OverlayLabel>
            <OverlayInput id="email" name="email" type="email" value={data.email} onChange={handleChange} required />

            <OverlayLabel htmlFor="message">Nachricht</OverlayLabel>
            <OverlayTextArea id="message" name="message" value={data.message} onChange={handleChange} placeholder="Was dürfen wir für dich umsetzen?" />

            <OverlaySubmitButton type="submit">Abschicken</OverlaySubmitButton>
          </OverlayFormContainer>
        </FormCol>
      </OverlayTwoCol>
    </OverlayWrapper>
  );
}

const OverlayWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background-color: rgba(10, 10, 10, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-xl);
`;

const OverlayFormContainer = styled.form`
  background-color: ${theme.color.beige};
  border: 1px solid ${theme.color.dark};
  border-radius: ${theme.borderRadius};
  padding: var(--spacing-xl);
  width: 100%;
  max-width: 600px;
  color: ${theme.color.dark};
  display: flex;
  flex-direction: column;
  /* gap: var(--spacing-xs); */

  label {
    font-weight: ${theme.fontWeight.bold};
  }

  h5 {
    margin: 0;
    padding: 0;
  }
`;

const OverlayLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${theme.color.dark};
  font-size: var(--font-s);
  margin: var(--spacing-s) 0 calc(0.5 * var(--spacing-xs)) 0;
`;

const controlBase = `
  padding: var(--spacing-xs);
  background-color: ${theme.color.beige} !important;
  border: 1px solid ${theme.color.dark} !important;
  color: ${theme.color.dark};
  border-radius: calc(0.5*${theme.borderRadius});
  &:focus {
    outline: none;
    background-color: ${theme.color.green} !important;
    color: ${theme.color.dark} !important;
    border-color: ${theme.color.green};
  }
      &:hover {
    outline: none;
    background-color: ${theme.color.green} !important;
    color: ${theme.color.dark} !important;
    border-color: ${theme.color.green};
  }

  &&&:-webkit-autofill,
  &&&:-webkit-autofill:hover,
  &&&:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px ${theme.color.beige} inset !important;
    -webkit-text-fill-color: ${theme.color.dark} !important;
    caret-color: ${theme.color.dark};
    transition: background-color 0s;
  }
    &&&:-webkit-autofill:focus{
        -webkit-box-shadow: 0 0 0 1000px ${theme.color.green} inset !important;
    -webkit-text-fill-color: ${theme.color.dark} !important;
    caret-color: ${theme.color.dark};
    transition: background-color 0s;
    }
`;

const OverlayInput = styled.input`
  ${controlBase}
`;
const OverlaySelect = styled.select`
  ${controlBase}
  /* native Pfeile reduzieren */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: none;

  & option {
    color: ${theme.color.dark};
    background: ${theme.color.beige};
  }
`;
const OverlayTextArea = styled.textarea`
  ${controlBase}
  height: 150px;
  resize: none;
  margin-bottom: var(--spacing-s);
`;

const OverlaySubmitButton = styled.button`
  padding: var(--spacing-s) var(--spacing-m);
  font-size: var(--font-m);
  font-weight: ${theme.fontWeight.regular};
  background-color: ${theme.color.beige};
  color: ${theme.color.dark};
  border: 1px solid ${theme.color.dark};
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-m);
  right: var(--spacing-m);
  background: none;
  border: none;
  font-size: var(--font-l);
  color: ${theme.color.green};
  cursor: pointer;

  &:hover {
    color: ${theme.color.beige};
  }
`;

const OverlayTwoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
  width: 100%;
  max-width: 1000px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const SummaryCol = styled.div`
  width: 100%;
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }
`;

const FormCol = styled.div`
  width: 100%;
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }
`;

const SummaryBox = styled.aside`
  background: ${theme.color.beige};
  color: ${theme.color.dark};
  border: 1px solid ${theme.color.dark};
  border-radius: ${theme.borderRadius};
  padding: var(--spacing-l);
  p {
    font-size: var(--font-xs);
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: var(--spacing-m) 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-m);
  padding: var(--spacing-xs) 0;

  span {
    font-size: var(--font-s);
    text-transform: uppercase;
  }
  strong {
    white-space: nowrap;
  }
`;

const TotalRow = styled(Row)`
  border-top: 1px solid ${theme.color.dark};
  margin-top: 0;
  padding: var(--spacing-s) 0 calc(0.5 * var(--spacing-xs)) 0;
  span {
    font-weight: ${theme.fontWeight.bold};
  }
`;

const ChangeButton = styled.button`
  margin-top: var(--spacing-m);
  width: 100%;
  padding: var(--spacing-xs) var(--spacing-m);
  color: ${theme.color.dark};
  background: ${theme.color.beige};
  border: 1px solid ${theme.color.dark};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${theme.color.green};
  }
`;

const Empty = styled.p`
  opacity: 0.8;
`;

// import styled from "styled-components";
// import { useState } from "react";
// import { theme } from "@/styles";

// export default function ContactOverlayForm({ selectedServices, serviceCounts, businessType, onClose }) {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     pronouns: "", // "", "sie/ihr", "er/ihm", "they/them", "keine Angabe", "andere"
//     customPronouns: "", // nur falls "andere"
//     company: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // --- NEU: React-Node/JSX sicher in Plain-Text umwandeln ---
//   const toPlainText = (node) => {
//     if (node == null) return "";
//     if (typeof node === "string" || typeof node === "number") return String(node);
//     if (Array.isArray(node)) return node.map(toPlainText).join(" ");
//     if (typeof node === "object" && "props" in node) {
//       // React-Element: Kinder als Text extrahieren
//       return toPlainText(node.props?.children);
//     }
//     return "";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const rabatt = businessType === "Start-up" ? 0.9 : businessType === "Vereine & Organisationen" ? 0.8 : 1;

//     // --- WICHTIG: Titel IMMER zu String normalisieren (keine React-Objekte im Payload) ---
//     const selectedServicesStructured = (selectedServices || []).map((service) => {
//       const rawTitle = service.titlePlain ?? service.title; // kann JSX sein
//       const title = typeof rawTitle === "string" ? rawTitle : toPlainText(rawTitle);
//       const count = service.isCountable ? (serviceCounts?.[title] ?? 1) : 1;
//       const unitPrice = Number(service.price) || 0;
//       const price = unitPrice * count * rabatt;
//       return { title, count, unitPrice, price }; // <-- nur primitive Werte
//     });

//     const totalPrice = selectedServicesStructured.reduce((sum, s) => sum + s.price, 0);

//     // HTML-Liste für die Mail (Overlay-Summary)
//     const selectedSummaryHTML = selectedServicesStructured
//       .map((s) => `<li>${s.title}${s.count > 1 ? ` (${s.count}x)` : ""} – ${s.price.toFixed(2)} €</li>`)
//       .join("");

//     // kombinierte Nachricht (inkl. Übersicht)
//     const combinedMessage = `
//       <p>${(formData.message || "").replace(/\n/g, "<br>")}</p>
//       <p><strong>Ausgewählte Leistungen:</strong></p>
//       <ul>${selectedSummaryHTML}</ul>
//       <p><strong>Gesamtsumme:</strong> ${totalPrice.toFixed(2)} €</p>
//       <p><strong>Business-Typ:</strong> ${businessType || "-"}</p>
//     `;

//     // Name & Pronomen normalisieren
//     const fullName = [formData.firstName, formData.lastName].filter(Boolean).join(" ").trim();
//     const pronouns = formData.pronouns === "andere" ? (formData.customPronouns || "").trim() : formData.pronouns;

//     const payload = {
//       // Backend erwartet weiterhin "name"
//       name: fullName || undefined,
//       company: formData.company || undefined,
//       email: formData.email,
//       message: combinedMessage,
//       source: "overlay",
//       businessType: businessType || undefined,
//       totalPrice: totalPrice.toFixed(2),
//       selectedServices: selectedServicesStructured, // <-- primitives only
//       servicesHtml: `<ul>${selectedSummaryHTML}</ul>`,
//       pronouns: pronouns || undefined,
//     };

//     // Optional: schnelle Diagnose (kannst du auch wieder entfernen)
//     // JSON.stringify(payload);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || data.error || "Fehler beim Senden");

//       alert("Vielen Dank für deine Nachricht!");
//       onClose?.();
//     } catch (err) {
//       console.error("Fehler beim Senden:", err);
//       alert("Ups! Da ist was schiefgelaufen.");
//     }
//   };

//   return (
//     <OverlayWrapper>
//       <CloseButton onClick={onClose}>×</CloseButton>

//       <OverlayFormContainer onSubmit={handleSubmit}>
//         <h5>Angebotsanfrage</h5>
//         <OverlayLabel htmlFor="pronouns">Pronomen</OverlayLabel>
//         <OverlaySelect id="pronouns" name="pronouns" value={formData.pronouns} onChange={handleChange} required>
//           <option value="" disabled>
//             Bitte wählen
//           </option>
//           <option value="sie/ihr">sie/ihr</option>
//           <option value="er/ihm">er/ihm</option>
//           <option value="they/them">they/them</option>
//           <option value="keine Angabe">keine Angabe</option>
//           <option value="andere">andere…</option>
//         </OverlaySelect>

//         {formData.pronouns === "andere" && (
//           <>
//             <OverlayLabel htmlFor="customPronouns">Eigene Pronomen</OverlayLabel>
//             <OverlayInput
//               id="customPronouns"
//               name="customPronouns"
//               value={formData.customPronouns}
//               onChange={handleChange}
//               placeholder="z. B. dey/deren"
//               required
//             />
//           </>
//         )}

//         {/* Vor- & Nachname */}
//         <OverlayLabel htmlFor="firstName">Vorname</OverlayLabel>
//         <OverlayInput id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

//         <OverlayLabel htmlFor="lastName">Nachname</OverlayLabel>
//         <OverlayInput id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />

//         {/* Firma / Email */}
//         <OverlayLabel htmlFor="company">Firma</OverlayLabel>
//         <OverlayInput id="company" name="company" value={formData.company} onChange={handleChange} />

//         <OverlayLabel htmlFor="email">Email</OverlayLabel>
//         <OverlayInput id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />

//         {/* Nachricht */}
//         <OverlayLabel htmlFor="message">Nachricht</OverlayLabel>
//         <OverlayTextArea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Was dürfen wir für dich umsetzen?" />

//         <OverlaySubmitButton type="submit">Abschicken</OverlaySubmitButton>
//       </OverlayFormContainer>
//     </OverlayWrapper>
//   );
// }

// /* ------------------------ Styles ------------------------ */

// const OverlayWrapper = styled.div`
//   position: fixed;
//   inset: 0;
//   z-index: 200;
//   background-color: rgba(10, 10, 10, 0.85);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: var(--spacing-xl);
// `;

// const OverlayFormContainer = styled.form`
//   background-color: ${theme.color.beige};
//   border: 1px solid ${theme.color.dark};
//   border-radius: ${theme.borderRadius};
//   padding: var(--spacing-xl);
//   width: 100%;
//   max-width: 600px;
//   color: ${theme.color.dark};
//   display: flex;
//   flex-direction: column;
//   /* gap: var(--spacing-xs); */

//   label {
//     font-weight: ${theme.fontWeight.bold};
//   }

//   h5 {
//     margin: 0;
//     padding: 0;
//   }
// `;

// const OverlayLabel = styled.label`
//   display: flex;
//   align-items: center;
//   color: ${theme.color.dark};
//   font-size: var(--font-s);
//   margin: var(--spacing-s) 0 calc(0.5 * var(--spacing-xs)) 0;
// `;

// const controlBase = `
//   padding: var(--spacing-xs);
//   background-color: ${theme.color.beige} !important;
//   border: 1px solid ${theme.color.dark} !important;
//   color: ${theme.color.dark};
//   border-radius: calc(0.5*${theme.borderRadius});
//   &:focus {
//     outline: none;
//     background-color: ${theme.color.green} !important;
//     color: ${theme.color.dark} !important;
//     border-color: ${theme.color.green};
//   }
//       &:hover {
//     outline: none;
//     background-color: ${theme.color.green} !important;
//     color: ${theme.color.dark} !important;
//     border-color: ${theme.color.green};
//   }

//   &&&:-webkit-autofill,
//   &&&:-webkit-autofill:hover,
//   &&&:-webkit-autofill:focus {
//     -webkit-box-shadow: 0 0 0 1000px ${theme.color.beige} inset !important;
//     -webkit-text-fill-color: ${theme.color.dark} !important;
//     caret-color: ${theme.color.dark};
//     transition: background-color 0s;
//   }
//     &&&:-webkit-autofill:focus{
//         -webkit-box-shadow: 0 0 0 1000px ${theme.color.green} inset !important;
//     -webkit-text-fill-color: ${theme.color.dark} !important;
//     caret-color: ${theme.color.dark};
//     transition: background-color 0s;
//     }
// `;

// const OverlayInput = styled.input`
//   ${controlBase}
// `;
// const OverlaySelect = styled.select`
//   ${controlBase}
//   /* native Pfeile reduzieren */
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   background-image: none;

//   & option {
//     color: ${theme.color.dark};
//     background: ${theme.color.beige};
//   }
// `;
// const OverlayTextArea = styled.textarea`
//   ${controlBase}
//   height: 150px;
//   resize: none;
//   margin-bottom: var(--spacing-s);
// `;

// const OverlaySubmitButton = styled.button`
//   padding: var(--spacing-s) var(--spacing-m);
//   font-size: var(--font-m);
//   font-weight: ${theme.fontWeight.regular};
//   background-color: ${theme.color.beige};
//   color: ${theme.color.dark};
//   border: 1px solid ${theme.color.dark};
//   cursor: pointer;
//   text-transform: uppercase;

//   &:hover {
//     background-color: ${theme.color.green};
//     color: ${theme.color.dark};
//   }
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: var(--spacing-m);
//   right: var(--spacing-m);
//   background: none;
//   border: none;
//   font-size: var(--font-l);
//   color: ${theme.color.green};
//   cursor: pointer;

//   &:hover {
//     color: ${theme.color.beige};
//   }
// `;
