import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { auth } from '../../lib/firebase';
import { withApollo } from '../../lib/apollo';

function Admin() {
  const client = useApolloClient();
  const router = useRouter();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const formValues = {};
      formData.forEach((value, key) => {
        formValues[key] = value;
      });
      const { email, password } = formValues;

      const user = await auth().signInWithEmailAndPassword(email, password);
      const token = await auth().currentUser.getIdToken();
      await client.query({
        query: gql`
          query login($token: String!) {
            login(token: $token)
          }
        `,
        variables: {
          token
        }
      });

      console.log('login success!');

      router.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = async () => {
    try {
      await client.query({
        query: gql`
          query logout {
            logout
          }
        `
      });

      console.log('cookie cleared!');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">이메일</label>
          <input id="email" type="email" name="email" />
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input id="password" type="password" name="password" />
        </div>

        <button type="submit">관리자 로그인</button>
      </form>

      <button type="button" onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
}

export default withApollo(Admin);
