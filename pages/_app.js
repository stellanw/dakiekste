import { ThemeProvider, StyleSheetManager } from "styled-components";
import GlobalStyle from "../styles";
import { theme } from "../styles";
import { useEffect } from "react";
import { Figtree } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-figtree",
});

const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};
const SITE_URL = getSiteUrl();

const DEFAULTS = {
  title: "DAKIEKSTE | Branding, Fotografie, Video & Website aus einer Hand",
  description: "Wir machen sichtbar, was dich ausmacht – mit durchdachten Gesamtlösungen aus Fotografie, Branding, Design, Video & Website für deine Marke. Denn wer gesehen wird, gestaltet mit.",
  imagePath: "/og.jpg",
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // kanonische URL der aktuellen Seite
  const path = router.asPath?.split("#")[0]?.split("?")[0] || "/";
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  const meta = {
    title: DEFAULTS.title,
    description: DEFAULTS.description,
    imagePath: DEFAULTS.imagePath,
    ...(pageProps?.meta || {}),
  };

  const imageAbs = meta.imagePath.startsWith("http") ? meta.imagePath : `${SITE_URL}${meta.imagePath}`;

  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.closest("a, p, h1, h2, h3, h4, h5, h6, span")) {
        return;
      }

      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <StyleSheetManager onContextMenu={(e) => e.preventDefault()}>
      <ThemeProvider theme={theme}>
        <div className={figtree.className}>
          <GlobalStyle />
          <Head>
            {/* Basis */}
            <meta name="description" content={meta.description} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="DAKIEKSTE" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={imageAbs} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="DAKIEKSTE – Website preview" />
            <meta property="og:image:type" content="image/jpeg" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={imageAbs} />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />
          </Head>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
