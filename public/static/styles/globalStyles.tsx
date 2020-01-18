import { createGlobalStyle } from 'styled-components';
import { RobotoCyrillicExt, RobotoCyrillic, RobotoLatin, RobotoLatinExt } from '../fonts/Roboto';

const GlobalStyles = createGlobalStyle`
  ${RobotoCyrillicExt};
  ${RobotoCyrillic};
  ${RobotoLatin};
  ${RobotoLatinExt};
  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Helvetica, sans-serif;
  }
`;

export default GlobalStyles;
