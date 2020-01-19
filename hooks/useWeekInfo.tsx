import { startOfWeek, endOfWeek, setWeek, getWeek, getYear, setYear, format, isSameMonth, isSameYear } from 'date-fns';
import { HomePageQuery } from '../public/static/config/types/Queries';

const useWeekInfo = (query: HomePageQuery) => {
  const { week: queryWeek, year: queryYear } = query;
  let date = new Date();
  const year = queryYear ? +queryYear : getYear(date);
  date = setYear(date, year);
  const week = queryWeek ? +queryWeek : getWeek(date);
  date = setWeek(date, week);
  const weekStarts = startOfWeek(date, { weekStartsOn: 1 });
  const weekEnds = endOfWeek(date, { weekStartsOn: 1 });
  const formattedEnd = format(weekEnds, 'd LLL y');
  const formattedStart = (formatString = 'd') => format(weekStarts, formatString);

  let weekString = `${formattedStart()} - ${formattedEnd}`;
  if (!isSameMonth(weekStarts, weekEnds)) {
    weekString = `${formattedStart('d LLL')} - ${formattedEnd}`;
  }
  if (!isSameYear(weekStarts, weekEnds)) {
    weekString = `${formattedStart('d LLL y')} - ${formattedEnd}`;
  }

  const nextWeek = setWeek(date, week + 1);
  const prevWeek = setWeek(date, week - 1);

  const getLink = (linkDate: Date) => `/?week=${getWeek(linkDate)}&year=${getYear(linkDate)}`;
  const nextWeekLink = getLink(nextWeek);
  const prevWeekLink = getLink(prevWeek);

  return { weekString, nextWeekLink, prevWeekLink };
};

export default useWeekInfo;
