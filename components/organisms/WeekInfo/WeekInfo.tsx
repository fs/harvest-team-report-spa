import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonGroup, Button, Card, CardContent } from '@material-ui/core';
import routes from 'routes';

import useWeekInfo from 'hooks/useWeekInfo';

const { Router } = routes;

const Wrapper = styled.div`
  margin: 16px 0;
`;

const Title = styled.h1`
  margin: 0;
`;

const ContentWrapper = styled.nav(
  ({ theme: { down, breakpoints } }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${down(breakpoints.sm)} {
      flex-direction: column;
    }
  `,
);

const WeekString = styled.span`
  font-weight: normal;
`;

const WeekInfo = ({ week, year, id = '' }: { week?: string; year?: string; id?: string }) => {
  const { weekString, nextWeekLink, prevWeekLink } = useWeekInfo(week, year, id);
  const handleChangeWeek = (link: { route: string; params: { week: number; year: number; id?: string } }) => {
    Router.pushRoute(link.route, link.params);
  };

  return (
    <Wrapper>
      <Card>
        <CardContent>
          <ContentWrapper>
            <Title>
              <b>This Week:</b> <WeekString>{weekString}</WeekString>
            </Title>
            <div>
              <ButtonGroup color="primary">
                <Button onClick={() => handleChangeWeek(prevWeekLink)}>PREV</Button>
                <Button onClick={() => handleChangeWeek(nextWeekLink)}>NEXT</Button>
              </ButtonGroup>
            </div>
          </ContentWrapper>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default WeekInfo;
