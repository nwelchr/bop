import * as APIUtil from '../util/playlist_api_util';

import { startLoading } from './loading_actions';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const RECEIVE_CREATED_PLAYLIST = "RECEIVE_CREATED_PLAYLIST";

const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});

export const receivePlaylist = (playlist) => ({
    type: RECEIVE_PLAYLIST,
    playlist
});

const removePlaylist = (id) => ({
    type: REMOVE_PLAYLIST,
    id
});

export const receiveCreatedPlaylist = (playlist) => ({
    type: RECEIVE_CREATED_PLAYLIST, 
    playlist
});

export const fetchPlaylists = (shouldFetchAll) => (dispatch) => {
    dispatch(startLoading());
    return APIUtil.fetchPlaylists(shouldFetchAll).then(playlists => {
        return dispatch(receivePlaylists(playlists));});
};

export const fetchPlaylist = (playlistId) => (dispatch) => {
    dispatch(startLoading());
    return APIUtil.fetchPlaylist(playlistId).then(playlist => {
        return dispatch(receivePlaylist(playlist));
    });
};

export const createPlaylist = (playlist) => (dispatch) => (
    APIUtil.createPlaylist(playlist).then(receivedPlaylist => dispatch(receiveCreatedPlaylist(receivedPlaylist)))
);

export const updatePlaylist = (playlist) => (dispatch) => (
    APIUtil.updatePlaylist(playlist).then(returnedPlaylist => dispatch(receivePlaylist(playlist)))
);

export const deletePlaylist = (playlistId) => (dispatch) => (
    APIUtil.deletePlaylist(playlistId).then(playlist => dispatch(removePlaylist(playlistId)))
);