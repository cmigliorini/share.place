/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFolder
// ====================================================

export interface GetFolder_folder_topics {
  __typename: "Discussion";
  id: string;
  title: string;
}

export interface GetFolder_folder_parent {
  __typename: "Folder";
  id: string;
  name: string;
}

export interface GetFolder_folder {
  __typename: "Folder";
  id: string;
  name: string;
  topics: GetFolder_folder_topics[];
  parent: GetFolder_folder_parent | null;
}

export interface GetFolder {
  folder: GetFolder_folder | null;
}

export interface GetFolderVariables {
  folderId: string;
}
