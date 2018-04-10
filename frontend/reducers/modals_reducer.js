import {
    OPEN_PLAYLIST_FORM,
    CLOSE_PLAYLIST_FORM,
    OPEN_ADD_TO_PLAYLIST_FORM,
    CLOSE_ADD_TO_PLAYLIST_FORM
} from '../actions/ui_actions';

import merge from 'lodash/merge';

const initialState = {
    newPlaylistModal: {
        isOpen: false
    },
    addToPlaylistModal: {
        isOpen: false
    }
};

const modalsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch(action.type) {
        case OPEN_PLAYLIST_FORM:
            newState.newPlaylistModal.isOpen = true;
            return newState;
        case CLOSE_PLAYLIST_FORM:
            newState.newPlaylistModal.isOpen = false;
            return newState;    
        case OPEN_ADD_TO_PLAYLIST_FORM:
            newState.addToPlaylistModal.isOpen = true;
            return newState;
        case CLOSE_ADD_TO_PLAYLIST_FORM:
            newState.addToPlaylistModal.isOpen = false;
            return newState;
        default:
            return oldState;
    }
};

export default modalsReducer;