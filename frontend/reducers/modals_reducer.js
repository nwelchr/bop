import {
    OPEN_MODAL,
    CLOSE_MODAL,
} from '../actions/ui_actions';

import merge from 'lodash/merge';

const initialState = {
    newPlaylistModal: {
        isOpen: false
    }
};

const modalsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case OPEN_MODAL:
            return merge({}, oldState, { [oldState.newPlaylistModal.isOpen]: true });
        case CLOSE_MODAL:
            return merge({}, oldState, { [oldState.newPlaylistModal.isOpen]: false });
        default:
            return oldState;
    }
};

export default modalsReducer;