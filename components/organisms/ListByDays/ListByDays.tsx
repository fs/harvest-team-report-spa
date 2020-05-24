import React from 'react';
import styled, { css } from 'styled-components';
import { EmployeeDay } from '../../../config/types';
import DayInList from '../../molecules/DayInList';

const Wrapper = styled.section(
  ({ theme: { breakpoints, down } }) => css`
    grid-row: 2;
    grid-column: 2;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 40px;
    padding-bottom: 40px;
    ${down(breakpoints.sm)} {
      grid-row: 3;
      grid-column: 1;
    }
  `,
);

const ListByDays = ({ weekByDays }: { weekByDays: EmployeeDay[] }) => {
  return (
    <Wrapper>
      {weekByDays.map((weekDay, i) => (
        <DayInList weekDay={weekDay} key={i} />
      ))}
    </Wrapper>
  );
};

export default ListByDays;
