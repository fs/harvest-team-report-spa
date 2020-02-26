import React from 'react';
import styled, { css } from 'styled-components';
import { Card, CardContent, Typography } from '@material-ui/core';
import { EmployeeDay } from '../../../public/static/config/types';
import HoursInDay from '../../atoms/HoursInDay';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HoursByDays = ({ weekByDays }: { weekByDays: EmployeeDay[] }) => {
  return (
    <Card>
      <CardContent>
        <Wrapper>
          {weekByDays.map(weekDay => (
            <HoursInDay weekDay={weekDay} />
          ))}
        </Wrapper>
      </CardContent>
    </Card>
  );
};

export default HoursByDays;
