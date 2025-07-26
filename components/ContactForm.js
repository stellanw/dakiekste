import styled from "styled-components";
import { useState } from "react";
import { theme } from "@/styles";
import Link from "next/link";

export default function ContactForm() {
  const initialFormData = {
    name: "",
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
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
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
          <SideBySideWrapper>
            <Wrapper>
              <label htmlFor="name">Vor und Nachname</label>
              <StyledInput name="name" value={formData.name} onChange={handleChange} required />
            </Wrapper>
            <Wrapper>
              <label htmlFor="company">Firma</label>
              <StyledInput name="company" value={formData.company} onChange={handleChange} />
            </Wrapper>
          </SideBySideWrapper>
          <Wrapper>
            <label htmlFor="email">Email</label>
            <StyledInput name="email" type="email" value={formData.email} onChange={handleChange} required />
          </Wrapper>

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
