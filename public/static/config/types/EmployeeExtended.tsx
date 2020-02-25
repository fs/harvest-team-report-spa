import { Employee } from './Employee';
import { EmployeeDay } from './EmployeeDay';

export interface EmployeeExtended extends Employee {
  department: string;
  email: string;
  weekByDays: EmployeeDay[];
}
