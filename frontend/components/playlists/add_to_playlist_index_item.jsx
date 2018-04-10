import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AddToPlaylistIndexItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.closeAddToPlaylistForm();
        this.props.saveSongToPlaylist(this.props.songId, this.props.playlist.id);

        // this.props.history.push(`/collection/playlists/${this.props.playlist.id}`);
    }

    render() {
        return (<div className="media-wrapper">
            <a className="music-index-item" onClick={this.handleClick}><li className="item-wrapper">
                <div className="media"><img alt="" className="media__image" src={this.props.playlist.album_cover_url} />
                    <div className="media__body">
                    </div>
                    <div className="media-loaded">
                    </div>
                </div>
                <p>{this.props.playlist.name}</p>
            </li>
            </a>
        </div>
        );
    }
}

export default withRouter(AddToPlaylistIndexItem);