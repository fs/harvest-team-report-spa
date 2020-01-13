import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import "../fonts/roboto.css";
  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Helvetica, sans-serif;
  }
`;

export default GlobalStyles;
