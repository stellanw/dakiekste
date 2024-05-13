import { StyleSheetManager } from "styled-components";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </StyleSheetManager>
  );
}
