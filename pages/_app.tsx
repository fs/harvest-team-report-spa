import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import GlobalStyles from '../public/static/styles/globalStyles';

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
      <>
        <GlobalStyles />
        <Head>
          <title>Team Report</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
