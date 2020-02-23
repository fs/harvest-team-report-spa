import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

import routes from '../routes';
import { Employee, TableData } from '../public/static/config/types';
import HoursProgress from '../components/atoms/HoursProgress';

const { Link } = routes;

// todo need tests
// todo need to refactor as hook

const NameContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`;

const useEmployeesTable = (employees: Employee[], week?: string, year?: string) => {
  const avatarSize = '35px';
  const avatarStyles = { width: avatarSize, height: avatarSize, marginRight: '5px' };
  const rows = employees.map(employee => {
    return [
      <Link passHref route="employee" params={{ id: employee.id, week, year }}>
        <NameContainer>
          <Avatar alt={employee.name} src={employee.avatarURL} variant="rounded" style={avatarStyles} />
          <span>{employee.name}</span>
        </NameContainer>
      </Link>,
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
