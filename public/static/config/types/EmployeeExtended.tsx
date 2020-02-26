import { Employee } from './Employee';
import { EmployeeDay } from './EmployeeDay';
import { EmployeeOccupation } from './EmployeeOccupation';

export interface EmployeeExtended extends Employee {
  department: string;
  email: string;
  weekByDays: EmployeeDay[];
  projects: EmployeeOccupation[];
  tasks: EmployeeOccupation[];
}
