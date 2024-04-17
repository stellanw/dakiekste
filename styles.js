import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: "Bricolage Grotesque", sans-serif;
  }
a {
color: black;
text-decoration: none;
};

/* header, main, Footer {
    flex-shrink: 0;
    flex-grow: 0;
} */

a:hover {

  }

`;
