import React from 'react';

import { withApollo } from '../../lib/apollo';
import { withAuth } from '../../lib/auth';

import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import IndividualTimetable from '../../components/IndividualTimetable';
import * as S from './styles';

function IndividualSchedule({ isLoggedIn }) {
  return (
    <Layout isLoggedIn={isLoggedIn}>
      <S.Content>
        <S.Title>개인전</S.Title>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={10}>
            <IndividualTimetable />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}

export default withApollo(withAuth(IndividualSchedule));
