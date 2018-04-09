import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';

import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';
import { play } from '../../actions/audio_actions';

const mapStateToProps = (state) => {
    console.log(state);
    return({
        playlists: Object.values(state.entities.playlists),
        loading: state.ui.loading.global,
        background: { 'backgroundColor': '#2e263b' }
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        play: () => dispatch(play())
    });};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
