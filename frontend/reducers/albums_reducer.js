import merge from 'lodash/merge';

import { RECEIVE_ALBUMS,
    RECEIVE_ALBUM,
} from '../actions/album_actions';

const albumsReducer = (oldState = {}, action) => {
    let newState;
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALBUMS:
        // debugger;
            return action.albums;
        case RECEIVE_ALBUM:
            // debugger;
            return merge({}, oldState, { [action.payload.album.id]: action.payload.album} );
        default:
            return oldState;
    }
};

export default albumsReducer;