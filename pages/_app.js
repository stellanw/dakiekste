import { StyleSheetManager } from "styled-components";
import GlobalStyle from "../styles";
// import isPropValid from "@emotion/is-prop-valid";

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager
    // shouldForwardProp={(name) => !name.startsWith("$")}
    // shouldForwardProp={isPropValid}

    // disableVendorPrefixes={false}
    >
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </StyleSheetManager>
  );
}
