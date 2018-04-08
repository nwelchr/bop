export const fetchPlaylists = (shouldFetchAll) => {
    return $.ajax({
        url: 'api/playlists',
        method: 'GET',
        data: { shouldFetchAll: shouldFetchAll }
    });
};

export const fetchPlaylist = (id) => {
    return $.ajax({
        url: `api/playlists/${id}`,
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

export const deletePlaylist = (playlistId) => {
    return $.ajax({
        url: `api/playlists/${playlistId}`,
        method: 'DELETE',
    });
};