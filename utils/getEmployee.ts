import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { hsl } from 'polished';
import { getWeekDaysArray } from './getWeekFromToDates';

// eslint-disable-next-line @typescript-eslint/camelcase
const defaultUser = { weekly_capacity: 0, avatar_url: '', first_name: '', last_name: '', email: '', roles: [] };
const capacityDivider = 3600;
const getEntriesHours = (entries: any) =>
  entries.reduce((totalHours: number, entry: any) => totalHours + entry.hours, 0);

// project or task only
const getEntryHoursByField = (entries: any, field: 'project' | 'task', hueStart: number, hueStep: number) => {
  const sortedField = orderBy(
    Object.values(groupBy(entries, `${field}.id`)).map(groupedEntries => {
      const hours = getEntriesHours(groupedEntries);
      return { name: groupedEntries[0][field].name, hours };
    }),
    'hours',
    'desc',
  );
  return sortedField.map((fieldItem, i) => ({ ...fieldItem, color: hsl(hueStart + hueStep * i, 0.8, 0.4) }));
};

export const getEmployee = (timeEntries: any, user: any, week?: any, year?: any) => {
  const projects = getEntryHoursByField(timeEntries, 'project', 0, 75);
  const tasks = getEntryHoursByField(timeEntries, 'task', 35, 75);
  const weekByDays = getWeekDaysArray(week, year).map(day => {
    const dayTimeEntries = timeEntries.filter((entry: any) => entry.spent_date === day.fetchFormat);
    const totalHoursInDay = getEntriesHours(dayTimeEntries);
    const tasksInDay = dayTimeEntries.map((entry: any) => {
      const { client, project, task, hours } = entry;
      return {
        client: client.name,
        project: project.name,
        task: task.name,
        taskHours: hours,
      };
    });
    return {
      day: day.weekDayFormat,
      date: day.visualFormat,
      totalHoursInDay,
      tasksInDay,
    };
  });
  const { id, weekly_capacity: wCapacity, avatar_url: avatarURL, first_name: fName, last_name: lName, email, roles } =
    user || defaultUser;
  const department = roles.join(', ');
  const hoursOnWeek = {
    total: 0,
    billable: 0,
    nonBillable: 0,
  };
  timeEntries.forEach((timeEntry: any) => {
    const { billable, rounded_hours: hours } = timeEntry;
    if (billable) {
      hoursOnWeek.billable += hours;
    } else {
      hoursOnWeek.nonBillable += hours;
    }
  });
  hoursOnWeek.total = hoursOnWeek.billable + hoursOnWeek.nonBillable;

  return {
    id: +id,
    email,
    department,
    hoursOnWeek,
    capacity: wCapacity / capacityDivider,
    avatarURL,
    name: `${fName} ${lName}`,
    weekByDays,
    projects,
    tasks,
  };
};
