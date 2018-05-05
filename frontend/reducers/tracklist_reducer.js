import merge from 'lodash/merge';

import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';


const sessionReducer = (oldState = {}, action) => {
    let currentUser, newState, tableized;
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_PLAYLIST:
            return action.payload.playlist.song_ids;
        case RECEIVE_ALBUM:
            return action.payload.album.song_ids;
        default:
            return oldState;
    }
};

export default sessionReducer;