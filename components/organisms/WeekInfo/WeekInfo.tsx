import React from 'react';
import styled from 'styled-components';
import { Divider, ButtonGroup, Button } from '@material-ui/core';
import routes from '../../../routes';

import useWeekInfo from '../../../hooks/useWeekInfo';

const { Router } = routes;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeekString = styled.span`
  font-weight: normal;
`;

const WeekInfo = ({ week, year, id = '' }: { week?: string; year?: string; id?: string }) => {
  const { weekString, nextWeekLink, prevWeekLink } = useWeekInfo(week, year, id);
  const handleChangeWeek = (link: { route: string; params: { week: number; year: number; id?: string } }) => {
    Router.pushRoute(link.route, link.params);
  };

  return (
    <>
      <Wrapper>
        <h1>
          <b>This Week:</b> <WeekString>{weekString}</WeekString>
        </h1>
        <div>
          <ButtonGroup>
            <Button onClick={() => handleChangeWeek(prevWeekLink)}>PREV</Button>
            <Button onClick={() => handleChangeWeek(nextWeekLink)}>NEXT</Button>
          </ButtonGroup>
        </div>
      </Wrapper>
      <Divider />
    </>
  );
};

export default WeekInfo;
