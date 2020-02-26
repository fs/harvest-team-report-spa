import React from 'react';
import styled, { css } from 'styled-components';
import { Card, CardContent, Typography } from '@material-ui/core';

import { EmployeeExtended } from '../../../public/static/config/types';
import HoursProgress from '../../atoms/HoursProgress';
import Legend from '../../atoms/Legend/Legend';
import theme from '../../../public/static/styles/theme';

const HoursWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HoursCaption = styled.div``;

const HoursProgressBlock = ({ employee }: { employee: EmployeeExtended }) => {
  const { hoursOnWeek, capacity } = employee;
  const { total, billable } = hoursOnWeek;
  const isExceeded = total > capacity;
  const { colors } = theme;
  const billableColor = isExceeded ? colors.billableExceeded : colors.billable;
  const nonBillableColor = isExceeded ? colors.nonBillableExceeded : colors.nonBillable;
  return (
    <Card>
      <CardContent>
        <HoursWrapper>
          <HoursCaption>
            <Typography variant="body1" component="p">
              Total Hours
            </Typography>
            <Typography variant="h5" component="h2">
              {total.toFixed(2)}
            </Typography>
          </HoursCaption>
          <HoursCaption>
            <Typography variant="body1" component="p">
              Capacity
            </Typography>
            <Typography variant="h5" component="h2">
              {capacity.toFixed(2)}
            </Typography>
          </HoursCaption>
        </HoursWrapper>
        <br />
        <HoursProgress capacity={capacity} total={total} billable={billable} />
        <br />
        <Legend title="Billable" hours={billable} color={billableColor} />
        <Legend title="Non-Billable" hours={total - billable} color={nonBillableColor} />
      </CardContent>
    </Card>
  );
};

export default HoursProgressBlock;
