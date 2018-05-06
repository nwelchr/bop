import { PLAY, PLAY_SONG, PAUSE } from '../actions/audio_actions';

import merge from 'lodash/merge';


const initialState = {
    playing: false
};

const playbarReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case PLAY:
            return merge({}, oldState, { playing: true });
        case PLAY_SONG:
            let newState = merge({}, oldState);
            newState.playing = true;
            newState.currentSong = action.song;
            newState.currentSongParams = action.params;
            newState.isFirstSong = action.isFirstSong || false;
            return newState;
        case PAUSE:
            return merge({}, oldState, { playing: false });
        default:
            return oldState;
    }
};

export default playbarReducer;