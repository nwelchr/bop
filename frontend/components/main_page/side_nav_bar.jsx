import React from 'react';
import { Link, Route } from 'react-router-dom';

class SideNavBar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
            <span className="logo"><Link to="/browse"><img src="https://s3.us-east-2.amazonaws.com/bop-images/logos/logo-white.png" className="logo" /></Link></span>
            <ul className="sidebar-main">
                <li className="sidebar-divider"></li>
                <li className="search"><a><p>Search</p> <i className="fa fa-search"></i></a></li>
                <li className="sidebar-divider"></li>
                <li className="home"><Link to="/browse">Home</Link></li>
                <li className="your-music"><Link to="/collection/playlists">Your Music</Link></li>
                <li className="sidebar-divider"></li>
            </ul>
                <ul className="recently-played-music">
                    <li className="recently-played">Recently Played</li>
                    <li>Azealia</li>
                    <li>Azealia</li>
                    <li>Azealia</li>
                    <li>Azealia</li>
                    <li>Azealia</li>
                </ul>
        </aside>
        );
    }
}

export default SideNavBar;