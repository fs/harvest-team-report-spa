import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { EmployeeDay } from '../../../public/static/config/types';

const Wrapper = styled.div`
  text-align: center;
`;

const Hours = styled.span`
  font-weight: bold;
`;

const HoursInDay = ({ weekDay }: { weekDay: EmployeeDay }) => {
  const { day, totalHoursInDay } = weekDay;
  return (
    <Wrapper>
      <Typography variant="body1" component="p">
        {day.slice(0, 3)}
      </Typography>
      <Typography variant="body1" component="p">
        <Hours>{totalHoursInDay.toFixed(2)}</Hours>
      </Typography>
    </Wrapper>
  );
};

export default HoursInDay;
