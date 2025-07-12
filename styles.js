import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const theme = {
  color: {
    dark: "#252422",
    beige: "#F9F8F3",
    green: "#A3FFB7",
    lightGreen: "#D1F2D8",
    dust: "#8C8A7F",
  },

  borderRadius: "20px",

  lineHeight: {
    s: "0.8",
    m: "1",
    l: "1.2",
    xl: "1.4",
    xxl: "1.6",
  },

  fontWeight: {
    light: 100,
    regular: 400,
    bold: 600,
    mediumBold: 700,
    extraBold: 800,
  },

  height: {
    header: "34rem",
    hero: "30rem",
    section: "25rem",
  },

  spacing: {
    xs: "0.5rem", // 8px
    s: "0.75rem", // 12px
    m: "1rem", // 16px
    l: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "4rem", // 48px
    xxxl: "6rem", // 48px
  },

  breakpoints: {
    mobile: "480px",
    tablet: "750px",
    desktop: "1100px",
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

   :root {
     /* Font variables */
     --font-xxxl: clamp(2.5rem, 2rem + 2.5vw, 3.75rem);     /* 60px → h1 */
     --font-xxl:  clamp(2rem, 1.7rem + 1.2vw, 3.125rem);     /* 50px → h3 / h4 */
     --font-xl:   clamp(1.5rem, 1.3rem + 1vw, 2.5rem);       /* 40px → gestyltes p */
     --font-l:    clamp(1.25rem, 1.1rem + 0.8vw, 1.5rem);    /* 24px → Standard p / h5 */
     --font-m:    clamp(1rem, 0.9rem + 0.6vw, 1.25rem);      /* 20px → h2 */
     --font-s:    clamp(1rem, 0.95rem + 0.2vw, 1rem);        /* 16px → kleine Schrift (konstant) */
     --font-xs: clamp(0.75rem, 0.7rem + 0.4vw, 0.875rem);   /* z. B. für Meta, Labels */

  /* Spacing variables */
  --spacing-xs: ${theme.spacing.xs};
  --spacing-s: ${theme.spacing.s};
  --spacing-m: ${theme.spacing.m};
  --spacing-l: ${theme.spacing.l};
  --spacing-xl: ${theme.spacing.xl};
  --spacing-xxl: ${theme.spacing.xxl};
  --spacing-xxxl: ${theme.spacing.xxxl};

  /* Side Padding */
  --side-padding: 1.7rem;
  --nav-height: 3.4rem;

  /* Height variables */
  --height-header: ${theme.height.header};
  --height-hero: ${theme.height.hero};
  --height-section: ${theme.height.section};
}

@media (min-width: ${theme.breakpoints.desktop}) {
  :root {
    --side-padding: 4rem;
    --nav-height: 4rem;
  }
}

@media (min-width: ${theme.breakpoints.tablet}) {
  :root {
    /* Scaled spacing */
    --spacing-xs: calc(${theme.spacing.xs} * 1.2);
    --spacing-s: calc(${theme.spacing.s} * 1.2);
    --spacing-m: calc(${theme.spacing.m} * 1.2);
    --spacing-l: calc(${theme.spacing.l} * 1.2);
    --spacing-xl: calc(${theme.spacing.xl} * 1.2);
    --spacing-xxl: calc(${theme.spacing.xxl} * 1.2);
--spacing-xxxl: calc(${theme.spacing.xxxl} * 1.2);

    /* Scaled heights */
    --height-header: calc(${theme.height.header} * 1.2);
    --height-hero: calc(${theme.height.hero} * 1.2);
    --height-section: calc(${theme.height.section} * 1.2);
  }
}

@media (min-width: ${theme.breakpoints.desktop}) {
  :root {
    /* Further scaled spacing */
    --spacing-xs: calc(${theme.spacing.xs} * 2);
    --spacing-s: calc(${theme.spacing.s} * 2);
    --spacing-m: calc(${theme.spacing.m} * 2);
    --spacing-l: calc(${theme.spacing.l} * 2);
    --spacing-xl: calc(${theme.spacing.xl} * 2);
    --spacing-xxl: calc(${theme.spacing.xxl} * 2);
    --spacing-xxxl: calc(${theme.spacing.xxxl} * 2);

    /* Further scaled heights */
    --height-header: calc(${theme.height.header} * 1.4);
    --height-hero: calc(${theme.height.hero} * 1.4);
    --height-section: calc(${theme.height.section} * 1.4);
  }
}
  


  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: "Figtree", sans-serif;
    font-size: 16px; 
    background-color: ${theme.color.beige};
    color: ${theme.color.dark};
    scroll-behavior: smooth;
  }

  a {
    color: ${theme.color.dark};
    text-decoration: none;
  }

  header, main, footer {
    flex-shrink: 0;
    flex-grow: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    white-space: normal;
    word-break: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }

  h1 {
    font-weight: ${theme.fontWeight.extraBold};
    font-size: var(--font-xxxl);
    line-height: ${theme.lineHeight.l};
  }

  h2 {
    font-weight: ${theme.fontWeight.light};
    text-transform: uppercase;
    letter-spacing: 0.09rem;
    font-size: var(--font-xs);
line-height: ${theme.lineHeight.l};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: var(--font-s);

    }
  }

