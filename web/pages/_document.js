import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Document from 'next/document';
import { ServerStyleSheets as MaterialSheet } from '@material-ui/styles';
import { ServerStyleSheet as StyledComponentSheet } from 'styled-components';

import GlobalStyle from '../components/GlobalStyle';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const materialSheet = new MaterialSheet();
    const styledComponentsSheet = new StyledComponentSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            materialSheet.collect(
              styledComponentsSheet.collectStyles(
                <React.Fragment>
                  <CssBaseline />
                  <GlobalStyle />
                  <App {...props} />
                </React.Fragment>
              )
            )
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {materialSheet.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </>
        )
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }
}
