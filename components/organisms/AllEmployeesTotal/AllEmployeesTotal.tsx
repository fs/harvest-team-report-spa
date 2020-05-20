import React from 'react';
import styled from 'styled-components';
import { CardContent, Typography } from '@material-ui/core';
import Legend from '../../atoms/Legend';
import theme from '../../../public/styles/theme';
import HoursProgress from '../../atoms/HoursProgress';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const AllEmployeesTotal = () => {
  const team = {
    hoursOnWeek: {
      total: 1000,
      billable: 900,
    },
    capacity: 1100,
  };
  const { hoursOnWeek, capacity } = team;
  const { total, billable } = hoursOnWeek;
  const isExceeded = total > capacity;
  const { colors } = theme;
  const billableColor = isExceeded ? colors.billableExceeded : colors.billable;
  const nonBillableColor = isExceeded ? colors.nonBillableExceeded : colors.nonBillable;
  return (
    <Wrapper>
      <div>
        <Typography variant="body1" component="p">
          Total Hours
        </Typography>
        <Typography variant="h5" component="h2">
          {(200).toFixed(2)}
        </Typography>
      </div>
      <div>
        <Typography variant="body1" component="p">
          Team Capacity
        </Typography>
        <Typography variant="h5" component="h2">
          {(22300).toFixed(2)}
        </Typography>
      </div>
      <div>
        <Legend title="Billable" hours={billable} color={billableColor} />
        <Legend title="Non-Billable" hours={total - billable} color={nonBillableColor} />
      </div>
      <div>
        <HoursProgress capacity={capacity} total={total} billable={billable} />
      </div>
    </Wrapper>
  );
};

export default AllEmployeesTotal;
