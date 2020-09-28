import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { EmployeeDayTask } from 'config/types';

const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

const SpaceBetween = styled.div`
  width: 16px;
  height: 8px;
`;

const Caption = styled.div``;

const Project = styled.span`
  font-weight: bold;
`;

const TaskInDay = ({ taskInDay }: { taskInDay: EmployeeDayTask }) => {
  const { client, project, task, taskHours } = taskInDay;
  return (
    <>
      <Wrapper>
        <Caption>
          <Typography variant="body1" component="h6">
            <Project>{project}</Project> ({client})
          </Typography>
          <Typography variant="body2" component="p">
            {task}
          </Typography>
        </Caption>
        <SpaceBetween />
        <Typography variant="h5" component="p">
          {taskHours.toFixed(2)}
        </Typography>
      </Wrapper>
    </>
  );
};

export default TaskInDay;
