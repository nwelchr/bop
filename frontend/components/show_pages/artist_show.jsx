import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import SongIndexItemContainer from "../songs/song_index_item_container";
import ArtistIndexItem from "../artists/artist_index_item";

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
      .fetchArtist(this.props.match.params.artistId)
      .then(response => this.handleResponse());
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
      this.ArtistSongs = (
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
      );
    } else {
      this.ArtistSongs = null;
    }
  }

  render() {
    if (this.state.loading || (typeof this.props.artist === "undefined")) {
      return <div style={{fontSize: '50px', paddingLeft: '225px'}}>NOT WORKING YET</div>;
    } else {
      this.createArtistSongs();

      return (
        <div>hi</div>
      );
    }
  }
}

export default ArtistShow;
