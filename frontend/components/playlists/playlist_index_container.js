import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';

import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
    console.log("map state to props for playlist index");
    return({
        playlists: Object.values(state.entities.playlists),
        loading: state.ui.loading.global
    });
};

const mapDispatchToProps = (dispatch) => {
    console.log("map dispatch to props for playlist index");
    return ({
    fetchPlaylists: () => dispatch(fetchPlaylists())
});};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
