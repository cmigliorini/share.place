/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPlace
// ====================================================

export interface GetPlace_place_folders {
  __typename: "Folder";
  id: string;
  name: string;
}

export interface GetPlace_place {
  __typename: "Place";
  id: string;
  name: string;
  folders: GetPlace_place_folders[];
}

export interface GetPlace {
  place: GetPlace_place | null;
}

export interface GetPlaceVariables {
  placeId: string;
}
