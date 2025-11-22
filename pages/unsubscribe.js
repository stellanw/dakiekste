import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/styles";

export default function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(false);

    const trimmed = email.trim();
    if (!trimmed) {
      setMessage("Bitte gib deine Emailadresse ein.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setMessage("Bitte gib eine gültige Emailadresse ein.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/anknipsen-unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error("Unsubscribe error:", data);
        throw new Error(data?.message || "Fehler bei der Abmeldung.");
      }

      setIsSuccess(true);
      setMessage(data?.message || "Du bist von ANKNIPSEN-Mails abgemeldet. Falls diese Adresse bei uns hinterlegt war, erhältst du keine Mails mehr.");
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage("Ups – da ist etwas schiefgelaufen. Versuch es bitte später nochmal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <h2>ANKNIPSEN EVENTS</h2>
        <Heading>Emails abmelden</Heading>

        {isSuccess ? (
          <>
            <SuccessText>{message}</SuccessText>
            <ButtonRow>
              <PrimaryLink href="/">Zur Startseite</PrimaryLink>
              <SecondaryLink href="/anknipsen">Zurück zur ANKNIPSEN-Seite</SecondaryLink>
            </ButtonRow>
          </>
        ) : (
          <>
            <Form onSubmit={handleSubmit} noValidate>
              <Label htmlFor="email">Emailadresse</Label>
              <EmailInput id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />

              <SubmitButton type="submit" disabled={loading}>
                {loading ? "WIRD GESPEICHERT..." : "ABMELDEN"}
              </SubmitButton>
            </Form>

            {message && <FeedbackText $error={!isSuccess}>{message}</FeedbackText>}
          </>
        )}

        <SmallNote>
          Wir nutzen deine Emailadresse nur, um dich aus unserem ANKNIPSEN-Verteiler zu entfernen. Du kannst dich natürlich jederzeit wieder für ANKNIPSEN anmelden – zum Beispiel über die <StyledLink href="/anknipsen">Anmeldeseite</StyledLink> für das nächste Event.
        </SmallNote>
      </ContentWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.main`
  min-height: 100vh;
  background-color: ${theme.color.dark};
  color: ${theme.color.beige};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xxxl) var(--side-padding);
`;

const ContentWrapper = styled.section`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;
  margin-bottom: var(--spacing-m);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: var(--spacing-s);
`;

const Label = styled.label`
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: 0.035rem;
  padding: 0;
  color: ${theme.color.beige};
`;

const EmailInput = styled.input`
  border: 1px solid ${theme.color.beige};
  background-color: ${theme.color.dark};
  color: ${theme.color.beige};
  padding: var(--spacing-xs);

  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &:hover {
    border-color: ${theme.color.green};
    color: ${theme.color.green};
  }

  &:focus {
    outline: none;
    border-color: ${theme.color.green};
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }
`;

const SubmitButton = styled.button`
  margin-top: var(--spacing-s);
  padding: var(--spacing-xs) var(--spacing-m);
  color: ${theme.color.beige};
  background-color: ${theme.color.dark};
  font-size: var(--font-m);
  font-weight: ${theme.fontWeight.regular};
  letter-spacing: 0.08rem;
  cursor: pointer;
  border: 1px solid ${theme.color.beige};
  border-radius: calc(0.5 * ${theme.borderRadius});
  text-transform: uppercase;
  transition:
    background-color 100ms ease,
    color 100ms ease,
    border-color 100ms ease;

  &:hover:not(:disabled) {
    border-color: ${theme.color.green};
    color: ${theme.color.green};
  }

  &:active {
    border-color: ${theme.color.green};
    background-color: ${theme.color.green};
    color: ${theme.color.dark} !important;
    font-weight: ${theme.fontWeight.bold};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

const FeedbackText = styled.p`
  font-size: var(--font-m);
  margin: 0;
  color: ${({ $error }) => ($error ? "#A3FFB7" : theme.color.beige)};
`;

const SuccessText = styled.p`
  font-size: var(--font-m);
  margin-bottom: var(--spacing-xl);
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-s);
  margin-bottom: var(--spacing-xl);
`;

const PrimaryLink = styled(Link)`
  padding: var(--spacing-xs) var(--spacing-m);
  border: 1px solid ${theme.color.beige};
  border-radius: calc(0.5 * ${theme.borderRadius});
  color: ${theme.color.dark};
  background-color: ${theme.color.beige};
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  font-size: var(--font-xs);
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color 120ms ease,
    color 120ms ease,
    border-color 120ms ease;

  &:hover {
    background-color: ${theme.color.green};
    border-color: ${theme.color.green};
    color: ${theme.color.dark};
  }
`;

const SecondaryLink = styled(Link)`
  padding: var(--spacing-xs) var(--spacing-m);
  border: 1px solid ${theme.color.beige};
  border-radius: calc(0.5 * ${theme.borderRadius});
  color: ${theme.color.beige};
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  font-size: var(--font-xs);
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color 120ms ease,
    color 120ms ease,
    border-color 120ms ease;

  &:hover {
    border-color: ${theme.color.green};
    color: ${theme.color.green};
  }
`;

const SmallNote = styled.p`
  font-size: var(--font-xs);
  margin-top: var(--spacing-s);
  opacity: 0.7;
`;

const StyledLink = styled(Link)`
  display: inline;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.beige};
  text-decoration: none;
  text-underline-offset: 0.15em;

  &:hover {
    color: ${theme.color.green};
  }
`;
