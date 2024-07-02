import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user).then(
    (receivedUser) => dispatch(receiveCurrentUser(receivedUser)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const login = (user) => (dispatch) =>
  APIUtil.login(user).then(
    (receivedUser) => dispatch(receiveCurrentUser(receivedUser)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  APIUtil.logout().then((receivedUser) => {
    dispatch(receiveCurrentUser(null));
  });
