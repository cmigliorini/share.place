/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login {
  __typename: "LoginPayload";
  accessToken: string;
}

export interface Login {
  login: Login_login | null;
}

export interface LoginVariables {
  email: string;
  password: string;
}
