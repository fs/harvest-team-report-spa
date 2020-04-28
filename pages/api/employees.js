import HarvestAPIService from '../../services/HarvestAPIService';
import ApiService from '../../services/ApiService';

export default async (req, res) => {
  const { week, year } = req.query;
  const apiService = new ApiService();
  const employeesService = new HarvestAPIService(apiService);
  const employees = (await employeesService.retrieveAllEmployees(week, year)) || [];
  res.status(200).json(employees);
};
