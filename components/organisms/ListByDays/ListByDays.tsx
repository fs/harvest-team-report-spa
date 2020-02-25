import React from 'react';
import styled from 'styled-components';
import { EmployeeDay } from '../../../public/static/config/types';
import DayInList from '../../molecules/DayInList';

const Wrapper = styled.section`
  grid-row: 2;
  grid-column: 2;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 40px;
  padding-bottom: 40px;
`;

const ListByDays = ({ weekByDays }: { weekByDays: EmployeeDay[] }) => {
  return (
    <Wrapper>
      {weekByDays.map(weekDay => (
        <DayInList weekDay={weekDay} />
      ))}
    </Wrapper>
  );
};

export default ListByDays;
