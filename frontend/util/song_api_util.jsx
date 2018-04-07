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