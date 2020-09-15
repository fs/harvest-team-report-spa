import { employeeExtended, teamTotalEmpty } from '../public/defaultConstants';
import ApiService from './ApiService';

// todo need tests

export default class OwnApiEmployeesService {
  private apiService: any;

  constructor() {
    this.apiService = new ApiService();
  }

  // eslint-disable-next-line class-methods-use-this
  async retrieveEmployee(id: string, week?: string, year?: string) {
    try {
      const { data } = await this.apiService.get('/employee', { params: { id, week, year } });
      return data;
    } catch (e) {
      console.error(e);
      return employeeExtended;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async retrieveAllEmployees(week?: string, year?: string) {
    try {
      const { data } = await this.apiService.get('/employees', { params: { week, year } });
      return data;
    } catch (e) {
      console.error(e);
      return { employees: [], teamTotal: teamTotalEmpty };
    }
  }
}
