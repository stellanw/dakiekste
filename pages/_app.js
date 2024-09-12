import { StyleSheetManager } from "styled-components";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </StyleSheetManager>
  );
}
