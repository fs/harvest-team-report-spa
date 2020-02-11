import mapValues from 'lodash/mapValues';

export const breakpointsPure = {
  underXS: 0,
  xsSm: 576,
  smMd: 768,
  mdLg: 992,
  lgXl: 1200,
  aboveXL: 9999,
};

export const breakpoints = { ...mapValues(breakpointsPure, (value: number) => `${value}px`) };

export const breakpointsPlusOnePx = { ...mapValues(breakpointsPure, (value: number) => `${value + 1}px`) };
