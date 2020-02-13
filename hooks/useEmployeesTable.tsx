import React from 'react';
import styled from 'styled-components';

import routes from '../routes';
import { Employee } from '../public/static/config/types/Employee';
import { TableData } from '../public/static/config/types/TableData';
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

const Avatar = styled.img`
  border-radius: 10%;
  width: 30px;
  margin-right: 5px;
`;

const useEmployeesTable = (employees: Employee[]) => {
  const rows = employees.map(employee => {
    return [
      <Link passHref route={`/employee/${employee.id}/`}>
        <NameContainer>
          <Avatar alt=" " src={employee.avatarURL} />
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
