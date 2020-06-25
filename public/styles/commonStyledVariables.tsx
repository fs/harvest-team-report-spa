import { css } from 'styled-components';
import theme from './theme';

const { screenOnly, containerWidth } = theme;

export const getContainer = (screen: string) => {
  return css`
    ${screenOnly(screen)} {
      width: ${// @ts-ignore
      containerWidth[screen]};
    }
  `;
};
