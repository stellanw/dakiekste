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
    m: "0.9",
    l: "1",
    xl: "1.3",
    xxl: "1.6",
    xxxl: "2",
  },

  fontWeight: {
    light: 300,
    regular: 400,
    bold: 600,
    mediumBold: 700,
    extraBold: 800,
  },

  height: {
    header: "40rem",
    hero: "42rem",
    section: "30rem",
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

  maxContent: "2200px",
  maxText: "700px",

  breakpoints: {
    mobile: "480px", // kleine bis mittlere Phones
    tablet: "768px", // iPads, große Phones quer
    //tablet: "900px", // iPads, große Phones quer
    desktop: "1200px", // Laptops & große Screens
    wide: "2400px", // extrem große Screens
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

    //z-index
    --index-menu: 120;
    --index-menu-content: 130;
    --index-overlay-backdrop: 2000;
    --index-overlay-content: 2010;

//--font-xxxl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);     //56px → h1 
//--font-xxl:  clamp(1.75rem, 1.45rem + 1.2vw, 2.875rem);    // 46px → h3 / h4 
//--font-xl:   clamp(1.25rem, 1.05rem + 1vw, 2.25rem);       // 36px → gestyltes p 
//--font-l:    clamp(1rem, 0.9rem + 0.8vw, 1.25rem);         // 20px → Standard p / h5 
//--font-m:    clamp(0.875rem, 0.8rem + 0.6vw, 1rem);        // 16px → h2 
//--font-s:    clamp(0.875rem, 0.85rem + 0.2vw, 0.875rem);   // 14px → kleine Schrift (konstant) 
//--font-xs:   clamp(0.625rem, 0.6rem + 0.4vw, 0.75rem);     // 12px → z. B. für Meta, Labels

//kleiner
--font-xxxl: clamp(2rem, 1.5rem + 2vw, 3rem);       /* ~48px → h1 */
--font-xxl:  clamp(1.5rem, 1.3rem + 1.1vw, 2.5rem); /* ~40px → h3 / h4 */
--font-xl:   clamp(1.125rem, 1rem + 0.9vw, 2rem);   /* ~32px → gestyltes p */
--font-l:    clamp(0.95rem, 0.85rem + 0.7vw, 1.125rem); /* ~18px → Standard p / h5 */
--font-m:    clamp(0.8rem, 0.75rem + 0.5vw, 0.95rem);   /* ~15px → h2 */
--font-s:    clamp(0.8rem, 0.78rem + 0.2vw, 0.85rem);   /* ~13px → kleine Schrift */
--font-xs:   clamp(0.6rem, 0.55rem + 0.35vw, 0.7rem);   /* ~11px → Meta, Labels */



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

  --max-content: ${theme.maxContent};
  --max-text: ${theme.maxText};

  /* Height variables */
  --height-header: ${theme.height.header};
  --height-hero: ${theme.height.hero};
  --height-section: ${theme.height.section};
}

@media (min-width: ${theme.breakpoints.desktop}) {
  :root {
    --side-padding: 4rem;
    --nav-height: 6rem;
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
  background-color: ${theme.color.beige} !important;
    color: ${theme.color.dark};
    scroll-behavior: smooth;

    max-width: var(--max-content);
    margin-inline: auto;
  }

  a {
    color: ${theme.color.dark};
    text-decoration: none;
  }

a:visited { color: inherit; }

  header, main, footer {
    flex-shrink: 0;
    flex-grow: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    white-space: normal;
      word-wrap: normal;
    word-break: keep-all !important;
      text-overflow: ellipsis;
      overflow-wrap: normal;    
    
    /* overflow-wrap: break-word; */
    /* hyphens: auto; */
  }

  h1 {
    font-weight: ${theme.fontWeight.extraBold};
    font-size: var(--font-xxxl);
    line-height: 1.15;
  }

  h2 {
    font-weight: ${theme.fontWeight.light};
    text-transform: uppercase;
    letter-spacing: 0.09rem;
    font-size: var(--font-m);
line-height: ${theme.lineHeight.l};

margin-bottom: calc(0.15 * var(--spacing-xs));

    @media (max-width: ${theme.breakpoints.mobile}) {
   font-size: calc(0.95*var(--font-s));
//font-size: var(--font-s);
margin-bottom: calc(0.35 * var(--spacing-xs));
    }
  }

h3 {
  font-weight: ${theme.fontWeight.extraBold};
  text-transform: uppercase;
  font-size: var(--font-xxl);
margin-bottom: var(--spacing-s);
padding: 0;
  letter-spacing: 0.03rem;
  line-height: 1.2;
word-wrap: normal !important;
  @media (min-width: ${theme.breakpoints.desktop}) {
margin-bottom:calc(0.5*var(--spacing-s));
  }
}

  h4 {
    font-size: var(--font-xl);
    font-weight: ${theme.fontWeight.light};
    text-transform: none;
    line-height: ${theme.lineHeight.xl};
    letter-spacing: normal;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: var(--font-xl);
      line-height: ${theme.lineHeight.xl};
      padding-top: calc(0.25*var(--spacing-xs));
    }
  }

  h5 {
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.mediumBold};
  font-size: var(--font-l);
line-height: ${theme.lineHeight.m};
    letter-spacing: 0.03rem;
margin-bottom: var(--spacing-m);

  }

  
  h6 {
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.mediumBold};
font-size: var(--font-m);
    line-height: ${theme.lineHeight.m};
    letter-spacing: 0.05rem;
