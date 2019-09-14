import React from 'react';
import Head from 'next/head';
import { useApolloClient, useQuery, useMutation } from '@apollo/react-hooks';

import { withApollo } from '../../lib/apollo';

import SemiproRoundStatus from '../../components/SemiproRoundStatus';

import * as Q from '../Semipro/queries';

function SemiproFullTable() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    Q.SEMIPRO_APPLICATIONS
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
      <SemiproRoundStatus
        fullTable
        applications={data && data.semiproApplications}
      />
    </>
  );
}

export default withApollo(SemiproFullTable);
