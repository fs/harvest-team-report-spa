import { breakpoints, breakpointsPlusOnePx } from './breakpoints';

export enum Screens {
  xs = 'xs', // 0 - 576px
  sm = 'sm', // 576px - 768px
  md = 'md', // 768px - 992px
  lg = 'lg', // 992px - 1200px
  xl = 'xl', // 1200px - 9999px
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

// @ts-ignore
export const screenOnly = (screen: string) => `@media screen and ${mediasExact[screen]}`;
// @ts-ignore
export const screenUp = (screen: string) => `@media screen and ${mediasUp[screen]};
  `;
// @ts-ignore
export const screenDown = (screen: string) => `@media screen and ${mediasDown[screen]};`;

export const screenBetween = (screenUpFrom: string, screenDownFrom: string) =>
  // @ts-ignore
  `@media screen and ${mediasUp[screenUpFrom]} and ${screenDownFrom[screenTo]}`;
