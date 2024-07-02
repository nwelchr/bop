import React from "react"
import { Link } from "react-router-dom"

const albums = [
    {
        cover: "https://s3.us-east-2.amazonaws.com/bop-songs/Beach+House+-+Depression+Cherry/album_cover.jpg",
        name: "Depression Cherry",
        artist: "Beach House",
    },
    {
        cover: "https://s3.us-east-2.amazonaws.com/bop-songs/Mr.+Oizo+-+All+Wet+(2016)+/album_cover.jpg",
        name: "All Wet",
        artist: "Mr. Oizo",
    },
    {
        cover: "https://s3.us-east-2.amazonaws.com/bop-songs/Ponyboy/album_cover.jpg",
        name: "Ponyboy",
        artist: "SOPHIE",
    },
]

class NewSession extends React.Component {
    render() {
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
                                <a href="https://github.com/nwelchr/bop">
                                    Dev Info
                                </a>
                            </li>
                            <li className="divider" />
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/login">Log In</Link>
                            </li>
                            <li>
                                <a onClick={this.props.loginDemoUser}>
                                    Demo User
                                </a>
                            </li>
                        </ul>
                    </nav>
                </nav>
                <main className="main-content-wrapper">
                    <section className="main-content-intro">
                        <h1>Music for everyone.</h1>
                        <Link to="/login" className="login">
                            Log in
                        </Link>
                        <h2>A taste of what we offer:</h2>
                    </section>
                    <section className="image-links">
                        {albums.map((album, i) => (
                            <div
                                key={i}
                                className={`index-item-wrapper fade-up fu${i + 1}`}
                            >
                                <div className="media-wrapper">
                                    <div className="button-wrapper" />
                                    <a className="music-index-item">
                                        <li className="item-wrapper">
                                            <div className="media">
                                                <img
                                                    alt=""
                                                    className="media__image"
                                                    src={album.cover}
                                                />
                                                <div
                                                    className={`media__body index-page`}
                                                >
                                                    <span className="item-span">
                                                        {album.name}
                                                    </span>
                                                    <span className="owner-span">
                                                        {album.artist}
                                                    </span>
                                                </div>
                                                <div className="media-loaded" />
                                            </div>
                                        </li>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
            </div>
        )
    }
}

export default NewSession
