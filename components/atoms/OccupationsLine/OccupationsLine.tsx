import React from 'react';
import styled, { css } from 'styled-components';
import { ProgressLineWrapper } from 'public/styles/commonStyledComponents';
import { EmployeeOccupation } from 'config/types';

const line = css`
  height: 100%;
`;

const Line = styled.div`
  display: flex;
  justify-content: normal;
  ${line};
`;

const LinePart = styled.div<{ width: string; color: string }>(
  ({ width, color }) => css`
    ${line};
    width: ${width};
    background-color: ${color};
  `,
);

const OccupationsLine = ({ occupations, totalHours }: { occupations: EmployeeOccupation[]; totalHours: number }) => {
  return (
    <ProgressLineWrapper>
      <Line>
        {occupations.map((occupation, i) => (
          <LinePart width={`${(occupation.hours / totalHours) * 100}%`} color={occupation.color} key={i} />
        ))}
      </Line>
    </ProgressLineWrapper>
  );
};

export default OccupationsLine;
