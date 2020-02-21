import React from 'react';
import styled from 'styled-components';
import Avatar from '../../atoms/Avatar';
import { EmployeeExtended } from '../../../public/static/config/types';

const Wrapper = styled.section`
  display: flex;
  margin-top: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 16px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Line = styled.p`
  margin: 0;
`;

const EmployeeCaption = ({ employee }: { employee: EmployeeExtended }) => {
  const { name, avatarURL, department, email } = employee;
  return (
    <Wrapper>
      <Avatar width="72px" src={avatarURL} alt={name} />
      <Content>
        <Title>{name}</Title>
        <Line>{department}</Line>
        <Line>{email}</Line>
      </Content>
    </Wrapper>
  );
};

export default EmployeeCaption;
