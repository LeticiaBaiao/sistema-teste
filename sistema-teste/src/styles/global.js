import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, rgba(139,3,41,1) 0%, rgba(74,10,60,1) 35%, rgba(7,11,11,1) 100%);
    font-family: Arial, Helvetica, sans-serif
  }
`;

export default GlobalStyle;