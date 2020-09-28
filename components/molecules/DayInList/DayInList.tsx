import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';
import { EmployeeDay } from 'config/types';
import TaskInDay from 'components/atoms/TaskInDay';

const Wrapper = styled.article(
  ({ theme: { colors } }) => css`
    article:nth-of-type(odd) {
      background-color: ${colors.backGround};
    }
  `,
);

const Day = styled.span`
  font-weight: bold;
  margin-left: 8px;
`;

const EmptyDay = styled.div(
  ({ theme: { colors } }) => css`
    padding: 8px;
    background-color: ${colors.backGround};
  `,
);

const DayInList = ({ weekDay }: { weekDay: EmployeeDay }) => {
  const { day, date, tasksInDay } = weekDay;
  return (
    <Wrapper>
      <Typography variant="body1" component="h5">
        <Day>{day}</Day> {date}
      </Typography>
      {tasksInDay.map((taskInDay, i) => (
        <TaskInDay taskInDay={taskInDay} key={i} />
      ))}
      {tasksInDay.length === 0 && (
        <>
          <EmptyDay>
            <Typography variant="body2" component="h5">
              No time tracked.
            </Typography>
          </EmptyDay>
        </>
      )}
    </Wrapper>
  );
};

export default DayInList;
