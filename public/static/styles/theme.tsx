import { upFrom, downFrom, only, Screens } from '../config/screens';

export default {
  upFrom,
  downFrom,
  only,
  primary: 'green',
  containerWidth: {
    [Screens.xs]: '96%',
    [Screens.sm]: '540px',
    [Screens.md]: '720px',
    [Screens.lg]: '960px',
    [Screens.xl]: '1200px',
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
  },
};
