import React from 'react';
import ApiService from '../../services/ApiService';

export default App => {
  return class WithData extends React.Component {
    static async getInitialProps(context) {
      const {
        ctx: { req, res },
      } = context;

      // eslint-disable-next-line no-param-reassign
      context.ctx.apiService = new ApiService();

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(context);
      }

      if (res && res.finished) {
        return {};
      }

      return {
        ...appProps,
      };
    }

    constructor(props) {
      super(props);
      this.apiService = new ApiService();
    }

    render() {
      return <App apiService={this.apiService} {...this.props} />;
    }
  };
};
