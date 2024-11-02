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
      <StyledTextContainer>
        <h2>Let&apos;s Talk</h2>
        <h1>
          Ob über das nächste Projekt sprechen oder uns einfach nur kennenlernen – melde dich bei
          uns.
        </h1>
      </StyledTextContainer>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          // placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          autoFocus
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          // placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
        <label htmlFor="subject">Betreff</label>
        <input
          type="text"
          name="subject"
          // placeholder="Betreff"
          value={formData.subject}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <label htmlFor="message">Nachricht</label>
        <textarea
          name="message"
          // placeholder="Deine Nachricht"
          value={formData.message}
          onChange={handleChange}
          autoComplete="off"
          required
        />
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
  padding: ${theme.spacing.l} 0;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledTextContainer = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
  min-width: 370px;
  max-width: 800px;
  min-height: 400px;
  padding: ${theme.spacing.xl} ${theme.spacing.xxl};
  color: ${theme.color.green};

  @media (max-width: 750px) {
    width: 100%;
    margin-bottom: ${theme.spacing.l};
  }

  h2 {
    text-transform: uppercase;
    margin: 0 0 ${theme.spacing.xs} 0;
    font-weight: 100;
    letter-spacing: 0.09rem;
    font-size: ${theme.fontSizes.xs};
  }

  h1 {
    font-size: ${theme.fontSizes.xl};
    font-weight: 500;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-basis: 50%;
  flex-grow: 1;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: ${theme.spacing.xl} ${theme.spacing.xxl};
  color: ${theme.color.beige};
  width: 100%;
  max-width: 500px;
  @media (max-width: 750px) {
    flex-basis: auto;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }

  p {
    margin: ${theme.spacing.l} 0 0 0;
  }

  label {
    text-transform: uppercase;
    font-weight: 200;
    color: ${theme.color.green};
    padding: 0 0 ${theme.spacing.s} 0;
  }

  input {
    width: 100%;
    padding: ${theme.spacing.s};
    margin-bottom: ${theme.spacing.m};
    border: 1px solid ${theme.color.green};
    border-radius: ${theme.borderRadius};
    font-size: ${theme.fontSizes.s};
    background-color: ${theme.color.beige};
    &:focus {
      border-color: ${theme.color.green};
      outline: none;
      box-shadow: 0 0 0 2px ${theme.color.green};
    }
  }

  textarea {
    width: 100%;
    padding: ${theme.spacing.s};
    margin-bottom: ${theme.spacing.m};
    border: 1px solid ${theme.color.green};
    border-radius: ${theme.borderRadius};
    font-size: ${theme.fontSizes.s};
    background-color: ${theme.color.beige};
    color: ${theme.color.dark};
    height: 200px;
    resize: none;
    &:focus {
      border-color: ${theme.color.green};
      outline: none;
      box-shadow: 0 0 0 2px ${theme.color.green};
    }
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

  &:hover {
    color: ${theme.color.dust};
    background-color: ${theme.color.green};
  }
`;
