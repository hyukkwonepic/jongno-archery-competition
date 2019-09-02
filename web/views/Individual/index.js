import React from 'react';

import Grid from '@material-ui/core/Grid';
import Layout from 'components/Layout';
import IndividualForm from 'components/IndividualForm';
import * as S from './styles';

export default function Individual() {
  return (
    <Layout>
      <S.Content>
        <S.Title>개인전</S.Title>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={8}>
            <S.StyledInfo
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
            <IndividualForm />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}
