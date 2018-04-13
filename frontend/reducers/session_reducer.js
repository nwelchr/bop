import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_CREATED_PLAYLIST } from '../actions/playlist_actions';

const _nullUser = Object.freeze({
    currentUser: null
});

const sessionReducer = (oldState = _nullUser, action) => {
    let currentUser;
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            currentUser = action.currentUser;
            return merge({}, { currentUser });
        case RECEIVE_CREATED_PLAYLIST:
            const newId = action.payload.playlist.id;
            const newState = merge({}, oldState);
            newState.currentUser.playlistIds.push(newId);
            return newState;
        case RECEIVE_FOLLOW:
        debugger;
            console.log('receiving follow...');
            return action.currentUser;        
        case REMOVE_FOLLOW:
        debugger;
            console.log('removing follow...');
            return action.currentUser;
        default:
            return oldState;
    }
};

export default sessionReducer;