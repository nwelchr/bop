import { combineReducers } from 'redux';

import playlistsReducer from './playlists_reducer';

const entitiesReducer = combineReducers({
    playlists: playlistsReducer
});

export default entitiesReducer;