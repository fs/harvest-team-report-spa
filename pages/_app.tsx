import App from 'next/app';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MateriralThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import NProgress from 'nprogress';
import routes from '../routes';
import GlobalStyles from '../public/styles/globalStyles';
import Theme from '../public/styles/theme';
import MaterialTheme from '../public/styles/materialTheme';

const { Router } = routes;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    Router.onRouteChangeStart = () => NProgress.start();
    Router.onRouteChangeComplete = () => NProgress.done();
    Router.onRouteChangeError = () => NProgress.done();

    const { Component, pageProps } = this.props;
    return (
      <StyledThemeProvider theme={Theme}>
        <MateriralThemeProvider theme={MaterialTheme}>
          <GlobalStyles />
          <Head>
            <title>Team Report</title>
          </Head>
          <Component {...pageProps} />
        </MateriralThemeProvider>
      </StyledThemeProvider>
    );
  }
}

export default MyApp;
