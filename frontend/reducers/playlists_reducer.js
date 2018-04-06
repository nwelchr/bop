import merge from 'lodash/merge';

import { RECEIVE_PLAYLISTS,
    RECEIVE_PLAYLIST,
    REMOVE_PLAYLIST
} from '../actions/playlist_actions';

const sessionReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_PLAYLISTS:
        case RECEIVE_PLAYLIST:
        case REMOVE_PLAYLIST:
            const currentUser = action.currentUser;
            return merge({}, { currentUser });
        default:
            return oldState;
    }
};

export default sessionReducer;