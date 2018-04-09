import React from 'react';
import { Link } from 'react-router-dom';
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
                    <nav class="top-nav-bar">
                        <li className="top-nav-link-wrapper"><Link to="/collection/playlists" className="nav-link-selected">Playlists</Link><span class="selected" /></li>
                        <li className="top-nav-link-wrapper"><Link to="#">Your Daily Mix</Link></li>
                        <li className="top-nav-link-wrapper"><Link to="#">Songs</Link></li>
                        <li className="top-nav-link-wrapper"><Link to="#">Albums</Link></li>
                        <li className="top-nav-link-wrapper"><Link to="#">Artists</Link></li>
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