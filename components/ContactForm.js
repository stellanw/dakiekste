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
    areas: [],
    otherArea: "",
    unsure: false,
    budget: [],
    message: "",
    dates: "",
    acceptedTerms: false,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updated = checked ? [...prev[category], value] : prev[category].filter((item) => item !== value);
      return { ...prev, [category]: updated };
    });
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

      setResponseMessage("Danke für deine Nachricht! Wir melden uns schnellstmöglich.");

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
        <h3>Lass uns dein Projekt sichtbar machen – strategisch und visuell.</h3>
      </StyledTextContainer>
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

        <MainLabel htmlFor="roles">Deine Rolle im Projekt</MainLabel>
        <StyledCheckboxGroup>
          {["Gründer*in", "Marketing", "HR / People & Culture", "Projektleitung"].map((role) => (
            <StyledLabel key={role}>
              <input type="checkbox" value={role} checked={formData.roles.includes(role)} onChange={(e) => handleCheckboxChange(e, "roles")} />
              {role}
            </StyledLabel>
          ))}

          <StyledLabel>
            <input type="checkbox" value="Sonstiges" checked={formData.roles.includes("Sonstiges")} onChange={(e) => handleCheckboxChange(e, "roles")} />
            Sonstiges
          </StyledLabel>
          {formData.roles.includes("Sonstiges") && <StyledInput name="otherRole" value={formData.otherRole} placeholder="Was genau?" onChange={handleChange} />}
        </StyledCheckboxGroup>

        <label htmlFor="areas">Was brauchst du?</label>
        <StyledCheckboxGroup>
          {["Branding", "Fotografie", "Video", "Webdesign", "Entwicklung"].map((area) => (
            <StyledLabel key={area}>
              <input type="checkbox" value={area} checked={formData.areas.includes(area)} onChange={(e) => handleCheckboxChange(e, "areas")} />
              {area}
            </StyledLabel>
          ))}

          <StyledLabel>
            <input type="checkbox" value="Sonstiges" checked={formData.areas.includes("Sonstiges")} onChange={(e) => handleCheckboxChange(e, "areas")} />
            Sonstiges
          </StyledLabel>

          {formData.areas.includes("Sonstiges") && <StyledInput name="otherArea" value={formData.otherArea} placeholder="Was genau?" onChange={handleChange} />}

          <StyledLabel>
            <input type="checkbox" name="unsure" checked={formData.unsure} onChange={handleChange} />
            Ich bin mir noch unsicher – lasst uns sprechen.
          </StyledLabel>
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
        <StyledTextArea
          name="message"
          placeholder="Erzähl uns kurz, worum es geht oder was du dir vorstellst."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <MainLabel htmlFor="dates">Wann passt es dir für ein kurzes Vorgespräch?</MainLabel>
        <StyledInput
          name="dates"
          placeholder="Schlag uns 2–3 Termine vor, z. B. Di 14–16 Uhr oder Fr vormittags."
          value={formData.dates}
          onChange={handleChange}
        />
        <StyledCheckboxGroup>
          <MainLabel>
            <StyledLabel htmlFor="acceptedTerms">
              <input type="checkbox" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} required />
              Ich akzeptiere die <StyledLink href="/impressum">AGB & Datenschutzerklärung</StyledLink>
            </StyledLabel>
          </MainLabel>
        </StyledCheckboxGroup>

        <StyledButton type="submit" disabled={loading}>
          {loading ? "Senden..." : "Absenden"}
        </StyledButton>
        {responseMessage && <p>{responseMessage}</p>}
      </StyledForm>
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
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledTextContainer = styled.div`
  flex-basis: 50%;
  color: ${theme.color.green};
  padding: ${theme.spacing.xxxl} ${theme.spacing.xl} 0 ${theme.spacing.xl};

  @media (min-width: 750px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }

  h3 {
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.bold};
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-basis: 50%;

  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: ${theme.spacing.xxxl} ${theme.spacing.xl};
  color: ${theme.color.beige};
  /* width: 100%; */

  @media (min-width: 750px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }

  label {
    font-weight: ${theme.fontWeight.bold};
    letter-spacing: 0.035rem;
  }

  input[type="checkbox"] {
    border: 2px solid ${theme.color.green};
    background-color: ${theme.color.dark};
    outline: none;
  }

  textarea,
  input {
    background-color: ${theme.color.dark};
    color: ${theme.color.beige};

    &:active {
      background-color: ${theme.color.green};
    }
  }

  input::placeholder,
  textarea::placeholder {
    font-style: italic;
    color: ${theme.color.green};
    letter-spacing: 0.007rem;
  }

  p {
    font-size: ${theme.fontSizes.s};

    color: ${theme.color.green};
    margin: 0;
    padding: 0 0 ${theme.spacing.s} 0;
  }
`;

const StyledButton = styled.button`
  padding: ${theme.spacing.s} ${theme.spacing.m} ${theme.spacing.xs} ${theme.spacing.m};

  color: ${theme.color.green};
  background-color: ${theme.color.dark};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeight.bold};
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid ${theme.color.green};
  text-transform: uppercase;
  &:hover {
    color: ${theme.color.dust};
    background-color: ${theme.color.green};
  }
`;

const StyledInput = styled.input`
  margin-bottom: ${theme.spacing.m};
  padding: ${theme.spacing.s};
`;

const StyledTextArea = styled.textarea`
  margin-bottom: ${theme.spacing.m};
  padding: ${theme.spacing.s};
  width: 100%;
  height: 120px;
`;

const MainLabel = styled.label`
  margin-top: ${theme.spacing.l};
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: ${theme.spacing.l};
  row-gap: 0;
  padding-bottom: ${theme.spacing.l};

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
  gap: ${theme.spacing.l};
`;

const StyledLink = styled(Link)`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.green};
  padding: 0 0.4rem;

  &:hover {
    color: ${theme.color.beige};
  }
`;
