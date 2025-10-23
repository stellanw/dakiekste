import { ThemeProvider, StyleSheetManager } from "styled-components";
import GlobalStyle from "../styles";
import { theme } from "../styles";
import { useEffect } from "react";
import { Figtree } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-figtree",
});

const SITE_URL = "https://www.dakiekste.com";

const DEFAULTS = {
  title: "DAKIEKSTE | Branding, Fotografie, Video & Website aus einer Hand",
  description: "Wir machen sichtbar, was dich ausmacht – mit durchdachten Gesamtlösungen aus Fotografie, Branding, Design, Video & Website für deine Marke. Denn wer gesehen wird, gestaltet mit.",
  imagePath: "/og.jpg",
};

const GA_ID = "G-655QK78ENX";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const path = (router.asPath || "/").split("#")[0].split("?")[0] || "/";
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  const meta = {
    ...DEFAULTS,
    ...(pageProps?.meta || {}),
  };

  const imageAbs = meta.imagePath.startsWith("http") ? meta.imagePath : `${SITE_URL}${meta.imagePath}`;

  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.closest("a, p, h1, h2, h3, h4, h5, h6, span")) return;
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
            <meta property="og:image:width" content="1728" />
            <meta property="og:image:height" content="989" />
            <meta property="og:image:alt" content="DAKIEKSTE – Website preview" />
            <meta property="og:image:type" content="image/jpeg" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={imageAbs} />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />

            <link rel="preload" as="video" href="/videos/Selections_Imagefilm.webm#t=0.001" type="video/webm" fetchpriority="high" />
            <link rel="preload" as="video" href="/videos/Selections_Imagefilm.mp4#t=0.001" type="video/mp4" fetchpriority="high" />
          </Head>

          <Script id="consent-defaults" strategy="beforeInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }

          // Standard: alles Relevante blocken
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted'
          });

          // ga-disable je nach gespeichertem Consent (true = komplett stumm)
          try {
            var saved = localStorage.getItem('dak:consent');
            window['ga-disable-${GA_ID}'] = (saved !== 'granted');
            if (saved === 'granted') {
              gtag('consent', 'update', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted'
              });
            }
          } catch(e){}
        `}
          </Script>

          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
          </Script>

          <Component {...pageProps} />
          <Analytics />
        </div>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
