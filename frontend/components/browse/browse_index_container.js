import BrowseIndex from './browse_index';
import { connect } from 'react-redux';

import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';
import { play } from '../../actions/audio_actions';

const mapStateToProps = (state) => {
    debugger;
    return({
        playlists: Object.values(state.entities.playlists),
        loading: state.ui.loading.global,
        background: { 'background-color': '#3c3f5b' },
        shouldFetchAll: true
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPlaylists: (shouldFetchAll) => dispatch(fetchPlaylists(shouldFetchAll)),
        play: () => dispatch(play())
    });};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseIndex);
