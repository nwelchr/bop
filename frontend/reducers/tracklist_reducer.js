import merge from 'lodash/merge';

import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const sessionReducer = (oldState = {}, action) => {
    let currentUser, newState, tableized;
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_PLAYLIST:
            return action.payload.playlist.song_ids;
        default:
            return oldState;
    }
};

export default sessionReducer;