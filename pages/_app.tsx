import App from 'next/app';
import React from 'react';
import { ThemeProvider as StyledThemeProvidera } from 'styled-components';
import { ThemeProvider as MateriralThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import withApiService from '../lib/withApiService';
import GlobalStyles from '../public/static/styles/globalStyles';
import Theme from '../public/static/styles/theme';
import MaterialTheme from '../public/static/styles/materialTheme';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyledThemeProvidera theme={Theme}>
        <MateriralThemeProvider theme={MaterialTheme}>
          <GlobalStyles />
          <Head>
            <title>Team Report</title>
          </Head>
          <Component {...pageProps} />
        </MateriralThemeProvider>
      </StyledThemeProvidera>
    );
  }
}

export default withApiService(MyApp);
