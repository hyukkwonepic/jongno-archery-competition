import React from 'react';
import Router from 'next/router';
import Grid from '@material-ui/core/Grid';
import { useMutation } from '@apollo/react-hooks';

import { withApollo } from '../../lib/apollo';

import Layout from '../../components/Layout';
import IndividualApplyForm from '../../components/IndividualApplyForm';

import * as S from './styles';
import * as Q from './queries';
import * as IndividualQ from '../Individual/queries';

function IndividualApply() {
  const [createApplication] = useMutation(Q.CREATE_INDIVIDUAL_APPLICATION);

  const handleApplyFormSubmit = async ({
    round,
    city,
    range,
    name,
    mobile,
    password
  }) => {
    try {
      await createApplication({
        variables: {
          input: {
            round: parseInt(round, 10),
            city,
            range,
            name,
            mobile,
            password
          }
        },
        update(
          cache,
          {
            data: { createIndividualApplication }
          }
        ) {
          const { individualApplications } = cache.readQuery({
            query: IndividualQ.INDIVIDUAL_APPLICATIONS
          });
          cache.writeQuery({
            query: IndividualQ.INDIVIDUAL_APPLICATIONS,
            data: {
              individualApplications: individualApplications.concat([
                createIndividualApplication
              ])
            }
          });
        }
      });
      window.alert('성공적으로 등록되었습니다!');
      Router.push({
        pathname: '/individual'
      });
    } catch (e) {
      const { message } = e;
      switch (message) {
        case 'GraphQL error: Round is full': {
          window.alert('작대가 마감되었습니다. 다른 작대를 선택해 주세요.');
          break;
        }
        default: {
          window.alert('오류가 발생했습니다. 다시 시도해 주세요.');
        }
      }
    }
  };

  return (
    <Layout>
      <S.Content>
        <S.Title>개인전</S.Title>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={10}>
            <IndividualApplyForm onSubmit={handleApplyFormSubmit} />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}

export default withApollo(IndividualApply);
