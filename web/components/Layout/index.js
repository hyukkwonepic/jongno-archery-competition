import React from 'react';
import Head from 'next/head';

import * as S from './styles';

import Header from '../Header';
import AdminHeader from '../AdminHeader';

function Layout({ children, isLoggedIn }) {
  return (
    <React.Fragment>
      <Head>
        <title>황학정 | 제9회 종로 전국 활쏘기 대회</title>
        <link
          href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800&display=swap&subset=korean"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.ico"
        />
      </Head>
      <S.Layout>
        {isLoggedIn && <AdminHeader />}
        <Header />
        <section>
          <S.Container>{children}</S.Container>
        </section>
      </S.Layout>
    </React.Fragment>
  );
}

export default Layout;
