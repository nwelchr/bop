import React from 'react';
import { Link } from 'react-router-dom';
import MediaPlayer from './currently_playing_bar/media_player';

class MainPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="main-wrapper">
                <aside className="sidebar">
                    <span className="logo"><Link to="/browse"><img src="assets/logo/logo-white.png" className="logo" /></Link></span>
                    <ul className="sidebar-main">
                        <li className="sidebar-divider"></li>
                        <li className="search"><a><p>Search</p> <i className="fa fa-search"></i></a></li>
                        <li className="sidebar-divider"></li>
                        <li className="home"><Link to="/">Home</Link></li>
                        <li className="your-music"><Link to="/browse/collection">Your Music</Link></li>
                        <li className="sidebar-divider"></li>
                    <ul className="recently-played-music">
                        <li className="recently-played">Recently Played</li>
                        <li>Azealia</li>
                        <li>Azealia</li>
                        <li>Azealia</li>
                        <li>Azealia</li>
                        <li>Azealia</li>
                    </ul>
                    </ul>
                </aside>
                <main className="main"><MediaPlayer /></main>
                <footer className="player">jopwefje</footer>
            </div>
        );
    }
}

export default MainPage;