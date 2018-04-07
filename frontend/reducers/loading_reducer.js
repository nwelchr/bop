import merge from 'lodash/merge';
import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { START_LOADING } from '../actions/loading_actions';

const initialState = {
    global: false
};

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
        case RECEIVE_PLAYLIST:
            return merge({}, state, { global: false });
        case START_LOADING:
            return merge({}, state, { global: true });
        default:
            return state;
    }
};

export default loadingReducer;