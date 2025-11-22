import styled, { css } from "styled-components";
import { useState, useRef } from "react";
import { theme } from "@/styles";
import Link from "next/link";

export default function AnknipsenForm({ eventKey, eventLabel } = {}) {
  const initialFormData = {
    fullName: "",
    email: "",
    acceptedTerms: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const startedAtRef = useRef(Date.now());

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setIsSuccess(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setResponseMessage("Bitte gib eine gültige Emailadresse ein.");
      return;
    }

    if (!formData.fullName?.trim()) {
      setResponseMessage("Bitte gib deinen Namen ein.");
      return;
    }

    if (!formData.acceptedTerms) {
      setResponseMessage("Bitte akzeptiere die Hinweise zum Datenschutz.");
      return;
    }

    // Spam-Feld abfangen
    const hpValue = e.currentTarget.hp_web?.value || "";
    if (hpValue.trim() !== "") {
      // Bot: Erfolgsnachricht vorgaukeln, aber nichts tun
      setIsSuccess(true);
      setResponseMessage("Danke – du bist eingetragen.");
      setFormData(initialFormData);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        email: formData.email,
        name: formData.fullName.trim(),
        acceptedTerms: !!formData.acceptedTerms,
        source: "anknipsen",
        eventKey,
        eventLabel,
        ttft_ms: Date.now() - startedAtRef.current,
      };

      const res = await fetch("/api/anknipsen-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("API error:", data);
        throw new Error(data.message || data.error || "Fehler bei der Anmeldung");
      }

      setIsSuccess(true);
      setResponseMessage("Du bekommst alle Infos zu kommenden ANKNIPSEN-Terminen per Mail.");
      setFormData(initialFormData);
    } catch (err) {
      console.error("Fehler:", err);
      setResponseMessage("Ups! Da ist was schiefgelaufen. Versuch es bitte später noch einmal oder gib uns bescheid.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {" "}
      <HeaderWrapper>
        <Inner>
          <Title>
            AN
            <br />
            KNIPSEN
          </Title>
          <Subtitle>Melde dich an für das Event am {eventLabel}</Subtitle>
        </Inner>
      </HeaderWrapper>
      <StyledFormWrapper>
        {isSuccess ? (
          <StyledSuccessMessage>
            <h3>Schön, dass du am {eventLabel} dabei bist!</h3>
            <p>{responseMessage}</p>
            <StyledButton
              type="button"
              onClick={() => {
                setResponseMessage("");
                setIsSuccess(false);
              }}
            >
              Weitere Person anmelden
            </StyledButton>
          </StyledSuccessMessage>
        ) : (
          <StyledForm onSubmit={handleSubmit} noValidate>
            <SideBySideWrapper>
              <Wrapper>
                <label htmlFor="fullName">Vor- und Nachname</label>
                <StyledInput name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required maxLength={120} />
              </Wrapper>

              <Wrapper>
                <label htmlFor="email">Email</label>
                <StyledInput name="email" id="email" type="email" value={formData.email} onChange={handleChange} required maxLength={120} />
              </Wrapper>
            </SideBySideWrapper>

            {/* Honeypot-Feld */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 0, height: 0, overflow: "hidden" }}>
              <label htmlFor="hp_web">Website (leer lassen)</label>
              <input id="hp_web" name="hp_web" tabIndex={-1} autoComplete="off" />
            </div>

            <StyledCheckboxGroup>
              <input type="checkbox" id="acceptedTerms" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} required />
              <StyledLabel htmlFor="acceptedTerms">
                Ich akzeptiere die <StyledLink href="/impressum">Datenschutzerklärung</StyledLink> und bin einverstanden, dass ihr mir Neuigkeiten zu ANKNIPSEN per Email schickt. Falls du keine Neuigkeiten mehr per Email erhalten willst, kannst du dich <StyledLink href="/unsubscribe">hier</StyledLink> jederzeit abmelden.
              </StyledLabel>
            </StyledCheckboxGroup>

            <StyledButton type="submit" disabled={loading}>
              {loading ? "ANMELDEN..." : "ANMELDEN"}
            </StyledButton>
            {responseMessage && <FeedbackText>{responseMessage}</FeedbackText>}
          </StyledForm>
        )}
      </StyledFormWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  background-color: ${theme.color.green};
  width: 100%;
  padding: var(--spacing-xl) var(--side-padding);
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  max-width: var(--max-content);
  width: 100%;
`;

const Title = styled.h1`
  font-size: clamp(3rem, 14vw, 8rem);
  line-height: 0.9;
  font-weight: 800;
  color: ${theme.color.dark};
  text-transform: uppercase;
  margin: 0;
`;

const Subtitle = styled.h2`
  padding-top: var(--spacing-s);
`;

// === Styles Form ===

const FIELD_TRANSITION = "border-color 160ms ease, background-color 160ms ease, color 160ms ease";

const fieldBase = css`
  border: 1px solid ${theme.color.dark};
  background-color: ${theme.color.green};
  color: ${theme.color.dark};
  transition: ${FIELD_TRANSITION};

  &:hover {
    border-color: ${theme.color.beige};
    background-color: ${theme.color.beige};
    color: ${theme.color.dark};
  }

  &:is(:focus, :active) {
    outline: none;
    border-color: ${theme.color.dark};
    background-color: ${theme.color.beige}; // selected/active = beige
    color: ${theme.color.dark};
  }
`;

const StyledFormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  background-color: ${theme.color.green}; // vorher: dark
  width: 100%;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  label {
    color: ${theme.color.dark};
  }
  &::selection,
  & *::selection {
    background: ${theme.color.beige};
    color: ${theme.color.dark};
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--spacing-xxl) var(--side-padding);
  color: ${theme.color.dark}; // vorher beige
  position: relative;
  max-width: 750px;
  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-basis: 50%;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: var(--spacing-xxxl) var(--side-padding);
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: var(--spacing-xl) var(--side-padding);
  }

  > label {
    font-weight: ${theme.fontWeight.bold};
    letter-spacing: 0.035rem;
    color: ${theme.color.dark}; // vorher beige
    padding-top: calc(0.5 * var(--spacing-xs));
    margin-bottom: calc(0.75 * var(--spacing-xs)) !important;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: var(--font-xs) !important;
      font-weight: ${theme.fontWeight.regular};
      padding-top: var(--spacing-s);
    }
  }

  input[type="checkbox"] {
    border: 2px solid ${theme.color.dark}; // dunkler Rahmen
    outline: none;
    accent-color: ${theme.color.beige}; // Haken in beige
  }
  input[type="checkbox"]:hover {
    border: 2px solid ${theme.color.dark};
    background-color: ${theme.color.beige};
  }

  input[type="checkbox"]:is(:hover, :focus-visible, :active):not(:checked) {
    border: 2px solid ${theme.color.dark};
    background-color: ${theme.color.beige};
  }

  input[type="checkbox"]:active {
    border: 1px solid ${theme.color.dark};
  }

  input[type="checkbox"]:checked {
    border: 2px solid ${theme.color.dark};
    background-color: ${theme.color.beige};
  }

  input[type="checkbox"]:focus-visible {
    outline: 2px solid ${theme.color.dark};
    outline-offset: 2px;
  }
`;

const StyledButton = styled.button`
  padding: var(--spacing-xs) var(--spacing-m);
  color: ${theme.color.dark};
  background-color: ${theme.color.green};
  font-size: var(--font-m);
  font-weight: ${theme.fontWeight.regular};
  letter-spacing: 0.08rem;
  cursor: pointer;
  border: 1px solid ${theme.color.dark};
  text-transform: uppercase;
  transition:
    background-color 100ms ease,
    color 100ms ease,
    border-color 100ms ease;

  height: calc(2.8 * var(--spacing-m));

  @media (min-width: ${theme.breakpoints.desktop}) {
    height: auto;
    width: 48%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }

  &:hover {
    background-color: ${theme.color.dark};
    color: ${theme.color.green};
    border-color: ${theme.color.dark};
    font-weight: ${theme.fontWeight.bold};
  }

  &:active {
    border-color: ${theme.color.dark};
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;

const StyledInput = styled.input`
  ${fieldBase};
  &:hover {
    border-color: ${theme.color.dark};
  }
  margin-bottom: var(--spacing-xs);
  padding: var(--spacing-xs);
  height: calc(2.8 * var(--spacing-m));
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktop}) {
    height: var(--spacing-l);
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${theme.color.green} inset;
    -webkit-text-fill-color: ${theme.color.dark};
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${theme.color.beige} inset;
    -webkit-text-fill-color: ${theme.color.dark};
  }

  &:-webkit-autofill:hover {
    -webkit-text-fill-color: ${theme.color.dark};
  }

  &:-webkit-autofill:focus:hover {
    -webkit-text-fill-color: ${theme.color.dark} !important;
  }
