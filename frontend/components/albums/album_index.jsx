import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import PlaylistIndexItem from './playlist_index_item';

import NewPlaylistModal from '../modals/new_playlist_modal';

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props;
    }

    componentDidMount() {
        this.props.fetchAlbums();
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
                <nav className="nav-flex-wrapper">
                <nav className="nav-empty" />
                    <nav className="top-nav-bar">
                        <li className="top-nav-link-wrapper"><NavLink exact to="/collection/playlists" activeClassName="nav-link-selected"><span>Playlists</span></NavLink>
                        </li>
                        <li className="top-nav-link-wrapper"><NavLink exact to="#" activeClassName="nav-link-selected"><span>Your Daily Mix</span></NavLink></li>
                        <li className="top-nav-link-wrapper"><NavLink exact to="#" activeClassName="nav-link-selected"><span>Songs</span></NavLink></li>
                        <li className="top-nav-link-wrapper"><NavLink to="#" activeClassName="nav-link-selected"><span>Albums</span></NavLink></li>
                        <li className="top-nav-link-wrapper"><NavLink to="#" activeClassName="nav-link-selected"><span>Artists</span></NavLink></li>
                    </nav>

                    <nav className="new-playlist">
                        <button onClick={() => this.props.openPlaylistForm()}className="new-playlist-button">New Playlist</button>
                        {/* <Modal className="new-playlist-page" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}/> */}
                        <NewPlaylistModal />
                    </nav>

                </nav>

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