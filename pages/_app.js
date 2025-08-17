import { ThemeProvider, StyleSheetManager } from "styled-components";
import GlobalStyle from "../styles";
import { theme } from "../styles";
import { useEffect } from "react";
// import CustomCursor from "@/components/CustomCursor";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.closest("p, h1, h2, h3, h4, h5, h6, span")) {
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
        <>
          <GlobalStyle />
          {/* <CustomCursor /> */}
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
