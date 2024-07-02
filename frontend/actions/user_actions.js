import * as APIUtil from "../util/user_api_util"

import { startLoading } from "./loading_actions"

export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER = "RECEIVE_USER"

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users,
})

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user,
})

export const fetchUsers = () => (dispatch) => {
    dispatch(startLoading())
    APIUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)))
}

export const fetchUser = (userId) => (dispatch) => {
    dispatch(startLoading())
    APIUtil.fetchUser(userId).then((user) => {
        dispatch(receiveUser(user))
    })
}
