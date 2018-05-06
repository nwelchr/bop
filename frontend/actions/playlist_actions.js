import * as APIUtil from '../util/playlist_api_util';

import { startLoading } from './loading_actions';
import { playSong } from './audio_actions';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLIST_WITH_TRACKLIST = "RECEIVE_PLAYLIST_WITH_TRACKLIST";
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

export const receivePlaylistWithTracklist = (payload) => ({
    type: RECEIVE_PLAYLIST_WITH_TRACKLIST,
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

export const fetchPlaylistThenPlaySong = (playlistId, params) => (dispatch) => (
    APIUtil.fetchPlaylist(playlistId).then(payload => {
        dispatch(receivePlaylistWithTracklist(payload));
        const songToPlay = payload.songs[Object.values(payload.playlist.songIds)[0]];
        // true is for playing first song in the tracklist/shuffledTracklist
        dispatch(playSong(songToPlay, params, true));
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