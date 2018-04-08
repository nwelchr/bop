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
            <Link to="/collection/playlists">Go to all playlists!</Link>
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

export default PlaylistIndex;

// {playlist.songs.map(song => <li>{song.title}</li>)