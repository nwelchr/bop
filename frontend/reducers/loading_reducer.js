import merge from 'lodash/merge';
import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_SONGS } from '../actions/song_actions';
import { START_LOADING } from '../actions/loading_actions';

const initialState = {
    global: false
};

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
        case RECEIVE_PLAYLIST:
        case RECEIVE_ALBUMS:
        case RECEIVE_ALBUM:
        case RECEIVE_ARTISTS:
        case RECEIVE_ARTIST:
        case RECEIVE_SONGS:
        case RECEIVE_USERS:
        case RECEIVE_USER:
            return merge({}, state, { global: false });
        case START_LOADING:
            return merge({}, state, { global: true });
        default:
            return state;
    }
};

export default loadingReducer;