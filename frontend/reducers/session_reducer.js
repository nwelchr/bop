import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

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
        case RECEIVE_FOLLOW:
        debugger;
            return action.currentUser;        
        case REMOVE_FOLLOW:
        default:
            return oldState;
    }
};

export default sessionReducer;