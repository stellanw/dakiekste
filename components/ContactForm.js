import styled, { css } from "styled-components";
import { useState } from "react";
import { theme } from "@/styles";
import Link from "next/link";

export default function ContactForm() {
  const initialFormData = {
    fullName: "",
    pronouns: "",
    customPronouns: "",
    company: "",
    email: "",
    message: "",
    acceptedTerms: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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

    if (formData.pronouns === "andere" && !formData.customPronouns.trim()) {
      setResponseMessage("Bitte gib deine eigenen Pronomen ein.");
      return;
    }

    setLoading(true);
    try {
      const pronouns = formData.pronouns === "andere" ? (formData.customPronouns || "").trim() : formData.pronouns || undefined;

      const payload = {
        email: formData.email,
        name: formData.fullName.trim(),
        company: formData.company || undefined,
        message: formData.message,
        pronouns,
        acceptedTerms: !!formData.acceptedTerms,
        source: "contact",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        console.log("API error:", data);
        throw new Error(data.error || "Fehler beim Senden");
      }

      setIsSuccess(true);
      setResponseMessage("Wir melden uns schnellstmöglich bei dir.");
      setFormData(initialFormData);
    } catch (err) {
      console.error("Fehler:", err);
      setResponseMessage("Ups! Da ist was schiefgelaufen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledFormWrapper>
      <InnerWrapper>
        <StyledTextContainer>
          <h2>Kontakt</h2>
          <h4>Egal ob Frage oder Projektidee – wir freuen uns auf deine Nachricht.</h4>
        </StyledTextContainer>

        {isSuccess ? (
          <StyledSuccessMessage>
            <h3>Danke für deine Nachricht!</h3>
            <p>{responseMessage}</p>
            <StyledButton
              onClick={() => {
                setResponseMessage("");
                setIsSuccess(false);
              }}
            >
              Neue Nachricht senden
            </StyledButton>
          </StyledSuccessMessage>
        ) : (
          <StyledForm onSubmit={handleSubmit}>
            <SideBySideWrapper>
              <Wrapper>
                <PronounRow>
                  <PronounCol>
                    <PronounLabel htmlFor="pronouns">Pronomen</PronounLabel>
                    <StyledSelect
                      id="pronouns"
                      name="pronouns"
                      value={formData.pronouns ?? ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData((p) => ({
                          ...p,
                          pronouns: value,
                          customPronouns: value === "andere" ? p.customPronouns : "",
                        }));
                      }}
                    >
                      <option value="" disabled>
                        Bitte wählen
                      </option>
                      <option value="sie/ihr">sie/ihr</option>
                      <option value="er/ihm">er/ihm</option>
                      <option value="they/them">they/them</option>
                      <option value="keine Angabe">keine Angabe</option>
                      <option value="andere">andere…</option>
                    </StyledSelect>
                  </PronounCol>

                  {formData.pronouns === "andere" && (
                    <PronounCol>
                      <PronounLabel htmlFor="customPronouns">Eigene</PronounLabel>
                      <StyledInput id="customPronouns" name="customPronouns" value={formData.customPronouns} onChange={handleChange} placeholder="z.B. dey/deren" />
                    </PronounCol>
                  )}
                </PronounRow>
              </Wrapper>

              <Wrapper>
                <label htmlFor="fullName">Vor und Nachname</label>
                <StyledInput name="fullName" value={formData.fullName} onChange={handleChange} required />
              </Wrapper>
            </SideBySideWrapper>

            <SideBySideWrapper>
              <Wrapper>
                <label htmlFor="email">Email</label>
                <StyledInput name="email" type="email" value={formData.email} onChange={handleChange} required />
              </Wrapper>
            </SideBySideWrapper>

            <label htmlFor="message">Deine Nachricht</label>
            <StyledTextArea name="message" value={formData.message} onChange={handleChange} required />

            <StyledCheckboxGroup>
              <StyledLabel htmlFor="acceptedTerms">
                <input type="checkbox" id="acceptedTerms" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} required />
                Ich akzeptiere die <StyledLink href="/impressum">AGB & Datenschutzerklärung</StyledLink>
              </StyledLabel>
            </StyledCheckboxGroup>

            <StyledButton type="submit" disabled={loading}>
              {loading ? "Senden..." : "Senden"}
            </StyledButton>
            {responseMessage && <p>{responseMessage}</p>}
          </StyledForm>
        )}
      </InnerWrapper>
    </StyledFormWrapper>
  );
}

const FIELD_TRANSITION = "border-color 160ms ease, background-color 160ms ease, color 160ms ease";
const fieldBase = css`
  border: 1px solid ${theme.color.beige};
  transition: ${FIELD_TRANSITION};
  &:hover {
    border-color: ${theme.color.green};
  }
  &:is(:focus, :active) {
    outline: none;
    border-color: ${theme.color.green};
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }
`;

const StyledFormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${theme.color.dark};
  width: 100%;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &::selection,
  & *::selection {
    background: ${theme.color.beige};
    color: ${theme.color.dark};
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--max-content); /* zentrale Begrenzung */
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledTextContainer = styled.div`
  max-width: var(--max-text);
  color: ${theme.color.beige};
  padding: var(--spacing-xxxl) var(--side-padding) 0 var(--side-padding);

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: var(--spacing-xxxl) var(--side-padding);
  }

  h3 {
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.bold};
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: var(--spacing-xxxl) var(--side-padding);
  color: ${theme.color.beige};

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-basis: 50%;
  }

  label {
    font-weight: ${theme.fontWeight.bold};
    letter-spacing: 0.035rem;
    color: ${theme.color.beige};
  }

  input[type="checkbox"] {
    border: 2px solid ${theme.color.beige};
    outline: none;
    accent-color: ${theme.color.green};
  }
  input[type="checkbox"]:is(:hover, :focus-visible, :active):not(:checked) {
    border: 2px solid ${theme.color.green};
  }
  input[type="checkbox"]:active {
    border: 1px solid ${theme.color.dark};
  }
  input[type="checkbox"]:checked {
    border: 2px solid ${theme.color.green};
  }
  input[type="checkbox"]:focus-visible {
    outline: 2px solid ${theme.color.dark};
    outline-offset: 2px;
  }

  p {
    font-size: var(--font-m);
    margin: 0;
    padding-top: var(--spacing-s);
  }
`;

const StyledButton = styled.button`
  padding: var(--spacing-xs) var(--spacing-m);
  color: ${theme.color.beige};
  background-color: ${theme.color.dark};
  font-size: var(--font-m);
  font-weight: ${theme.fontWeight.regular};
  letter-spacing: 0.08rem;
  cursor: pointer;
  border: 1px solid ${theme.color.beige};
  text-transform: uppercase;
  transition:
    background-color 100ms ease,
    color 100ms ease,
    border-color 100ms ease;

  &:is(:hover, :active) {
    border-color: ${theme.color.green};
  }
  &:hover {
    color: ${theme.color.green};
    background-color: ${theme.color.dark};
  }
  &:active {
    color: ${theme.color.dark};
    background-color: ${theme.color.green};
  }
`;

const StyledInput = styled.input`
  ${fieldBase};
  margin-bottom: var(--spacing-xs);
  padding: var(--spacing-xs);
  height: var(--spacing-m);

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: calc(2.4 * var(--spacing-m));
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${theme.color.green} inset;
    -webkit-text-fill-color: ${theme.color.beige};
  }
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${theme.color.green} inset;
    -webkit-text-fill-color: ${theme.color.dark};
  }
`;

const StyledTextArea = styled.textarea`
  ${fieldBase};
  padding: var(--spacing-s);
  margin-bottom: calc(0.5 * var(--spacing-xs));
  width: 100%;
  min-height: 150px;
  max-height: 150px;
  resize: none;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  font-size: var(--font-s);
  margin-bottom: var(--spacing-xs);
  color: ${theme.color.beige};
`;

const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--spacing-xs);
  padding-bottom: var(--spacing-xs);
  font-size: var(--font-xs);

  label {
    font-weight: ${theme.fontWeight.light};
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
  gap: var(--spacing-s);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0;
  }
`;

const StyledLink = styled(Link)`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.beige};
  padding: 0 0.4rem;
`;

const StyledSuccessMessage = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--spacing-xxxl) var(--side-padding);
  color: ${theme.color.beige};

  p {
    font-size: var(--font-m);
    margin-bottom: var(--spacing-l);
  }
`;

const StyledSelect = styled.select`
  ${fieldBase};
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: var(--spacing-xs);
  height: calc(1.063 * var(--spacing-m));
  padding: 0 var(--spacing-xs);
  color: ${theme.color.beige};
  background-color: ${theme.color.dark};
  border-radius: calc(0.5 * ${theme.borderRadius});

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: calc(2.4 * var(--spacing-m));
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 1rem;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><polyline points='5 7 10 12 15 7' fill='none' stroke='${theme.color.beige.replace("#", "%23")}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");

  &:hover {
    border-color: ${theme.color.green};
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><polyline points='5 7 10 12 15 7' fill='none' stroke='${theme.color.green.replace("#", "%23")}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  }

  &:focus {
    outline: none;
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
    border-color: ${theme.color.green};
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><polyline points='5 7 10 12 15 7' fill='none' stroke='${theme.color.dark.replace("#", "%23")}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  }

  & option {
    color: ${theme.color.dark};
    background: ${theme.color.beige};
  }

  &::-ms-expand {
    display: none;
  }
`;

const PronounRow = styled.div`
  display: flex;
  gap: var(--spacing-s);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0;
  }
`;

const PronounCol = styled.div`
  flex: 1 1 50%;
  min-width: 0;

  & > label {
    display: block;
    margin-bottom: calc(0.5 * var(--spacing-xs));
  }
`;

const PronounLabel = styled.label`
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: 0.035rem;
`;
