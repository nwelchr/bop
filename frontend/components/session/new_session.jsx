import React from 'react';
import { Link } from 'react-router-dom';

const loggedInComponent = (currentUser, logout) => (
    <div id="wrapper">
        <nav className="navbar navbar-logged-in">
            <nav className="navbar-collapse">
                <span className="navbar-logo"><a href=""><img src="assets/logo.png" className="logo"/></a><a>Bop</a></span>
                <ul className="navbar-links">
                    <li><a>Premium</a></li>
                    <li><a>Help</a></li>
                    <li><a>Download</a></li>
                    <li className="divider"></li>
                    <li><a className="account" href="">Account</a></li>
                    <li><button className="log-out" onClick={logout}>Log Out</button></li>
                    <li className="divider"></li>
                    <li className="dropdown"><a><img id="profile" src={currentUser.profile_picture} /> <span>Profile</span><i className="fas fa-angle-down"></i></a>
                        <ul className="dropdown-menu">
                        <div className="arrow-up"></div>
                        <li><a className="account" href="">Account</a></li>
                        <li><button className="log-out" onClick={logout}>Log Out</button></li>
                        </ul>
                        <div className="modal-screen"></div>
                    </li>
                </ul>
            </nav>
        </nav>
        <main className="main-content">
        Jump Back In, {currentUser.username}!
        </main>
        <footer className="footer"></footer>
    </div>
);

const loggedOutComponent = () => (
    <div id="wrapper">
    <nav className="navbar navbar-logged-out">
        <nav className="navbar-collapse">
            <span className="navbar-logo"><a href=""><img src="assets/logo.png" className="logo"/></a><a>Bop</a></span>
            <ul className="navbar-links">
                <li><a>Premium</a></li>
                <li><a>Help</a></li>
                <li><a>Download</a></li>
                <li className="divider"></li>
                <li><Link to="/signup" className="log-in">Sign Up</Link></li>
                <li><Link to="/login" className="log-in">Log In</Link></li>
            </ul>
        </nav>
    </nav>
    <main className="main-content">
    </main>
    <footer className="footer"></footer>
    </div>
);


const NewSession = ({ currentUser, logout }) => (
    currentUser ? loggedInComponent(currentUser, logout) : loggedOutComponent()
);

export default NewSession;