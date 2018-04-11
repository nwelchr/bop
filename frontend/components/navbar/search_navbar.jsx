import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import { connect } from 'react-redux';

class SearchNavbar extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        const { playlists, songs, albums, artists, users, query } = this.props.searches;

        const playlistsLink = (playlists.length > 0) ? (<li className="top-nav-link-wrapper"><NavLink exact to={`/search/results/${query}/playlists`} activeClassName="nav-link-selected"><span>Playlists</span></NavLink>
        </li>) : null;

        const songsLink = (songs.length > 0) ? (<li className="top-nav-link-wrapper"><NavLink exact to={`/search/results/${query}/songs`} activeClassName="nav-link-selected"><span>Songs</span></NavLink></li>) : null;

        const albumsLink = (albums.length > 0) ? (<li className="top-nav-link-wrapper"><NavLink exact to={`/search/results/${query}/albums`} activeClassName="nav-link-selected"><span>Albums</span></NavLink></li>) : null;

        const artistsLink = (artists.length > 0) ? (<li className="top-nav-link-wrapper"><NavLink exact to={`/search/results/${query}/artists`} activeClassName="nav-link-selected"><span>Artists</span></NavLink></li>) : null;

        const usersLink = (users.length > 0) ? (<li className="top-nav-link-wrapper"><NavLink exact to={`/search/results/${query}/users`} activeClassName="nav-link-selected"><span>Users</span></NavLink></li>) : null;

        return(
            <nav className="nav-flex-wrapper">
                    <nav className="top-nav-bar">
                        {playlistsLink}
                        {songsLink}
                        {albumsLink}
                        {artistsLink}
                        {usersLink}
                    </nav>
                </nav>
        );
    }
}

export default SearchNavbar;