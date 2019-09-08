import React from 'react';
import Head from 'next/head';
import * as S from './styles';

import Header from '../Header';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800&display=swap&subset=korean"
          rel="stylesheet"
        />
      </Head>
      <S.Layout>
        <Header />
        <section>
          <S.Container>{children}</S.Container>
        </section>
      </S.Layout>
    </React.Fragment>
  );
}
