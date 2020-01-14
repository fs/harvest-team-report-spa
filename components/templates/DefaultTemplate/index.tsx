import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

const DefaultTemplate = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default DefaultTemplate;
