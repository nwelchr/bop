import * as APIUtil from '../util/playlist_api_util';

import { startLoading } from './loading_actions';
import { playSong } from './audio_actions';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const RECEIVE_CREATED_PLAYLIST = "RECEIVE_CREATED_PLAYLIST";
export const RECEIVE_MODAL_PLAYLISTS = "RECEIVE_MODAL_PLAYLISTS";

const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});

export const receivePlaylist = (payload) => ({
    type: RECEIVE_PLAYLIST,
    payload
});

const removePlaylist = (id) => ({
    type: REMOVE_PLAYLIST,
    id
});

const receiveModalPlaylists = (playlists, songToAddId) => ({
    type: RECEIVE_MODAL_PLAYLISTS,
    playlists,
    songToAddId
});

export const receiveCreatedPlaylist = (payload) => ({
    type: RECEIVE_CREATED_PLAYLIST, 
    payload
});

export const fetchPlaylists = (shouldFetchAll) => (dispatch) => {
    dispatch(startLoading());
    return APIUtil.fetchPlaylists(shouldFetchAll).then(playlists => {
        return dispatch(receivePlaylists(playlists));});
    };
    
export const fetchModalPlaylists = (songToAddId) => (dispatch) => {
    return APIUtil.fetchPlaylists().then(playlists => {
        return dispatch(receiveModalPlaylists(playlists, songToAddId));
    });
};

export const fetchPlaylist = (playlistId) => (dispatch) => {
    dispatch(startLoading());
    return APIUtil.fetchPlaylist(playlistId).then(playlist => {
        return dispatch(receivePlaylist(playlist));
    });
};

export const fetchPlaylistThenPlaySong = (playlistId) => (dispatch) => (
    APIUtil.fetchPlaylist(playlistId).then(playlist => {
        // play first song from playlist for now
        dispatch(receivePlaylist(playlist))
            .then(dispatch(playSong(playlist.songs[0])));
    }
)
);

export const createPlaylist = (playlist) => (dispatch) => (
    APIUtil.createPlaylist(playlist).then(receivedPlaylist => dispatch(receiveCreatedPlaylist(receivedPlaylist)))
);

export const updatePlaylist = (playlist) => (dispatch) => (
    APIUtil.updatePlaylist(playlist).then(returnedPlaylist => dispatch(receivePlaylist(playlist)))
);

export const deletePlaylist = (playlistId) => (dispatch) => (
    APIUtil.deletePlaylist(playlistId).then(playlist => dispatch(removePlaylist(playlistId)))
);