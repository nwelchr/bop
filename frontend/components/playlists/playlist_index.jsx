import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }
    
    render () {
        return this.props.loading ?  "loading..." : (
            <div>
                {this.props.playlists.map(playlist => 
                            <PlaylistIndexItem key={playlist.id} playlist={playlist} />
                )}
            </div>
        );
    }
}

export default PlaylistIndex;

// {playlist.songs.map(song => <li>{song.title}</li>)