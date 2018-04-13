import PlaylistShow from './playlist_show';
import { connect } from 'react-redux';

import { fetchPlaylist, deletePlaylist, fetchModalPlaylists } from '../../actions/playlist_actions';
import { fetchSong, removeSongFromPlaylist } from '../../actions/song_actions';
import { play, pause, playSong } from '../../actions/audio_actions';

import { openAddToPlaylistForm } from '../../actions/ui_actions';

import { follow, unfollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
    return({
        playlist: state.entities.playlists[parseInt(ownProps.match.params.playlistId)],
        loading: state.ui.loading.global,
        background: { 'backgroundColor': '#7a1a45' },
        currentUser: state.session.currentUser,
        currentSong: state.ui.playbar.currentSong,
        playing: state.ui.playbar.playing,
        songs: state.entities.songs
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    playSong: (song) => dispatch(playSong(song)),
    removeSongFromPlaylist: (songId, playlistId) => dispatch(removeSongFromPlaylist(songId, playlistId)),
    openAddToPlaylistForm: () => dispatch(openAddToPlaylistForm()),
    fetchModalPlaylists: (songToAddId) => dispatch(fetchModalPlaylists(songToAddId)),
    follow: (playlistId) => dispatch(follow('Playlist', playlistId)),
    unfollow: (playlistId) => dispatch(unfollow('Playlist', playlistId))
});
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
