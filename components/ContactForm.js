import styled from "styled-components";
import { useState } from "react";
import { theme } from "@/styles";
import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";

export default function ContactForm() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    pronouns: "", // "", "sie/ihr", "er/ihm", "they/them", "keine Angabe", "andere"
    customPronouns: "", // nur wenn "andere"
    company: "",
    email: "",
    roles: [],
    otherRole: "",
    budget: [],
    message: "",
    acceptedTerms: false,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [category]: checked ? [value] : [],
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: type === "checkbox" ? checked : value };
      return next;
    });
    // console.log("change:", name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset states bei neuem Submit
    setResponseMessage("");
    setIsSuccess(false);

    // Email Format Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setResponseMessage("Bitte gib eine gültige Emailadresse ein.");
      return;
    }

    if (!formData.firstName) {
      setResponseMessage("Bitte gib deinen Vornamen ein.");
      return;
    }

    // Custom validation for roles
    if (formData.roles.length === 0) {
      setResponseMessage("Bitte wähle deine Rolle im Projekt aus.");
      return;
    }

    // Custom validation for budget
    if (formData.budget.length === 0) {
      setResponseMessage("Bitte wähle dein Budget aus.");
      return;
    }

    setLoading(true);

    try {
      const fullName = [formData.firstName, formData.lastName].filter(Boolean).join(" ");
      const pronouns = formData.pronouns === "andere" ? formData.customPronouns : formData.pronouns;
      const payload = {
        ...formData,
        name: fullName, // Backend erwartet weiterhin "name"
        pronouns, // NEU
        source: "contact",
      };
      delete payload.firstName;
      delete payload.lastName;
      delete payload.customPronouns;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        console.log("API error:", data); // <-- zeigt die genaue Fehlermeldung in der Browser-Konsole
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
      <StyledTextContainer>
        <h2>Bereit, was zu starten?</h2>
        <h4>Lass uns dein Projekt sichtbar machen – strategisch und visuell.</h4>
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
          {" "}
          <SideBySideWrapper>
            {/* <Wrapper>
              <label htmlFor="pronouns">Pronomen</label>
              <StyledSelect id="pronouns" name="pronouns" value={formData.pronouns ?? ""} onChange={handleChange}>
                <option value="" disabled>
                  Bitte wählen
                </option>
                <option value="sie/ihr">sie/ihr</option>
                <option value="er/ihm">er/ihm</option>
                <option value="they/them">they/them</option>
                <option value="keine Angabe">keine Angabe</option>
                <option value="andere">andere…</option>
              </StyledSelect>
            </Wrapper> */}
            <Wrapper>
              <label htmlFor="pronouns">Pronomen</label>

              <SelectWrap>
                <StyledSelect
                  id="pronouns"
                  name="pronouns"
                  value={formData.pronouns ?? ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, pronouns: e.target.value }))}
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

                <IconOverlay className="select-icon" aria-hidden="true">
                  <StyledPiArrowUpRight size={20} />
                </IconOverlay>
              </SelectWrap>
            </Wrapper>
            <Wrapper>
              {formData.pronouns === "andere" && (
                <>
                  <label htmlFor="customPronouns">Eigene Pronomen</label>
                  <StyledInput name="customPronouns" value={formData.customPronouns} onChange={handleChange} placeholder="z. B. dey/deren" />
                </>
              )}
            </Wrapper>
          </SideBySideWrapper>
          <SideBySideWrapper>
            <Wrapper>
              <label htmlFor="firstName">Vorname</label>
              <StyledInput name="firstName" value={formData.firstName} onChange={handleChange} required />
            </Wrapper>
            <Wrapper>
              <label htmlFor="lastName">Nachname</label>
              <StyledInput name="lastName" value={formData.lastName} onChange={handleChange} required />
            </Wrapper>
          </SideBySideWrapper>
          <SideBySideWrapper>
            <Wrapper>
              <label htmlFor="email">Email</label>
              <StyledInput name="email" type="email" value={formData.email} onChange={handleChange} required />
            </Wrapper>
            <Wrapper>
              <label htmlFor="company">Firma</label>
              <StyledInput name="company" value={formData.company} onChange={handleChange} />
            </Wrapper>
          </SideBySideWrapper>
          <label htmlFor="roles">Wer bist du?</label>
          <StyledCheckboxGroup>
            {["Unternehmen", "Gründer*in", "Soloselbstständig", "Verein/Organisation"].map((role) => (
              <StyledLabel key={role}>
                <input type="checkbox" value={role} checked={formData.roles.includes(role)} onChange={(e) => handleCheckboxChange(e, "roles")} />
                {role}
              </StyledLabel>
            ))}

            <StyledLabel>
              <input type="checkbox" value="Sonstiges" checked={formData.roles.includes("Sonstiges")} onChange={(e) => handleCheckboxChange(e, "roles")} />
              Etwas anderes
            </StyledLabel>
            {formData.roles.includes("Sonstiges") && <StyledInput name="otherRole" value={formData.otherRole} onChange={handleChange} />}
          </StyledCheckboxGroup>
          <label htmlFor="budget">Dein Budget</label>
          <StyledCheckboxGroup>
            {["< 1.000 €", "1.000 – 3.000 €", "3.000 – 6.000 €", "> 6.000 €"].map((range) => (
              <StyledLabel key={range}>
                <input type="checkbox" value={range} checked={formData.budget.includes(range)} onChange={(e) => handleCheckboxChange(e, "budget")} />
                {range}
              </StyledLabel>
            ))}
          </StyledCheckboxGroup>
          <label htmlFor="message">Deine Nachricht</label>
          <StyledTextArea name="message" value={formData.message} onChange={handleChange} required />
          <StyledCheckboxGroup>
            <label>
              <StyledLabel htmlFor="acceptedTerms">
                <input type="checkbox" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} required />
                Ich akzeptiere die <StyledLink href="/impressum">AGB & Datenschutzerklärung</StyledLink>
              </StyledLabel>
            </label>
          </StyledCheckboxGroup>
          <StyledButton type="submit" disabled={loading}>
            {loading ? "Senden..." : "Senden"}
          </StyledButton>
          {responseMessage && <p>{responseMessage}</p>}
        </StyledForm>
      )}
    </StyledFormWrapper>
  );
}

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
`;

const StyledTextContainer = styled.div`
  flex-basis: 50%;
  color: ${theme.color.green};
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
  }

  input[type="checkbox"] {
    border: 2px solid ${theme.color.green};
    outline: none;
  }

  p {
    font-size: var(--font-m);
    color: ${theme.color.beige};
    margin: 0;
    padding-top: var(--spacing-s);
  }
