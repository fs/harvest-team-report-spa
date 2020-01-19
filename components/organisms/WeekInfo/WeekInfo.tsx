import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';
import { HomePageQuery } from '../../../public/static/config/types/Queries';
import useWeekInfo from '../../../hooks/useWeekInfo';

const Wrapper = styled.div``;

const WeekInfo = ({ query }: { query: HomePageQuery }) => {
  const { weekString, nextWeekLink, prevWeekLink } = useWeekInfo(query);
  return (
    <Wrapper>
      <Link href={prevWeekLink}>
        <a>PREV</a>
      </Link>
      <div>This Week: {weekString}</div>
      <Link href={nextWeekLink}>
        <a>NEXT</a>
      </Link>
      <Divider />
    </Wrapper>
  );
};

export default WeekInfo;
