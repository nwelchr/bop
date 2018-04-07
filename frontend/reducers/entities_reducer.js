import { combineReducers } from 'redux';

import playlistsReducer from './playlists_reducer';
import songsReducer from './songs_reducer';

const entitiesReducer = combineReducers({
    playlists: playlistsReducer,
    songs: songsReducer
});

export default entitiesReducer;