margin-bottom: var(--spacing-s);
    @media (min-width: ${theme.breakpoints.tablet}) {
      line-height: ${theme.lineHeight.l};
    }
  }

  h7 {    
    font-weight: ${theme.fontWeight.light};
    letter-spacing: 0.09rem;
  font-size: var(--font-s);
line-height: ${theme.lineHeight.l};

    @media (min-width: ${theme.breakpoints.tablet}) {


    }
  }

  p {
    font-weight: ${theme.fontWeight.light};
  font-size: var(--font-l);
    line-height: 1.4;


  }

  label {
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.light};
    color: ${theme.color.green};
    margin-bottom: calc(0.5 * var(--spacing-xs));
  }

  input, textarea, select {

        font-family: "Figtree", sans-serif;
        font-size: var(--font-m);
        font-weight: ${theme.fontWeight.light};
        letter-spacing: 0.04rem;
    width: 100%;
    border: 1px solid ${theme.color.green};
    border-radius: ${theme.borderRadius};
    color: ${theme.color.beige};
background-color: transparent;
 border-radius: calc(0.5 * (${theme.borderRadius}));

    @media (max-width: ${theme.breakpoints.mobile}) {
font-size: 16px;
    }

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
  font-family: "Figtree", sans-serif;
  border-radius: calc(0.5 * (${theme.borderRadius}));
  color: inherit;
cursor: pointer;
 -webkit-font-smoothing: antialiased;
-webkit-tap-highlight-color: transparent;

 user-select: none;
  -webkit-user-select: none; 
  -ms-user-select: none; 

    &:hover {
    transform: translateY(-1px);}
}

.yarl__root{
  box-shadow: none !important;
  color: ${theme.color.dark};
}

.yarl__container {
  /* background-color: rgba(163, 255, 183, 0.95);  */
  background-color: rgba(249, 248, 243, 0.9);
 /* background-color: ${theme.color.beige}; */
}

.yarl__slide_image {
  border-radius: 20px;
  
}



.yarl__icon {
 
}

.yarl__navigation_prev{
   
}

.yarl__navigation_next{
    
}


.yarl__button {
    background: transparent !important;
    filter: none !important;
  }

  /* Entfernt sonstige Schatten */
  .yarl__container,
  .yarl__toolbar,
  .yarl__thumbnails_container,
  .yarl__slide,
    .yarl__slide_current,
  .yarl__slide_image {
    box-shadow: none !important;
  }

`;
