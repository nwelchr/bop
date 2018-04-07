import React from 'react';
import { Link, Route } from 'react-router-dom';
import MediaPlayer from './media_player';
import PlaylistIndexContainer from '../playlists/playlist_index_container';

class FooterPlayerBar extends React.Component {
    render() {
        return (
            <footer className="player"><MediaPlayer /></footer>
        );
    }
}

export default FooterPlayerBar;