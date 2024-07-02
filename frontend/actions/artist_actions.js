import * as APIUtil from '../util/artist_api_util';

import { startLoading } from './loading_actions';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTIST_WITH_TRACKLIST = 'RECEIVE_ARTIST_WITH_TRACKLIST';

import { playSong } from './audio_actions';

const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists,
});

export const receiveArtist = (payload) => ({
  type: RECEIVE_ARTIST,
  payload,
});

export const receiveArtistWithTracklist = (payload) => ({
  type: RECEIVE_ARTIST_WITH_TRACKLIST,
  payload,
});

export const fetchArtists = (shouldFetchAll) => (dispatch) => {
  dispatch(startLoading());
  return APIUtil.fetchArtists(shouldFetchAll).then((artists) => {
    return dispatch(receiveArtists(artists));
  });
};

export const fetchArtist = (artistId) => (dispatch) => {
  dispatch(startLoading());
  return APIUtil.fetchArtist(artistId).then((artist) => {
    return dispatch(receiveArtist(artist));
  });
};

export const fetchArtistThenPlaySong = (artistId, params) => (dispatch) =>
  APIUtil.fetchArtist(artistId).then((payload) => {
    dispatch(receiveArtistWithTracklist(payload));
    const songToPlay = payload.songs[Object.values(payload.artist.songIds)[0]];
    // true is for playing first song in the tracklist/shuffledTracklist
    dispatch(playSong(songToPlay, params, true));
  });
