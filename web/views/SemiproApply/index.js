import React from 'react';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import { useMutation } from '@apollo/react-hooks';

import { withApollo } from '../../lib/apollo';

import Layout from '../../components/Layout';
import SemiproApplyForm from '../../components/SemiproApplyForm';

import * as S from './styles';
import * as Q from './queries';
import * as SemiproQ from '../Semipro/queries';

function SemiproApply() {
  const router = useRouter();
  const [createApplication] = useMutation(Q.CREATE_SEMIPRO_APPLICATION);

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
            data: { createSemiproApplication }
          }
        ) {
          const { semiproApplications } = cache.readQuery({
            query: SemiproQ.SEMIPRO_APPLICATIONS
          });
          cache.writeQuery({
            query: SemiproQ.SEMIPRO_APPLICATIONS,
            data: {
              semiproApplications: semiproApplications.concat([
                createSemiproApplication
              ])
            }
          });
        }
      });
      window.alert('성공적으로 등록되었습니다!');
      router.push({
        pathname: '/semipro'
      });
    } catch (e) {
      const { message } = e;
      switch (message) {
        case 'GraphQL error: Round is full.': {
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
        <S.Title>실업부</S.Title>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={10}>
            <SemiproApplyForm onSubmit={handleApplyFormSubmit} />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}

export default withApollo(SemiproApply);
