export const fetchSongs = () => {
  return $.ajax({
    url: 'api/songs',
    method: 'GET',
  });
};

export const fetchSong = (id) => {
  return $.ajax({
    url: `api/songs/${id}`,
    method: 'GET',
  });
};

export const saveSongToPlaylist = (songId, playlistId) =>
  $.ajax({
    method: 'POST',
    url: `api/playlists/${playlistId}/songs`,
    data: { songId },
  });

export const removeSongFromPlaylist = (songId, playlistId) =>
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}/songs`,
    data: { songId },
  });