h3 {
  font-weight: ${theme.fontWeight.extraBold};
  text-transform: uppercase;
  font-size: var(--font-xl);
  padding-bottom: var(--spacing-s);
  letter-spacing: 0.03rem;
  line-height: ${theme.lineHeight.m};

  @media (min-width: ${theme.breakpoints.tablet}) {
font-size: var(--font-xxl);
    letter-spacing: 0.05rem;
    line-height: ${theme.lineHeight.xl};
  }
}

  h4 {
    font-size: var(--font-m);
    font-weight: ${theme.fontWeight.bold};
    text-transform: none;
    line-height: ${theme.lineHeight.xl};
    letter-spacing: 0.04rem;


    @media (min-width: ${theme.breakpoints.tablet}) {
     font-size: var(--font-xl);
    }
  }

  h5 {
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.bold};
  font-size: var(--font-l);
line-height: ${theme.lineHeight.l};
    @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: var(--font-xl);
      line-height: ${theme.lineHeight.xl};
    }
  }

  
  h6 {
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.mediumBold};
font-size: var(--font-m);
    line-height: ${theme.lineHeight.m};
    letter-spacing: 0.05rem;
    padding-bottom: var(--spacing-xs);
    @media (min-width: ${theme.breakpoints.tablet}) {
font-size: var(--font-m);
      line-height: ${theme.lineHeight.l};
    }
  }

  h7 {    
    font-weight: ${theme.fontWeight.light};
    letter-spacing: 0.09rem;
  font-size: var(--font-s);
line-height: ${theme.lineHeight.l};

    @media (min-width: ${theme.breakpoints.tablet}) {
font-size: var(--font-m);

    }
  }

  p {
    font-weight: ${theme.fontWeight.regular};
  font-size: var(--font-s);
    line-height: ${theme.lineHeight.xl};

        @media (min-width: ${theme.breakpoints.tablet}) {
    font-weight: ${theme.fontWeight.regular};
font-size: var(--font-m);
    line-height: ${theme.lineHeight.xl};

    }
  }

  label {
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.light};
    color: ${theme.color.green};
    padding: 0 0 ${theme.spacing.xs} 0;
  }

  input, textarea {

        font-family: "Figtree", sans-serif;
        font-size: var(--font-m);
        font-weight: ${theme.fontWeight.light};
        letter-spacing: 0.06rem;
    width: 100%;
    border: 1px solid ${theme.color.green};
    border-radius: ${theme.borderRadius};
    color: ${theme.color.beige};
background-color: transparent;
 border-radius: calc(0.5 * (${theme.borderRadius}));
  }

      input:-webkit-autofill,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${theme.color.dark} inset;
    -webkit-text-fill-color: ${theme.color.beige};
  }

  input[type="checkbox"] {

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; 
    width: 30px;
    height: 30px;
    border-radius: 50%; 
    cursor: pointer;
    display: inline-block;
    margin: 0;
    transform: scale(0.5);
    outline: none;
background-color: transparent;
 
 &:checked {
      background-color: ${theme.color.green};
  }}

  li {
    list-style: none;
  }

  ::selection {
    background-color: ${theme.color.green}; 
    color: ${theme.color.dark}; 
  }

  img {
    /* user-drag: none; */
    user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

button{
  border-radius: calc(0.5 * (${theme.borderRadius}));
}
`;
