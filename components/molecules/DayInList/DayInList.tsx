import React from 'react';
import styled from 'styled-components';
import { Divider, Typography } from '@material-ui/core';
import { EmployeeDay } from '../../../public/static/config/types';
import TaskInDay from '../../atoms/TaskInDay';

const Wrapper = styled.article``;

const Day = styled.span`
  font-weight: bold;
  margin-left: 8px;
`;

const EmptyDay = styled.div`
  padding: 8px;
`;

const DayInList = ({ weekDay }: { weekDay: EmployeeDay }) => {
  const { day, date, tasksInDay } = weekDay;
  return (
    <Wrapper>
      <Typography variant="body1" component="h5">
        <Day>{day}</Day> {date}
      </Typography>
      <Divider />
      {tasksInDay.map(taskInDay => (
        <TaskInDay taskInDay={taskInDay} />
      ))}
      {tasksInDay.length === 0 && (
        <>
          <EmptyDay>
            <Typography variant="body2" component="h5">
              No time tracked.
            </Typography>
          </EmptyDay>
          <Divider />
        </>
      )}
    </Wrapper>
  );
};

export default DayInList;
