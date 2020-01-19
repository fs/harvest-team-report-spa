import {
  startOfISOWeek,
  endOfISOWeek,
  setISOWeek,
  getISOWeek,
  getYear,
  setYear,
  format,
  isSameMonth,
  isSameYear,
} from 'date-fns';
import { HomePageQuery } from '../public/static/config/types/Queries';

// todo need tests

const useWeekInfo = (query: HomePageQuery) => {
  const { week: queryWeek, year: queryYear } = query;
  let date = new Date();
  const year = queryYear ? +queryYear : getYear(date);
  date = setYear(date, year);
  const week = queryWeek ? +queryWeek : getISOWeek(date);
  date = setISOWeek(date, week);
  const weekStarts = startOfISOWeek(date);
  const weekEnds = endOfISOWeek(date);
  const formattedEnd = format(weekEnds, 'd LLL y');
  const formattedStart = (formatString = 'd') => format(weekStarts, formatString);

  let weekString = `${formattedStart()} - ${formattedEnd}`;
  if (!isSameMonth(weekStarts, weekEnds)) {
    weekString = `${formattedStart('d LLL')} - ${formattedEnd}`;
  }
  if (!isSameYear(weekStarts, weekEnds)) {
    weekString = `${formattedStart('d LLL y')} - ${formattedEnd}`;
  }

  const nextWeek = setISOWeek(date, week + 1);
  const prevWeek = setISOWeek(date, week - 1);

  const getLink = (linkDate: Date) => `/?week=${getISOWeek(linkDate)}&year=${getYear(linkDate)}`;
  const nextWeekLink = getLink(nextWeek);
  const prevWeekLink = getLink(prevWeek);

  return { weekString, nextWeekLink, prevWeekLink };
};

export default useWeekInfo;
