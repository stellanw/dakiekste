import styled from "styled-components";
import { useState } from "react";
import { theme } from "@/styles";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    roles: [],
    otherRole: "",
    areas: [],
    otherArea: "",
    unsure: false,
    budget: [],
    message: "",
    dates: "",
    acceptedTerms: false,
  });

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
      // Reset-Logik...
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
        <h2>Let&apos;s Talk</h2>
        <h3>Ob über das nächste Projekt sprechen oder uns einfach nur kennenlernen – melde dich bei uns.</h3>
      </StyledTextContainer>
      <StyledForm onSubmit={handleSubmit}>
        <SideBySideWrapper>
          <Wrapper>
            {/* Name */}
            <label htmlFor="name">Name</label>
            <StyledInput name="name" value={formData.name} onChange={handleChange} required />
          </Wrapper>
          <Wrapper>
            {/* Firma */}
            <label htmlFor="company">Firma</label>
            <StyledInput name="company" value={formData.company} onChange={handleChange} />
          </Wrapper>
        </SideBySideWrapper>
        {/* Rolle */}
        <MainLabel htmlFor="roles">Rolle im Projekt</MainLabel>
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
        {/* WAS */}
        <label htmlFor="areas">Was möchtest du?</label>
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

        <label htmlFor="budget">Budget</label>
        <StyledCheckboxGroup>
          {["< 1.000 €", "1.000 – 3.000 €", "3.000 – 6.000 €", "> 6.000 €"].map((range) => (
            <StyledLabel key={range}>
              <input type="checkbox" value={range} checked={formData.budget.includes(range)} onChange={(e) => handleCheckboxChange(e, "budget")} />
              {range}
            </StyledLabel>
          ))}
        </StyledCheckboxGroup>

        <MainLabel htmlFor="message">Deine Nachricht</MainLabel>
        <StyledTextArea
          name="message"
          placeholder="Erzähl uns kurz, worum es geht oder was du dir vorstellst."
          value={formData.message}
          onChange={handleChange}
        />

        {/* <Wrapper>
          <MainLabel htmlFor="files">Dateien hochladen</MainLabel>
          <p>Du hast schon ein Moodboard, ein Briefing oder Beispielbilder? Einfach hier hochladen:</p>
          <FileInput id="fileUpload" name="files" type="file" multiple onChange={handleChange} />
          <UploadLabel htmlFor="fileUpload">Dateien auswählen</UploadLabel>
        </Wrapper> */}

        <MainLabel htmlFor="dates">Wann passt es dir für ein kurzes Vorgespräch?</MainLabel>
        <StyledInput
          name="dates"
          placeholder="Schlag uns 2–3 Termine vor, z. B. Di 14–16 Uhr oder Fr vormittags."
          value={formData.dates}
          onChange={handleChange}
        />
        <StyledCheckboxGroup>
          <MainLabel htmlFor="acceptedTerms">
            <StyledLabel>
              <input type="checkbox" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} required />
              Ich akzeptiere die AGB & Datenschutzerklärung
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
  background-color: ${theme.color.dust};
  width: 100%;

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
    text-transform: capitalize;
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
    background-color: ${theme.color.dust};
    outline: none;
  }

  textarea,
  input {
    background-color: ${theme.color.dust};
    color: ${theme.color.beige};
  }

  input::placeholder,
  textarea::placeholder {
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
  padding: ${theme.spacing.s} ${theme.spacing.m};
  color: ${theme.color.green};
  background-color: ${theme.color.dust};
  font-size: ${theme.fontSizes.m};
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
  row-gap: ${theme.spacing.s};
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
  padding-bottom: ${theme.spacing.l};
`;

const FileInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  max-width: fit-content;
  padding: ${theme.spacing.s} ${theme.spacing.m};
  color: ${theme.color.green};
  background-color: ${theme.color.dust};
  font-size: ${theme.fontSizes.s};
  border-radius: ${theme.borderRadius};
  border: 1px solid ${theme.color.green};
  cursor: pointer;
  display: inline-block;
  margin-bottom: ${theme.spacing.s};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.color.green};
    color: ${theme.color.dust};
  }
`;
