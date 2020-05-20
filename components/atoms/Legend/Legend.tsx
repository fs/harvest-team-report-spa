import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
`;

const LegendExample = styled.span<{ color: string }>(
  ({ color }) => css`
    background-color: ${color};
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 10%;
    margin-right: 8px;
  `,
);

const Legend = ({ title, hours, color }: { title: string; hours: number; color: string }) => {
  return (
    <Wrapper>
      <Typography variant="body1" component="p">
        <LegendExample color={color} />
        {title}
      </Typography>
      <Typography variant="h6" component="p">
        {hours.toFixed(2)}
      </Typography>
    </Wrapper>
  );
};

export default Legend;
