import styled from "styled-components";
import { useState } from "react";
import { theme } from "@/styles";
import Link from "next/link";

export default function ContactOverlayForm({ selectedServices, serviceCounts, businessType, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rabatt = businessType === "Start-up" ? 0.9 : businessType === "Vereine & Organisationen" ? 0.8 : 1;

    const selectedSummaryHTML = selectedServices
      .map((service) => {
        const titleKey = service.titlePlain || service.title;
        const count = service.isCountable ? serviceCounts[titleKey] || 1 : 1;
        const title = titleKey;
        const price = service.price * count * rabatt;
        return `<li>${title}${service.isCountable ? ` (${count}x)` : ""} – ${price.toFixed(2)} €</li>`;
      })
      .join("");

    const totalPrice = selectedServices.reduce((sum, service) => {
      const count = service.isCountable ? serviceCounts[service.titlePlain] || 1 : 1;
      return sum + service.price * count * rabatt;
    }, 0);

    const combinedMessage = `
    <p>${formData.message.replace(/\n/g, "<br>")}</p>
    <p><strong>Ausgewählte Leistungen:</strong></p>
    <ul>${selectedSummaryHTML}</ul>
    <p><strong>Gesamtsumme:</strong> ${totalPrice.toFixed(2)} €</p>
    <p><strong>Business-Typ:</strong> ${businessType}</p>
  `;

    const payload = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      message: combinedMessage,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Fehler beim Senden");

      alert("Vielen Dank für deine Nachricht!");
      onClose();
    } catch (err) {
      console.error("Fehler beim Senden:", err);
      alert("Ups! Da ist was schiefgelaufen.");
    }
  };

  return (
    <OverlayWrapper>
      <CloseButton onClick={onClose}>×</CloseButton>
      <OverlayFormContainer onSubmit={handleSubmit}>
        <OverlayLabel>Name</OverlayLabel>
        <OverlayInput name="name" value={formData.name} onChange={handleChange} required />
        <OverlayLabel>Firma</OverlayLabel>
        <OverlayInput name="company" value={formData.company} onChange={handleChange} />
        <OverlayLabel>Email</OverlayLabel>
        <OverlayInput name="email" type="email" value={formData.email} onChange={handleChange} required />
        <OverlayLabel>Nachricht</OverlayLabel>
        <OverlayTextArea name="message" value={formData.message} onChange={handleChange} />
        <OverlaySubmitButton type="submit">Abschicken</OverlaySubmitButton>
      </OverlayFormContainer>
    </OverlayWrapper>
  );
}

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background-color: rgba(10, 10, 10, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-xl);
`;

const OverlayFormContainer = styled.form`
  background-color: ${theme.color.dark};
  border: 1px solid ${theme.color.green};
  border-radius: ${theme.borderRadius};
  padding: var(--spacing-xl);
  width: 100%;
  max-width: 600px;
  color: ${theme.color.beige};
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);

  label {
    font-weight: ${theme.fontWeight.bold};
  }
`;

const OverlayLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  font-size: var(--font-s);
  margin-bottom: 0;
`;

const OverlayInput = styled.input`
  padding: var(--spacing-xs);
  background-color: ${theme.color.dark} !important;
  border: 1px solid ${theme.color.green} !important;
  color: ${theme.color.beige};

  &:focus {
    outline: none;
    background-color: ${theme.color.green} !important;
    color: ${theme.color.dark};
  }
`;

const OverlayTextArea = styled.textarea`
  padding: var(--spacing-xs);
  height: 150px;
  background: none;
  border: 1px solid ${theme.color.green};
  color: ${theme.color.beige};
  resize: none;

  &:focus {
    outline: none;
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }
`;

const OverlaySubmitButton = styled.button`
  padding: var(--spacing-s) var(--spacing-m);
  font-size: var(--font-m);
  font-weight: ${theme.fontWeight.regular};
  background-color: ${theme.color.dark};
  color: ${theme.color.green};
  border: 1px solid ${theme.color.green};
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
  color: ${theme.color.green};
  cursor: pointer;

  &:hover {
    color: ${theme.color.beige};
  }
`;
