import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }
    
    render () {
        if (this.props.loading) { return <div>loading...</div>;}
        else {
            return (
            <main className="main" style={this.props.background}>
                <main className="index-page-wrapper">
                <nav className="nav-flex-wrapper">
                <nav className="nav-empty" />
                    <nav className="top-nav-bar">
                        <li className="top-nav-link-wrapper"><NavLink exact to="/collection/playlists" activeClassName="nav-link-selected"><span>Playlists</span></NavLink>
                        </li>
                        <li className="top-nav-link-wrapper"><NavLink exact to="#" activeClassName="nav-link-selected"><span>Your Daily Mix</span></NavLink></li>
                        <li className="top-nav-link-wrapper"><NavLink exact to="#" activeClassName="nav-link-selected"><span>Songs</span></NavLink></li>
                        <li className="top-nav-link-wrapper"><NavLink to="#" activeClassName="nav-link-selected"><span>Albums</span></NavLink></li>
                        <li className="top-nav-link-wrapper"><NavLink to="#" activeClassName="nav-link-selected"><span>Artists</span></NavLink></li>
                    </nav>

                    <nav className="new-playlist">
                        <Link className="new-playlist-button" to="/playlists/new">New Playlist</Link>
                    </nav>

                </nav>

                    <main className="music-index">
                        <ul>
                            {this.props.playlists.map(playlist => 
                                        <PlaylistIndexItem key={playlist.id} playlist={playlist} />
                            )}
                        </ul>
                    </main>
                </main>
            </main>
        );
    }
    }
}

export default PlaylistIndex;

// {playlist.songs.map(song => <li>{song.title}</li>)