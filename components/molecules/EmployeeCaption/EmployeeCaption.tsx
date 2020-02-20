import React from 'react';
import styled from 'styled-components';
import Avatar from '../../atoms/Avatar';
import { EmployeeExtended } from '../../../public/static/config/types';

const Wrapper = styled.div``;

const Content = styled.div``;

const EmployeeCaption = ({ employee }: { employee: EmployeeExtended }) => {
  const { name, avatarURL, department, email } = employee;
  return (
    <Wrapper>
      <Avatar width="90px" src={avatarURL} alt={name} />
      <Content>
        <h1>{name}</h1>
        <p>{department}</p>
        <p>{email}</p>
      </Content>
    </Wrapper>
  );
};

export default EmployeeCaption;
