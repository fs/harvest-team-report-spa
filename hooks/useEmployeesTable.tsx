import React from 'react';
import { Employee } from '../public/static/config/types/Employee';
import { TableData } from '../public/static/config/types/TableData';
import HoursProgress from '../components/atoms/HoursProgress';

// todo need tests
// todo need to refactor as hook

const useEmployeesTable = (employees: Employee[]) => {
  const rows = employees.map(employee => {
    return [
      employee.name,
      employee.hoursOnWeek.total,
      <HoursProgress
        capacity={employee.capacity}
        total={employee.hoursOnWeek.total}
        billable={employee.hoursOnWeek.billable}
      />,
      employee.capacity,
      employee.hoursOnWeek.billable,
    ];
  });
  const data: TableData = {
    header: ['Employees', 'Total Hours', '', 'Capacity', 'Billable Hours'],
    rows,
  };
  return data;
};

export default useEmployeesTable;
