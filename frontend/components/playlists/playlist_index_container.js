import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';

import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';
import { play } from '../../actions/audio_actions';

import { openPlaylistForm } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
    // console.log(state.ui.modals.newPlaylistModal.isOpen);
    return({
        playlists: Object.values(state.entities.playlists),
        loading: state.ui.loading.global,
        background: { 'backgroundColor': '#2e263b' },
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        play: () => dispatch(play()),
        openPlaylistForm: () => dispatch(openPlaylistForm())
    });};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
