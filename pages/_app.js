import { ThemeProvider, StyleSheetManager } from "styled-components";
import GlobalStyle from "../styles";
import { theme } from "../styles";
import { useEffect } from "react";
// import CustomCursor from "@/components/CustomCursor";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();

    if (window.innerWidth > 768) {
      document.addEventListener("contextmenu", handleContextMenu);
    }

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
