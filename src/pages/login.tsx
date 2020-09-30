import React from 'react';
import { gql, useMutation } from '@apollo/client';

import { LoginForm, Loading } from '../components';
import { isLoggedInVar } from '../cache';
import * as LoginTypes from '../__generated__/Login';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      lastConnection
    }
  }
`;

export default function Login() {
  const [loginMutation, { loading, error }] = useMutation<
    LoginTypes.Login,
    LoginTypes.LoginVariables
  >(
    LOGIN_USER,
    {
      onCompleted({ login }) {
        if (login) {
          localStorage.setItem('token', login.accessToken);
          isLoggedInVar(true);
        }else {
          localStorage.removeItem('token');
          isLoggedInVar(false);
        }
      }
    }
  );

  if (loading) return <Loading />;
  if (error) return <p>An error occurred during Login</p>;

  return <LoginForm loginFunction={loginMutation} />;
}
