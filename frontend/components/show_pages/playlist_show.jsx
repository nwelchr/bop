import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import SongIndexItem from "../songs/song_index_item";
import PlaylistIndexItem from "../playlists/playlist_index_item";

import AddToPlaylistModal from '../modals/add_to_playlist_modal';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    // this.createPlaylistSongs = this.createPlaylistSongs.bind.this();
    // this.createDeletePlaylistButton = this.createDeletePlaylistButton.bind.this();
  }

  componentDidMount() {
    this.props
      .fetchPlaylist(this.props.match.params.playlistId)
      .then(response => this.handleResponse());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.playlistId != nextProps.match.params.playlistId) {
      this.props.fetchPlaylist(nextProps.match.params.playlistId).then(response => this.handleResponse());
    }
  }

  handleResponse() {
    this.setState({ loading: false });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props
      .deletePlaylist(this.props.playlist.id)
      .then(response => this.redirect());
  }

  redirect() {
    this.props.history.push("/collection/playlists");
  }

  createPlaylistSongs() {
    if (!(typeof this.props.playlist.songs === "undefined")) {
      this.PlaylistSongs = (
        <ol>
          {this.props.playlist.songs.map(song => {
            return (
              <SongIndexItem
                key={song.id}
                song={song}
                fetchSong={this.props.fetchSong}
                play={this.props.play}
                playSong={this.props.playSong}
                currentSong={this.props.currentSong}
                playing={this.props.playing}
                pause={this.props.pause}
                openAddToPlaylistForm={this.props.openAddToPlaylistForm}
                fetchModalPlaylists={this.props.fetchModalPlaylists}
              />
            );
          })}
        </ol>
      );
    } else {
      this.PlaylistSongs = null;
    }
  }

  createDeletePlaylistButton() {
    if (this.props.currentUser.id === this.props.playlist.creator_id) {
      this.DeletePlaylistButton = (
        <section className="delete-button-wrapper">
          <button
            className="delete-playlist-button"
            onClick={this.handleDelete}
          >
            Delete Playlist
          </button>
        </section>
      );
    } else {
      this.DeletePlaylistButton = null;
    }
  }

  render() {
    if (this.state.loading || (typeof this.props.playlist === "undefined")) {
      return <div />;
    } else {
      this.createPlaylistSongs();
      this.createDeletePlaylistButton();

      return (
        <main className="main" style={this.props.background}>
          <main className="show-page-main">
            <section className="show-info">
              <section className="playlist-index-wrapper">
                <PlaylistIndexItem
                  key={this.props.playlist.id}
                  playlist={this.props.playlist}
                  renderButton={true}
                />
                <section className="delete-button-wrapper">
                  {this.DeletePlaylistButton}
                </section>
              </section>
            </section>
            {/* <AddToPlaylistModal /> */}
            <section className="show-songs">{this.PlaylistSongs}</section>
          </main>
        </main>
      );
    }
  }
}

export default PlaylistShow;
