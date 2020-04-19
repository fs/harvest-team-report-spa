import { setISOWeek, getISOWeek, getYear, startOfISOWeek, lastDayOfISOWeek, format } from 'date-fns';

export const getWeekFromToDates = (week?: string, year?: string) => {
  const formatString = 'yyyy-MM-dd';
  const now = new Date();
  const isoWeek = week ? +week : getISOWeek(now);
  const isoYear = year ? +year : getYear(now);
  const thisWeek = setISOWeek(new Date().setFullYear(isoYear), isoWeek);
  return { from: format(startOfISOWeek(thisWeek), formatString), to: format(lastDayOfISOWeek(thisWeek), formatString) };
};
