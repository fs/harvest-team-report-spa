import { setISOWeek, getISOWeek, getYear, startOfISOWeek, lastDayOfISOWeek, addDays, format } from 'date-fns';
import range from 'lodash/range';

const fetchFormatString = 'yyyy-MM-dd';
const visualFormatString = 'd LLL';
const weekDayFormatString = 'EEEE';

const getCurrentWeek = (week?: string, year?: string) => {
  const now = new Date();
  const isoWeek = week ? +week : getISOWeek(now);
  const isoYear = year ? +year : getYear(now);
  return setISOWeek(new Date().setFullYear(isoYear), isoWeek);
};

export const getWeekFromToDates = (week?: string, year?: string) => {
  const currentWeek = getCurrentWeek(week, year);
  return {
    from: format(startOfISOWeek(currentWeek), fetchFormatString),
    to: format(lastDayOfISOWeek(currentWeek), fetchFormatString),
  };
};

export const getWeekDaysArray = (week?: string, year?: string) => {
  const currentWeek = getCurrentWeek(week, year);
  const weekStart = startOfISOWeek(currentWeek);
  return range(7).map(days => {
    const day = addDays(weekStart, days);
    return {
      fetchFormat: format(day, fetchFormatString),
      visualFormat: format(day, visualFormatString),
      weekDayFormat: format(day, weekDayFormatString),
    };
  });
};
