import React from 'react';
import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';

import { EmployeeExtended } from '../../../public/static/config/types';
import HoursProgress from '../../atoms/HoursProgress';

const Wrapper = styled.div``;

const HoursProgressBlock = ({ employee }: { employee: EmployeeExtended }) => {
  const { hoursOnWeek, capacity } = employee;
  const { total, billable } = hoursOnWeek;
  return (
    <Wrapper>
      <Card>
        <CardContent>
          <HoursProgress capacity={capacity} total={total} billable={billable} />
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default HoursProgressBlock;
