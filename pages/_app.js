import { ThemeProvider, StyleSheetManager } from "styled-components";
import GlobalStyle from "../styles";
import { theme } from "../styles";
// import CustomCursor from "@/components/CustomCursor";

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager>
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
