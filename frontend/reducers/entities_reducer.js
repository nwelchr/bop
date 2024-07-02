import { combineReducers } from "redux"

import playlistsReducer from "./playlists_reducer"
import albumsReducer from "./albums_reducer"
import artistsReducer from "./artists_reducer"
import songsReducer from "./songs_reducer"
import searchesReducer from "./searches_reducer"
import usersReducer from "./users_reducer"

const entitiesReducer = combineReducers({
    playlists: playlistsReducer,
    albums: albumsReducer,
    artists: artistsReducer,
    searches: searchesReducer,
    songs: songsReducer,
    users: usersReducer,
})

export default entitiesReducer
