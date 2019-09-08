import React from 'react';

import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import IndividualApplyForm from '../../components/IndividualApplyForm';
import * as S from './styles';

export default function IndividualApply() {
  return (
    <Layout>
      <S.Content>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={10}>
            <IndividualApplyForm />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}
