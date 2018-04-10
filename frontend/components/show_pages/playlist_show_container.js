import PlaylistShow from './playlist_show';
import { connect } from 'react-redux';

import { fetchPlaylist, deletePlaylist, fetchModalPlaylists } from '../../actions/playlist_actions';
import { fetchSong } from '../../actions/song_actions';
import { play, pause, playSong } from '../../actions/audio_actions';

import { openAddToPlaylistForm } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return({
        playlist: state.entities.playlists[parseInt(ownProps.match.params.playlistId)],
        loading: state.ui.loading.global,
        background: { 'backgroundColor': '#7a1a45' },
        currentUser: state.session.currentUser,
        currentSong: state.ui.playbar.currentSong,
        playing: state.ui.playbar.playing
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
    openAddToPlaylistForm: () => dispatch(openAddToPlaylistForm()),
    fetchModalPlaylists: (songId) => dispatch(fetchModalPlaylists(songId))
});
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
