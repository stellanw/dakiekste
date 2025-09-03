// ContactOverlayForm.js
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { theme } from "@/styles";
import { PiArrowDownThin, PiX } from "react-icons/pi";
import Link from "next/link";

export default function ContactOverlayForm({ selectedServices = [], serviceCounts = {}, businessType, formData, setFormData, priceOnRequest = false, onClose }) {
  const initialForm = {
    fullName: "",
    pronouns: "",
    customPronouns: "",
    company: "",
    email: "",
    message: "",
    acceptedTerms: false,
  };

  const [localForm, setLocalForm] = useState(initialForm);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const isControlled = !!formData && !!setFormData;
  const data = isControlled ? formData : localForm;
  const setData = isControlled ? setFormData : setLocalForm;

  const showOnRequest = !!priceOnRequest;

  const resetForm = () => {
    if (isControlled) {
      setFormData(initialForm);
    } else {
      setLocalForm(initialForm);
    }
    setResponseMessage("");
    setIsSuccess(false);
    setIsError(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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

  // ContactOverlayForm.js – NUR diese Funktion ersetzen
  const handleSubmit = async (e) => {
    e.preventDefault();

    // strukturierte Auswahl liegt schon in `structured`
    const selectedSummaryHTML = structured
      .map((s) => {
        const countStr = s.count > 1 ? ` (${s.count}x)` : "";
        const priceStr = showOnRequest ? "auf Anfrage" : `${s.price.toFixed(2)} €`;
        return `<li>${s.title}${countStr} – ${priceStr}</li>`;
      })
      .join("");

    const totalStr = showOnRequest ? undefined : Number(total.toFixed(2)); // als Zahl schicken
    const pronouns = data.pronouns === "andere" ? (data.customPronouns || "").trim() : data.pronouns;

    // ⬇️ WICHTIG: Nachricht jetzt **ohne** Services/Total/Business-Typ
    // Rohtext senden; das API formatiert \n → <p>/<br>
    const payload = {
      name: data.fullName || undefined,
      company: data.company || undefined,
      email: data.email,
      message: data.message || "", // <-- nur freie Nachricht
      source: "overlay",
      businessType: businessType || undefined,
      acceptedTerms: data.acceptedTerms || false,

      // Leistungen separat
      servicesHtml: `<ul>${selectedSummaryHTML}</ul>`,
      totalPrice: totalStr, // Zahl (oder undefined bei "auf Anfrage")
      selectedServices: structured.map((s) => ({
        title: s.title,
        count: s.count,
        unitPrice: showOnRequest ? undefined : s.unitPrice,
        price: showOnRequest ? undefined : s.price,
      })),
      // optionaler Anzeige-String fürs Fallback
      priceDisplay: showOnRequest ? "auf Anfrage" : `${total.toFixed(2)} €`,

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

      // Reset
      if (isControlled) setFormData(initialForm);
      else setLocalForm(initialForm);

      setResponseMessage("Wir melden uns in Kürze bei dir mit weiteren Infos oder einem Angebot.");
      setIsSuccess(true);
    } catch (err) {
      console.error("Fehler beim Senden:", err);
      setResponseMessage("Da ist etwas schiefgelaufen. Bitte versuch es nochmal.");
      setIsError(true);
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(`(max-width: ${theme.breakpoints.mobile})`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    return () => (mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update));
  }, []);

  const listRef = useRef(null);
  const [showDownHint, setShowDownHint] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) {
      setShowDownHint(false);
      return;
    }

    const update = () => {
      const canScroll = el.scrollHeight > el.clientHeight + 1;
      const atBottom = el.scrollTop >= el.scrollHeight - el.clientHeight - 2;
      setShowDownHint(canScroll && !atBottom);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isMobile, structured.length]);

  //fix body to prevent scrolling
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, []);

  return (
    <OverlayWrapper>
      <OverlayTwoCol>
        {!isSuccess && (
          <SummaryCol>
            <SummaryBox>
              <SummaryTop>
                <h5>Deine Auswahl</h5>
                {structured.length === 0 ? (
                  <Empty>Du hast noch keine Leistungen ausgewählt.</Empty>
                ) : (
                  <ListWrap>
                    <List ref={!isMobile ? listRef : null}>
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
                      <ScrollHint type="button" onClick={() => listRef.current?.scrollBy({ top: listRef.current.clientHeight * 0.8, behavior: "smooth" })} aria-label="Weiter nach unten" title="Weiter nach unten">
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
                      </>
                    )}
                  </>
                )}
                <OverlayInfo>*EUR zzgl. MwSt. Die Preisangaben sind eine unverbindliche Ersteinschätzung. Mit deiner Anfrage buchst du noch nichts – du erhältst entweder direkt ein individuelles Angebot oder wir vereinbaren ein Erstgespräch, um den Umfang deines Projekts genauer zu bestimmen.</OverlayInfo>
                <ChangeButton type="button" onClick={onClose}>
                  Auswahl ändern
                </ChangeButton>
              </SummaryBottom>
            </SummaryBox>
          </SummaryCol>
        )}

        <FormCol $isSuccess={isSuccess}>
          {isSuccess ? (
            <StyledSuccessMessage>
              <CloseButton onClick={onClose}>
                <PiX />
              </CloseButton>
              <h3>Danke für deine Nachricht!</h3>
              <p>{responseMessage}</p>
              {/* <StyledButton
                type="button"
                onClick={() => {
                  setResponseMessage("");
                  setIsSuccess(false);
                }}
              >
                Neue Nachricht senden
              </StyledButton> */}
            </StyledSuccessMessage>
          ) : isError ? (
            <StyledSuccessMessage>
              <h3>Ups!</h3>
              <p>{responseMessage}</p>
              <StyledButton onClick={resetForm}>Erneut versuchen</StyledButton>
            </StyledSuccessMessage>
          ) : (
            <OverlayFormContainer onSubmit={handleSubmit}>
              <CloseButton onClick={onClose}>
                <PiX />
              </CloseButton>
              <h5>Angebotsanfrage</h5>

              <PronounRow>
                <PronounCol>
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
                </PronounCol>

                {data.pronouns === "andere" && (
                  <PronounCol>
                    <OverlayLabel htmlFor="customPronouns">Eigene</OverlayLabel>
                    <OverlayInput id="customPronouns" name="customPronouns" value={data.customPronouns} onChange={handleChange} placeholder="z. B. dey/deren" required />
                  </PronounCol>
                )}
              </PronounRow>

              <OverlayLabel htmlFor="fullName">Vor und Nachname</OverlayLabel>
              <OverlayInput id="fullName" name="fullName" value={data.fullName} onChange={handleChange} placeholder="" required />

              <OverlayLabel htmlFor="company">Firma</OverlayLabel>
              <OverlayInput id="company" name="company" value={data.company} onChange={handleChange} />

              <OverlayLabel htmlFor="email">Email</OverlayLabel>
              <OverlayInput id="email" name="email" type="email" value={data.email} onChange={handleChange} pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$" title="Bitte gib eine gültige E-Mail-Adresse ein (z. B. name@domain.de)" inputMode="email" autoComplete="email" required />

              <MobileListBox>
                <StyledSummaryHeadline>Deine Auswahl</StyledSummaryHeadline>
                <SummaryMobil ref={isMobile ? listRef : null}>
                  {structured.length === 0 ? (
                    <Empty>Du hast noch keine Leistungen ausgewählt.</Empty>
                  ) : (
                    <ListWrap>
                      <List>
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
                    </ListWrap>
                  )}
                </SummaryMobil>
                {isMobile && showDownHint && (
                  <ScrollHint type="button" onClick={() => listRef.current?.scrollBy({ top: listRef.current.clientHeight * 0.8, behavior: "smooth" })}>
                    <PiArrowDownThin />
                  </ScrollHint>
                )}
              </MobileListBox>

              <OverlayLabel htmlFor="message">Nachricht</OverlayLabel>
              <OverlayTextArea id="message" name="message" value={data.message} onChange={handleChange} placeholder="Was dürfen wir für dich umsetzen?" />

              <StyledCheckboxGroup>
                <label>
                  <label htmlFor="acceptedTerms">
                    <input type="checkbox" id="acceptedTerms" name="acceptedTerms" checked={data.acceptedTerms} onChange={handleChange} onInvalid={(e) => e.target.setCustomValidity("Bitte akzeptiere die AGBs & Datenschutz, um fortzufahren.")} onInput={(e) => e.target.setCustomValidity("")} required />
                    Ich akzeptiere <StyledLink href="/impressum">AGB & Datenschutz</StyledLink>
                  </label>
                </label>
              </StyledCheckboxGroup>

              <MobileChangeButton type="button" onClick={onClose}>
                Auswahl ändern
              </MobileChangeButton>
              <OverlaySubmitButton type="submit">Abschicken</OverlaySubmitButton>
            </OverlayFormContainer>
          )}
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

  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`;

const OverlayFormContainer = styled.form`
  position: relative;
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

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 800px;
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
  margin-bottom: var(--spacing-xs);
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

