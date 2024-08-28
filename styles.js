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

  borderRadius: "15px",

  fontSizes: {
    xs: "0.75rem", // 12px
    s: "1rem", // 16px (Standardgröße in den meisten Browsern)
    m: "1.3rem", // 20.8px
    l: "1.6rem", // 25.6px
    xl: "2rem", // 32px
    xxl: "2.5rem", // 40px
    xxxl: "3rem", // 48px
  },

  spacing: {
    xs: "0.2rem", // 3.2px
    s: "0.4rem", // 6.4px
    m: "1rem", // 16px
    l: "2rem", // 32px
    xl: "3rem", // 48px
    xxl: "4rem", // 64px
    xxxl: "6rem", //96px
  },

  lineHeight: {
    xs: "0.8rem",
    s: "1.2rem",
    m: "1.3rem",
    l: "1.5rem",
    xl: "1.8rem",
    xxl: "2rem",
  },

  breakpoints: {
    s: "480px",
    m: "768px",
    l: "1024px",
    xl: "1200px",
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
