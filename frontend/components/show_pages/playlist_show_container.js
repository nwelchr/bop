import PlaylistShow from './playlist_show';
import { connect } from 'react-redux';

import { fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
    debugger;
    return({
        playlist: state.entities.playlists[parseInt(ownProps.match.params.playlistId)],
        loading: state.ui.loading.global,
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
