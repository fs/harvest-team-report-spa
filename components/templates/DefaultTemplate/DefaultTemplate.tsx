import React from 'react';
import styled from 'styled-components';
import { Container } from 'public/styles/commonStyledComponents';
import Header from 'components/organisms/Header';
import WeekInfo from 'components/organisms/WeekInfo';

const Wrapper = styled.div`
  padding-bottom: 40px;
`;

const DefaultTemplate = ({
  children,
  week,
  year,
  id = '',
}: {
  children: React.ReactNode;
  week?: string;
  year?: string;
  id?: string;
}) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <WeekInfo week={week} year={year} id={id} />
        {children}
      </Container>
    </Wrapper>
  );
};

export default DefaultTemplate;
