import { screenUp, screenDown, screenOnly, screenBetween, Screens } from '../config/screens';

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
  screens: {
    xs: Screens.xs,
    sm: Screens.sm,
    md: Screens.md,
    lg: Screens.lg,
    xl: Screens.xl,
  },
  colors: {
    billable: '#0065CF',
    billableExceeded: '#FA0000',
    nonBillable: '#90C6ED',
    nonBillableExceeded: '#FF9B9B',
    progressLineBorder: '#e6e6e6',
  },
};
