export const OPEN_PLAYLIST_FORM = "OPEN_MODAL";
export const CLOSE_PLAYLIST_FORM = "CLOSE_MODAL";
export const OPEN_DROPDOWN = "OPEN_DROPDOWN";
export const CLOSE_DROPDOWN = "CLOSE_DROPDOWN";

export const openPlaylistForm = () => ({
    type: OPEN_PLAYLIST_FORM
});

export const closePlaylistForm = () => ({
    type: CLOSE_PLAYLIST_FORM
});

export const openDropdown = () => ({
    type: OPEN_DROPDOWN
});

export const closeDropdown = () => ({
    type: CLOSE_DROPDOWN
});

