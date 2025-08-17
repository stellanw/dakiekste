import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const getSiteUrl = () => {
  // 1) explizit gesetzt (empfohlen)
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;

  // 2) Vercel Preview/Prod: VERCEL_URL enthält host (ohne Protokoll)
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  // 3) Local dev fallback
  return "http://localhost:3000";
};

const SITE_URL = getSiteUrl();

const TITLE = "DAKIEKSTE | Branding, Fotografie, Design & Website aus Hamburg";
const DESCRIPTION =
  "Wir machen sichtbar, was dich ausmacht – mit durchdachten Gesamtlösungen aus  Fotografie, Branding, Design & Website für deine Marke. Denn wer gesehen wird, gestaltet mit.";
const OG_IMAGE = `${SITE_URL}/og.jpg?v=2`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="de">
        <Head>
          {" "}
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
          {/* Default SEO / Open Graph */}
          <meta name="description" content={DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="DAKIEKSTE" />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:image" content={OG_IMAGE} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="DAKIEKSTE – Hero Bild" />
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={TITLE} />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:image" content={OG_IMAGE} />
          {/* Canonical unbedingt mit derselben Domain wie OG */}
          <link rel="canonical" href={SITE_URL} />
          {/* Theme-Color */}
          <meta name="theme-color" content="#A3FFB7" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#252422" media="(prefers-color-scheme: dark)" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
