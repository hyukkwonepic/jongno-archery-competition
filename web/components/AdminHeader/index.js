import React from 'react';
import { useRouter } from 'next/router';
import { useApolloClient } from '@apollo/react-hooks';

import * as S from './styles';
import * as Q from './queries';

export default function AdminHeader() {
  const client = useApolloClient();
  const router = useRouter();

  const handleLogout = async () => {
    await client.query({
      query: Q.LOGOUT
    });
    router.push('/');
  };

  return (
    <S.AdminHeader>
      <span>관리자 모드로 접속중 입니다</span>
      <button type="button" onClick={handleLogout}>
        로그아웃
      </button>
    </S.AdminHeader>
  );
}
