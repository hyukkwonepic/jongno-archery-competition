import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as S from './styles';

import Layout from 'components/Layout';
import MainCard from 'components/MainCard';

export default function Main() {
  return (
    <Layout>
      <S.Content>
        <S.Title>제 9회 종로 전국 활쏘기 대회</S.Title>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <MainCard
              title="개인전"
              path="/individual"
              dates={[
                {
                  date: '2019년 9월 21일(토)',
                  round: '1대 ~ 9대'
                },
                {
                  date: '2019년 9월 22일 (일)',
                  round: '10대 ~ 45대'
                }
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MainCard
              title="실업부"
              path="/semipro"
              dates={[
                {
                  date: '2019년 9월 21일(토)',
                  round: '1대 ~ 6대'
                }
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MainCard
              title="단체전"
              path="/team"
              dates={[
                {
                  date: '2019년 9월 21일(일)',
                  round: '1대 ~ 60대'
                }
              ]}
            />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}
