import React from 'react';
import { Link, Route } from 'react-router-dom';
import MediaPlayerContainer from './media_player_container';
import PlaylistIndexContainer from '../playlists/playlist_index_container';

class FooterPlayerBar extends React.Component {
  render() {
    return (
      <footer className="player">
        <MediaPlayerContainer />
      </footer>
    );
  }
}

export default FooterPlayerBar;
