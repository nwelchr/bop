import { combineReducers } from 'redux';

import playlistsReducer from './playlists_reducer';
import albumsReducer from './albums_reducer';
import songsReducer from './songs_reducer';
import searchesReducer from './searches_reducer';

const entitiesReducer = combineReducers({
    playlists: playlistsReducer,
    albums: albumsReducer,
    searches: searchesReducer,
    songs: songsReducer
});

export default entitiesReducer;