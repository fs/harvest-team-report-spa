import React from 'react';
import styled from 'styled-components';
import { EmployeeExtended } from '../../../public/static/config/types';
import HoursProgressBlock from '../../molecules/HoursProgressBlock';

const Wrapper = styled.aside`
  display: flex;
  grid-row: 2;
  grid-column: 1;
`;

const EmployeeAside = ({ employee }: { employee: EmployeeExtended }) => {
  return (
    <Wrapper>
      <HoursProgressBlock employee={employee} />
    </Wrapper>
  );
};

export default EmployeeAside;
