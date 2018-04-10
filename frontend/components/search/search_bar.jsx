import React from "react";
import { closePlaylistForm } from "../../actions/ui_actions";
import { connect } from "react-redux";
import fetchSearchResults from '../../actions/search_actions';


const WAIT_INTERVAL = 500;
const ENTER_KEY = 13;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
      this.timer = null;
  }

  handleChange(e) {
    clearTimeout(this.timer);
    this.setState({ query: e.target.value });
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }

  triggerChange() {
      const { query } = this.state;
      console.log (query);
      this.props.fetchSearchResults(query);
  }

  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
        this.triggerChange();
    }
  }

  render() {
      console.log(this.props);
    return (
      <div className="search-bar-wrapper">
          <h1 className="create-new-playlist-h1">Search for an Artist, Song, Album, or Playlist</h1>
          <form className="new-playlist-form">
            <section className="new-playlist-form-input">
              <input
                className="new-playlist-input"
                value={this.state.query}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                placeholder="Start typing..."
                autoComplete="off"
              />
            </section>
          </form>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
};

const mapDispatchToProps = dispatch => ({
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
});

export default connect(null, mapDispatchToProps)(SearchBar);
