import PlaylistShow from './playlist_show';
import { connect } from 'react-redux';

import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchSong } from '../../actions/song_actions';
import { play, playSong } from '../../actions/audio_actions';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return({
        playlist: state.entities.playlists[parseInt(ownProps.match.params.playlistId)],
        loading: state.ui.loading.global,
        background: { 'backgroundColor': '#7a1a45' }
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    play: () => dispatch(play()),
    playSong: () => dispatch(playSong())
});
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
