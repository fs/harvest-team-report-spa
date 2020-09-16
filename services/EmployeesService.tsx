import range from 'lodash/range';
import flatten from 'lodash/flatten';
import { getEmployee, getEmployees, getWeeksFromToDates } from 'utils';
import { employeeExtended, teamTotalEmpty } from 'public/defaultConstants';
import HarvestApiService from 'services/HarvestApiService';

const timeEntriesURL = '/time_entries';
const usersURL = '/users';
const teamReportURL = '/reports/time/team';

// todo need tests

const retrieve = async (apiUrl: string, apiService: any, params?: {}, respObjName?: string) => {
  const responseObjectName = respObjName || apiUrl.slice(1);
  let forReturn = [];

  const retrieveOtherPages = async (nextPage: number, pages: number) => {
    try {
      const requests = range(nextPage, pages + 1).map(currentPage =>
        apiService.get(apiUrl, {
          params: { ...params, page: currentPage },
        }),
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
      const resp = await apiService.get(apiUrl, {
        params: { ...params },
      });
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

  constructor() {
    this.apiService = new HarvestApiService();
  }

  // eslint-disable-next-line class-methods-use-this
  async retrieveEmployee(id: string, week?: string, year?: string) {
    try {
      const requests = [
        retrieve(timeEntriesURL, this.apiService, { ...getWeeksFromToDates(week, year), user_id: id }),
        this.apiService.get(`${usersURL}/${id}`, {}),
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
        retrieve(teamReportURL, this.apiService, getWeeksFromToDates(week, year), 'results'),
        retrieve(usersURL, this.apiService),
      ];
      const responses = await Promise.all(requests);
      const [teamReport, users] = responses;
      return getEmployees(teamReport, users);
    } catch (e) {
      console.error(e);
      return { employees: [], teamTotal: teamTotalEmpty };
    }
  }
}
