import { Request, Response } from 'express';
import ApiService from '../../services/ApiService';
import EmployeesService from '../../services/EmployeesService';

export default async (req: Request, res: Response) => {
  const { week, year } = req.query;
  const apiService: any = new ApiService();
  const employeesService = new EmployeesService(apiService);
  // @ts-ignore
  const employees = (await employeesService.retrieveAllEmployees(week, year)) || [];
  res.status(200).json(employees);
};
