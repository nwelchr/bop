import React from 'react';
import { Link } from 'react-router-dom';
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
            <nav class="top-nav-bar">
                <li className="top-nav-link-wrapper"><Link to="/collection/playlists" className="nav-link-selected">Featured</Link><span class="selected" /></li>
                <li className="top-nav-link-wrapper"><Link to="#">Genres & Moods</Link></li>
                <li className="top-nav-link-wrapper"><Link to="#">New Releases</Link></li>
                <li className="top-nav-link-wrapper"><Link to="#">Discover</Link></li>
            </nav>
            
            <main className="music-index">
                <ul>
                    {this.props.playlists.map(playlist => 
                                <PlaylistIndexItem key={playlist.id} playlist={playlist} />
                    )}
                </ul>
                </main>
            </main>
        );
    }
    }
}

export default BrowseIndex;