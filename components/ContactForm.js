import styled from "styled-components";
import { theme } from "@/styles";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formular wird gesendet");
    setLoading(true);
    setResponseMessage("");

    const sendFormData = async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setResponseMessage("E-Mail wurde erfolgreich gesendet!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          const errorData = await res.json();
          console.error("Fehlerantwort vom Server:", errorData);
          setResponseMessage("Fehler beim Senden der E-Mail.");
        }
      } catch (error) {
        console.error("Fehler beim Senden der E-Mail:", error);
        setResponseMessage("Ein Fehler ist aufgetreten.");
      } finally {
        setLoading(false);
      }
    };

    sendFormData();
  };

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledHeadline>Schreibt uns</StyledHeadline>
        <StyledInput
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          required
        />
        <StyledInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
        <StyledInput
          type="text"
          name="subject"
          placeholder="Betreff"
          value={formData.subject}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <StyledTextArea
          name="message"
          placeholder="Deine Nachricht"
          value={formData.message}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <StyledButton type="submit" disabled={loading}>
          {loading ? "Senden..." : "Senden"}
        </StyledButton>
        {responseMessage && <p>{responseMessage}</p>}
      </StyledForm>
    </StyledFormWrapper>
  );
}

const StyledFormWrapper = styled.div`
  background-color: ${theme.darkBackgroundColor};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing.xl} ${theme.spacing.l};
  width: 100%;
  max-width: 500px;
  background-color: ${theme.darkBackgroundColor};
  color: ${theme.secondaryColorBeige};

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  p {
    margin: ${theme.spacing.l} 0 0 0;
  }
`;

const StyledHeadline = styled.h2`
  font-size: ${theme.fontSizes.l};
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.highlightColor};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.s};
  margin-bottom: ${theme.spacing.m};
  border: 1px solid ${theme.primaryColor};
  border-radius: ${theme.borderRadius};
  font-size: ${theme.fontSizes.s};
  background-color: ${theme.secondaryColorBeige};
  color: ${theme.textColor};

  &:focus {
    border-color: ${theme.highlightColor};
    outline: none;
    box-shadow: 0 0 0 2px ${theme.highlightColor};
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.s};
  margin-bottom: ${theme.spacing.m};
  border: 1px solid ${theme.primaryColor};
  border-radius: ${theme.borderRadius};
  font-size: ${theme.fontSizes.s};
  background-color: ${theme.secondaryColorBeige};
  color: ${theme.textColor};
  height: 200px;
  resize: none;
  &:focus {
    border-color: ${theme.highlightColor};
    outline: none;
    box-shadow: 0 0 0 2px ${theme.highlightColor};
  }
`;

const StyledButton = styled.button`
  padding: ${theme.spacing.s} ${theme.spacing.m};
  background-color: ${theme.highlightColor};
  color: ${theme.darkBackgroundColor};
  font-size: ${theme.fontSizes.m};
  border: none;
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.brightBackgroundColor};
  }
`;
