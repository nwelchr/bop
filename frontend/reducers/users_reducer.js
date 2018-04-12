import merge from 'lodash/merge';

import { 
    RECEIVE_USERS,
    RECEIVE_USER,
} from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
    let newState;
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            return merge({}, oldState, { [action.user.id]: action.user } );
        default:
            return oldState;
    }
};

export default usersReducer;