const OverlaySelect = styled.select`
  ${controlBase}

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: calc(2.1 * var(--spacing-m));
  }

  padding-right: calc(var(--arrow-offset) + var(--arrow-size) * 2 + 8px);

  display: block;
  width: 100%;

  &::-ms-expand {
    display: none;
  }
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 10px center; /* Abstand vom Rand */
  background-size: 1rem;
  /* Standard: Pfeil grün */
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><polyline points='5 7 10 12 15 7' fill='none' stroke='${theme.color.dark.replace("#", "%23")}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");

  &:focus,
  &:active {
    outline: none;
    color: ${theme.color.dark};
    background-color: ${theme.color.green};

    border-color: ${theme.color.green};
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
  margin-bottom: calc(0.5 * var(--spacing-xs));
`;

const OverlaySubmitButton = styled.button`
  padding: var(--spacing-xs);
  margin-top: var(--spacing-xs);
  font-size: var(--font-s);
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
  color: ${theme.color.dark};
  z-index: 100;
  cursor: pointer;

  &:hover {
    color: ${theme.color.green};
    svg {
      stroke-width: 10px;
    }
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    top: var(--spacing-s);
    right: var(--spacing-s);
  }
`;

const OverlayTwoCol = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-l);
  width: 100%;
  max-width: 1000px;

  height: calc(100dvh - 2 * var(--overlay-pad));

  /* overflow: hidden; */
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
  justify-content: center;
  min-height: 0;
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: ${({ $isSuccess }) => ($isSuccess ? "100%" : "50%")};
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
  height: 40px;
  border: none;
  border-radius: 0;
  background: none;
  z-index: 1;
  color: ${theme.color.dark};
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: -40px 0 0 0;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, ${theme.color.beige} 85%);
    z-index: -1;
  }

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

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 1px;
    &::before {
      content: "";
      position: absolute;
      inset: -40px 0 0 0;
      pointer-events: none;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, ${theme.color.beige} 85%);
      z-index: -1;
    }
  }
