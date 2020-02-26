import React from 'react';
import styled, { css } from 'styled-components';
import { Card, CardContent, Typography } from '@material-ui/core';

import { EmployeeExtended } from '../../../public/static/config/types';
import HoursProgress from '../../atoms/HoursProgress';

const HoursWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HoursCaption = styled.div``;
const Legend = styled.div`
  display: flex;
  justify-content: space-between;
`;
const billableColor = (isExceeded: boolean, colors: any) => css`
  background-color: ${isExceeded ? colors.billableExceeded : colors.billable};
`;
const nonBillableColor = (isExceeded: boolean, colors: any) => css`
  background-color: ${isExceeded ? colors.nonBillableExceeded : colors.nonBillable};
`;

const LegendExample = styled.span<{ isExceeded: boolean; isBillable: boolean }>(
  ({ theme: { colors }, isBillable, isExceeded }) => css`
    ${isBillable ? billableColor(isExceeded, colors) : nonBillableColor(isExceeded, colors)};
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 10%;
    margin-right: 8px;
  `,
);

const HoursProgressBlock = ({ employee }: { employee: EmployeeExtended }) => {
  const { hoursOnWeek, capacity } = employee;
  const { total, billable } = hoursOnWeek;
  const isExceeded = total > capacity;
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
        <Legend>
          <Typography variant="body1" component="p">
            <LegendExample isExceeded={isExceeded} isBillable />
            Billable
          </Typography>
          <Typography variant="h6" component="p">
            {billable.toFixed(2)}
          </Typography>
        </Legend>
        <Legend>
          <Typography variant="body1" component="p">
            <LegendExample isExceeded={isExceeded} isBillable={false} />
            Non-Billable
          </Typography>
          <Typography variant="h6" component="p">
            {(total - billable).toFixed(2)}
          </Typography>
        </Legend>
      </CardContent>
    </Card>
  );
};

export default HoursProgressBlock;
