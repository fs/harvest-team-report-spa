import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { Divider, ButtonGroup, Button } from '@material-ui/core';
import { HomePageQuery } from '../../../public/static/config/types/Queries';
import useWeekInfo from '../../../hooks/useWeekInfo';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeekString = styled.span`
  font-weight: normal;
`;

const WeekInfo = ({ query }: { query: HomePageQuery }) => {
  const { weekString, nextWeekLink, prevWeekLink } = useWeekInfo(query);
  const handleChangeWeek = (link: string) => {
    Router.push(link);
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
