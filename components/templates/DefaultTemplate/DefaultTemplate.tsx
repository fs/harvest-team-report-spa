import React from 'react';
import { Container } from '../../../public/static/styles/commonStyledComponents';
import Header from '../../organisms/Header';

const DefaultTemplate = ({ children }: any) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default DefaultTemplate;
