import { css } from 'styled-components';
import { Screens } from '../config/screens';

const getContainer = (screen: string) => {
  return css`
    ${({ theme }) => theme.only(screen, `width: ${theme.containerWidth[screen]}`)}
  `;
};

// eslint-disable-next-line import/prefer-default-export
export const container = {
  [Screens.xs]: getContainer(Screens.xs),
  [Screens.sm]: getContainer(Screens.sm),
  [Screens.md]: getContainer(Screens.md),
  [Screens.lg]: getContainer(Screens.lg),
  [Screens.xl]: getContainer(Screens.xl),
};
