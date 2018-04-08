import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
    render() {
        return (<div><h1><a href="www.google.com"><img src="https://phlearn.com/wp-content/uploads/2018/03/Aaron-Nace-Instructor-Bio-50px.jpg" /></a></h1>
        <Link className="music-index-item" to={`/collection/playlists/${this.props.playlist.id}`}><li>
            <div class="media"><img alt="" class="media__image" src={this.props.playlist.album_cover_url} />
                <div class="media__body">
                </div>
                </div>
            <p>{this.props.playlist.name}</p>
            </li>
            </Link> 
            </div>
            );
    }
}

export default PlaylistIndexItem;