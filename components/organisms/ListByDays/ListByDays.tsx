import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { EmployeeDay } from 'config/types';
import DayInList from 'components/molecules/DayInList';

const Wrapper = styled.section(
  ({ theme: { breakpoints, down } }) => css`
    grid-row: 2;
    grid-column: 2;
    padding-bottom: 40px;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 20px;

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
        <Card key={i}>
          <CardContent>
            <DayInList weekDay={weekDay} />
          </CardContent>
        </Card>
      ))}
    </Wrapper>
  );
};

export default ListByDays;
