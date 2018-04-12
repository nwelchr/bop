import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import SongIndexItemContainer from "../songs/song_index_item_container";
import AlbumIndexItem from "../albums/album_index_item";

import AddToAlbumModal from '../modals/add_to_album_modal';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    // this.createAlbumSongs = this.createAlbumSongs.bind.this();
    // this.createDeleteAlbumButton = this.createDeleteAlbumButton.bind.this();
  }

  componentDidMount() {
    this.props
      .fetchAlbum(this.props.match.params.albumId)
      .then(response => this.handleResponse());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId != nextProps.match.params.albumId) {
      this.props.fetchAlbum(nextProps.match.params.albumId).then(response => this.handleResponse());
    }
  }

  handleResponse() {
    this.setState({ loading: false });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props
      .deleteAlbum(this.props.album.id)
      .then(response => this.redirect());
  }

  redirect() {
    this.props.history.push("/collection/albums");
  }

  createAlbumSongs() {
    if (!(typeof this.props.songs === "undefined")) {
      this.AlbumSongs = (
        <ol>
          {this.props.songs.map(song => {
            return (
              <SongIndexItemContainer
                key={song.id}
                song={song}
                album={this.props.album}
              />
            );
          })}
        </ol>
      );
    } else {
      this.AlbumSongs = null;
    }
  }

  createDeleteAlbumButton() {
    if (this.props.currentUser.id === this.props.album.creator_id) {
      this.DeleteAlbumButton = (
        <section className="delete-button-wrapper">
          <button
            className="delete-album-button"
            onClick={this.handleDelete}
          >
            Delete Album
          </button>
        </section>
      );
    } else {
      this.DeleteAlbumButton = null;
    }
  }

  render() {
    if (this.state.loading || (typeof this.props.album === "undefined")) {
      return <div />;
    } else {
      this.createAlbumSongs();
      this.createDeleteAlbumButton();

      return (
        <main className="main" style={this.props.background}>
          <main className="show-page-main">
            <section className="show-info">
              <section className="album-index-wrapper">
                <AlbumIndexItem
                  key={this.props.album.id}
                  album={this.props.album}
                  renderButton={true}
                />
                <section className="delete-button-wrapper">
                  {this.DeleteAlbumButton}
                </section>
              </section>
            </section>
            {/* <AddToAlbumModal /> */}
            <section className="show-songs">{this.AlbumSongs}</section>
          </main>
        </main>
      );
    }
  }
}

export default AlbumShow;
