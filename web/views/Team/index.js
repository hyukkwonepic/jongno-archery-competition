import React from 'react';

import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import TeamRoundStatus from '../../components/TeamRoundStatus';
import Info from '../../components/Info';
import ApplyInfo from '../../components/ApplyInfo';
import * as S from './styles';

export default function Individual() {
  return (
    <Layout>
      <S.Content>
        <S.Title>단체전</S.Title>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Info
              dates={[
                {
                  date: '2019년 9월 21일(토)',
                  round: '1대 ~ 60대'
                }
              ]}
              path="/team/schedule"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ApplyInfo
              startDate="2019년 9월 21일(토)"
              endDate="2019년 9월 22일 (일)"
              path="/team/apply"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TeamRoundStatus />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}
