import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import PlaylistIndexItem from '../playlists/playlist_index_item';

class BrowseIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylists(this.props.shouldFetchAll);
    }
    
    render () {
        if (this.props.loading) { return <div>loading...</div>;}
        else {
            return (
            <main className="main" style={this.props.background}>
                <main className="index-page-wrapper">
                    <nav className="top-nav-bar">
                    <li className="top-nav-link-wrapper"><NavLink exact to="/browse" activeClassName="nav-link-selected"><span>Featured</span></NavLink>
                        </li>
                        <li className="top-nav-link-wrapper"><NavLink exact to="#" activeClassName="nav-link-selected"><span>Genres & Moods</span></NavLink></li>
                        <li className="top-nav-link-wrapper"><NavLink exact to="#" activeClassName="nav-link-selected"><span>New Releases</span></NavLink></li>
                        <li className="top-nav-link-wrapper"><NavLink to="#" activeClassName="nav-link-selected"><span>Discover</span></NavLink></li>
                    </nav>

                    <main className="music-index">
                    <div className="music-index-wrapper">
                        <ul>
                            {this.props.playlists.map(playlist => 
                                        <PlaylistIndexItem key={playlist.id} playlist={playlist} renderButton={true} />
                            )}
                        </ul>
                        </div>
                    </main>
                </main>
            </main>
        );
    }
    }
}

export default BrowseIndex;