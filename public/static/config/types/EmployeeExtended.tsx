import { Employee } from './Employee';

export interface EmployeeExtended extends Employee {
  department: string;
  email: string;
}
