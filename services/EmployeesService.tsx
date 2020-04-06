import { Class } from '@babel/types';
import range from 'lodash/range';
import flatten from 'lodash/flatten';
import employees from '../public/static/temp/employees';
import employeeExtended from '../public/static/temp/employeeExtended';
import { getWeekFromToDates } from '../utils/getWeekFromToDates';

const apiUrl = '/time_entries';
// todo need tests

const retrieveTimeEntries = async (apiService: any, params: {}) => {
  let timeEntries = [];

  const retrieveTimeEntriesOtherPages = async (nextPage: number, pages: number) => {
    try {
      const requests = range(nextPage, pages + 1).map(currentPage =>
        apiService.get(apiUrl, { params: { ...params, page: currentPage } }),
      );
      const responses = await Promise.all(requests);
      return flatten(responses.map(res => res.data.time_entries));
    } catch (e) {
      console.error(e);
      return Promise.reject(e);
    }
  };

  const retrieveTimeEntriesPage = async () => {
    try {
      const resp = await apiService.get(apiUrl, { params: { ...params } });
      const { data } = resp;
      const { total_pages: pages, next_page: nextPage, page, time_entries: fetchedTimeEntries } = data;
      timeEntries = [...fetchedTimeEntries];
      if (page < pages) {
        const otherPagesTimeEntries = await retrieveTimeEntriesOtherPages(nextPage, pages);
        timeEntries = flatten([fetchedTimeEntries, otherPagesTimeEntries]);
      }

      return timeEntries;
    } catch (e) {
      console.error(e);
      return Promise.reject(e);
    }
  };

  return retrieveTimeEntriesPage();
};

export default class EmployeesService {
  private apiService: any;

  constructor(apiService: Class) {
    this.apiService = apiService;
  }

  // eslint-disable-next-line class-methods-use-this
  retrieveEmployee(id: string, week?: string, year?: string) {
    // return this.apiService.get(`/${id}`);
    return Promise.resolve(employeeExtended);
  }

  // eslint-disable-next-line class-methods-use-this
  async retrieveAllEmployees(week?: string, year?: string) {
    try {
      const data = await retrieveTimeEntries(this.apiService, getWeekFromToDates(week, year));
      console.log(data);
    } catch (e) {
      console.error(e);
    }

    return Promise.resolve(employees);
  }
}
