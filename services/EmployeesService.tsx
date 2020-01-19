import { Class } from '@babel/types';
import employees from '../public/static/temp/employees';

// todo need tests

// export const apiUrl = '';

export default class EmployeesService {
  private apiService: any;

  constructor(apiService: Class) {
    this.apiService = apiService;
  }

  // eslint-disable-next-line class-methods-use-this
  retrieveEmployee(slug: string) {
    return this.apiService.get(`/${slug}`);
  }

  // eslint-disable-next-line class-methods-use-this
  retrieveAllEmployees() {
    // const body = {};
    // return this.apiService.get(``, body);
    return Promise.resolve(employees);
  }
}
