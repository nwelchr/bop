import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from "../actions/ui_actions"

import merge from "lodash/merge"

const initialState = {
    songDropdown: {
        isOpen: false,
    },
}

const dropdownsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case OPEN_DROPDOWN:
            return merge({}, oldState, {
                [oldState.songDropdown.isOpen]: true,
            })
        case CLOSE_DROPDOWN:
            return merge({}, oldState, {
                [oldState.songDropdown.isOpen]: false,
            })
        default:
            return oldState
    }
}

export default dropdownsReducer
