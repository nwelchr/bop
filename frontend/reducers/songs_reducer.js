import merge from 'lodash/merge';

import { RECEIVE_SONGS,
    RECEIVE_SONG
} from '../actions/song_actions';

const songsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_SONGS:
            return action.songs;
        case RECEIVE_SONG:
            return ({}, oldState, {[action.song.id]: action.song} );
        default:
            return oldState;
    }
};

export default songsReducer;