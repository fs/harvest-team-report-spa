import { Class } from '@babel/types';
import range from 'lodash/range';
import flatten from 'lodash/flatten';
// import employees from '../public/static/temp/employees';
import employeeExtended from '../public/static/temp/employeeExtended';
import { getEmployees, getWeekFromToDates } from '../utils';

const timeEntriesURL = '/time_entries';
const usersURL = '/users';

// todo need tests

const retrieve = async (apiUrl: string, apiService: any, params: {}) => {
  const responseObjectName = apiUrl.slice(1);
  let forReturn = [];

  const retrieveOtherPages = async (nextPage: number, pages: number) => {
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

  const retrievePage = async () => {
    try {
      const resp = await apiService.get(apiUrl, { params: { ...params } });
      const { data } = resp;
      const { total_pages: pages, next_page: nextPage, page, [responseObjectName]: fetchedObject } = data;
      forReturn = [...fetchedObject];
      if (page < pages) {
        const otherPagesTimeEntries = await retrieveOtherPages(nextPage, pages);
        forReturn = flatten([fetchedObject, otherPagesTimeEntries]);
      }

      return forReturn;
    } catch (e) {
      console.error(e);
      return Promise.reject(e);
    }
  };

  return retrievePage();
};

export default class EmployeesService {
  private apiService: any;

  constructor(apiService: Class) {
    this.apiService = apiService;
  }

  // eslint-disable-next-line class-methods-use-this
  async retrieveEmployee(id: string, week?: string, year?: string) {
    // try {
    //   const data = await retrieveTimeEntries(this.apiService, { ...getWeekFromToDates(week, year), id: +id });
    //   console.log(data);
    // } catch (e) {
    //   console.error(e);
    // }
    return Promise.resolve(employeeExtended);
  }

  // eslint-disable-next-line class-methods-use-this
  async retrieveAllEmployees(week?: string, year?: string) {
    try {
      const timeEntries = await retrieve(timeEntriesURL, this.apiService, getWeekFromToDates(week, year));
      // eslint-disable-next-line @typescript-eslint/camelcase
      const users = await retrieve(usersURL, this.apiService, { is_active: true });
      const employees = getEmployees(timeEntries, users);
      console.log(employees);
      return employees;
    } catch (e) {
      console.error(e);
      return [];
    }
  }
}
