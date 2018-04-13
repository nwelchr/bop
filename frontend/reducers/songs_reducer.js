import merge from 'lodash/merge';

import { 
    RECEIVE_SONGS,
    RECEIVE_SONG
} from '../actions/song_actions';

import { 
    RECEIVE_PLAYLIST,
    RECEIVE_PLAYLIST_SONG_SAVE
 } from '../actions/playlist_actions';

const songsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_SONGS:
            return action.songs;
        case RECEIVE_SONG:
            return merge({}, oldState, {[action.song.id]: action.song} );
        case RECEIVE_PLAYLIST:
            return ({}, oldState, action.payload.songs || []);
        case RECEIVE_PLAYLIST_SONG_SAVE:
            return merge({}, oldState, action.payload.songs);
        default:
            return oldState;
    }
};

export default songsReducer;