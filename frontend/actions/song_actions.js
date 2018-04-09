import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_PLAYLIST_SONG_SAVE = "RECEIVE_PLAYLIST_SONG_SAVE";
// export const REMOVE_PLAYLIST_SONG_SAVE = "REMOVE_PLAYLIST_SONG_SAVE";

import { receivePlaylist } from './playlist_actions';

const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
});

const receiveSong = (song) => ({
    type: RECEIVE_SONG,
    song
});

const receivePlaylistSongSave = (data) => ({
    type: RECEIVE_PLAYLIST_SONG_SAVE,
    data
});

// const removePlaylistSongSave = (data) => ({
//     type: REMOVE_PLAYLIST_SONG_SAVE,
//     data
// });


export const fetchSongs = () => (dispatch) => (
    APIUtil.fetchSongs().then(songs => dispatch(receiveSongs(songs)))
);

export const fetchSong = (songId) => (dispatch) => (
    APIUtil.fetchSong(songId).then(song => dispatch(receiveSong(song)))
);

export const saveSongToPlaylist = (songId, playlistId) => (dispatch) => {
    APIUtil.saveSongToPlaylist(songId, playlistId).then(playlist => {
        dispatch(receivePlaylist(playlist));
        // dispatch(receivePlaylistSongSave(response));
        }
    );
};

// export const removeSongFromPlaylist = (songId, playlistId) => (dispatch) => {
//     APIUtil.removeSongFromPlaylist(songId, playlistId).then(response => {
//         dispatch(removePlaylistSongSave(response));
//     });
// }