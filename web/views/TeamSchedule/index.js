import React from 'react';

import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import TeamTimetable from '../../components/TeamTimetable';
import * as S from './styles';

export default function TeamSchedule() {
  return (
    <Layout>
      <S.Content>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={10}>
            <TeamTimetable />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}
