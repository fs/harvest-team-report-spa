import { css } from 'styled-components';
import { breakpoints, breakpointsPlusOnePx } from './breakpoints';

export enum Screens {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

enum Width {
  min = 'min-width:',
  max = 'max-width:',
}

export const mediasUp = {
  [Screens.xs]: `(${Width.min} ${breakpoints.underXS})`,
  [Screens.sm]: `(${Width.min} ${breakpointsPlusOnePx.xsSm})`,
  [Screens.md]: `(${Width.min} ${breakpointsPlusOnePx.smMd})`,
  [Screens.lg]: `(${Width.min} ${breakpointsPlusOnePx.mdLg})`,
  [Screens.xl]: `(${Width.min} ${breakpointsPlusOnePx.lgXl})`,
};

export const mediasDown = {
  [Screens.xs]: `(${Width.max} ${breakpoints.xsSm})`,
  [Screens.sm]: `(${Width.max} ${breakpoints.smMd})`,
  [Screens.md]: `(${Width.max} ${breakpoints.mdLg})`,
  [Screens.lg]: `(${Width.max} ${breakpoints.lgXl})`,
  [Screens.xl]: `(${Width.max} ${breakpoints.aboveXL})`,
};

const mediasExact = {
  [Screens.xs]: `${mediasDown[Screens.xs]}`,
  [Screens.sm]: `${mediasUp[Screens.sm]} and ${mediasDown[Screens.sm]}`,
  [Screens.md]: `${mediasUp[Screens.md]} and ${mediasDown[Screens.md]}`,
  [Screens.lg]: `${mediasUp[Screens.lg]} and ${mediasDown[Screens.lg]}`,
  [Screens.xl]: `${mediasUp[Screens.xl]}`,
};

export const mediaOnly = (screen: string, styles: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const str = mediasExact[screen];
  return css`
    @media screen and ${str} {
      ${styles}
    }
  `;
};

export const mediaUpFrom = (screen: string, styles: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const str = mediasUp[screen];
  return css`
    @media screen and ${str} {
      ${styles}
    }
  `;
};

export const mediaDownFrom = (screen: string, styles: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const str = mediasDown[screen];
  return css`
    @media screen and ${str} {
      ${styles}
    }
  `;
};

export const mediaRange = (screenUpFrom: string, screenDownFrom: string, styles: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const str = `${mediasUp[screenUpFrom]} and ${screenDownFrom[screenTo]}`;
  return css`
    @media screen and ${str} {
      ${styles}
    }
  `;
};
