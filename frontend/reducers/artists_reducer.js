import merge from 'lodash/merge';

import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';

import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const artistsReducer = (oldState = {}, action) => {
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      return merge({}, oldState, {
        [action.payload.artist.id]: action.payload.artist,
      });
    case RECEIVE_FOLLOW:
      if (action.payload.followable_type !== 'Artist') return oldState;
      newState = merge({}, oldState);
      newState[action.payload.followable_id].followerIds.push(
        action.payload.user_id
      );
      return newState;
    case REMOVE_FOLLOW:
      if (action.payload.followable_type !== 'Artist') return oldState;
      newState = merge({}, oldState);
      newState[action.payload.followable_id].followerIds = newState[
        action.payload.followable_id
      ].followerIds.filter((m) => m !== action.payload.user_id);
      return newState;
    default:
      return oldState;
  }
};

export default artistsReducer;
