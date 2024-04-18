import { createGlobalStyle } from "styled-components";

export const theme = {
  textColor: "#1D1D1B",
  primaryColor1: "#11A984",
  primaryColor2: "#16C097",
  secondaryColor: "#E9E8FB",
  alertColor: "red",
  confirmColor: "green",
};

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
color: ${theme.textColor};
text-decoration: none;
};

/* header, main, Footer {
    flex-shrink: 0;
    flex-grow: 0;
} */

li{
  list-style: none;
}

a:hover {

  }

`;
