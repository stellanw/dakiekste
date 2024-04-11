import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    height: 100%;
    width: 100%;
    font-family: "Bricolage Grotesque", sans-serif;
  }
a {
color: black;
text-decoration: none;
/* background-color: lightgray;
padding:0.5rem;
border-radius:5px; */
};
main{
  display: flex;
  flex-grow: 1;
  height: 100%;
    width: 100%;
}
header, main, Footer {
    flex-shrink: 0;
}

a:hover {
  font-weight: bold;}

`;
