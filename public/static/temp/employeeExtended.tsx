export default {
  name: 'Renas Sitdikov',
  id: 1,
  capacity: 40,
  avatarURL: '/static/images/avatars/avatar.jpg',
  hoursOnWeek: {
    total: 40,
    billable: 36,
    nonBillable: 4,
  },
  department: 'Front-end',
  email: 'renas.sitdikov@flatstack.com',
  weekByDays: [
    {
      day: 'Monday',
      date: '2 Mar',
      totalHoursInDay: 8,
      tasksInDay: [
        {
          client: 'Premium Parking Service',
          project: 'Premium Parking',
          task: 'Front-end Development',
          taskHours: 8,
        },
      ],
    },
    {
      day: 'Tuesday',
      date: '3 Mar',
      totalHoursInDay: 8,
      tasksInDay: [
        {
          client: 'Premium Parking Service',
          project: 'Premium Parking',
          task: 'Front-end Development',
          taskHours: 6,
        },
        {
          client: 'Flatstack',
          project: 'Internal',
          task: 'Learning',
          taskHours: 2,
        },
      ],
    },
    {
      day: 'Wednesday',
      date: '4 Mar',
      totalHoursInDay: 8,
      tasksInDay: [
        {
          client: 'Premium Parking Service',
          project: 'Premium Parking',
          task: 'Front-end Development',
          taskHours: 7,
        },
        {
          client: 'Flatstack',
          project: 'Internal',
          task: 'Learning',
          taskHours: 1,
        },
      ],
    },
    {
      day: 'Thursday',
      date: '5 Mar',
      totalHoursInDay: 9,
      tasksInDay: [
        {
          client: 'Premium Parking Service',
          project: 'Premium Parking',
          task: 'Front-end Development',
          taskHours: 8,
        },
        {
          client: 'Flatstack',
          project: 'Internal',
          task: 'Learning',
          taskHours: 1,
        },
      ],
    },
    {
      day: 'Friday',
      date: '6 Mar',
      totalHoursInDay: 7,
      tasksInDay: [
        {
          client: 'Premium Parking Service',
          project: 'Premium Parking',
          task: 'Front-end Development',
          taskHours: 7,
        },
      ],
    },
    {
      day: 'Saturday',
      date: '7 Mar',
      totalHoursInDay: 0,
      tasksInDay: [],
    },
    {
      day: 'Sunday',
      date: '8 Mar',
      totalHoursInDay: 0,
      tasksInDay: [],
    },
  ],
  projects: [
    { name: 'Premium Parking', hours: 36, color: 'green' },
    { name: 'Internal', hours: 4, color: 'red' },
  ],
  tasks: [
    { name: 'Front-end Development', hours: 36, color: 'blue' },
    { name: 'Learning', hours: 4, color: 'yellow' },
  ],
};
