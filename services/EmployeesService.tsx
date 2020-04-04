import { Class } from '@babel/types';
import employees from '../public/static/temp/employees';
import employeeExtended from '../public/static/temp/employeeExtended';
import { getWeekFromToDates } from '../utils/getWeekFromToDates';

import qs from 'qs';

const apiUrl = '/time_entries';
// todo need tests

// export const apiUrl = '';

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
    const body = {};
    const resp = await this.apiService.get(apiUrl, { params: getWeekFromToDates(week, year) });
    console.log(resp);
    return Promise.resolve(employees);
  }
}
