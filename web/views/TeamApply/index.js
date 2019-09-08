import React from 'react';

import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import TeamApplyForm from '../../components/TeamApplyForm';
import * as S from './styles';

export default function SemiproApply() {
  return (
    <Layout>
      <S.Content>
        <S.Title>단체전</S.Title>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={10}>
            <TeamApplyForm />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}
