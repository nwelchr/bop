import React from "react";
import { closeAddToPlaylistForm } from "../../actions/ui_actions";
import { connect } from "react-redux";
import { fetchPlaylists, fetchModalPlaylists } from '../../actions/playlist_actions';
import { saveSongToPlaylist } from '../../actions/song_actions';
import { withRouter } from "react-router-dom";
import AddToPlaylistIndexItem from '../playlists/add_to_playlist_index_item';


class AddToPlaylistModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //   this.props.fetchModalPlaylists();
  }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props
//       .createPlaylist(this.state)
//       .then(response => this.redirect(response.playlist.id));
//   }

//   redirect(id) {
//     this.props.closePlaylistForm();
//     this.props.history.push(`/collection/playlists/${id}`);
//   }

  render() {
    if (!this.props.isModalOpen) {
      return null;
    }

    let playlists = this.props.playlists.filter(playlist => !playlist.song_ids.includes(this.props.songToAddId)).filter(playlist => playlist.creator_id === this.props.currentUser.id);
    
    return (
      <div className="add-song-to-playlist-modal">
        <div className="add-song-to-playlist-wrapper">
          <button
            className="close-modal-button"
            onClick={this.props.closeAddToPlaylistForm}
          >
            <i className="fa fa-times" />
          </button>
          <h1 className="create-new-playlist-h1">Add To Playlist</h1>
          <main className="modal-index">
            <ul>
                {playlists.map(playlist => 
                    <AddToPlaylistIndexItem key={playlist.id} playlist={playlist} renderButton={false} saveSongToPlaylist={this.props.saveSongToPlaylist} songToAddId={this.props.songToAddId}
                    closeAddToPlaylistForm={this.props.closeAddToPlaylistForm}
                     />
                )}
            </ul>
        </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: Object.values(state.entities.playlists),
    isModalOpen: state.ui.modals.addToPlaylistModal.isOpen,
    currentUser: state.session.currentUser,
    songToAddId: state.ui.modals.songToAddId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeAddToPlaylistForm: () => dispatch(closeAddToPlaylistForm()),
    saveSongToPlaylist: (songId, playlistId) => dispatch(saveSongToPlaylist(songId, playlistId)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    // fetchModalPlaylists: () => dispatch(fetchModalPlaylists()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddToPlaylistModal)
);
