import React from 'react';
import * as S from './styles';

import Header from 'components/Header';

export default function Layout({ children }) {
  return (
    <S.Layout>
      <Header />
      <section>{children}</section>
    </S.Layout>
  );
}
