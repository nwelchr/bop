import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';


class LoggedInComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const dropdown = document.querySelector('.dropdown');

        dropdown.addEventListener('click', e => {
            e.preventDefault();

            const i = dropdown.querySelector('i');
            i.classList.toggle('fa-angle-down');
            i.classList.toggle('fa-angle-up');

            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            const modalScreen = document.querySelector('.modal-screen');

            dropdownMenu.classList.toggle('clicked');

            modalScreen.classList.toggle('clicked');
        });
    }
    
    render () {
        return (
            <div id="wrapper">
                <nav className="navbar navbar-logged-in">
                    <nav className="navbar-collapse">
                        <span className="navbar-logo"><Link to="/"><img src="assets/logo/logo-white-text-separated.png" className="logo"/></Link></span>
                        <ul className="navbar-links">
                            <li><a href="https://github.com/nwelchr/bop">Dev Info</a></li>
                            <li className="divider"></li>
                            <li className="dropdown"><a><img id="profile" src={this.props.currentUser.profile_picture} /> <span>Profile</span><i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                <div className="arrow-up"></div>
                                <li><a className="account" href="">Account</a></li>
                                <li><button className="log-out" onClick={this.props.logout}>Log Out</button></li>
                                </ul>
                                <div className="modal-screen"></div>
                            </li>
                        </ul>
                    </nav>
                </nav>
                <main className="main-content-wrapper">
                    <section className="main-content-intro">
                        <h1>Jump Back In, {this.props.currentUser.username}!</h1>
                        <Link to="/browse" className="web-player-link">Open Web Player</Link>


                        <div className="liwrapper">
                            <li>
                                <img src="https://www.pets4homes.co.uk/images/articles/771/large/cat-lifespan-the-life-expectancy-of-cats-568e40723c336.jpg" />
                            </li>
                        </div>

                    </section>
                </main>
                <footer className="footer-wrapper">
                    <footer className="footer-content">
                        <span className="navbar-logo"><Link to="/"><img src="assets/logo/logo-white-text-separated.png" className="logo"/></Link></span>
                    </footer>
                </footer>
            </div>
        );
    }
}


class LoggedOutComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="wrapper">
                <nav className="navbar navbar-logged-out">
                    <nav className="navbar-collapse">
                        <span className="navbar-logo"><Link to="/"><img src="assets/logo/logo-white-text-separated.png" className="logo"/></Link></span>
                        <ul className="navbar-links">
                            <li><a href="https://github.com/nwelchr/bop">Dev Info</a></li>
                            <li className="divider"></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">Log In</Link></li>
                            <li><a onClick={this.props.loginDemoUser}>Demo User</a></li>
                        </ul>
                    </nav>
                </nav>
                <main className="main-content-wrapper">
                    <section className="main-content-intro">
                        <h1>Eyyyy you gotta log in</h1>


                        <div className="liwrapper">
                            <li>
                                <img src="https://www.pets4homes.co.uk/images/articles/771/large/cat-lifespan-the-life-expectancy-of-cats-568e40723c336.jpg" />
                            </li>
                        </div>

                        
                    </section>
                </main>
                <footer className="footer-wrapper">
                    <footer className="footer-content">
                        <span className="navbar-logo"><Link to="/"><img src="assets/logo/logo-white-text-separated.png" className="logo"/></Link></span>
                    </footer>
                </footer>
            </div>
        );
    }
}


class NewSession extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return this.props.currentUser ? <LoggedInComponent currentUser={this.props.currentUser} logout={this.props.logout} /> : <LoggedOutComponent login={this.props.login} loginDemoUser={this.props.loginDemoUser} />;
    }
}

export default NewSession;