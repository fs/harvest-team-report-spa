import React from 'react';
import styled from 'styled-components';
import { EmployeeExtended } from '../../../public/static/config/types';
import HoursProgressBlock from '../../molecules/HoursProgressBlock';
import HoursByDays from '../../molecules/HoursByDays';

const Wrapper = styled.aside`
  grid-row: 2;
  grid-column: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  grid-gap: 16px;
`;

const EmployeeAside = ({ employee }: { employee: EmployeeExtended }) => {
  const { weekByDays } = employee;
  return (
    <Wrapper>
      <HoursProgressBlock employee={employee} />
      <HoursByDays weekByDays={weekByDays} />
    </Wrapper>
  );
};

export default EmployeeAside;
