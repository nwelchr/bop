export const OPEN_PLAYLIST_FORM = "OPEN_MODAL"
export const CLOSE_PLAYLIST_FORM = "CLOSE_MODAL"
export const OPEN_DROPDOWN = "OPEN_DROPDOWN"
export const CLOSE_DROPDOWN = "CLOSE_DROPDOWN"
export const OPEN_ADD_TO_PLAYLIST_FORM = "OPEN_ADD_TO_PLAYLIST_FORM"
export const CLOSE_ADD_TO_PLAYLIST_FORM = "CLOSE_ADD_TO_PLAYLIST_FORM"

export const openPlaylistForm = () => ({
    type: OPEN_PLAYLIST_FORM,
})

export const closePlaylistForm = () => ({
    type: CLOSE_PLAYLIST_FORM,
})

export const openAddToPlaylistForm = () => ({
    type: OPEN_ADD_TO_PLAYLIST_FORM,
})

export const closeAddToPlaylistForm = () => ({
    type: CLOSE_ADD_TO_PLAYLIST_FORM,
})

export const openDropdown = () => ({
    type: OPEN_DROPDOWN,
})

export const closeDropdown = () => ({
    type: CLOSE_DROPDOWN,
})
