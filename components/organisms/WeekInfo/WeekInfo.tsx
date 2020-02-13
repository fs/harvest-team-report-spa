import React from 'react';
import styled from 'styled-components';
import { Divider, ButtonGroup, Button } from '@material-ui/core';
import routes from '../../../routes';

import { EmployeePageQuery, HomePageQuery } from '../../../public/static/config/types';
import useWeekInfo from '../../../hooks/useWeekInfo';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeekString = styled.span`
  font-weight: normal;
`;

const WeekInfo = ({ week, year, id = '' }: { week?: string; year?: string; id?: string }) => {
  const { weekString, nextWeekLink, prevWeekLink } = useWeekInfo(week, year, id);
  const { Router } = routes;
  const handleChangeWeek = (link: string) => {
    Router.pushRoute(link);
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
