import { ThemeProvider, StyleSheetManager } from "styled-components";
import GlobalStyle from "../styles";
import { theme } from "../styles";
import { useEffect } from "react";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-figtree",
});

export default function App({ Component, pageProps }) {
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
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
