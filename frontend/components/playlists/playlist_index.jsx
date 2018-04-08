import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("start fetching all playlists...");
        this.props.fetchPlaylists();
    }
    
    render () {
        if (this.props.loading) { console.log("loading..."); return <div>loading...</div>;}
        else {
            console.log("not loading...");
            return (
            <main className="music-index">
                <ul>
                    {this.props.playlists.map(playlist => 
                                <PlaylistIndexItem key={playlist.id} playlist={playlist} />
                    )}
                </ul>
            </main>
        );
    }
    }
}

export default PlaylistIndex;

// {playlist.songs.map(song => <li>{song.title}</li>)