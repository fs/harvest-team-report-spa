import { Employee } from '../config/types/employee';
import { TableData } from '../config/types/TableData';

// eslint-disable-next-line import/prefer-default-export
export const getEmployeesTableData = (employees: Employee[]) => {
  const rows = employees.map(employee => {
    return [employee.name, employee.hoursOnWeek.total, '-', employee.capacity, employee.hoursOnWeek.billable];
  });
  const data: TableData = {
    header: ['Employees', 'Total Hours', '-', 'Capacity', 'Billable Hours'],
    rows,
  };
  return data;
};
