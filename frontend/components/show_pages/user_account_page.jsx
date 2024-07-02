import React from "react"
import { Link, withRouter } from "react-router-dom"
import { AuthRoute } from "../../util/route_util"
import SongIndexItemContainer from "../songs/song_index_item_container"
import ArtistIndexItem from "../artists/artist_index_item"
import AlbumResults from "../search/album_results"

import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"

class UserAccountPage extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        this.props.logout().then(() => this.props.history.push("/"))
    }

    render() {
        const { currentUser, background } = this.props
        return (
            <main className="main" style={background}>
                <div className="content" />
                <img
                    className="artwork"
                    src={currentUser.background_artwork_url}
                />
                <div className="user-artist-show-wrapper">
                    <section className="user-artist-intro">
                        <img
                            src={currentUser.profile_picture}
                            className="profile-picture"
                        />
                        <h1 className="username">{currentUser.username}</h1>
                        <button
                            onClick={this.handleLogout}
                            className="new-playlist-cancel playlist-modal-button new-playlist-button"
                        >
                            Logout
                        </button>
                    </section>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    background: { backgroundColor: "#814949" },
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(UserAccountPage)
)
