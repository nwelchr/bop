import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollow = (payload) => ({
    type: RECEIVE_FOLLOW,
    payload
});

export const removeFollow = (payload) => ({
    type: REMOVE_FOLLOW,
    payload
});

export const follow = (type, id) => (dispatch) => {
    console.log('following in follow actions');
    return (
    APIUtil.follow(type, id).then(response => {
        debugger;
        dispatch(receiveFollow(response));
    })
);
};

export const unfollow = (type, id) => (dispatch) => {
    console.log('unfollowing in follow actions');
    return (APIUtil.unfollow(type, id).then(response => {
        console.log('never hits promise');
        dispatch(removeFollow(response));
    }
    )
);
};