import { Request, Response } from 'express';
import EmployeesService from '../../../services/EmployeesService';
import { teamTotalEmpty } from '../../../public/defaultConstants';

export default async (req: Request, res: Response) => {
  const { week, year } = req.query;
  const employeesService = new EmployeesService();
  // @ts-ignore
  const employees = (await employeesService.retrieveAllEmployees(week, year)) || {
    employees: [],
    teamTotal: teamTotalEmpty,
  };
  res.status(200).json(employees);
};
