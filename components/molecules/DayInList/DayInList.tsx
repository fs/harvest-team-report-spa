import React from 'react';
import styled from 'styled-components';
import { Divider, Typography } from '@material-ui/core';
import { EmployeeDay } from '../../../public/static/config/types';

const Wrapper = styled.article`
  //background-color: aqua;
`;

const Date = styled.span`
  font-weight: normal;
`;

const DayInList = ({ weekDay }: { weekDay: EmployeeDay }) => {
  const { day, date, tasksInDay } = weekDay;
  return (
    <Wrapper>
      <Typography variant="h6" component="h5">
        {day} <Date>{date}</Date>
      </Typography>
      <Divider />
    </Wrapper>
  );
};

export default DayInList;
