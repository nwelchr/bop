import PlaylistShow from './playlist_show';
import { connect } from 'react-redux';

import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchSong } from '../../actions/song_actions';
import { play, playSong } from '../../actions/audio_actions';

const mapStateToProps = (state, ownProps) => {
    console.log("mapping state to props on PlaylistShow...");
    return({
        playlist: state.entities.playlists[parseInt(ownProps.match.params.playlistId)],
        loading: state.ui.loading.global,
        background: { 'background-color': '#932963' }
    });
};

const mapDispatchToProps = (dispatch) => {
    console.log("mapping dispatch to props(only fetchPlaylist");
    return ({
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    play: () => dispatch(play()),
    playSong: () => dispatch(playSong())
});
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
