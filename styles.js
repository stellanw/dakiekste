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
    // xxxs: "0.4rem",
    xxs: "0.75rem",
    xs: "0.9rem", // 12px
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
    xxs: "0.4rem",
    xs: "0.6rem", // 3.2px
    s: "0.75rem", // 6.4px
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
    s: "1rem",
    m: "1.2rem",
    l: "1.6rem",
    xl: "2rem",
    xxl: "2.3rem",
    xxxl: "3rem",
    xxxxl: "4rem",
    xxxxxl: "5rem",
  },

  fontWeight: {
    light: 200,
    regular: 300,
    bold: 600,
    extraBold: 700,
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
 overflow-x: hidden;
    overflow-y: auto; 
/* cursor: none;  */

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
  font-weight: 700;
  font-size: ${theme.fontSizes.xxl};
  line-height: ${theme.lineHeight.xxl};
  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.xxxxl};
    line-height: ${theme.lineHeight.xxxxl};
  }
  @media (min-width: 1100px) {
    font-size: ${theme.fontSizes.xxxxxl};
    line-height: ${theme.lineHeight.xxxxxl};
  }
}

h2{
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 0.09rem;
    font-size: ${theme.fontSizes.xxs};
    padding-bottom: ${theme.spacing.xxs};

    @media (min-width: 750px) {
      font-size: ${theme.fontSizes.xs};
      padding-bottom: ${theme.spacing.xs};
    }
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.s};
      padding-bottom: ${theme.spacing.s};
    }
}

h3{
  font-weight: ${theme.fontWeight.fatBold};
  text-transform: uppercase;
  font-size: ${theme.fontSizes.s};
  padding-bottom: ${theme.spacing.xs};
  letter-spacing: 0.05rem;

  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.m};
    padding-bottom: ${theme.spacing.s};
    }
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.l};
      padding-bottom: ${theme.spacing.m};
    }
}

h4{
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.extraBold};
  text-transform: uppercase;
  padding-bottom: ${theme.spacing.xs};

  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.s};
    padding-bottom: ${theme.spacing.s};
    }
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.m};
      padding-bottom: ${theme.spacing.m};
    }
}

h5{
  text-transform: uppercase;
  font-weight: ${theme.fontWeight.light};
  font-size: ${theme.fontSizes.xs};

@media (min-width: 750px) {
  font-size: ${theme.fontSizes.xs};
  }
  @media (min-width: 1100px) {
    font-size: ${theme.fontSizes.s};
  }
}

h6{    
  font-weight: ${theme.fontWeight.light};
  text-transform: uppercase;
  padding-bottom:${theme.spacing.s};}

p {
  font-weight: 100;
  font-size: ${theme.fontSizes.xxs};
  line-height: ${theme.lineHeight.s};

  @media (min-width: 750px) {
      font-size: ${theme.fontSizes.xs};
      line-height: ${theme.lineHeight.m};
    }
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.s};
      line-height: ${theme.lineHeight.l};
    }
}

label {
    text-transform: uppercase;
    font-weight: 200;
    color: ${theme.color.green};
    padding: 0 0 ${theme.spacing.xxs} 0;
  }

  input {
    width: 100%;
    padding: ${theme.spacing.s};
    margin-bottom: ${theme.spacing.m};
    border: 1px solid ${theme.color.green};
    border-radius: ${theme.borderRadius};
    font-size: ${theme.fontSizes.s};
    background-color: ${theme.color.beige};
    &:focus {
      border-color: ${theme.color.green};
      outline: none;
      box-shadow: 0 0 0 2px ${theme.color.green};
    }
  }

  textarea {
    width: 100%;
    padding: ${theme.spacing.s};
    margin-bottom: ${theme.spacing.s};
    border: 1px solid ${theme.color.green};
    border-radius: ${theme.borderRadius};
    font-size: ${theme.fontSizes.s};
    background-color: ${theme.color.beige};
    color: ${theme.color.dark};
    height: 200px;
    resize: none;
    &:focus {
      border-color: ${theme.color.green};
      outline: none;
      box-shadow: 0 0 0 2px ${theme.color.green};
    }
  }

li{
  list-style: none;
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

input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; 
  width: 16px;
  height: 16px;
  border: 2px solid ${theme.color.dark};
  border-radius: 50%; 
  background-color: ${theme.color.beige};
  cursor: pointer;
  display: inline-block;
  margin: 0;
  transform: scale(0.5);
  outline: none;
}

input[type="checkbox"]:checked {
  background-color: ${theme.color.green};
}

input[type="checkbox"]:hover {

}

input[type="checkbox"]:active {

}
`;
