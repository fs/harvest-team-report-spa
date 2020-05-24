import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';
import DefaultTemplate from '../../components/templates/DefaultTemplate';

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 64px;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const ErrorPage = ({ statusCode }: { statusCode: any }) => {
  const is404 = statusCode === 404;

  return (
    <DefaultTemplate>
      <Title>
        <Typography variant="h3" component="h1">
          {is404 ? 'This page is not found' : 'Server error'}
        </Typography>
      </Title>
      <Image>
        <img src={is404 ? '/images/error404.gif' : '/images/goat.png'} alt={is404 ? '404' : 'error'} />
      </Image>
    </DefaultTemplate>
  );
};

const getStatusCode = (res: any, err: any) => {
  if (res) {
    return res.statusCode;
  }
  return err ? err.statusCode : 404;
};

ErrorPage.getInitialProps = ({ res, err, statusCode }: { res: any; err: any; statusCode: any }) => {
  return {
    statusCode: statusCode || getStatusCode(res, err),
  };
};

export default ErrorPage;
