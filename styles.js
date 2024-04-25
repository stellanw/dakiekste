import { createGlobalStyle } from "styled-components";

export const theme = {
  textColor: "#1D1D1B",
  primaryColor: "#11A984",
  secondaryColorPurple: "#E2E0F5",
  secondaryColorBeige: "#F9F8F3",
  alertColor: "red",
  confirmColor: "green",

  fontSizes: {
    xs: "0.8rem",
    small: "1rem",
    medium: "1.3rem",
    large: "1.6rem",
    xl: "2rem",
    xxl: "2.5rem",
  },
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
