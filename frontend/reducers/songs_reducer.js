import merge from 'lodash/merge';

import { 
    RECEIVE_SONGS,
    RECEIVE_SONG
} from '../actions/song_actions';

import { 
    RECEIVE_PLAYLIST,
    RECEIVE_PLAYLIST_WITH_TRACKLIST,
    RECEIVE_PLAYLIST_SONG_SAVE
 } from '../actions/playlist_actions';

 import { 
    RECEIVE_ALBUM,
    RECEIVE_ALBUM_WITH_TRACKLIST
 } from '../actions/album_actions';

 import { 
    RECEIVE_ARTIST,
    RECEIVE_ARTIST_WITH_TRACKLIST
 } from '../actions/artist_actions';

const songsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_SONGS:
            return action.songs;
        case RECEIVE_SONG:
            return merge({}, oldState, {[action.song.id]: action.song} );
        case RECEIVE_PLAYLIST:
        case RECEIVE_PLAYLIST_WITH_TRACKLIST:
        case RECEIVE_PLAYLIST_SONG_SAVE:
        case RECEIVE_ALBUM:
        case RECEIVE_ALBUM_WITH_TRACKLIST:
        case RECEIVE_ARTIST:
        case RECEIVE_ARTIST_WITH_TRACKLIST:
            return merge({}, oldState, action.payload.songs || {});
        default:
            return oldState;
    }
};

export default songsReducer;