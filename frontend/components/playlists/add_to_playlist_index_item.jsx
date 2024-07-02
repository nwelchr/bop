import React from "react"
import { Link, withRouter } from "react-router-dom"

class AddToPlaylistIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.closeAddToPlaylistForm()
        this.props
            .saveSongToPlaylist(this.props.songToAddId, this.props.playlist.id)
            .then((results) => {
                this.props.history.push(`/playlists/${this.props.playlist.id}`)
            })
    }

    render() {
        let albumCover
        if (typeof this.props.playlist.album_cover_url === "string") {
            albumCover = (
                <div className="media">
                    <img
                        alt=""
                        className="media__image"
                        src={this.props.playlist.album_cover_url}
                    />
                    <div className={`media__body`} />
                    <div className="media-loaded" />
                </div>
            )
        } else if (this.props.playlist.album_cover_url.length === 4) {
            albumCover = (
                <div className="media">
                    <img
                        alt=""
                        className="media__image collage"
                        src={this.props.playlist.album_cover_url[0]}
                    />
                    <img
                        alt=""
                        className="media__image collage"
                        src={this.props.playlist.album_cover_url[1]}
                    />
                    <img
                        alt=""
                        className="media__image collage"
                        src={this.props.playlist.album_cover_url[2]}
                    />
                    <img
                        alt=""
                        className="media__image collage"
                        src={this.props.playlist.album_cover_url[3]}
                    />
                    <div className={`media__body`} />
                    <div className="media-loaded" />
                </div>
            )
        }
        return (
            <div className="media-wrapper">
                <a className="music-index-item" onClick={this.handleClick}>
                    <li className="item-wrapper">
                        {albumCover}
                        <p>{this.props.playlist.name}</p>
                    </li>
                </a>
            </div>
        )
    }
}

export default withRouter(AddToPlaylistIndexItem)
