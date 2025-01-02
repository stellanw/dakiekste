import { StyleSheetManager } from "styled-components";
import GlobalStyle from "../styles";
// import CustomCursor from "@/components/CustomCursor";

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager>
      <>
        <GlobalStyle />
        {/* <CustomCursor /> */}
        <Component {...pageProps} />
      </>
    </StyleSheetManager>
  );
}