`;

const StyledButton = styled.button`
  padding: var(--spacing-xs) var(--spacing-m);
  color: ${theme.color.green};
  background-color: ${theme.color.dark};
  font-size: var(--font-m);
  font-weight: ${theme.fontWeight.regular};
  letter-spacing: 0.08rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid ${theme.color.green};
  text-transform: uppercase;

  &:hover {
    color: ${theme.color.dark};
    background-color: ${theme.color.green};
  }
`;

const StyledInput = styled.input`
  margin-bottom: var(--spacing-m);
  padding: var(--spacing-xs);
  height: var(--spacing-m);

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: calc(2.4 * var(--spacing-m));
  }

  &:active {
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }

  &:focus {
    outline: none;
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${theme.color.dark} inset;
    -webkit-text-fill-color: ${theme.color.beige};
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${theme.color.green} inset;
    -webkit-text-fill-color: ${theme.color.dark};
  }
`;

const StyledTextArea = styled.textarea`
  padding: var(--spacing-s);
  margin-bottom: var(--spacing-m);
  width: 100% !important;
  min-height: 200px;
  max-height: 200px;
  resize: none;

  &:active {
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }

  &:focus {
    outline: none;
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  font-size: var(--font-s);
  margin-bottom: 0;
`;

const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: var(--spacing-xs);
  row-gap: 0;
  padding-bottom: var(--spacing-m);

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
  flex-direction: row;
  gap: var(--spacing-l);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0;
  }
`;

const StyledLink = styled(Link)`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.green};
  padding: 0 0.4rem;

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
  color: ${theme.color.green};

  p {
    font-size: var(--font-m);
    margin-bottom: var(--spacing-l);
  }
`;

const IconOverlay = styled.span`
  --r: 0deg;
  position: absolute;
  top: 25%;
  @media (max-width: ${theme.breakpoints.mobile}) {
    top: 35%;
  }
  right: 12px;
  translate: 0 -50%;
  transform: rotate(var(--r));
  transform-origin: 50% 50%;
  transform-box: border-box;
  pointer-events: none;
  line-height: 0;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  color: ${theme.color.green};
  will-change: transform, color;

  & svg {
    display: block;
  }
`;

const SelectWrap = styled.div`
  position: relative;
  width: 100%;

  &:hover svg {
    stroke-width: 10;
  }

  &:focus-within ${IconOverlay} {
    --r: 90deg;
    color: ${theme.color.dark};
  }
`;

const StyledSelect = styled.select`
  display: block;
  inline-size: 100%;
  margin-bottom: var(--spacing-m);
  padding: 0 var(--spacing-xs);
  height: var(--spacing-m);

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: calc(2.4 * var(--spacing-m));
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: none;

  &:focus {
    outline: none;
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
    border-color: ${theme.color.green};
  }

  & option {
    color: ${theme.color.dark};
    background: ${theme.color.beige};
  }
`;

const StyledPiArrowUpRight = styled(PiArrowUpRight)``;
