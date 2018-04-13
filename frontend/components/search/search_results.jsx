import React from "react";
import { connect } from "react-redux";
import { NavLink, Route, withRouter } from 'react-router-dom';
import SearchNavbar from '../navbar/search_navbar';
import AlbumIndexItem from '../albums/album_index_item';
import PlaylistResults from './playlist_results';
import SongResults from './song_results';
import AlbumResults from './album_results';
import ArtistResults from './artist_results';
import UserResults from './user_results';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { playlists, songs, albums, artists, users, query } = this.props.searches;

    const lengths = {
      playlists: playlists.length || null,
      albums: albums.length || null,
      artists: artists.length || null,
      users: users.length || null
    };

    const maxResult = Object.keys(lengths).reduce((a, b) => lengths[a] > lengths[b] ? a : b);

    let defaultResults;
      switch(maxResult) {
        case 'playlists':
          defaultResults = (<Route exact path={`/search/results/${query}`} render={() => <PlaylistResults playlists={playlists} />} />);
          break;
        case 'albums':
          defaultResults = (<Route exact path={`/search/results/${query}`} render={() => <AlbumResults albums={albums} />} />);
          break;
        case 'artists':
          defaultResults = (<Route exact path={`/search/results/${query}`} render={() => <ArtistResults artists={artists} />} />);
          break;
        case 'users':
          defaultResults = (<Route exact path={`/search/results/${query}`} render={() => <UserResults users={users} />} />);
          break;
        default:
          defaultResults = songs !== null ? (<Route exact path={`/search/results/${query}`} render={() => <SongResults songs={songs} />} />) : null;
          break;
      }


    return (
        <main className="index-page-wrapper">
          <SearchNavbar searches={this.props.searches} />
          <div className="music-index">
            <div className="music-index-wrapper">
            {defaultResults}
            <Route path={`/search/results/${query}/playlists`} render={() => <PlaylistResults playlists={playlists} />} />
            <Route path={`/search/results/${query}/songs`} render={() => <SongResults songs={songs} />} />
            <Route path={`/search/results/${query}/albums`} render={() => <AlbumResults albums={albums} />} />
            <Route path={`/search/results/${query}/artists`} render={() => <ArtistResults artists={artists} />} />
            <Route path={`/search/results/${query}/users`} render={() => <UserResults users={users} />} />
            </div>
          </div>
        </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  searches: state.entities.searches
});

const mapDispatchToProps = dispatch => {};

export default withRouter(connect(mapStateToProps, null)(SearchResults));