import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_CREATED_PLAYLIST } from '../actions/playlist_actions';

const _nullUser = Object.freeze({
  currentUser: null,
});

const sessionReducer = (oldState = _nullUser, action) => {
  let currentUser, newState, tableized;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      return merge({}, { currentUser });
    case RECEIVE_CREATED_PLAYLIST:
      const newId = action.payload.playlist.id;
      newState = merge({}, oldState);
      newState.currentUser.playlistIds.push(newId);
      return newState;
    case RECEIVE_FOLLOW:
      newState = merge({}, oldState);
      tableized = `${action.payload.followable_type.toLowerCase()}s`;
      newState.currentUser[`followed_${tableized}`].push(
        action.payload.followable_id
      );
      return newState;
    case REMOVE_FOLLOW:
      newState = merge({}, oldState);
      tableized = `${action.payload.followable_type.toLowerCase()}s`;
      newState.currentUser[`followed_${tableized}`] = newState.currentUser[
        `followed_${tableized}`
      ].filter((m) => m !== action.payload.followable_id);
      return newState;
    default:
      return oldState;
  }
};

export default sessionReducer;
