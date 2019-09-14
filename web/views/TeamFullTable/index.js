import React from 'react';
import Head from 'next/head';
import { useApolloClient, useQuery, useMutation } from '@apollo/react-hooks';

import { withApollo } from '../../lib/apollo';

import TeamRoundStatus from '../../components/TeamRoundStatus';

import * as Q from '../Team/queries';

function TeamFullTable() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    Q.TEAM_APPLICATIONS
  );
  return (
    <>
      <Head>
        <title>황학정 | 제9회 종로 전국 활쏘기 대회</title>
        <link
          href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800&display=swap&subset=korean"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.ico"
        />
      </Head>
      <TeamRoundStatus fullTable applications={data && data.teamApplications} />
    </>
  );
}

export default withApollo(TeamFullTable);
