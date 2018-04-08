import React from 'react';

class SongIndexItem extends React.Component {

    // load(url) {
    //     this.setState( { url: url });
    // }

    handleClick() {
        this.props.fetchSong(this.props.song.id).then(song => this.props.playSong(song));
    }

    render() {
        const { title, mp3_url } = this.props.song;
        return (
            <div>
                <li className="index-item" onDoubleClick={() => this.handleClick()}>
                    <span>{title}</span>
                </li>
            </div>

        );
    }
}

export default SongIndexItem;