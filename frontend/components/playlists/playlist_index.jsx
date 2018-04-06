import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(newProps) {
        // this.props.fetchPlaylist(1);
    }
    
    render () {
        if (this.props.playlists.length > 0) {
        return (
            <div>
                {this.props.playlists.map(playlist => 
                            <PlaylistIndexItem key={playlist.id} playlist={playlist} />
                )}
            </div>
        );
    } else {
        return(<div>loading...</div>);
    }
    }
}

export default PlaylistIndex;

// {playlist.songs.map(song => <li>{song.title}</li>)