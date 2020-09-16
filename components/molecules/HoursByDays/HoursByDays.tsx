import React from 'react';
import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';
import { EmployeeDay } from 'config/types';
import HoursInDay from 'components/atoms/HoursInDay';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HoursByDays = ({ weekByDays }: { weekByDays: EmployeeDay[] }) => {
  return (
    <Card>
      <CardContent>
        <Wrapper>
          {weekByDays.map((weekDay, i) => (
            <HoursInDay weekDay={weekDay} key={i} />
          ))}
        </Wrapper>
      </CardContent>
    </Card>
  );
};

export default HoursByDays;
