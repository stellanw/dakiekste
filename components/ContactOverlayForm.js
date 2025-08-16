import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { theme } from "@/styles";
import { PiArrowDownThin, PiX } from "react-icons/pi";

export default function ContactOverlayForm({
  selectedServices = [],
  serviceCounts = {},
  businessType,
  formData,
  setFormData,
  priceOnRequest = false,
  onClose,
}) {
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

  const showOnRequest = !!priceOnRequest;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const toPlainText = (node) => {
    if (node == null) return "";
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(toPlainText).join(" ");
    if (typeof node === "object" && "props" in node) return toPlainText(node.props?.children);
    return "";
  };

  const rabatt = businessType === "Soloselbstständig" ? 0.7 : 1;

  const structured = (selectedServices || []).map((service) => {
    const rawTitle = service.titlePlain ?? service.title;
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

    const selectedSummaryHTML = structured
      .map((s) => {
        const countStr = s.count > 1 ? ` (${s.count}x)` : "";
        const priceStr = showOnRequest ? "auf Anfrage" : `${s.price.toFixed(2)} €`;
        return `<li>${s.title}${countStr} – ${priceStr}</li>`;
      })
      .join("");

    const totalStr = showOnRequest ? "auf Anfrage" : `${total.toFixed(2)} €`;

    const combinedMessage = `
  <p>${(data.message || "").replace(/\n/g, "<br>")}</p>
  <p><strong>Ausgewählte Leistungen:</strong></p>
  <ul>${selectedSummaryHTML}</ul>
  <p><strong>Gesamtsumme:</strong> ${totalStr}</p>
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

      servicesHtml: `<ul>${selectedSummaryHTML}</ul>`,
      pronouns: pronouns || undefined,

      totalPrice: showOnRequest ? undefined : total.toFixed(2),
      selectedServices: structured.map((s) => ({
        title: s.title,
        count: s.count,
        unitPrice: showOnRequest ? undefined : s.unitPrice,
        price: showOnRequest ? undefined : s.price,
      })),
      servicesHtml: `<ul>${selectedSummaryHTML}</ul>`,
      priceDisplay: showOnRequest ? "auf Anfrage" : `${total.toFixed(2)} €`,
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

  const DEC0 = new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const euroDash = (value, { star = false } = {}) => {
    const rounded = Math.round(Number(value) || 0);
    return `${DEC0.format(rounded)} ,-` + (star ? "*" : "");
  };

  /// Down Button
  const listRef = useRef(null);
  const [showDownHint, setShowDownHint] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const update = () => {
      const canScroll = el.scrollHeight > el.clientHeight + 1;
      const atBottom = el.scrollTop >= el.scrollHeight - el.clientHeight - 2;
      setShowDownHint(canScroll && !atBottom);
    };

    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [structured.length]); // neu berechnen, wenn Auswahl sich ändert

  return (
    <OverlayWrapper>
      <OverlayTwoCol>
        <SummaryCol>
          <SummaryBox>
            <SummaryTop>
              <h5>Deine Auswahl</h5>

              {structured.length === 0 ? (
                <Empty>Du hast noch keine Leistungen ausgewählt.</Empty>
              ) : (
                <ListWrap>
                  <List ref={listRef}>
                    {structured.map((x, i) => (
                      <li key={i}>
                        <Row>
                          <span>
                            {x.title}
                            {x.count > 1 ? ` (${x.count}x)` : ""}
                          </span>
                          <strong>{showOnRequest ? "auf Anfrage" : euroDash(x.price)}</strong>
                        </Row>
                      </li>
                    ))}
                  </List>

                  {showDownHint && (
                    <ScrollHint
                      type="button"
                      onClick={() => {
                        const el = listRef.current;
                        if (!el) return;
                        el.scrollBy({ top: el.clientHeight * 0.8, behavior: "smooth" });
                      }}
                      aria-label="Weiter nach unten"
                      title="Weiter nach unten"
                    >
                      <PiArrowDownThin />
                    </ScrollHint>
                  )}
                </ListWrap>
              )}
            </SummaryTop>

            <SummaryBottom>
              {structured.length > 0 && (
                <>
                  {showOnRequest ? (
                    <TotalRow>
                      <span>Gesamtsumme</span>
                      <strong>auf Anfrage</strong>
                    </TotalRow>
                  ) : (
                    <>
                      <TotalRow>
                        <span>Gesamtsumme</span>
                        <strong>{euroDash(total, { star: true })}</strong>
                      </TotalRow>
                      <p>*EUR zzgl. MwSt.</p>
                    </>
                  )}
                </>
              )}

              <ChangeButton type="button" onClick={onClose}>
                Auswahl ändern
              </ChangeButton>
            </SummaryBottom>
          </SummaryBox>
        </SummaryCol>

        <FormCol>
          <CloseButton onClick={onClose}>
            <PiX />
          </CloseButton>
          <OverlayFormContainer onSubmit={handleSubmit}>
            <h5>Angebotsanfrage</h5>

            <OverlayLabel htmlFor="pronouns">Pronomen</OverlayLabel>
            <SelectWrap>
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
            </SelectWrap>
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

  padding: calc(0.5 * var(--side-padding)) var(--side-padding);
`;

const OverlayFormContainer = styled.form`
  background-color: ${theme.color.beige};
  border: 1px solid ${theme.color.dark};
  border-radius: ${theme.borderRadius};
  padding: var(--spacing-l);
  width: 100%;
  max-width: 600px;
  color: ${theme.color.dark};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: var(--spacing-xl);
  }

  label {
    font-weight: ${theme.fontWeight.bold};
  }
`;

const OverlayLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${theme.color.dark};
  font-size: var(--font-s);
  margin-bottom: calc(0.5 * var(--spacing-xs));
`;

const controlBase = `
  padding: calc(0.7*var(--spacing-xs)) var(--spacing-xs);
  margin-bottom: var(--spacing-s);
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
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: calc(2.1 * var(--spacing-m));
  }
`;

const SelectWrap = styled.div`
  /* Stell dir hier deine „Variablen“ ein */
  --arrow-size: 6px; /* Größe des Dreiecks */
  --arrow-color: ${theme.color.dark};
  --arrow-offset: 14px; /* Abstand vom rechten Rand */

  position: relative;
  width: 100%;

  /* Der Pfeil */
  &::after {
    content: "";
    position: absolute;
    top: 40%;

    right: var(--arrow-offset);
    transform: translateY(-50%);
    pointer-events: none;

    width: 0;
    height: 0;
    border-left: var(--arrow-size) solid transparent;
    border-right: var(--arrow-size) solid transparent;
    border-top: var(--arrow-size) solid ${theme.color.dark};
  }
`;

const OverlaySelect = styled.select`
  ${controlBase}

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: calc(2.1 * var(--spacing-m));
  }

  padding-right: calc(var(--arrow-offset) + var(--arrow-size) * 2 + 8px);

  display: block;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: none;

  &::-ms-expand {
    display: none;
  }

  & option {
    color: ${theme.color.dark};
    background: ${theme.color.beige};
  }
`;

const OverlayTextArea = styled.textarea`
  ${controlBase}
  flex: 1 1 auto;
  height: auto;
  max-height: none;
  min-height: 80px;
  resize: none;
  margin-bottom: var(--spacing-s);
`;

const OverlaySubmitButton = styled.button`
  padding: var(--spacing-xs) var(--spacing-m);
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
  top: var(--spacing-s);
  right: var(--spacing-s);
  background: none;
  border: none;
  font-size: var(--font-l);

  color: ${theme.color.dark};
  cursor: pointer;

  &:hover {
    color: ${theme.color.green};
    svg {
      stroke-width: 10px;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    top: var(--spacing-m);
    right: var(--spacing-m);
  }
`;

const OverlayTwoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
  width: 100%;
  max-width: 1000px;

  height: calc(100dvh - 2 * var(--overlay-pad));
  /* overflow: hidden; */

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const SummaryCol = styled.div`
  display: none;
  width: 100%;
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: block;
    width: 50%;
  }
`;

const FormCol = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  min-height: 0;
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }
`;

const SummaryBox = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${theme.color.beige};
  color: ${theme.color.dark};
  border: 1px solid ${theme.color.dark};
  border-radius: ${theme.borderRadius};
  padding: var(--spacing-l);
  height: 100%;
  p {
    font-size: var(--font-xs);
  }
`;

const SummaryTop = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 auto;
  min-height: 0; /* wichtig, damit die List innen scrollen darf */
`;

/* Unterer Block: Summe + Button nach unten */
const SummaryBottom = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: var(--spacing-m);
`;

const ListWrap = styled.div`
  position: relative;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 550px;
  overflow-y: auto;
  scroll-behavior: smooth;

  /* dezentere Scrollbar */
  scrollbar-width: thin;
  scrollbar-color: ${theme.color.dark} ${theme.color.beige};
  &::-webkit-scrollbar {
    width: 2px;
    right: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.color.dark};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.green};
  }
`;

const ScrollHint = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: end;
  justify-content: center;
  height: 100px;
  border: none;
  border-radius: 0;
  background: none;

  /* padding: calc(0.5 * var(--spacing-xs)); */
  /* bottom: calc(-0.66 * var(--spacing-l)); */
  /* background: linear-gradient(180deg, transparent, ${theme.color.dark} 1000%); */

  color: ${theme.color.dark};
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 5px;
  }

  &:hover {
    color: ${theme.color.green};
    svg {
      stroke-width: 10px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-m);
  padding-bottom: var(--spacing-s);
  padding-right: 10px;
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
  padding: var(--spacing-s) 10px calc(0.5 * var(--spacing-xs)) 0;
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
