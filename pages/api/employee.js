import EmployeesService from '../../services/EmployeesService';
import ApiService from '../../services/ApiService';

export default async (req, res) => {
  const { week, year, id } = req.query;
  const apiService = new ApiService();
  const employeesService = new EmployeesService(apiService);
  const employee = await employeesService.retrieveEmployee(id || '0', week, year);
  res.status(200).json(employee);
};
