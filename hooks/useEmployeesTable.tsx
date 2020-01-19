import { Employee } from '../public/static/config/types/Employee';
import { TableData } from '../public/static/config/types/TableData';

// todo need tests
// todo need to refactor as hook

const useEmployeesTable = (employees: Employee[]) => {
  const rows = employees.map(employee => {
    return [employee.name, employee.hoursOnWeek.total, '-', employee.capacity, employee.hoursOnWeek.billable];
  });
  const data: TableData = {
    header: ['Employees', 'Total Hours', '-', 'Capacity', 'Billable Hours'],
    rows,
  };
  return data;
};

export default useEmployeesTable;
