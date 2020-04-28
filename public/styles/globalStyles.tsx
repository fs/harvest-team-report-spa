import { createGlobalStyle, css } from 'styled-components';
import theme from './theme';
import materialTheme from './materialTheme';
import { RobotoCyrillicExt, RobotoCyrillic, RobotoLatin, RobotoLatinExt } from '../fonts/Roboto';

const { colors } = theme;
const {
  palette: { primary },
} = materialTheme;

const GlobalStyles = createGlobalStyle(
  () => css`
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

    #nprogress {
      background: rgba(255, 255, 255, 0.4);
      position: fixed;
      z-index: 1031;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      .spinner,
      .spinner:after {
        border-radius: 50%;
        width: 12em;
        height: 11em;
      }
      .spinner {
        font-size: 0.3rem;
        position: relative;
        border: 1.1em solid ${primary.light};
        border-left-color: ${primary.dark};
        transform: translateZ(0);
        animation: load8 0.9s infinite ease;
      }
      @keyframes load8 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  `,
);

export default GlobalStyles;
