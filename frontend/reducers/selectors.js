// import values from 'lodash.values';

// export const selectAllSongs = state => {
//     const currentUser = state.session.currentUser;
//     const userPlaylists = state.session.playlists.filter(playlist => playlist.creator_id === currentUser.id);
//     const allSongs = currentUser
//     values(state.entities.songs).filter(song => userSongs)
// };

export const songSelector = (songIds, songs) => {
    const selectedSongs = songs.filter((song) => (songIds).includes(song.id));
    if (!selectedSongs || selectedSongs.length !== songIds.length) return;
    const orderedSongs = songIds.map(songId => selectedSongs.find((song) => song.id === songId)); 

    return orderedSongs; 
};