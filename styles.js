import { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    dark: "#252422",
    beige: "#F9F8F3",
    green: "#A3FFB7",
    lightGreen: "#D1F2D8",
    dust: "#8C8A7F",
  },

  borderRadius: "15px",

  fontSizes: {
    xxxs: "0.65rem",
    xxs: "0.75rem",
    xs: "0.9rem", // 12px
    s: "1rem", // 16px (Standardgröße in den meisten Browsern)
    m: "1.3rem", // 20.8px
    l: "1.6rem", // 25.6px
    xl: "2rem", // 32px
    xxl: "2.5rem", // 40px
    xxxl: "3rem", // 48px
    xxxxl: "4rem",
    xxxxxl: "4.5rem", // 65px
  },

  spacing: {
    xxxs: "0.2rem",
    xxs: "0.4rem",
    xs: "0.6rem", // 3.2px
    s: "0.75rem", // 6.4px
    m: "1rem", // 16px
    sm: "1.2rem",
    ml: "2rem", // 32px
    l: "2.5rem",
    xl: "2.6rem", // 48px
    xxl: "4rem", // 64px
    xxxl: "6rem", //96px
    xxxxl: "14rem",

    desktop: {
      height: {
        s: "2.5rem", // 40px
        m: "3.75rem", // 60px
        l: "5.62rem", // 90px
        xl: "8.75rem", // 140px
        xxl: "9rem", // 180px
      },
      side: "4rem",
    },

    // desktop: {
    //   height: {
    //     s: "40px", // 40px
    //     m: "60px", // 60px
    //     l: "90px", // 90px
    //     xl: "140px", // 140px
    //     xxl: "180px", // 180px
    //   },
    //   side: "4rem",
    // },

    tablet: {
      height: {
        s: "2.2rem", // 35.2px (Reduziert von 2.5rem)
        m: "3.25rem", // 52px (Reduziert von 3.75rem)
        l: "4.5rem", // 72px (Bleibt gleich)
        xl: "6.5rem", // 104px (Bleibt gleich)
        xxl: "9rem", // 144px (Erhöht von 8rem)
      },
      side: "4rem", // 52.8px (Zwischen Desktop und Mobile)
    },

    mobile: {
      height: {
        s: "2rem", // 32px (Reduziert von 2.5rem auf 2rem)
        m: "3rem", // 48px (Reduziert von 3.75rem auf 3rem)
        l: "4.5rem", // 72px (Reduziert von 5.62rem auf 4.5rem)
        xl: "6.5rem", // 104px (Reduziert von 8.75rem auf 6.5rem)
        xxl: "8rem", // 128px (Reduziert von 11.25rem auf 8rem)
      },
      side: "1.7rem",
    },
  },

  height: {
    mobile: "550px",
    tablet: "800px",
    desktop: "1000px",
  },

  lineHeight: {
    xs: "0.8rem",
    s: "1rem",
    m: "1.33rem",
    l: "1.5rem",
    xl: "1.8rem",
    xxl: "2.1rem",
    xxxl: "2.8rem",
    xxxxl: "4rem",
    xxxxxl: "5rem",
  },

  fontWeight: {
    light: 100,
    regular: 300,
    lightBold: 450,
    bold: 600,
    extraBold: 700,
    fatBold: 800,
  },

  breakpoints: {
    s: "480px",
    m: "750px",
    l: "1100px",
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
    scroll-behavior: smooth;
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

h1,h2,h3,h4,h5,h6{
  white-space: normal;
    word-break: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
}

h1{
  font-weight: 700;
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeight.xl};
padding-bottom: 0.5rem;
  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.xxxl};
    line-height: ${theme.lineHeight.xxxl};
  }
  @media (min-width: 1100px) {
    font-size: ${theme.fontSizes.xxxl};
    line-height: ${theme.lineHeight.xxxl};
  }
}

h2{
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 0.09rem;
    font-size: ${theme.fontSizes.xxs};
    padding-bottom: ${theme.spacing.xxs};

    @media (min-width: 750px) {
      font-size: ${theme.fontSizes.s};
      padding-bottom: ${theme.spacing.xs};
    }
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.s};
      padding-bottom: ${theme.spacing.xs};
    }
}

h3{

  font-weight: ${theme.fontWeight.fatBold};
  text-transform: uppercase;
  font-size: ${theme.fontSizes.m};
  padding-bottom: ${theme.spacing.m};
  letter-spacing: 0.03rem;
  line-height: ${theme.lineHeight.m};
  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.xl};
    padding-bottom: ${theme.spacing.m};
    letter-spacing: 0.05rem;
    line-height: ${theme.lineHeight.xxl};
    }
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.xl};
      padding-bottom: ${theme.spacing.m};
      letter-spacing: 0.05rem;
      line-height: ${theme.lineHeight.xxl};
    }
}

h4{

  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.extraBold};
  text-transform: uppercase;
  padding-bottom: ${theme.spacing.s};
line-height: ${theme.lineHeight.xl};
letter-spacing: 0.04rem;
  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.m};
    padding-bottom: ${theme.spacing.m};
    font-weight: ${theme.fontWeight.bold};
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
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeight.l};
font-weight: ${theme.fontWeight.regular};
  @media (min-width: 750px) {
      font-size: ${theme.fontSizes.m};
      line-height: ${theme.lineHeight.l};
    }
    @media (min-width: 1100px) {
      font-size: ${theme.fontSizes.m};
      line-height: ${theme.lineHeight.xl};
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

      outline: none;
background-color: ${theme.color.green};
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
      outline: none;
      background-color: ${theme.color.green};
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

img {
  user-drag: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

`;
