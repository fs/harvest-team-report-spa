import Breakpoints from './breakpoints';

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

export const upFrom = {
  [Screens.sm]: `(${Width.min} ${Breakpoints.xsSm})`,
  [Screens.md]: `(${Width.min} ${Breakpoints.smMd})`,
  [Screens.lg]: `(${Width.min} ${Breakpoints.mdLg})`,
  [Screens.xl]: `(${Width.min} ${Breakpoints.lgXl})`,
};

export const downFrom = {
  [Screens.xs]: `(${Width.max} ${Breakpoints.xsSm})`,
  [Screens.sm]: `(${Width.max} ${Breakpoints.smMd})`,
  [Screens.md]: `(${Width.max} ${Breakpoints.mdLg})`,
  [Screens.lg]: `(${Width.max} ${Breakpoints.lgXl})`,
};

export const only = {
  [Screens.xs]: `${downFrom[Screens.xs]}`,
  [Screens.sm]: `${upFrom[Screens.sm]} and ${downFrom[Screens.sm]}`,
  [Screens.md]: `${upFrom[Screens.md]} and ${downFrom[Screens.md]}`,
  [Screens.lg]: `${upFrom[Screens.lg]} and ${downFrom[Screens.lg]}`,
  [Screens.xl]: `${upFrom[Screens.xl]}`,
};
