import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import { useApolloClient, useQuery, useMutation } from '@apollo/react-hooks';
import { withApollo } from '../../lib/apollo';
import { withAuth } from '../../lib/auth';

import Layout from '../../components/Layout';
import TeamRoundStatus from '../../components/TeamRoundStatus';
import Info from '../../components/Info';
import ApplyInfo from '../../components/ApplyInfo';

import * as S from './styles';
import * as Q from './queries';

function Team({ isLoggedIn }) {
  const router = useRouter();
  const client = useApolloClient();
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    Q.TEAM_APPLICATIONS
  );

  const [deleteApplication] = useMutation(Q.DELETE_TEAM_APPLICATION);

  const handleEditApplication = async id => {
    try {
      const password = window.prompt('신청시 작성한 비밀번호를 입력해 주세요.');
      if (!password) {
        return;
      }

      const { data } = await client.query({
        query: Q.VALIDATE_APPLICATION_PASSWORD,
        variables: {
          type: 'team',
          id,
          password
        },
        fetchPolicy: 'network-only'
      });

      if (data) {
        if (data.validateApplicationPassword) {
          router.push({
            pathname: `/team/${id}`
          });
          window.sessionStorage.setItem('tmp_password', password);
        } else {
          window.alert('비밀번호가 일치하지 않습니다.');
        }
      }
    } catch (e) {
      console.log(e);
      const { message } = e;
      switch (message) {
        default: {
          window.alert('오류가 발생했습니다. 다시 시도해 주세요.');
        }
      }
    }
  };

  const handleDeleteApplication = async id => {
    try {
      const password = window.prompt('신청시 작성한 비밀번호를 입력해 주세요.');
      if (!password) {
        return;
      }
      const confirm = window.confirm('정말로 삭제하시겠습니까?');
      if (!confirm) {
        return;
      }
      await deleteApplication({
        variables: {
          id,
          password
        },
        update(
          cache,
          {
            data: { deleteTeamApplication }
          }
        ) {
          const { teamApplications } = cache.readQuery({
            query: Q.TEAM_APPLICATIONS
          });
          cache.writeQuery({
            query: Q.TEAM_APPLICATIONS,
            data: {
              teamApplications: teamApplications.filter(
                item => item.id !== deleteTeamApplication.id
              )
            }
          });
        }
      });

      window.alert('성공적으로 삭제되었습니다!');
    } catch (e) {
      const { message } = e;
      switch (message) {
        case 'GraphQL error: Password does not match.': {
          window.alert('비밀번호가 일치하지 않습니다.');
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Info
              dates={[
                {
                  date: '2019년 9월 21일(토)',
                  round: '1대 ~ 60대'
                }
              ]}
              path="/team/schedule"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ApplyInfo
              startDate="2019년 9월 21일(토)"
              endDate="2019년 9월 22일 (일)"
              path="/team/apply"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TeamRoundStatus
              applications={data && data.teamApplications}
              onEdit={handleEditApplication}
              onDelete={handleDeleteApplication}
            />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}

export default withApollo(withAuth(Team));
