import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { Link, RouteComponentProps } from "@reach/router";
import React, { Fragment } from "react";
import * as GetPlaceTypes from "./__generated__/GetPlace"
interface PlaceProps extends RouteComponentProps {
    placeId?: any
}
export const FOLDER_TILE_DATA = gql`
  fragment FolderTile on Folder {
    __typename
    id
    name
  }
`;

export const GET_PLACE = gql`
  query GetPlace($placeId: ID!) {
    place(id:$placeId) {
      id
      name
      folders {
        ...FolderTile
      }
    }
  }
  ${FOLDER_TILE_DATA}
`;

export const Place: React.FC<PlaceProps> = ({ placeId }) => {
    const {
        data,
        loading,
        error
    } = useQuery<GetPlaceTypes.GetPlace, GetPlaceTypes.GetPlaceVariables>(
        GET_PLACE, { variables: { placeId } });
    if (loading) return <div>Loading</div>// <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;
    if (data === undefined) return <p>ERROR</p>;

    return <Fragment><Link to="/">back to Places</Link><div>
        <h1>Place {data.place?.name}</h1>
        {data.place?.folders.map((folder) =>
            <p><Link to={`place/${placeId}/folder/${folder.id}`}> Folder {folder && folder.name}</Link></p>)}
    </div></Fragment>;
};