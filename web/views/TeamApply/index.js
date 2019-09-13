import React from 'react';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import { useMutation } from '@apollo/react-hooks';

import { withApollo } from '../../lib/apollo';
import { withAuth } from '../../lib/auth';

import Layout from '../../components/Layout';
import TeamApplyForm from '../../components/TeamApplyForm';

import * as S from './styles';
import * as Q from './queries';
import * as TeamQ from '../Team/queries';

function TeamApply({ isLoggedIn }) {
  const router = useRouter();
  const [createApplication] = useMutation(Q.CREATE_TEAM_APPLICATION);

  const handleApplyFormSubmit = async ({
    round,
    city,
    range,
    player1,
    player2,
    player3,
    player4,
    player5,
    substitute,
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
            player1,
            player2,
            player3,
            player4,
            player5,
            substitute,
            mobile,
            password
          }
        },
        update(
          cache,
          {
            data: { createTeamApplication }
          }
        ) {
          const { teamApplications } = cache.readQuery({
            query: TeamQ.TEAM_APPLICATIONS
          });
          cache.writeQuery({
            query: TeamQ.TEAM_APPLICATIONS,
            data: {
              teamApplications: teamApplications.concat([createTeamApplication])
            }
          });
        }
      });
      window.alert('성공적으로 등록되었습니다!');
      router.push({
        pathname: '/team'
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
    <Layout isLoggedIn={isLoggedIn}>
      <S.Content>
        <S.Title>단체전</S.Title>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={10}>
            <TeamApplyForm onSubmit={handleApplyFormSubmit} />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}

export default withApollo(withAuth(TeamApply));
