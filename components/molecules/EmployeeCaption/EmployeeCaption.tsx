import React from 'react';
import styled, { css } from 'styled-components';
import { Avatar, Typography } from '@material-ui/core';
import { EmployeeExtended } from 'config/types';

const Wrapper = styled.section(
  ({ theme: { breakpoints, up, down } }) => css`
    display: flex;
    grid-row: 1;
    ${up(breakpoints.sm)} {
      grid-column: 1 / 3;
    }
    ${down(breakpoints.xs)} {
      flex-direction: column;
      align-items: center;
    }
  `,
);

const Content = styled.div(
  ({ theme: { breakpoints, up, down } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    ${up(breakpoints.xs)} {
      margin-left: 16px;
    }
    ${down(breakpoints.xs)} {
      text-align: center;
    }
  `,
);

const EmployeeCaption = ({ employee }: { employee: EmployeeExtended }) => {
  const { name, avatarURL, department, email } = employee;
  const avatarSize = '82px';
  const avatarStyles = { width: avatarSize, height: avatarSize };
  return (
    <Wrapper>
      <Avatar alt={name} src={avatarURL} variant="rounded" style={avatarStyles} />
      <Content>
        <Typography variant="h5" component="h1">
          {name}
        </Typography>
        <Typography variant="body1" component="p">
          {department}
        </Typography>
        <Typography variant="body1" component="p">
          {email}
        </Typography>
      </Content>
    </Wrapper>
  );
};

export default EmployeeCaption;
