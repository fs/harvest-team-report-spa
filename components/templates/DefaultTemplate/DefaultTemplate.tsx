import React from 'react';
import { Container } from 'public/styles/commonStyledComponents';
import Header from 'components/organisms/Header';
import WeekInfo from 'components/organisms/WeekInfo';

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
    <>
      <Header />
      <Container>
        <WeekInfo week={week} year={year} id={id} />
        {children}
      </Container>
    </>
  );
};

export default DefaultTemplate;
