import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';

// eslint-disable-next-line @typescript-eslint/camelcase
const defaultUser = { weekly_capacity: 0, avatar_url: '' };
const capacityDivider = 3600;

export const getEmployees = (teamReport: any, users: any) => {
  const teamReportByUser = Object.values(groupBy(teamReport, 'user_id'))
    .map((item: any) =>
      item.length > 1
        ? item.reduce(
            (acc: any, rItem: any) => ({
              ...acc,
              total_hours: acc.total_hours + rItem.total_hours,
              billable_hours: acc.billable_hours + rItem.billable_hours,
              user_id: rItem.user_id,
              user_name: rItem.user_name,
            }),
            { total_hours: 0, billable_hours: 0 },
          )
        : item[0],
    )
    .map((item: any) => ({
      name: item.user_name,
      id: item.user_id,
      hoursOnWeek: {
        total: item.total_hours,
        billable: item.billable_hours,
        nonBillable: item.total_hours - item.billable_hours,
      },
    }));
  const teamCapacity =
    users.reduce((capacity: number, user: any) => (user.is_active ? user.weekly_capacity + capacity : capacity), 0) /
    capacityDivider;
  const usersById = groupBy(users, 'id');

  const employees = teamReportByUser.map((item: any) => {
    const { id } = item;
    const [user]: any = usersById[id];
    const { weekly_capacity: wCapacity, avatar_url: avatarURL } = user || defaultUser;
    return { ...item, avatarURL, capacity: wCapacity / capacityDivider };
  });

  const hoursOnWeekTotal = employees.reduce(
    (obj: any, item: any) => ({
      ...obj,
      total: obj.total + item.hoursOnWeek.total,
      billable: obj.billable + item.hoursOnWeek.billable,
    }),
    {
      total: 0,
      billable: 0,
    },
  );
  const orderedEmployees = orderBy(employees, 'name');

  const teamTotal = { hoursOnWeek: hoursOnWeekTotal, capacity: teamCapacity };

  return { employees: orderedEmployees, teamTotal };
};
