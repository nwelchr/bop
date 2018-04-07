// import * as APIUtil from '../util/playlist_api_util';

// export const RECEIVE_SONGS = "RECEIVE_SONGS";
// export const RECEIVE_SONG = "RECEIVE_SONG";

// const receiveSongs = (playlists) => ({
//     type: RECEIVE_SONGS,
//     playlists
// });

// const receivePlaylist = (playlist) => ({
//     type: RECEIVE_PLAYLIST,
//     playlist
// });

// export const fetchPlaylists = () => (dispatch) => (
//     APIUtil.fetchPlaylists().then(playlists => dispatch(receivePlaylists(playlists)))
// );

// export const fetchPlaylist = (playlistId) => (dispatch) => (
//     APIUtil.fetchPlaylist(playlistId).then(playlist => dispatch(receivePlaylist(playlist)))
// );