import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
    render() {
        return (<ul>
            <img className="album-cover-image" src={this.props.playlist.album_cover_url} />
            <Link to={`/playlists/${this.props.playlist.id}`}>{this.props.playlist.name}</Link>
            </ul>
            );
    }
}

export default PlaylistIndexItem;