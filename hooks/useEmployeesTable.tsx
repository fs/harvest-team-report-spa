import React from 'react';
import styled from 'styled-components';
import { Avatar, Typography } from '@material-ui/core';

import routes from '../routes';
import { Employee, TableData } from 'config/types';
import HoursProgress from 'components/atoms/HoursProgress';

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
    const { id, name, avatarURL, hoursOnWeek, capacity } = employee;
    const { total, billable } = hoursOnWeek;
    return [
      <Link passHref route="employee" params={{ id, week, year }} key={id}>
        <NameContainer>
          <Avatar alt={name} src={avatarURL} variant="rounded" style={avatarStyles} />
          <Typography variant="body1" component="p">
            {name}
          </Typography>
        </NameContainer>
      </Link>,
      hoursOnWeek.total.toFixed(2),
      <HoursProgress capacity={capacity} total={total} billable={billable} />,
      capacity.toFixed(2),
      billable.toFixed(2),
    ];
  });
  const data: TableData = {
    header: ['Employees', 'Total Hours', '', 'Capacity', 'Billable Hours'],
    rows,
  };
  return data;
};

export default useEmployeesTable;
