import PlaylistShow from './playlist_show';
import { connect } from 'react-redux';

import { fetchPlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { fetchSong } from '../../actions/song_actions';
import { play, playSong } from '../../actions/audio_actions';
const mapStateToProps = (state, ownProps) => {
    return({
        playlist: state.entities.playlists[parseInt(ownProps.match.params.playlistId)],
        loading: state.ui.loading.global,
        background: { 'backgroundColor': '#7a1a45' },
        currentUser: state.session.currentUser
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    play: () => dispatch(play()),
    playSong: () => dispatch(playSong())
});
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
