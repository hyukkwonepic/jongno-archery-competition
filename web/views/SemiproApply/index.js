import React from 'react';

import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import SemiproApplyForm from '../../components/SemiproApplyForm';
import * as S from './styles';

export default function SemiproApply() {
  return (
    <Layout>
      <S.Content>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={10}>
            <SemiproApplyForm />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}
