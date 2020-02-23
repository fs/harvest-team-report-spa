import React from 'react';
import styled from 'styled-components';
import { Avatar, Typography } from '@material-ui/core';
import { EmployeeExtended } from '../../../public/static/config/types';

const Wrapper = styled.section`
  display: flex;
  grid-row: 1;
  grid-column: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 16px;
`;

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
