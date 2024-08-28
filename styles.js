import { createGlobalStyle } from "styled-components";

export const theme = {
  textColor: "#1D1D1B",
  textColorBright: "#F9F8F3",
  primaryColor: "#3b524a",
  secondaryColorPurple: "#F9F8F3",
  secondaryColorBeige: "#F9F8F3",
  alertColor: "red",
  confirmColor: "green",
  highlightColor: "#A3FFB7",
  darkBackgroundColor: "#252422",
  brightBackgroundColor: "#D1F2D8",

  fontSizes: {
    xs: "0.8rem",
    small: "1rem",
    medium: "1.3rem",
    large: "1.6rem",
    xl: "2rem",
    xxl: "2.5rem",
    xxxl: "3rem",
  },

  spacing: {
    xs: "0.2rem",
    s: "0.4rem",
    m: "1rem",
    l: "2rem",
    xl: "4rem",
  },
};

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
  padding: 0;
    box-sizing: border-box;

  }

  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: "Bricolage Grotesque", sans-serif;
    font-size: 18px;
    /* overflow-x: hidden; 
    overflow-y: auto; */
  }
a {
color: ${theme.textColor};
text-decoration: none;
};

header, main, Footer {
    flex-shrink: 0;
    flex-grow: 0;
}

li{
  list-style: none;
}

a:hover {

  }



`;
