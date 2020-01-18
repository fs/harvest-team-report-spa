import { css } from 'styled-components';
import Breakpoints from './breakpoints';

// import { up, down, between, only } from 'styled-breakpoints';
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
  [Screens.xs]: `(${Width.min} ${Breakpoints.underXS})`,
  [Screens.sm]: `(${Width.min} ${Breakpoints.xsSm})`,
  [Screens.md]: `(${Width.min} ${Breakpoints.smMd})`,
  [Screens.lg]: `(${Width.min} ${Breakpoints.mdLg})`,
  [Screens.xl]: `(${Width.min} ${Breakpoints.lgXl})`,
};

export const mediasDown = {
  [Screens.xs]: `(${Width.max} ${Breakpoints.xsSm})`,
  [Screens.sm]: `(${Width.max} ${Breakpoints.smMd})`,
  [Screens.md]: `(${Width.max} ${Breakpoints.mdLg})`,
  [Screens.lg]: `(${Width.max} ${Breakpoints.lgXl})`,
  [Screens.xl]: `(${Width.max} ${Breakpoints.aboveXL})`,
};

const mediasExact = {
  [Screens.xs]: `${mediasDown[Screens.xs]}`,
  [Screens.sm]: `${mediasUp[Screens.sm]} and ${mediasDown[Screens.sm]}`,
  [Screens.md]: `${mediasUp[Screens.md]} and ${mediasDown[Screens.md]}`,
  [Screens.lg]: `${mediasUp[Screens.lg]} and ${mediasDown[Screens.lg]}`,
  [Screens.xl]: `${mediasUp[Screens.xl]}`,
};

export const only = (screen: string, styles: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const str = mediasExact[screen];
  return css`
    @media screen and ${str} {
      ${styles}
    }
  `;
};

export const upFrom = (screen: string, styles: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const str = mediasUp[screen];
  return css`
    @media screen and ${str} {
      ${styles}
    }
  `;
};

export const downFrom = (screen: string, styles: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const str = mediasDown[screen];
  return css`
    @media screen and ${str} {
      ${styles}
    }
  `;
};

export const range = (screenFrom: string, screenTo: string, styles: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const str = `${mediasUp[screenFrom]} and ${mediasDown[screenTo]}`;
  return css`
    @media screen and ${str} {
      ${styles}
    }
  `;
};
