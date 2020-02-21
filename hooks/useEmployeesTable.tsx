import React from 'react';
import styled, { css } from 'styled-components';

import routes from '../routes';
import { Employee, TableData } from '../public/static/config/types';
import HoursProgress from '../components/atoms/HoursProgress';
import Avatar from '../components/atoms/Avatar';

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

const AvatarCustomStyles = css`
  margin-right: 5px;
`;

const useEmployeesTable = (employees: Employee[], week?: string, year?: string) => {
  const rows = employees.map(employee => {
    return [
      <Link passHref route="employee" params={{ id: employee.id, week, year }}>
        <NameContainer>
          <Avatar alt="" src={employee.avatarURL} width="30px" customStyles={AvatarCustomStyles} />
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