`;

const SummaryMobil = styled.div`
  position: relative;
  display: none;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  margin: 0 0 var(--spacing-xs) 0;

  max-height: 80px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
  }
`;

const StyledSummaryHeadline = styled.h5`
  font-size: var(--font-s);
  margin-bottom: var(--spacing-s);
  letter-spacing: 0.003rem;
  display: none;
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
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

  ${SummaryMobil} & {
    padding-bottom: var(--spacing-xs);

    span {
      font-size: var(--font-xs);
      padding-bottom: 0;
    }
    strong {
      font-size: var(--font-xs);
    }
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
  font-size: var(--font-s);
  padding: var(--spacing-xs);
  margin-top: var(--spacing-xs);
  width: 100%;
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
  ${SummaryMobil} & {
    font-size: var(--font-xs);
    margin-bottom: var(--spacing-xs);
  }
`;

const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: var(--spacing-xs);
  row-gap: 0;
  padding-bottom: calc(0.5 * var(--spacing-xs));
  font-size: var(--font-xs);
  label {
    font-weight: ${theme.fontWeight.light};
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin-bottom: 0;
    margin-left: -3px;
    color: ${theme.color.dark};
  }
`;

const StyledLink = styled(Link)`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.dark};
  padding: 0 0.2rem;

  &:hover {
    color: ${theme.color.green};
  }
`;

const OverlayInfo = styled.p`
  font-size: var(--font-xs);
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.color.dark};
  opacity: 0.7;
  margin: var(--spacing-s) 0 0 0;

  svg {
    margin-right: 3px;
  }
`;

const StyledSuccessMessage = styled.div`
  position: relative;
  background-color: ${theme.color.beige};
  border: 1px solid ${theme.color.dark};
  border-radius: ${theme.borderRadius};
  padding: var(--side-padding);
  width: 100%;
  max-width: 600px;
  color: ${theme.color.dark};
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
  }

  p {
    /* margin-bottom: var(--spacing-m); */

    line-height: ${theme.lineHeight.xxl};
  }
`;

const StyledButton = styled.button`
  font-size: var(--font-s);
  padding: var(--spacing-xs);
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

const MobileChangeButton = styled.button`
  font-size: var(--font-s);
  padding: var(--spacing-xs);

  width: 100%;
  color: ${theme.color.dark};
  background: ${theme.color.beige};
  border: 1px solid ${theme.color.dark};
  text-transform: uppercase;
  cursor: pointer;
  display: none; /* default: ausgeblendet */

  &:hover {
    background: ${theme.color.green};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
  }
`;

const PronounRow = styled.div`
  display: flex;
  gap: var(--spacing-xs);

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: calc(0.5 * var(--spacing-xs));
  }
`;

const PronounCol = styled.div`
  flex: 1 1 50%;
  min-width: 0;
`;

const MobileListBox = styled.div`
  position: relative; /* Anker fürs Overlay */
`;
