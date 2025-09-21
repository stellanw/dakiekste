import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles";

export default function Custom500() {
  const email = "info" + "@" + "dakiekste" + ".com";
  const subject = "Website Server nicht erreichbar";
  const body = `Moin,

eure Website ist aktuell nicht erreichbar.

—`;

  const createMailToLink = () => `mailto:${email}?body=${encodeURIComponent(body.replace(/\n/g, "\r\n"))}`;

  return (
    <>
      <Head>
        <title>500 – Serverfehler | Dakiekste</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Wrap>
        <Box>
          <Title>Ups! Da ist was schiefgelaufen.</Title>
          <Lead>Auf dem Server ist ein Fehler aufgetreten. Lade die Seite neu oder schreib uns kurz, falls das Problem bleibt.</Lead>
          <Actions>
            <Btn href={createMailToLink()} target="_blank" rel="noopener noreferrer">
              Schreib uns
            </Btn>
          </Actions>
        </Box>
      </Wrap>
    </>
  );
}

const Wrap = styled.section`
  min-height: 70vh;
  display: grid;
  place-items: center;
  padding: var(--spacing-xl);
  text-align: center;
`;

const Box = styled.div`
  max-width: 1000px;
`;

const Title = styled.h1`
  margin: 0 0 var(--spacing-s);
  font-size: clamp(28px, 5vw, 64px);
  line-height: 1.1;
`;

const Lead = styled.p`
  margin: 0 0 var(--spacing-l);
  line-height: ${theme.lineHeight.xxl};
  font-weight: ${theme.fontWeight.light};
`;

const Actions = styled.div`
  display: flex;
  gap: var(--spacing-s);
  justify-content: center;
  flex-wrap: wrap;
`;

const Btn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: calc(0.5 * ${theme.borderRadius});
  border: 1px solid ${theme.color.dark};
  text-decoration: none;
  color: inherit;
  transition:
    transform 120ms ease,
    background-color 120ms ease,
    color 120ms ease;
  width: 200px;
  &:hover {
    transform: translateY(-1px);
    background: ${theme.color.green};
  }
`;
