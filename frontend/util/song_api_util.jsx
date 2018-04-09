export const fetchSongs = () => {
    return $.ajax({
        url: 'api/songs',
        method: 'GET'
    });
};

export const fetchSong = (id) => {
    return $.ajax({
        url: `api/songs/${id}`,
        method: 'GET'
    });
};

export const saveTrackToPlaylist = (trackId, playlistId) => (
    $.ajax({
        method: 'POST',
        url: `api/playlists/${playlistId}/tracks`,
        data: { trackId }
    })
);