import { Request, Response } from 'express';
import EmployeesService from '../../../services/EmployeesService';

export default async (req: Request, res: Response) => {
  const { week, year, id } = req.query;
  const employeesService = new EmployeesService();
  // @ts-ignore
  const employee = await employeesService.retrieveEmployee(id || '0', week, year);
  res.status(200).json(employee);
};
