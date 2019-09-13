import { Component } from 'react';
import nextCookie from 'next-cookies';

export const withAuth = WrappedComponent =>
  class extends Component {
    static async getInitialProps(ctx) {
      const { session } = nextCookie(ctx);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, isLoggedIn: Boolean(session) };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
