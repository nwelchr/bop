import * as APIUtil from '../util/artist_api_util';

import { startLoading } from './loading_actions';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

import { playSong } from './audio_actions';


const receiveArtists = (artists) => ({
    type: RECEIVE_ARTISTS,
    artists
});

export const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist
});

export const fetchArtists = (shouldFetchAll) => (dispatch) => {
    dispatch(startLoading());
    return APIUtil.fetchArtists(shouldFetchAll).then(artists => {
        return dispatch(receiveArtists(artists));});
    };
    
export const fetchArtist = (artistId) => (dispatch) => {
    dispatch(startLoading());
    return APIUtil.fetchArtist(artistId).then(artist => {
        return dispatch(receiveArtist(artist));
    });
};

export const fetchArtistThenPlaySong = (artistId) => (dispatch) => (
    APIUtil.fetchArtist(artistId).then(artist => {
        // play first song from artist for now
        debugger;
        dispatch(playSong(artist.songs[0]));
    }
)
);