import React from 'react';
import { Link } from 'react-router-dom';

const albumCovers = [
  'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/album_cover.jpg',
  'https://s3.us-east-2.amazonaws.com/bop-songs/Mr.+Oizo+-+All+Wet+(2016)+/album_cover.jpg',
  'https://s3.us-east-2.amazonaws.com/bop-songs/Ponyboy/album_cover.jpg',
  'https://s3.us-east-2.amazonaws.com/bop-songs/Little+Joy+(2008)/album_cover.jpg',
  'https://s3.us-east-2.amazonaws.com/bop-songs/Beach+House+-+Depression+Cherry/album_cover.jpg',
  'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/album_cover.jpg'
];
const albumNames = [
  'Lemonade',
  'All Wet',
  'Ponyboy',
  'Little Joy',
  'Depression Cherry',
  'Blonde'
];
const artistNames = [
  'Beyonce',
  'Mr. Oizo',
  'SOPHIE',
  'Little Joy',
  'Beach House',
  'Frank Ocean'
];

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

  renderIndexItems() {
    return [...Array(6)].map((_, i) => (
      <div key={i} className={`index-item-wrapper fade-up fu${i + 1}`}>
        <div className="media-wrapper">
          <div className="button-wrapper" />
          <Link className="music-index-item" to={`/albums/2`}>
            <li className="item-wrapper">
              <div className="media">
                <img alt="" className="media__image" src={albumCovers[i]} />
                <div className={`media__body index-page`}>
                  <span className="item-span">{albumNames[i]}</span>
                  <span className="owner-span">{artistNames[i]}</span>
                </div>
                <div className="media-loaded" />
              </div>
            </li>
          </Link>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div id="wrapper">
        <nav className="navbar navbar-logged-in">
          <nav className="navbar-collapse">
            <span className="navbar-logo">
              <Link to="/">
                <img
                  src="https://s3.us-east-2.amazonaws.com/bop-images/logos/logo-white.png"
                  className="logo"
                />
              </Link>
            </span>
            <ul className="navbar-links">
              <li>
                <a href="https://github.com/nwelchr/bop">Dev Info</a>
              </li>
              <li className="divider" />
              <li className="dropdown">
                <a>
                  <img
                    id="profile"
                    src={this.props.currentUser.profile_picture}
                  />{' '}
                  <span>Profile</span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu">
                  <div className="arrow-up" />
                  <li>
                    <a className="account" href="">
                      Account
                    </a>
                  </li>
                  <li>
                    <button className="log-out" onClick={this.props.logout}>
                      Log Out
                    </button>
                  </li>
                </ul>
                <div className="modal-screen" />
              </li>
            </ul>
          </nav>
        </nav>

        <main className="main-content-wrapper new-session">
          <section className="main-content-intro">
            <h1>Jump Back In, {this.props.currentUser.username}</h1>
            <h2>Pick up your music right where you left off.</h2>
            <Link to="/browse" className="web-player-link">
              Open Web Player
            </Link>
          </section>

          <section className="image-links">{this.renderIndexItems()}</section>
        </main>
        <footer className="footer-wrapper">
          <footer className="footer-content">
            <span className="navbar-logo">
              <a to="/">
                <img
                  src="https://s3.us-east-2.amazonaws.com/bop-images/logos/logo-white.png"
                  className="logo"
                />
              </a>
            </span>
          </footer>
        </footer>
      </div>
    );
  }
}

class LoggedOutComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSong: '',
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      loop: false
    };

    // this.onPlay = this.onPlay.bind(this);
    this.stop = this.stop.bind(this);
    this.load = this.load.bind(this);
    // this.onPause = this.onPause.bind(this);
    // this.onEnded = this.onEnded.bind(this);
    // this.onDuration = this.onDuration.bind(this);
  }

  load(url) {
    if (this.state.playing === true) this.stop();
    this.setState({
      url: url,
      played: 0,
      playing: true
    });
  }

  stop() {
    this.setState({ url: null, playing: false, played: 0 });
  }

  renderIndexItems() {
    return [...Array(6)].map((_, i) => (
      <div key={i} className={`index-item-wrapper fade-up fu${i + 1}`}>
        <div className="media-wrapper">
          <div className="button-wrapper" />
          <a className="music-index-item">
            <li className="item-wrapper">
              <div className="media">
                <img alt="" className="media__image" src={albumCovers[i]} />
                <div className={`media__body index-page`}>
                  <span className="item-span">{albumNames[i]}</span>
                  <span className="owner-span">{artistNames[i]}</span>
                </div>
                <div className="media-loaded" />
              </div>
            </li>
          </a>
        </div>
      </div>
    ));
  }

  render() {
    const { url, playing, currentSong } = this.state;
    return (
      <div id="wrapper">
        <nav className="navbar navbar-logged-out">
          <nav className="navbar-collapse">
            <span className="navbar-logo">
              <Link to="/">
                <img
                  src="https://s3.us-east-2.amazonaws.com/bop-images/logos/logo-white.png"
                  className="logo"
                />
              </Link>
            </span>
            <ul className="navbar-links">
              <li>
                <a href="https://github.com/nwelchr/bop">Dev Info</a>
              </li>
              <li className="divider" />
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <a onClick={this.props.loginDemoUser}>Demo User</a>
              </li>
            </ul>
          </nav>
        </nav>
        <main className="main-content-wrapper">
          <section className="main-content-intro">
            <h1>Music for everyone.</h1>
            <Link to="/login" className="web-player-link">
              Log in
            </Link>

            <h2>Get a taste of what you're missing.</h2>
          </section>
          <section className="image-links">{this.renderIndexItems()}</section>
        </main>
        <footer className="footer-wrapper">
          <footer className="footer-content">
            <span className="navbar-logo">
              <Link to="/">
                <img
                  src="https://s3.us-east-2.amazonaws.com/bop-images/logos/logo-white.png"
                  className="logo"
                />
              </Link>
            </span>
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

  render() {
    return this.props.currentUser && this.props.currentUser !== null ? (
      <LoggedInComponent
        currentUser={this.props.currentUser}
        logout={this.props.logout}
      />
    ) : (
      <LoggedOutComponent
        login={this.props.login}
        loginDemoUser={this.props.loginDemoUser}
        fetchSongThenPlay={this.props.fetchSongThenPlay}
      />
    );
  }
}

export default NewSession;
