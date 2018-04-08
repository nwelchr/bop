import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';

import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';
import { play } from '../../actions/audio_actions';

const mapStateToProps = (state) => {
    console.log("map state to props for playlist index");
    return({
        playlists: Object.values(state.entities.playlists),
        loading: state.ui.loading.global,
        background: { 'background-color': '#2e263b' }
    });
};

const mapDispatchToProps = (dispatch) => {
    console.log("map dispatch to props for playlist index");
    return ({
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        play: () => dispatch(play())
    });};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
