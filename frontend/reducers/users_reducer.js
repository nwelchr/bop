import merge from 'lodash/merge';

import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const usersReducer = (oldState = {}, action) => {
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_FOLLOW:
      if (action.payload.followable_type !== 'User') return oldState;

      newState = merge({}, oldState);
      newState[action.payload.followable_id].followerIds.push(
        action.payload.user_id
      );
      return newState;
    case REMOVE_FOLLOW:
      if (action.payload.followable_type !== 'User') return oldState;
      newState = merge({}, oldState);
      newState[action.payload.followable_id].followerIds = newState[
        action.payload.followable_id
      ].followerIds.filter((m) => m !== action.payload.user_id);
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;
