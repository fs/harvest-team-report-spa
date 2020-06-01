jest.setTimeout(30000);

const mockedDate = new Date(Date.UTC(2020, 5, 1, 0, 0, 0));
const originalDate = Date;

mockedDate.getTime = jest.fn(() => 1590969600000);
global.Date.getFullYear = originalDate.getFullYear;
global.Date.now = originalDate.now;
global.Date.getTime = originalDate.getTime;
global.Date.UTC = originalDate.UTC;
global.Date.parse = originalDate.parse;
