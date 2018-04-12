import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import SongIndexItemContainer from "../songs/song_index_item_container";
import ArtistIndexItem from "../artists/artist_index_item";
import AlbumResults from '../search/album_results';

class ArtistShow extends React.Component {
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
      .fetchArtist(this.props.match.params.artistId).then(response => this.handleResponse());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.artistId != nextProps.match.params.artistId) {
      this.props.fetchArtist(nextProps.match.params.artistId).then(response => this.handleResponse());
    }
  }

  handleResponse() {
    this.setState({ loading: false });
  }

  redirect() {
    this.props.history.push("/collection/artists");
  }

  createArtistSongs() {
    if (!(typeof this.props.artist.songs === "undefined")) {
      return (
        <main className="show-page-main">
        <section className="show-songs song-container">
        <ol>
          {this.props.artist.songs.map(song => {
            return (
              <SongIndexItemContainer
                key={song.id}
                song={song}
              />
            );
          })}
        </ol>
        </section>
        </main>
      );
    } else {
      return null;
    }
  }

  render() {
    if (this.state.loading || (typeof this.props.artist === "undefined")) {
      return <div />;
    } else {
      const ArtistSongs = this.createArtistSongs();

      const { artist } = this.props;

      const Albums = artist.albums.length > 0 ? (
        <section className="artist-albums">
        <h1>Albums</h1>
      <AlbumResults albums={artist.albums} />
      </section>
      ) : null;

      const Singles = artist.singles.length > 0 ? (
        <section className="artist-singles">
        <h1>Singles</h1>
      <AlbumResults albums={artist.singles} />
      </section>
       ) : null;
       
      return (
        <main className="main artist-show">
        <div className="content" /><img className="artwork" src={artist.background_artwork_url} />
        <div className="user-artist-show-wrapper">
        <section className="user-artist-intro">
          <img src={artist.artist_artwork_url} className="artist-artwork"/>
          <h1>{artist.name}</h1>
        </section>
        <div className="artist-songs-wrapper">
        <section className="artist-random-songs">
        <h1>Get Acquainted</h1>
          {ArtistSongs}
          </section>
          </div>
        {Albums}
        {Singles}
        </div>
        </main>
      );
    }
  }
}

export default ArtistShow;
