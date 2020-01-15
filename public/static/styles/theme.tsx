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
};
