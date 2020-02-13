import { Class } from '@babel/types';
import employees from '../public/static/temp/employees';
import employeeExtended from '../public/static/temp/employeeExtended';

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
  retrieveAllEmployees(week?: string, year?: string) {
    // const body = {};
    // return this.apiService.get(``, body);
    return Promise.resolve(employees);
  }
}
