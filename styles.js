import { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    dark: "#252422",
    beige: "#F9F8F3",
    green: "#A3FFB7",
    lightGreen: "#D1F2D8",
    dust: "#8C8A7F",
  },

  borderRadius: "5px",

  fontSizes: {
    xxxs: "0.4rem",
    xxs: "0.5rem",
    xs: "0.75rem", // 12px
    s: "1rem", // 16px (Standardgröße in den meisten Browsern)
    m: "1.3rem", // 20.8px
    l: "1.6rem", // 25.6px
    xl: "2rem", // 32px
    xxl: "2.5rem", // 40px
    xxxl: "3rem", // 48px
    xxxxl: "4rem",
    xxxxxl: "5rem", // 65px
  },

  spacing: {
    xs: "0.2rem", // 3.2px
    s: "0.4rem", // 6.4px
    m: "1rem", // 16px
    sm: "1.2rem",
    ml: "2rem", // 32px
    l: "2.5rem",
    xl: "3rem", // 48px
    xxl: "4rem", // 64px
    xxxl: "6rem", //96px
    xxxxl: "9rem",
  },

  lineHeight: {
    xs: "0.8rem",
    s: "1.2rem",
    m: "1.3rem",
    l: "1.5rem",
    xl: "1.8rem",
    xxl: "2rem",
  },

  fontWeight: {
    light: 200,
    regular: 300,
    bold: 400,
    extraBold: 600,
    fatBold: 800,
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
    font-family: "Figtree", sans-serif;
    font-size: 18px;
    background-color: ${theme.color.beige};
    color: ${theme.color.dark};
    /* overflow-x: hidden; 
    overflow-y: auto; */
    /* cursor: none; */

  }
a {
color: ${theme.color.dark};
text-decoration: none;
};

header, main, Footer {
    flex-shrink: 0;
    flex-grow: 0;
}

h1{
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.extraBold};
text-transform: uppercase;
padding-bottom: ${theme.spacing.m};
}

h2{
  font-size: ${theme.fontSizes.l};
  text-transform: uppercase;
}

h3{
  font-size: ${theme.fontSizes.m};
  text-transform: uppercase;
}

h4{
  font-size: ${theme.fontSizes.ml};
  text-transform: uppercase;
}

h5{    
  font-weight: ${theme.fontWeight.light};
text-transform: uppercase;
padding-bottom:${theme.spacing.s};}

h6{
    font-weight: ${theme.fontWeight.extraBold};
    font-size: ${theme.fontSizes.xs};
    text-transform: uppercase;
    padding-bottom:${theme.spacing.s};
  }

li{
  list-style: none;
}




p {
  font-weight: 300;
  line-height: 1.3rem;
}

a:hover {

  }

  textarea, input{
    font-family: "Figtree", sans-serif;
  }

  ::selection {
  background-color:${theme.color.green}; 
  color: ${theme.color.dark}; 
  }
`;
