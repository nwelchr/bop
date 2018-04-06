export const fetchPlaylists = () => {
    return $.ajax({
        url: 'api/playlists',
        method: 'GET'
    });
};

export const fetchPlaylist = (id) => {
    return $.ajax({
        url: `api/playlist/${id}`,
        method: 'GET'
    });
};

export const createPlaylist = (playlist) => {
    return $.ajax({
        url: `api/playlists`,
        method: 'POST',
        data: { playlist }
    });
};

export const updatePlaylist = (playlist) => {
    return $.ajax({
        url: `api/playlists/${playlist.id}`,
        method: 'PATCH',
        data: { playlist }
    });
};

export const deletePlaylist = (playlist) => {
    return $.ajax({
        url: `api/playlists/${playlist.id}`,
        method: 'DELETE',
    });
};