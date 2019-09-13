import React from 'react';

import { withApollo } from '../../lib/apollo';
import { withAuth } from '../../lib/auth';

import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import SemiproTimetable from '../../components/SemiproTimetable';
import * as S from './styles';

function SemiproSchedule({ isLoggedIn }) {
  return (
    <Layout isLoggedIn={isLoggedIn}>
      <S.Content>
        <S.Title>실업부</S.Title>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={10}>
            <SemiproTimetable />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}

export default withApollo(withAuth(SemiproSchedule));
