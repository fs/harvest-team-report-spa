import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 16px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  overflow: hidden;
`;

const Line = css`
  height: 100%;
`;

const Total = styled.div<{ width: string; isExceeded: boolean }>(
  ({ theme: { colors }, width, isExceeded }) => `
  ${Line};
  width: ${width};
  background-color: ${isExceeded ? colors.nonBillableExceeded : colors.nonBillable};
`,
);

const Billable = styled.div<{ width: string; isExceeded: boolean }>(
  ({ theme: { colors }, width, isExceeded }) => `
  ${Line};
  width: ${width};
  background-color: ${isExceeded ? colors.billableExceeded : colors.billable};
`,
);

const HoursProgress = ({ capacity, total, billable }: { capacity: number; total: number; billable: number }) => {
  const isExceeded = total > capacity;
  const totalWidth = isExceeded ? `100%` : `${(total / capacity) * 100}%`;
  const billableWidth = `${(billable / total) * 100}%`;
  return (
    <Wrapper>
      <Total width={totalWidth} isExceeded={isExceeded}>
        <Billable width={billableWidth} isExceeded={isExceeded} />
      </Total>
    </Wrapper>
  );
};

export default HoursProgress;
