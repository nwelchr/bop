import merge from 'lodash/merge';

import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  RECEIVE_PLAYLIST_WITH_TRACKLIST,
  REMOVE_PLAYLIST,
  RECEIVE_CREATED_PLAYLIST,
  RECEIVE_MODAL_PLAYLISTS,
} from '../actions/playlist_actions';

import {
  RECEIVE_PLAYLIST_SONG_SAVE,
  REMOVE_PLAYLIST_SONG_SAVE,
} from '../actions/song_actions';

const playlistsReducer = (oldState = {}, action) => {
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return merge({}, oldState, action.playlists);
    case RECEIVE_CREATED_PLAYLIST:
    case RECEIVE_PLAYLIST_WITH_TRACKLIST:
    case RECEIVE_PLAYLIST:
      return merge({}, oldState, {
        [action.payload.playlist.id]: action.payload.playlist,
      });
    case REMOVE_PLAYLIST:
      newState = merge({}, oldState);
      delete newState[action.playlistId];
      return newState;
    case RECEIVE_MODAL_PLAYLISTS:
      return merge({}, oldState, action.playlists);
    case RECEIVE_PLAYLIST_SONG_SAVE:
    case REMOVE_PLAYLIST_SONG_SAVE:
      newState = merge({}, oldState);
      newState[action.payload.playlist.id] = action.payload.playlist;
      return newState;
    default:
      return oldState;
  }
};

export default playlistsReducer;
