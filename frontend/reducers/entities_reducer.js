import { combineReducers } from 'redux';

import playlistsReducer from './playlists_reducer';
import songsReducer from './songs_reducer';
import searchesReducer from './searches_reducer';

const entitiesReducer = combineReducers({
    playlists: playlistsReducer,
    searches: searchesReducer,
    songs: songsReducer
});

export default entitiesReducer;