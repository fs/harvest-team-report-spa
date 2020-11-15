import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { parseISO, isAfter } from 'date-fns';
import { Employee } from '../config/types';

const defaultUser = { weekly_capacity: 0, avatar_url: '' };
const capacityDivider = 3600;

export const getEmployees = (teamReport: any, users: any, weeksFromToDates: any) => {
  const isUserActive = (user: any) =>
    user?.is_active || (!user?.is_active && isAfter(parseISO(user?.updated_at), parseISO(weeksFromToDates.from)));

  const activeUsers = users.filter((user: any) => isUserActive(user));

  // todo actually it's array but should be an object
  const teamReportByUserID = Object.entries(groupBy(teamReport, 'user_id')).reduce(
    // @ts-ignore
    (result, [key, val]) =>
      // @ts-ignore
      ({
        ...result,
        [key]:
          val.length > 1
            ? val.reduce(
                (acc: any, rItem: any) => ({
                  ...acc,
                  total_hours: acc.total_hours + rItem.total_hours,
                  billable_hours: acc.billable_hours + rItem.billable_hours,
                  user_id: rItem.user_id,
                  user_name: rItem.user_name,
                }),
                { total_hours: 0, billable_hours: 0 },
              )
            : val[0],
      }),
    {},
  );

  const teamReportByUsers = activeUsers.map((user: any) => {
    // @ts-ignore
    const userReport = teamReportByUserID[user.id];
    return {
      name: `${user.first_name} ${user.last_name}`,
      id: user.id,
      archived: !user.is_active,
      hoursOnWeek: userReport
        ? {
            total: userReport.total_hours,
            billable: userReport.billable_hours,
            nonBillable: userReport.total_hours - userReport.billable_hours,
          }
        : { total: 0, billable: 0, nonBillable: 0 },
    };
  });

  const teamCapacity =
    users.reduce(
      (capacity: number, user: any) => (isUserActive(user) ? user.weekly_capacity + capacity : capacity),
      0,
    ) / capacityDivider;
  const usersById = groupBy(users, 'id');

  const employees = orderBy(
    teamReportByUsers.map((item: any) => {
      const { id } = item;
      const [user]: any = usersById[id];
      const { weekly_capacity: wCapacity, avatar_url: avatarURL } = user || defaultUser;
      return { ...item, avatarURL, capacity: wCapacity / capacityDivider };
    }),
    'name',
  );

  const hoursOnWeekTotal = employees.reduce(
    (obj: any, item: any) => ({
      ...obj,
      total: obj.total + item.hoursOnWeek.total,
      billable: obj.billable + item.hoursOnWeek.billable,
      nonBillable: obj.nonBillable + item.hoursOnWeek.nonBillable,
    }),
    {
      total: 0,
      billable: 0,
      nonBillable: 0,
    },
  );

  const teamTotal = {
    hoursOnWeek: hoursOnWeekTotal,
    capacity: teamCapacity,
    withArchived: employees.some((empl: Employee) => empl.archived),
  };

  return { employees, teamTotal };
};
