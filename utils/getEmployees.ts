import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';

// eslint-disable-next-line @typescript-eslint/camelcase
const defaultUser = { weekly_capacity: 0, avatar_url: '', first_name: '', last_name: '' };
const capacityDivider = 3600;

export const getEmployees = (timeEntries: any, users: any) => {
  const timeEntriesByUser = Object.entries(groupBy(timeEntries, 'user.id'));
  const usersById = groupBy(users, 'id');
  const employees = timeEntriesByUser.map(entry => {
    const [id, times] = entry;
    const user: any = usersById[id][0];
    const { weekly_capacity: wCapacity, avatar_url: avatarURL, first_name: fName, last_name: lName } =
      user || defaultUser;
    const hoursOnWeek = {
      total: 0,
      billable: 0,
      nonBillable: 0,
    };
    times.forEach(time => {
      const { billable, rounded_hours: hours } = time;
      if (billable) {
        hoursOnWeek.billable += hours;
      } else {
        hoursOnWeek.nonBillable += hours;
      }
    });
    hoursOnWeek.total = hoursOnWeek.billable + hoursOnWeek.nonBillable;
    return { id: +id, hoursOnWeek, capacity: wCapacity / capacityDivider, avatarURL, name: `${fName} ${lName}` };
  });

  return orderBy(employees, 'name');
};
