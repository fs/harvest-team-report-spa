import EmployeesService from '../../services/EmployeesService';
import ApiService from '../../services/ApiService';

export default async (req, res) => {
  const { week, year } = req.query;
  const apiService = new ApiService();
  const employeesService = new EmployeesService(apiService);
  const employees = (await employeesService.retrieveAllEmployees(week, year)) || [];
  res.status(200).json(employees);
};
