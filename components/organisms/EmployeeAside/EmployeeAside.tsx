import React from 'react';
import styled from 'styled-components';
import { EmployeeExtended } from '../../../config/types';
import HoursProgressBlock from '../../molecules/HoursProgressBlock';
import HoursByDays from '../../molecules/HoursByDays';
import OccupationList from '../../molecules/OccupationList';

const Wrapper = styled.aside`
  grid-row: 2;
  grid-column: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto 1fr;
  grid-gap: 16px;
`;

const EmployeeAside = ({ employee }: { employee: EmployeeExtended }) => {
  const { weekByDays, projects, tasks, hoursOnWeek } = employee;
  const { total: totalHours } = hoursOnWeek;
  return (
    <Wrapper>
      <HoursProgressBlock employee={employee} />
      <HoursByDays weekByDays={weekByDays} />
      <OccupationList occupations={projects} totalHours={totalHours} title="Projects" />
      <OccupationList occupations={tasks} totalHours={totalHours} title="Tasks" />
    </Wrapper>
  );
};

export default EmployeeAside;
