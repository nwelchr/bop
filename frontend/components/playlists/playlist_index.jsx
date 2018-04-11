import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import PlaylistIndexItem from './playlist_index_item';

import NewPlaylistModal from '../modals/new_playlist_modal';
import YourMusicTopNavBar from '../navbar/top_navbar';

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props;
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }
    

    render () {
        if (this.props.loading) { return <div>loading...</div>;}
        else {
            return (
            <main className="main" style={this.props.background}>
                <main className="index-page-wrapper">
                <YourMusicTopNavBar />
                    <main className="music-index">
                        <ul>
                            {this.props.playlists.map(playlist => 
                                        <PlaylistIndexItem key={playlist.id} playlist={playlist} renderButton={true} />
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

class Modal extends React.Component {
    render() {
      if (this.props.isOpen === false) {return null;}
        else {
      return (
        <div>
            <button onClick={e => this.close(e)}>close</button>
        </div>
      );
    }
    }

    close(e) {
      e.preventDefault();

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }