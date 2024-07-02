import * as APIUtil from '../util/album_api_util';

import { startLoading } from './loading_actions';
import { playSong } from './audio_actions';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUM_WITH_TRACKLIST = 'RECEIVE_ALBUM_WITH_TRACKLIST';

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums,
});

export const receiveAlbum = (payload) => ({
  type: RECEIVE_ALBUM,
  payload,
});

export const receiveAlbumWithTracklist = (payload) => ({
  type: RECEIVE_ALBUM_WITH_TRACKLIST,
  payload,
});

export const fetchAlbums = (shouldFetchAll) => (dispatch) => {
  dispatch(startLoading());
  return APIUtil.fetchAlbums(shouldFetchAll).then((albums) => {
    return dispatch(receiveAlbums(albums));
  });
};

export const fetchAlbum = (albumId) => (dispatch) => {
  dispatch(startLoading());
  return APIUtil.fetchAlbum(albumId).then((album) => {
    return dispatch(receiveAlbum(album));
  });
};

export const fetchAlbumThenPlaySong = (albumId, params) => (dispatch) =>
  APIUtil.fetchAlbum(albumId).then((payload) => {
    dispatch(receiveAlbumWithTracklist(payload));
    const songToPlay = payload.songs[Object.values(payload.album.songIds)[0]];
    // true is for playing first song in the tracklist/shuffledTracklist
    dispatch(playSong(songToPlay, params, true));
  });
