import merge from 'lodash/merge';

import { RECEIVE_ARTISTS,
    RECEIVE_ARTIST,
} from '../actions/artist_actions';

const artistsReducer = (oldState = {}, action) => {
    let newState;
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            return merge({}, oldState, { [action.artist.id]: action.artist } );
        default:
            return oldState;
    }
};

export default artistsReducer;