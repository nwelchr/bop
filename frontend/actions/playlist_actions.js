import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});

const receivePlaylist = (playlist) => ({
    type: RECEIVE_PLAYLISTS,
    playlist
});

const removePlaylist = (id) => ({
    type: RECEIVE_PLAYLISTS,
    id
});

export const fetchPlaylists = () => (dispatch) => (
    APIUtil.fetchPlaylists.then(playlists => dispatch(receivePlaylists(playlists)))
);

export const fetchPlaylist = (playlistId) => (dispatch) => (
    APIUtil.fetchPlaylist(playlistId).then(playlist => dispatch(receivePlaylist(playlist)))
);

export const createPlaylist = (playlist) => (dispatch) => (
    APIUtil.createPlaylist(playlist).then(returnedPlaylist => dispatch(receivePlaylist(playlist)))
);

export const updatePlaylist = (playlist) => (dispatch) => (
    APIUtil.updatePlaylist(playlist).then(returnedPlaylist => dispatch(receivePlaylist(playlist)))
);

export const deletePlaylist = (playlistId) => (dispatch) => (
    APIUtil.deletePlaylist(playlistId).then(playlist => dispatch(removePlaylist(playlistId)))
);