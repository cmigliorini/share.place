import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { Link, RouteComponentProps } from "@reach/router";
import React, { Fragment } from "react";
import { Loading } from "../components";
import * as GetFolderTypes from "./__generated__/GetFolder"
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

interface FolderProps extends RouteComponentProps {
    folderId?: any
}


export const GET_FOLDER = gql`
  query GetFolder($folderId: ID!) {
    folder(id:$folderId) {
      id
      name
      topics {
        id
        title
      }
      parent {
        id
        name
      }
    }
  }
`;

interface FolderProps extends RouteComponentProps {
  folderId?: any
}

export const Folder: React.FC<FolderProps> = ({ folderId }) => {
    const {
        data,
        loading,
        error
    } = useQuery<GetFolderTypes.GetFolder, GetFolderTypes.GetFolderVariables>(
        GET_FOLDER, { variables: { folderId } });
    if (loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;
    if (data === undefined) return <p>ERROR</p>;

    return <Fragment><Link to="../..">back to Place</Link><div>
         <h1><FolderOpenIcon/> {data.folder?.name}</h1>
        {data.folder?.topics.map(topic =>
            <p><ChatBubbleOutlineIcon /> {topic && topic.title}</p>)}
    </div></Fragment>;
};