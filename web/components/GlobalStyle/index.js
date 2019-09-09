import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Nanum Gothic', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    font-size: 62.5%;
    background: #f2f2f2;
  }

  #root {
    height: 100%;
  }

  .MuiTableCell-root {
    padding: 1.6rem 1rem;
  }
`;

export default GlobalStyle;
