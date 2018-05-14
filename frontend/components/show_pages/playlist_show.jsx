import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import SongIndexItemContainer from "../songs/song_index_item_container";
import PlaylistIndexItem from "../playlists/playlist_index_item";

import AddToPlaylistModal from '../modals/add_to_playlist_modal';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(followText) {
    const { playlist, follow, unfollow } = this.props;
    followText === "Follow Playlist" ? follow(playlist.id) : unfollow(playlist.id);
  }

  redirect() {
    this.props.history.push("/collection/playlists");
  }

  createPlaylistSongs() {
    if (!(typeof this.props.playlist.songIds === "undefined")) {
      const selectedSongs = this.props.songs.filter((song) => (this.props.playlist.songIds).includes(song.id));
      const songs = this.props.playlist.songIds.map(songId => selectedSongs.find((song) => song.id === songId));  
      
      // if songs haven't been fetched yet (i.e. after adding song to playlist and waiting for new songs to populate)
      // return an empty div
      if (songs.includes(undefined)) {
        return;
      }
      this.PlaylistSongs = (
        <ol>
          {songs.map(song => {
            return (
              <SongIndexItemContainer
                key={song.id}
                song={song}
                playlist={this.props.playlist}
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
      if (this.PlaylistSongs === undefined) return <div />; 
      this.createDeletePlaylistButton();

      const { currentUser, playlist } = this.props;

      let followButton = null;
      if (!(currentUser.playlistIds.includes(playlist.id))) {
        let followText = (currentUser.followed_playlists && currentUser.followed_playlists.includes(playlist.id)) ? "Unfollow Playlist" : "Follow Playlist";
        followButton = <button onClick={() => this.handleClick(followText)}
         className="follow-button">{followText}</button>;
      }

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
                  {followButton}
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
