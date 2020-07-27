import { Class } from '@babel/types';
import range from 'lodash/range';
import flatten from 'lodash/flatten';
import { getEmployee, getEmployees, getWeekFromToDates } from '../utils';
import { employeeExtended, teamTotalEmpty } from '../public/defaultConstants';

const timeEntriesURL = '/time_entries';
const usersURL = '/users';

// todo need tests

const retrieve = async (apiUrl: string, apiService: any, params?: {}) => {
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
    try {
      const requests = [
        // eslint-disable-next-line @typescript-eslint/camelcase
        retrieve(timeEntriesURL, this.apiService, { ...getWeekFromToDates(week, year), user_id: id }),
        this.apiService.get(`${usersURL}/${id}`),
      ];
      const responses = await Promise.all(requests);
      const [timeEntries, user] = responses;
      return getEmployee(timeEntries, user.data, week, year);
    } catch (e) {
      console.error(e);
      return employeeExtended;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async retrieveAllEmployees(week?: string, year?: string) {
    try {
      const requests = [
        retrieve(timeEntriesURL, this.apiService, getWeekFromToDates(week, year)),
        // eslint-disable-next-line @typescript-eslint/camelcase
        retrieve(usersURL, this.apiService),
      ];
      const responses = await Promise.all(requests);
      const [timeEntries, users] = responses;
      return getEmployees(timeEntries, users);
    } catch (e) {
      console.error(e);
      return { employees: [], teamTotal: teamTotalEmpty };
    }
  }
}
