import { gql } from "@apollo/client";
import { Link, RouteComponentProps } from "@reach/router";
import React from "react";
// import { PLACE_TILE_DATA } from '../pages/places';
import * as GetMyPlacesTypes from '../pages/__generated__/GetMyPlaces';
interface PlaceTileProps extends RouteComponentProps {
    place: GetMyPlacesTypes.GetMyPlaces_me_places
}

export const PlaceTile: React.FC<PlaceTileProps> = (place) => {
    return <Link to={`/place/${place.place.id}`}>{place.place.name}</Link>
}
