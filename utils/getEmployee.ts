import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import employeeExtended from '../public/static/temp/employeeExtended';

// eslint-disable-next-line @typescript-eslint/camelcase
const defaultUser = { weekly_capacity: 0, avatar_url: '', first_name: '', last_name: '', email: '', roles: [] };
const capacityDivider = 3600;

export const getEmployee = (timeEntries: any, user: any) => {
  console.log(timeEntries);
  console.log(user);
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
  const got = {
    id: +id,
    email,
    department,
    hoursOnWeek,
    capacity: wCapacity / capacityDivider,
    avatarURL,
    name: `${fName} ${lName}`,
  };
  console.log('Hardcoded:', employeeExtended);
  console.log('got:', got);

  return { ...employeeExtended, ...got };
};
