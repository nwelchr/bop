import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import { connect } from 'react-redux';
import { openPlaylistForm } from '../../actions/ui_actions';

class YourMusicTopNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props;
    }

    render() {
        return(
            <nav className="nav-flex-wrapper">
            <nav className="nav-empty" />
                    <nav className="top-nav-bar">
                        <li className="top-nav-link-wrapper"><NavLink exact to="/collection/playlists" activeClassName="nav-link-selected"><span>Playlists</span></NavLink>
                        </li>
                        <li className="top-nav-link-wrapper"><NavLink exact to="/collection/songs" activeClassName="nav-link-selected"><span>Songs</span></NavLink></li>
                        <li className="top-nav-link-wrapper"><NavLink exact to="/collection/albums" activeClassName="nav-link-selected"><span>Albums</span></NavLink></li>
                        <li className="top-nav-link-wrapper"><NavLink to="/collection/artists" activeClassName="nav-link-selected"><span>Artists</span></NavLink></li>
                    </nav>

                    <nav className="new-playlist">
                        <button onClick={() => this.props.openPlaylistForm()}className="new-playlist-button">New Playlist</button>
                        {/* <Modal className="new-playlist-page" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}/> */}
                    </nav>
                </nav>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return ({
        openPlaylistForm: () => dispatch(openPlaylistForm())
    });};

export default connect(mapStateToProps, mapDispatchToProps)(YourMusicTopNavBar);