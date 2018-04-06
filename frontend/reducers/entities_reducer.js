import { combineReducers } from 'redux';

import playlistsReducer from './session_errors_reducer';

const entitiesReducer = combineReducers({
    playlists: playlistsReducer
});

export default entitiesReducer;