/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMyPlaces
// ====================================================

export interface GetMyPlaces_me_places {
  __typename: "Place";
  id: string;
  name: string;
}

export interface GetMyPlaces_me {
  __typename: "User";
  id: string;
  email: string;
  places: GetMyPlaces_me_places[];
}

export interface GetMyPlaces {
  me: GetMyPlaces_me | null;
}
