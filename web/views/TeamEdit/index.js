import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { withApollo } from '../../lib/apollo';

import Layout from '../../components/Layout';
import TeamEditForm from '../../components/TeamEditForm';

import * as S from './styles';
import * as Q from './queries';
import * as TeamQ from '../Team/queries';

function TeamEdit() {
  const router = useRouter();
  const { id } = router.query;

  const [password, setPassword] = useState(null);

  useEffect(() => {
    const sessionPassword = window.sessionStorage.getItem('tmp_password');
    if (sessionPassword) {
      setPassword(sessionPassword);
      window.sessionStorage.removeItem('tmp_password');
    } else {
      window.alert('유효하지 않은 접근입니다.');
      router.push({
        pathname: '/team'
      });
    }
  }, []);

  // Query
  const { error, data } = useQuery(Q.TEAM_APPLICATION, {
    variables: {
      id
    }
  });
  if (error) {
    const { message } = error;
    console.log({ message });
    switch (message) {
      case 'GraphQL error: Application does not exist.': {
        window.alert('존재하지 않는 신청 내역입니다.');
        break;
      }
      case 'GraphQL error: Round is full.': {
        window.alert('작대가 마감되었습니다. 다른 작대를 선택해 주세요.');
        break;
      }
      default: {
        console.log(error);
        window.alert('오류가 발생했습니다. 다시 시도해 주세요.');
      }
    }
  }
  const application = data ? data.teamApplication : null;

  // Mutation
  const [updateApplication] = useMutation(Q.UPDATE_TEAM_APPLICATION);

  const handleEditFormSubmit = async ({
    round,
    city,
    range,
    player1,
    player2,
    player3,
    player4,
    player5,
    substitute,
    mobile
  }) => {
    const values = {
      round: parseInt(round, 10),
      city,
      range,
      player1,
      player2,
      player3,
      player4,
      player5,
      substitute,
      mobile
    };

    const input = {};
    for (let key in values) {
      if (values[key] !== application[key]) input[key] = values[key];
    }

    try {
      await updateApplication({
        variables: {
          id,
          input
        },
        update(
          cache,
          {
            data: { updateTeamApplication }
          }
        ) {
          const { teamApplications } = cache.readQuery({
            query: TeamQ.TEAM_APPLICATIONS
          });
          cache.writeQuery({
            query: TeamQ.TEAM_APPLICATIONS,
            data: {
              teamApplications: teamApplications.map(item =>
                item.id === updateTeamApplication.id
                  ? updateTeamApplication
                  : item
              )
            }
          });
        }
      });
      window.alert('성공적으로 수정되었습니다!');
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

  // Show nothing if there is no password
  if (!password) {
    return null;
  }

  return (
    <Layout>
      <S.Content>
        <S.Title>실업부</S.Title>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={10}>
            <TeamEditForm
              application={application}
              onSubmit={handleEditFormSubmit}
            />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}

export default withApollo(TeamEdit);
