import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../../lib/apollo';

import Layout from '../../components/Layout';
import IndividualRoundStatus from '../../components/IndividualRoundStatus';
import Info from '../../components/Info';
import ApplyInfo from '../../components/ApplyInfo';

import * as S from './styles';
import * as Q from './queries';

function Individual() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    Q.INDIVIDUAL_APPLICATIONS
  );

  return (
    <Layout>
      <S.Content>
        <S.Title>개인전</S.Title>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Info
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
              path="/individual/schedule"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ApplyInfo
              startDate="2019년 9월 21일(토)"
              endDate="2019년 9월 22일 (일)"
              path="/individual/apply"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <IndividualRoundStatus applications={data.individualApplications} />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}

export default withApollo(Individual);
