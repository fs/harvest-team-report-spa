import mapValues from 'lodash/mapValues';
import { screenUp, screenDown, screenOnly, screenBetween, Screens } from '../../config/screens';
import initialBreakpoints from '../../config/initialBreakpoints';

export default {
  screenUp,
  screenDown,
  screenOnly,
  screenBetween,
  primary: 'green',
  containerWidth: {
    xs: '96%',
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
  },
  breakpoints: {
    ...mapValues(initialBreakpoints, value => `${value}px`),
  },
  screens: {
    xs: Screens.xs,
    sm: Screens.sm,
    md: Screens.md,
    lg: Screens.lg,
    xl: Screens.xl,
  },
  colors: {
    billable: '#1f65a2',
    billableExceeded: '#c81919',
    nonBillable: '#7eacd9',
    nonBillableExceeded: '#d97b7b',
    progressLineBorder: '#e6e6e6',
    backGround: '#f4f6f8',
  },
  up: (breakpoint: number) => `@media (min-width: calc(${breakpoint} + 0.02px))`,
  down: (breakpoint: number) => `@media (max-width: ${breakpoint})`,
  between: (breakpointMin: number, breakpointMax: number) =>
    `@media (max-width: ${breakpointMax}) and (min-width: calc(${breakpointMin} + 0.02px))`,
};
