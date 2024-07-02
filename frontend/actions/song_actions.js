import * as APIUtil from '../util/song_api_util';

import { startLoading } from './loading_actions';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_PLAYLIST_SONG_SAVE = 'RECEIVE_PLAYLIST_SONG_SAVE';
export const REMOVE_PLAYLIST_SONG_SAVE = 'REMOVE_PLAYLIST_SONG_SAVE';

import { receivePlaylist } from './playlist_actions';

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs,
});

const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song,
});

const receivePlaylistSongSave = (payload) => ({
  type: RECEIVE_PLAYLIST_SONG_SAVE,
  payload,
});

const removePlaylistSongSave = (payload) => ({
  type: REMOVE_PLAYLIST_SONG_SAVE,
  payload,
});

export const fetchSongs = () => (dispatch) => {
  dispatch(startLoading());
  APIUtil.fetchSongs().then((songs) => dispatch(receiveSongs(songs)));
};

export const fetchSong = (songId) => (dispatch) => {
  dispatch(startLoading());
  APIUtil.fetchSong(songId).then((song) => dispatch(receiveSong(song)));
};

export const saveSongToPlaylist = (songId, playlistId) => (dispatch) =>
  APIUtil.saveSongToPlaylist(songId, playlistId).then((response) => {
    dispatch(receivePlaylistSongSave(response));
  });

export const removeSongFromPlaylist = (songId, playlistId) => (dispatch) =>
  APIUtil.removeSongFromPlaylist(songId, playlistId).then((response) => {
    dispatch(removePlaylistSongSave(response));
  });
