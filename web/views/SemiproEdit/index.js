import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { withApollo } from '../../lib/apollo';

import Layout from '../../components/Layout';
import SemiproEditForm from '../../components/SemiproEditForm';

import * as S from './styles';
import * as Q from './queries';
import * as SemiproQ from '../Semipro/queries';

function SemiproEdit() {
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
        pathname: '/semipro'
      });
    }
  }, []);

  // Query
  const { error, data } = useQuery(Q.SEMIPRO_APPLICATION, {
    variables: {
      id
    }
  });
  if (error) {
    const { message } = error;
    switch (message) {
      case 'GraphQL error: Application does not exist.': {
        window.alert('존재하지 않는 신청 내역입니다.');
        break;
      }
      default: {
        console.log(error);
      }
    }
  }
  const application = data ? data.semiproApplication : null;

  // Mutation
  const [updateApplication] = useMutation(Q.UPDATE_SEMIPRO_APPLICATION);

  const handleEditFormSubmit = async ({ round, city, range, name, mobile }) => {
    const values = {
      round: parseInt(round, 10),
      city,
      range,
      name,
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
            data: { updateSemiproApplication }
          }
        ) {
          const { semiproApplications } = cache.readQuery({
            query: SemiproQ.SEMIPRO_APPLICATIONS
          });
          cache.writeQuery({
            query: SemiproQ.SEMIPRO_APPLICATIONS,
            data: {
              semiproApplications: semiproApplications.map(item =>
                item.id === updateSemiproApplication.id
                  ? updateSemiproApplication
                  : item
              )
            }
          });
        }
      });
      window.alert('성공적으로 수정되었습니다!');
      router.push({
        pathname: '/semipro'
      });
    } catch (e) {
      const { message } = e;
      switch (message) {
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
            <SemiproEditForm
              application={application}
              onSubmit={handleEditFormSubmit}
            />
          </Grid>
        </Grid>
      </S.Content>
    </Layout>
  );
}

export default withApollo(SemiproEdit);
