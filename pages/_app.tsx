import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyles from '../public/static/styles/globalStyles';
import Theme from '../public/static/styles/theme';

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
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Head>
          <title>Team Report</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
