import React from "react";
import { Link } from "react-router-dom";

class NewPlaylist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playlistName: ''
        };
    }

    handleSubmit() {

    }

    render() {
    return (
        <main className="new-playlist-page">
            <section className="new-playlist-close-button">
            jopwef
            </section>
            <section className="new-playlist-form">
            </section>
        </main>
    );
  }
}

export default NewPlaylist;
