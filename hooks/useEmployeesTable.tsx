import React from 'react';

import styled from 'styled-components';
import { Employee } from '../public/static/config/types/Employee';
import { TableData } from '../public/static/config/types/TableData';
import HoursProgress from '../components/atoms/HoursProgress';

// todo need tests
// todo need to refactor as hook

const NameContainer = styled.span`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 10%;
  width: 30px;
  margin-right: 5px;
`;

const useEmployeesTable = (employees: Employee[]) => {
  const rows = employees.map(employee => {
    return [
      <NameContainer>
        <Avatar alt=" " src={employee.avatarURL} />
        <span>{employee.name}</span>
      </NameContainer>,
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
