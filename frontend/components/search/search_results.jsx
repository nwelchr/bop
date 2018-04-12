import React from "react";
import { connect } from "react-redux";
import { NavLink, Route, withRouter } from 'react-router-dom';
import SearchNavbar from '../navbar/search_navbar';
import AlbumIndexItem from '../albums/album_index_item';
import PlaylistResults from './playlist_results';
import SongResults from './song_results';
import AlbumResults from './album_results';
import ArtistResults from './artist_results';
// import UserResults from './playlist_results';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { albums, artists, playlists, songs, users, query } = this.props.searches;

    return (
        <main className="index-page-wrapper">
          <SearchNavbar searches={this.props.searches} />
          <div className="music-index">
            <div className="music-index-wrapper">
            <Route path={`/search/results/${query}/playlists`} render={() => <PlaylistResults playlists={playlists} />} />
            <Route path={`/search/results/${query}/songs`} render={() => <SongResults songs={songs} />} />
            <Route path={`/search/results/${query}/albums`} render={() => <AlbumResults albums={albums} />} />
            <Route path={`/search/results/${query}/artists`} render={() => <ArtistResults artists={artists} />} />
            {/* <Route path={`/search/results/${query}/users`} render={() => <UserResults users={users} />} /> */}
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