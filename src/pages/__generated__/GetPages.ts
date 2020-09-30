/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPages
// ====================================================

export interface GetPages_me_places {
  __typename: "Place";
  id: string;
}

export interface GetPages_me {
  __typename: "User";
  firstName: string | null;
  lastName: string | null;
  places: GetPages_me_places[];
}

export interface GetPages {
  me: GetPages_me | null;
}
