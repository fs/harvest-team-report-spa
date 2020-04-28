import React from 'react';
import styled, { css } from 'styled-components';
import { ProgressLineWrapper } from '../../../public/styles/commonStyledComponents';

const line = css`
  height: 100%;
`;

const Total = styled.div<{ width: string; isExceeded: boolean }>(
  ({ theme: { colors }, width, isExceeded }) => css`
    ${line};
    width: ${width};
    background-color: ${isExceeded ? colors.nonBillableExceeded : colors.nonBillable};
  `,
);

const Billable = styled.div<{ width: string; isExceeded: boolean }>(
  ({ theme: { colors }, width, isExceeded }) => css`
    ${line};
    width: ${width};
    background-color: ${isExceeded ? colors.billableExceeded : colors.billable};
  `,
);

const HoursProgress = ({ capacity, total, billable }: { capacity: number; total: number; billable: number }) => {
  const isExceeded = total > capacity;
  const totalWidth = isExceeded ? `100%` : `${(total / capacity) * 100}%`;
  const billableWidth = `${(billable / total) * 100}%`;
  return (
    <ProgressLineWrapper>
      <Total width={totalWidth} isExceeded={isExceeded}>
        <Billable width={billableWidth} isExceeded={isExceeded} />
      </Total>
    </ProgressLineWrapper>
  );
};

export default HoursProgress;
