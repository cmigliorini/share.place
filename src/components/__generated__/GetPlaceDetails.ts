/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPlaceDetails
// ====================================================

export interface GetPlaceDetails_place {
  __typename: "Place";
  id: string;
}

export interface GetPlaceDetails {
  place: GetPlaceDetails_place | null;
}

export interface GetPlaceDetailsVariables {
  placeId: string;
}
