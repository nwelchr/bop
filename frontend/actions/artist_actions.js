import * as APIUtil from '../util/artist_api_util';

import { startLoading } from './loading_actions';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveArtists = (artists) => ({
    type: RECEIVE_ARTISTS,
    artists
});

export const receiveArtist = (payload) => ({
    type: RECEIVE_ARTIST,
    payload
});

export const fetchArtists = (shouldFetchAll) => (dispatch) => {
    dispatch(startLoading());
    return APIUtil.fetchArtists(shouldFetchAll).then(artists => {
        return dispatch(receiveArtists(artists));});
    };
    
export const fetchArtist = (artistId) => (dispatch) => {
    dispatch(startLoading());
    return APIUtil.fetchArtist(artistId).then(playlist => {
        return dispatch(receiveArtist(playlist));
    });
};