import React from 'react';

class SongIndexItem extends React.Component {

    // load(url) {
    //     this.setState( { url: url });
    // }

    render() {
        const { title, mp3_url } = this.props.song;
        return (
            <div>
                <li>{title}</li>
                {/* <button onClick={this.load(mp3_url).bind(this)} /> */}
            </div>

        );
    }
}

export default SongIndexItem;