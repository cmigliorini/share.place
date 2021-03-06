import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { Link, RouteComponentProps } from "@reach/router";
import React, { Fragment } from "react";
import { Loading } from "../components";
import * as GetPlaceTypes from "./__generated__/GetPlace"
import FolderIcon from '@material-ui/icons/Folder';

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
    if (loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;
    if (data === undefined) return <p>ERROR</p>;

    return <Fragment><Link to="/">back to Places</Link><div>
        <h1>Place {data.place?.name}</h1>
        {data.place?.folders.map((folder) =>
            <p><FolderIcon /><Link to={`folder/${folder.id}`}> {folder && folder.name}</Link></p>)}
    </div></Fragment>;
};