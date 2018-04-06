import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
    render() {
        debugger;
        return (<ul>
            <Link to={`/playlists/${this.props.playlist.id}`}>{this.props.playlist.name}</Link>
            </ul>
            );
    }
}

export default PlaylistIndexItem;