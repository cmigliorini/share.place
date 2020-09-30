import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Fragment } from "react";
import  * as GetMyPlacesTypes  from "./__generated__/GetMyPlaces";
import { RouteComponentProps } from '@reach/router';
import { PlaceTile } from '../components/place-tile';
import { Loading } from "../components";

// import { Place } from './place';
/*
type Place {
  id: ID!
  name: String!
  icon: String!
  icon_color: String!
  icon_id: String
  header_color: String!
  header_image: String
  header_image_id: String
  removed: Int
  created_at: Int
  updated_at: Int
  s3Storage: Int
  boxStorage: Int
  boxCode: String
  boxFolderId: String
  boxAccessToken: String
  owner: User
  admin: User
  folders: [Folder!]!
  favoriteFolders: [FolderFavorite!]!
  removedFolders: [Folder!]!
  participants: [User!]!
  isNotifTopicEnable: Boolean
  isNotifCommentEnable: Boolean
  isNotifFileEnable: Boolean
  isNotifOperationEnable: Boolean
  isNotifOnInviteToFolderEnable: Boolean
  isFavoritePlace: Boolean
  hasDueDate: Boolean
  unread: Int
  isNewUser: Boolean
  recentTopics: [Discussion!]!
  topics(
    limit: Int
    offset: Int
    since: DateTime
    filter: PlaceTopicsFilterType
  ): TopicList
  adminId: ID
  ownerId: ID
  acceptedInvitation: Boolean
  inviteUser: User
  onBoardingStep: Boolean
  onBoardingInvitation: Int
  lockedFiles(limit: Int, offset: Int): FileList
  isTraceable: Boolean
  isFolderMuteHidden: Boolean
  parentFolders(limit: Int, offset: Int): [Folder!]!
  email: String
  sortDiscussionType: DiscussionSortedBy
  dashboard: Dashboard!
  isFavoriteFolderHidden: Boolean
  isContainsDeletedFolder: Boolean
  isOwner: Boolean
  owners: [User]
  participantActivities: [User!]!
  isActive: Boolean
  orderPlace: Int
  hasMention: Boolean
  unreadFavoriteThread: Int
  hasMentionFavoriteThread: Boolean
  exportFiles: [ExportFile!]
  isGenerateExportLoading: Boolean!
}*/
export const PLACE_TILE_DATA = gql`
  fragment PlaceTile on Place {
    __typename
    id
    name
  }
`;

export const GET_MY_PLACES = gql`
  query GetMyPlaces {
    me {
      id
      email
      firstName
      lastName
      company
      places {
        ...PlaceTile
      }
    }
  }
  ${PLACE_TILE_DATA}
`;

interface PageProps extends RouteComponentProps {}

export const Places: React.FC<PageProps> = () => {
    const {
      data,
      loading,
      error
    } = useQuery<GetMyPlacesTypes.GetMyPlaces>(
      GET_MY_PLACES,
      { fetchPolicy: "network-only" });
    if (loading) return <Loading />;
    if (error) {
      // FIXME: this is an ugly workaround to current behaviour: localStorage is read after being written
      // but is empty and needs to be called after a time. I must have missed a dependency somewhere,
      // causing React to either call us too early or else.
      setTimeout(window.location.reload, 500);
      // TODO: if there's an error for good, handle it properly
      return <p>ERROR: {error.message}</p>;
    }
    if (data === undefined) return <p>ERROR</p>;
  
    return (
      <Fragment>
        <h1>{data.me?.firstName} {data.me?.lastName}</h1>
        <h2>My Places</h2>
        {/* <Header>My Languages</Header> */}
        {(data.me && data.me.places && data.me.places.length) ? (
          data.me.places.map((place: any) => (
            <PlaceTile key={place.id} place={place} />
          ))
        ) : (
          <p>You have no place yet</p>
        )}
      </Fragment>
    );
        }
  ;
