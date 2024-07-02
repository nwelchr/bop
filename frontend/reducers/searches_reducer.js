import merge from 'lodash/merge';

import {
  RECEIVE_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS,
} from '../actions/search_actions';

const initialState = {};

const searchesReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      // newState.artists = Object.keys(action.results.artists || {});
      return action.results;
    case CLEAR_SEARCH_RESULTS:
      return initialState;
    default:
      return oldState;
  }
};

export default searchesReducer;
