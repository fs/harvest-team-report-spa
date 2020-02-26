import { EmployeeDayTask } from './EmployeeDayTask';

export interface EmployeeDay {
  day: string;
  date: string;
  totalHoursInDay: number;
  tasksInDay: EmployeeDayTask[];
}
