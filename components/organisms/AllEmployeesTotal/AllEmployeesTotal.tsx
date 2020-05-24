import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Legend from '../../atoms/Legend';
import theme from '../../../public/styles/theme';
import HoursProgress from '../../atoms/HoursProgress';
import { TeamTotal } from '../../../config/types';

const Wrapper = styled.div`
  padding: 16px;
`;

const GridWrapper = styled.div`
  display: grid;
  margin-bottom: 8px;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
`;

const AllEmployeesTotal = ({ teamTotal }: { teamTotal: TeamTotal }) => {
  const { hoursOnWeek, capacity } = teamTotal;
  const { total, billable } = hoursOnWeek;
  const isExceeded = total > capacity;
  const { colors } = theme;
  const billableColor = isExceeded ? colors.billableExceeded : colors.billable;
  const nonBillableColor = isExceeded ? colors.nonBillableExceeded : colors.nonBillable;
  return (
    <Wrapper>
      <GridWrapper>
        <div>
          <Typography variant="body1" component="p">
            Total Hours
          </Typography>
          <Typography variant="h5" component="h2">
            {total.toFixed(2)}
          </Typography>
        </div>
        <div>
          <Typography variant="body1" component="p">
            Team Capacity
          </Typography>
          <Typography variant="h5" component="h2">
            {capacity.toFixed(2)}
          </Typography>
        </div>
        <div>
          <Legend title="Billable" hours={billable} color={billableColor} />
          <Legend title="Non-Billable" hours={total - billable} color={nonBillableColor} />
        </div>
      </GridWrapper>
      <div>
        <HoursProgress capacity={capacity} total={total} billable={billable} />
      </div>
    </Wrapper>
  );
};

export default AllEmployeesTotal;
