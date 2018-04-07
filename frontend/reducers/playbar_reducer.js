import { PLAY, PAUSE } from '../actions/audio_actions';

import merge from 'lodash/merge';


const initialState = {
    playing: false
};

const playbarReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case PLAY:
            return merge({}, oldState, { playing: true });
        case PAUSE:
            return merge({}, oldState, { playing: true });
        default:
            return oldState;
    }
};

export default playbarReducer;