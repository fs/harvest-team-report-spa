import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@material-ui/core';
import { EmployeeOccupation } from 'config/types';
import OccupationsLine from 'components/atoms/OccupationsLine';
import Legend from 'components/atoms/Legend';

const Wrapper = styled.div``;

const Title = styled.span`
  font-weight: bold;
`;

const OccupationList = ({
  occupations,
  totalHours,
  title,
}: {
  occupations: EmployeeOccupation[];
  totalHours: number;
  title: string;
}) => {
  return (
    <Card>
      <CardContent>
        <Wrapper>
          <Typography variant="body2" component="h6">
            <Title>{title}</Title>
          </Typography>
          <br />
          <OccupationsLine occupations={occupations} totalHours={totalHours} />
          <br />
          {occupations.map((occupation, i) => (
            <Legend title={occupation.name} hours={occupation.hours} color={occupation.color} key={i} />
          ))}
        </Wrapper>
      </CardContent>
    </Card>
  );
};

export default OccupationList;
