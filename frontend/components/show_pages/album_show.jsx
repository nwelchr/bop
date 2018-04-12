import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import SongIndexItemContainer from "../songs/song_index_item_container";
import AlbumIndexItem from "../albums/album_index_item";

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
    
    this.redirect = this.redirect.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
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

  redirect() {
    this.props.history.push("/collection/albums");
  }

  createAlbumSongs() {
    if (!(typeof this.props.album.songs === "undefined")) {
      this.AlbumSongs = (
        <ol>
          {this.props.album.songs.map(song => {
            return (
              <SongIndexItemContainer
                key={song.id}
                song={song}
              />
            );
          })}
        </ol>
      );
    } else {
      this.AlbumSongs = null;
    }
  }

  render() {
    if (this.state.loading || (typeof this.props.album === "undefined")) {
      return <div />;
    } else {
      this.createAlbumSongs();

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
              </section>
            </section>
            <section className="show-songs">{this.AlbumSongs}</section>
          </main>
        </main>
      );
    }
  }
}

export default AlbumShow;
