import merge from 'lodash/merge';

import { RECEIVE_ARTISTS,
    RECEIVE_ARTIST,
} from '../actions/artist_actions';

const artistsReducer = (oldState = {}, action) => {
    let newState;
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ARTISTS:
        // debugger;
            return action.artists;
        case RECEIVE_ARTIST:
            // debugger;
            return merge({}, oldState, { [action.payload.artist.id]: action.payload.artist} );
        default:
            return oldState;
    }
};

export default artistsReducer;