`;

const StyledLabel = styled.label`
  display: block;
  color: ${theme.color.dark};
  font-weight: ${theme.fontWeight.light};
  line-height: 1.5;

  max-width: 800px;
  margin-bottom: 0;
  padding-bottom: 0;
  text-transform: none;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: var(--font-xs);
    max-width: 100%;
  }
`;

const StyledCheckboxGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;
  padding-bottom: var(--spacing-l);
  font-size: var(--font-xs);

  input[type="checkbox"] {
    margin-top: 0.2rem;
    border: 2px solid ${theme.color.dark};
    accent-color: ${theme.color.dark};
    flex: 0 0 auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SideBySideWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0;
  flex-direction: column;
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0;
  }
`;

const StyledLink = styled(Link)`
  display: inline;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.dark};
  text-decoration: none;
  text-underline-offset: 0.15em;

  &:hover {
    color: ${theme.color.beige};
  }
`;

const StyledSuccessMessage = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--spacing-xxxl) var(--side-padding);
  color: ${theme.color.dark};

  p {
    font-size: var(--font-m);
    margin-bottom: var(--spacing-l);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-basis: 100%;
  }
`;

const FeedbackText = styled.p`
  font-size: var(--font-m);
  margin: 0;
  padding-top: var(--spacing-s);
`;
